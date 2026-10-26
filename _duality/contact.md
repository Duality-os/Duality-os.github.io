---
title: "Contact Duality"
layout: post
hidden: true
---

<style>
  .contact-page {
    max-width: 620px;
    margin: 0 auto;
    padding: 150px 24px 90px;
  }

  .contact-page header {
    text-align: center;
    margin-bottom: 40px;
  }

  .contact-page h1 {
    font-size: clamp(2.6rem, 6vw, 3.8rem);
    line-height: 1.05;
    margin: 10px 0 12px;
  }

  .contact-page header p {
    color: var(--ink-soft);
    margin: 0;
  }

  .contact-form {
    padding: 36px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 24px;
    box-shadow: var(--shadow);
  }

  .form-group {
    margin-bottom: 22px;
  }

  .form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 8px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 13px 15px;
    font: inherit;
    color: var(--ink);
    background: #fff;
    border: 1px solid rgba(28, 34, 56, 0.18);
    border-radius: 12px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 140px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 4px rgba(79, 140, 247, 0.18);
  }

  .contact-form .d-button {
    width: 100%;
    margin-top: 6px;
  }

  @media (max-width: 600px) {
    .contact-page { padding: 120px 16px 70px; }
    .contact-form { padding: 24px 20px; }
  }
</style>

{% include duality-nav.html active="contact" %}

<main class="contact-page">
  <header>
    <span class="d-eyebrow">Contact</span>
    <h1>Get in touch</h1>
    <p>Tell us a little about what you're working on and we'll get back to you.</p>
  </header>
  <form class="contact-form" id="contact-form" action="https://formsubmit.co/gleb.studios@gmail.com" method="POST">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" autocomplete="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" autocomplete="email" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="d-button">Send message</button>
    <!-- FormSubmit configuration -->
    <input type="hidden" name="_subject" value="New contact form submission">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://duality.nexus/contact-thankyou/">
  </form>
</main>

{% include duality-footer.html %}
