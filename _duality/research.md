---
title: "Duality Research"
layout: post
permalink: /research/
hidden: true
---
<!-- URL of the post: https://duality.nexus/research/ -->

<style>
  .research-page {
    max-width: 820px;
    min-height: 62vh;
    margin: 0 auto;
    padding: 150px 24px 90px;
  }

  .research-page header {
    text-align: center;
    margin-bottom: 56px;
  }

  .research-page h1 {
    font-size: clamp(2.8rem, 7vw, 4.4rem);
    line-height: 1.05;
    margin: 10px 0 14px;
  }

  .research-page header p {
    color: var(--ink-soft);
    margin: 0;
  }

  .research-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 18px;
  }

  .research-link {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 26px 28px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    color: var(--ink);
    text-decoration: none;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .research-link:hover {
    transform: translateY(-4px);
    border-color: rgba(79, 140, 247, 0.45);
    box-shadow: 0 22px 44px -20px rgba(45, 95, 216, 0.35);
  }

  .research-date {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold-deep);
    margin-bottom: 6px;
  }

  .research-name {
    font-family: var(--font-display);
    font-variation-settings: "SOFT" 100;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  .research-arrow {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--blue-deep);
    background: var(--blue-tint);
    transition: background 0.25s ease, color 0.25s ease;
  }

  .research-link:hover .research-arrow {
    background: var(--blue-deep);
    color: #fff;
  }
</style>

{% include duality-nav.html active="research" %}

<main class="research-page">
  <header>
    <span class="d-eyebrow">Publications &amp; notes</span>
    <h1>Research</h1>
    <p>What we're learning on the way to the most detailed brain maps.</p>
  </header>
  <ul class="research-list">
    {% assign sorted_research = site.duality-research | sort: 'date' | reverse %}
    {% for research in sorted_research %}
      <li>
        <a href="{{ research.url }}" class="research-link">
          <span>
            {% if research.date %}<span class="research-date">{{ research.date | date: "%B %d, %Y" }}</span>{% endif %}
            <span class="research-name">{{ research.title }}</span>
          </span>
          <span class="research-arrow" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></span>
        </a>
      </li>
    {% endfor %}
  </ul>
</main>

{% include duality-footer.html %}
