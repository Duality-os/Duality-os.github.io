/*
 * Bionic font transformer.
 *
 * Takes plain paragraph text inside `.research-content` and re-weights each
 * word per the project rule (see /BIONIC_FONT.md):
 *
 *   bold      letters: len <= 3 -> 1, 4-5 -> 2, len >= 6 -> len - 3
 *   semi-bold letters: len <= 2 -> 0, len >= 3 -> 1
 *   regular   letters: whatever remains
 *   order: bold -> semi-bold -> regular
 *
 * Headings, code, pre, the page title/meta and footer are explicitly skipped
 * so only main paragraph copy gets re-weighted.
 */
(function () {
  'use strict';

  var SKIP_TAGS = {
    H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
    CODE: 1, PRE: 1, KBD: 1, SAMP: 1, VAR: 1,
    SCRIPT: 1, STYLE: 1,
    B: 1, STRONG: 1
  };

  var TARGET_SELECTOR = 'p, li, blockquote, dd, summary, td, figcaption';

  function bionicSplit(word) {
    var len = word.length;
    var bold;
    if (len <= 3) bold = 1;
    else if (len <= 5) bold = 2;
    else bold = len - 3;
    var semi = len <= 2 ? 0 : 1;
    if (bold + semi > len) {
      bold = Math.min(bold, len);
      semi = Math.max(0, len - bold);
    }
    return {
      bold: word.slice(0, bold),
      semi: word.slice(bold, bold + semi),
      reg: word.slice(bold + semi)
    };
  }

  function escapeHTML(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  var TOKEN_RE = /(\p{L}+)|([^\p{L}]+)/gu;

  function bionicHTML(text) {
    var out = '';
    var m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(text)) !== null) {
      if (m[1]) {
        var parts = bionicSplit(m[1]);
        if (parts.bold) out += '<span class="b-bold">' + escapeHTML(parts.bold) + '</span>';
        if (parts.semi) out += '<span class="b-semi">' + escapeHTML(parts.semi) + '</span>';
        if (parts.reg)  out += '<span class="b-reg">'  + escapeHTML(parts.reg)  + '</span>';
      } else if (m[2]) {
        out += escapeHTML(m[2]);
      }
    }
    return out;
  }

  function transformTextNode(textNode) {
    var text = textNode.nodeValue;
    if (!text || !/\p{L}/u.test(text)) return;
    var wrapper = document.createElement('span');
    wrapper.className = 'bionic';
    wrapper.innerHTML = bionicHTML(text);
    textNode.parentNode.replaceChild(wrapper, textNode);
  }

  function walk(node) {
    if (node.nodeType === 3) {
      transformTextNode(node);
      return;
    }
    if (node.nodeType !== 1) return;
    if (SKIP_TAGS[node.tagName]) return;
    if (node.classList && node.classList.contains('bionic-skip')) return;
    if (node.dataset && node.dataset.bionic === 'skip') return;
    var children = Array.prototype.slice.call(node.childNodes);
    for (var i = 0; i < children.length; i++) walk(children[i]);
  }

  function run() {
    var root = document.querySelector('.research-content');
    if (!root) return;
    var targets = root.querySelectorAll(TARGET_SELECTOR);
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (el.closest('.bionic-processed')) continue;
      walk(el);
      el.classList.add('bionic-processed');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
