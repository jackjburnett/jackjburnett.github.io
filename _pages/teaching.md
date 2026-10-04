---
layout: page
title: teaching
permalink: /teaching/
description: materials for courses I've taught (since 2024)
nav: true
nav_order: 4
---

<div class="teaching">
  <p class="teaching-intro">
    Teaching and support roles across HCI, design, prototyping, and computing courses. Materials are linked where
    available.
  </p>

  <section class="teaching-year" aria-labelledby="teaching-2026">
    <div class="teaching-year-heading">
      <span class="teaching-year-kicker">Current</span>
      <h2 id="teaching-2026">2026/27 Academic Year</h2>
    </div>

    <div class="teaching-list">
      <article class="teaching-item">
        <div class="teaching-item-main">
          <h3>Human-Computer Interaction</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 1</p>
          <p class="teaching-meta"><i class="fas fa-user-graduate"></i> Graduate Teacher; Lab TA</p>
        </div>
        <p class="teaching-note">No planned lessons to lead due to research commitments.</p>
      </article>

      <article class="teaching-item">
        <div class="teaching-item-main">
          <h3>Algorithms and Data</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 1</p>
          <p class="teaching-meta"><i class="fas fa-flask"></i> Graduate Teacher; Lab TA</p>
        </div>
        <p class="teaching-note">No planned lessons to lead due to research commitments.</p>
      </article>
    </div>
  </section>

  <section class="teaching-year" aria-labelledby="teaching-2025">
    <div class="teaching-year-heading">
      <span class="teaching-year-kicker">Previous</span>
      <h2 id="teaching-2025">2025/26 Academic Year</h2>
    </div>

    <div class="teaching-list">
      <article class="teaching-item">
        <div class="teaching-item-main">
          <h3>Interaction and Society</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 2</p>
          <p class="teaching-meta"><i class="fas fa-chalkboard-teacher"></i> Graduate Teacher; Lecture TA</p>
        </div>
        <p class="teaching-note">Lecture support only, during research commitments.</p>
      </article>

      <article class="teaching-item">
        <div class="teaching-item-main">
          <h3>Interactive Devices</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 2</p>
          <p class="teaching-meta"><i class="fas fa-tools"></i> Graduate Teacher; Lead Lab TA</p>
        </div>
        <p class="teaching-note">Lead lab support only, during research commitments.</p>
      </article>
    </div>
  </section>

  <section class="teaching-year" aria-labelledby="teaching-2024">
    <div class="teaching-year-heading">
      <h2 id="teaching-2024">2024/25 Academic Year</h2>
    </div>

    <div class="teaching-list">
      <article class="teaching-item teaching-item-linked">
        <div class="teaching-item-main">
          <h3>Interaction and Society</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 2</p>
          <p class="teaching-meta"><i class="fas fa-chalkboard-teacher"></i> Graduate Teacher; Lecture TA</p>
        </div>
        <a href="https://jackjburnett.notion.site/personas-scenarios-and-user-stories" class="teaching-link">
          <i class="fas fa-book-open"></i>
          <span>Week 16: Personas, Scenarios, and User Stories</span>
        </a>
      </article>

      <article class="teaching-item teaching-item-linked">
        <div class="teaching-item-main">
          <h3>Interactive Devices</h3>
          <p class="teaching-meta"><i class="fas fa-calendar-alt"></i> Teaching Block 2</p>
          <p class="teaching-meta"><i class="fas fa-tools"></i> Graduate Teacher; Lab TA</p>
        </div>
        <a href="https://jackjburnett.notion.site/parametric-design-with-cadquery" class="teaching-link">
          <i class="fas fa-cube"></i>
          <span>Week 17: Parametric Design with CadQuery</span>
        </a>
      </article>
    </div>
  </section>

  <section class="teaching-resources" aria-labelledby="teaching-resources">
    <h2 id="teaching-resources">Additional Resources</h2>
    <a href="https://jackjburnett.notion.site/UoB-TSR-Outreach-189214bde84580d18389debdba62af06" class="resource-link">
      <i class="fas fa-university"></i>
      <span>University of Bristol TSR/Outreach Notion</span>
    </a>
  </section>
</div>

<style>
.teaching {
  max-width: 820px;
  padding: 0.5rem 0 2rem;
}

.teaching-intro {
  max-width: 680px;
  margin: 0 0 2.25rem;
  color: var(--global-text-color-light);
  font-size: 1.05rem;
  line-height: 1.7;
}

.teaching-year {
  display: grid;
  grid-template-columns: minmax(140px, 0.3fr) minmax(0, 1fr);
  gap: 1.5rem;
  padding: 1.75rem 0;
  border-top: 1px solid var(--global-divider-color);
}

.teaching-year-heading {
  position: sticky;
  top: 1rem;
  align-self: start;
}

.teaching-year-kicker {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--global-theme-color);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.teaching h2 {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.35;
}

.teaching-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.teaching-item {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 0.45rem;
}

.teaching-item h3 {
  margin: 0;
  color: var(--global-text-color);
  font-size: 1.02rem;
  line-height: 1.35;
}

.teaching-meta,
.teaching-note {
  margin: 0.35rem 0 0;
  color: var(--global-text-color-light);
  font-size: 0.92rem;
  line-height: 1.55;
}

.teaching-note {
  margin-top: auto;
  padding-top: 0.25rem;
}

.teaching i {
  width: 1.15em;
  margin-right: 0.35rem;
  color: var(--global-theme-color);
  text-align: center;
}

.teaching-link,
.resource-link {
  display: inline-flex;
  gap: 0.35rem;
  align-items: baseline;
  justify-self: start;
  color: var(--global-theme-color);
  font-weight: 600;
  line-height: 1.45;
  text-decoration: none;
}

.teaching-link:hover,
.resource-link:hover {
  color: var(--global-hover-color);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.teaching-resources {
  padding-top: 1.75rem;
  border-top: 1px solid var(--global-divider-color);
}

.teaching-resources h2 {
  margin-bottom: 0.85rem;
}

@media (max-width: 768px) {
  .teaching-year,
  .teaching-list {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .teaching-year-heading {
    position: static;
  }

  .teaching-note {
    margin-top: -0.25rem;
  }
}
</style>
