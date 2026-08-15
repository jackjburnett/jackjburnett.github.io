---
layout: page
title: Training
description: Strength training progress and nutrition information
img: assets/img/projects/todo.png
importance: 3
category: other
---

<style>
  .training-page {
    --training-border: var(--global-divider-color, #e5e7eb);
    --training-muted: var(--global-text-color-light, #6b7280);
    --training-bg: var(--global-bg-color, #fff);
    --training-soft: rgba(16, 185, 129, 0.08);
    --training-accent: #0f766e;
    --training-warm: #b45309;
    --training-ink: var(--global-text-color, #111827);
  }

  .training-page a {
    font-weight: 600;
  }

  .training-hero {
    border: 1px solid var(--training-border);
    border-left: 5px solid var(--training-accent);
    border-radius: 8px;
    padding: 1.35rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--training-soft), transparent 72%);
  }

  .training-kicker,
  .training-label {
    color: var(--training-muted);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
  }

  .training-hero h2,
  .training-section h2 {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
  }

  .training-hero p,
  .training-panel p {
    margin-bottom: 0;
  }

  .training-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin: 1rem 0 1.6rem;
  }

  .training-stat,
  .training-lift,
  .training-panel,
  .training-supplement,
  .training-goal {
    background: var(--training-bg);
    border: 1px solid var(--training-border);
    border-radius: 8px;
    padding: 1rem;
  }

  .training-value {
    color: var(--training-ink);
    display: block;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.25;
  }

  .training-note {
    color: var(--training-muted);
    font-size: 0.9rem;
  }

  .training-section {
    margin: 2rem 0 1.5rem;
  }

  .training-two-col {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 1rem;
  }

  .training-panel {
    border-top: 4px solid var(--training-accent);
  }

  .training-panel.training-panel-warm {
    border-top-color: var(--training-warm);
  }

  .training-panel h3,
  .training-supplement h3 {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .training-link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.85rem;
  }

  .training-button {
    border: 1px solid var(--training-border);
    border-radius: 999px;
    display: inline-flex;
    padding: 0.35rem 0.75rem;
  }

  .training-programmes {
    border: 1px solid var(--training-border);
    border-radius: 8px;
    margin-top: 1rem;
    padding: 1rem;
  }

  .training-programmes h3 {
    font-size: 1.05rem;
    margin-bottom: 0.65rem;
  }

  .training-programme-group + .training-programme-group {
    margin-top: 0.85rem;
  }

  .training-programme-row {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .training-programme-row + .training-programme-row {
    margin-top: 0;
  }

  .training-status {
    background: var(--training-soft);
    border: 1px solid rgba(15, 118, 110, 0.25);
    border-radius: 999px;
    color: var(--training-accent);
    display: inline-flex;
    font-size: 0.78rem;
    font-weight: 800;
    padding: 0.35rem 0.7rem;
    text-transform: uppercase;
  }

  .training-lift {
    border-bottom: 3px solid var(--training-accent);
  }

  .training-lift .training-value {
    font-size: 1.45rem;
  }

  .training-supplements {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    margin-top: 1rem;
  }

  .training-supplement ul {
    margin-bottom: 0;
    padding-left: 1.1rem;
  }

  .training-supplement li {
    margin-bottom: 0.35rem;
  }

  .training-goals-wrap {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    margin-top: 1rem;
  }

  .training-goal {
    align-items: center;
    display: flex;
    gap: 0.65rem;
  }

  .training-goal span:first-child {
    background: var(--training-soft);
    border-radius: 999px;
    color: var(--training-accent);
    display: inline-flex;
    flex: 0 0 2rem;
    font-weight: 800;
    height: 2rem;
    justify-content: center;
    line-height: 2rem;
  }
</style>

<div class="training-page" markdown="1">

<section class="training-hero" markdown="1">
<div class="training-kicker">Current phase: Cutting (since December 2024)</div>
<h2>Building a solid base for strength training.</h2>
I treat training mainly as a hobby, but try to optimise my programmes and nutrition. My current focus is reducing body fat to
15%, maintaining muscle mass, and rebuilding enough knee strength and stability to return to Muay Thai. Workouts logged on 
<a href="https://hevy.com/user/jackburnett">Hevy</a> and runs on <a href="https://strava.app.link/31JITpIzT3b">Strava</a>,
more things I track <a href="{{ site.url }}/projects/tracking/">here</a>.
</section>

<section class="training-section" markdown="1">
## Current Stats

<div class="training-grid">
  <div class="training-stat">
    <div class="training-label">Height</div>
    <span class="training-value">6'1"</span>
  </div>
  <div class="training-stat">
    <div class="training-label">Weight</div>
    <span class="training-value">13 st 10 lb</span>
    <span class="training-note">192 lb / 87.1 kg</span>
  </div>
  <div class="training-stat">
    <div class="training-label">Body Fat</div>
    <span class="training-value">~19%</span>
  </div>
  <div class="training-stat">
    <div class="training-label">Goal</div>
    <span class="training-value">12 st 10 lb</span>
    <span class="training-note">@ 15% BF</span>
  </div>
  <div class="training-stat">
    <div class="training-label">Weight Lost</div>
    <span class="training-value">6 st 4 lb</span>
    <span class="training-note">40 kg since Dec 2024</span>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Current Training

<div class="training-two-col">
  <div class="training-panel" markdown="1">
  <h3>Strength Training</h3>

I currently train on a 5-day <a href="https://hevy.com/folder/2027990">Push/Pull/Legs/Upper/Lower</a> split.
  </div>

  <div class="training-panel training-panel-warm" markdown="1">
  <h3>Conditioning and Muay Thai</h3>

I sprint twice a week for conditioning and cardiovascular fitness. Muay Thai is currently on hold while
I recover from a left knee meniscus tear.
  </div>
</div>

<div class="training-programmes">
  <h3>Programmes</h3>
  <div class="training-link-row">
    <span class="training-programme-row">
      <span class="training-status">Current</span>
      <a class="training-button" href="https://hevy.com/folder/2027990">PPLUL</a>
    </span>
    <span class="training-programme-row">
      <span class="training-status">Previous</span>
      <a class="training-button" href="https://hevy.com/folder/1723427">Push/Pull w/ Knee Rehab</a>
      <a class="training-button" href="https://hevy.com/folder/668936">Upper/Lower</a>
    </span>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Current PRs

<div class="training-grid">
  <div class="training-lift">
    <div class="training-label">Bench Press</div>
    <span class="training-value">85 kg</span>
    <span class="training-note">43rd percentile for age and bodyweight</span>
  </div>
  <div class="training-lift">
    <div class="training-label">Deadlift</div>
    <span class="training-value">140 kg</span>
    <span class="training-note">53rd percentile for age and bodyweight</span>
  </div>
  <div class="training-lift">
    <div class="training-label">Squat</div>
    <span class="training-value">100 kg</span>
    <span class="training-note">47th percentile for age and bodyweight</span>
  </div>
  <div class="training-lift">
    <div class="training-label">Overhead Press</div>
    <span class="training-value">37.5 kg</span>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Nutrition

<div class="training-two-col">
  <div class="training-panel" markdown="1">
  <h3>Plant-Based Muscles</h3>

Powered by a complete plant protein blend of soy, pea, pumpkin seed, brown rice, and oat. Contact me on [Instagram](https://www.instagram.com/jackjburnett/) for vegan recommendations.

  </div>

  <div class="training-grid">
    <div class="training-stat">
      <div class="training-label">Calories</div>
      <span class="training-value">~2,300</span>
      <span class="training-note">kcal/day</span>
    </div>
    <div class="training-stat">
      <div class="training-label">Protein</div>
      <span class="training-value">~170 g</span>
    </div>
    <div class="training-stat">
      <div class="training-label">Carbohydrates</div>
      <span class="training-value">~215 g</span>
    </div>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Supplement Stack

<div class="training-supplements">
  <div class="training-supplement">
  <h3>General Health</h3>
  <ul>
    <li><a href="https://www.vegetology.com/supplements/multi-vit">MultiVit</a></li>
    <li><a href="https://www.vegetology.com/supplements/omega-3">Vegan Omega-3</a></li>
    <li><a href="https://www.vegetology.com/supplements/vit-d3-2500iu">Vitamin D3 2500iu</a></li>
  </ul>
  </div>

  <div class="training-supplement">
  <h3>Training</h3>
  <ul>
    <li><a href="https://www.bulk.com/uk/products/creapure-creatine-monohydrate/bpb-crea-0000?o=MTc5LTY5LDE3OC0zMg==">Creatine Monohydrate (Creapure)</a></li>
    <li><a href="https://www.bulk.com/uk/products/magnesium-3-in-1/bpb-magc-3in1?o=MjA1LTc4">Magnesium Glycinate 3 in 1</a></li>
    <li><a href="https://www.bulk.com/uk/products/beta-alanine/bpb-bala-0000?o=MTc5LTY5">Beta Alanine</a></li>
  </ul>
  </div>

  <div class="training-supplement">
  <h3>Joint (Knee) Support</h3>
  <ul>
    <li><a href="https://www.vegetology.com/supplements/calcium-vit-d3-k2-vegan-tablets">Calcium + Vit D3 + K2</a></li>
    <li><a href="https://www.vegetology.com/supplements/vollagen">Vollagen</a></li>
  </ul>
  </div>

  <div class="training-supplement">
  <h3>Other</h3>
  <ul>
    <li><a href="https://www.hollandandbarrett.com/shop/product/solgar-boron-3mg-vegetable-100-capsules-6100007082">Boron</a></li>
    <li><a href="https://www.bulk.com/uk/products/co-enzyme-q10-coq10/bpb-coq-0000?o=MTc5LTcw">CoQ10</a></li>
    <li><a href="https://www.hollandandbarrett.com/shop/product/h-b-fenugreek-90-6100005284">Fenugreek</a></li>
    <li><a href="https://www.hollandandbarrett.com/shop/product/holland-barrett-rhodiola-stress-relief-tablets-200mg-6100141983">Rhodiola Rosea</a></li>
  </ul>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Pre-workout

<div class="training-two-col">
  <div class="training-panel">
  <h3>General</h3>
  <ul>
    <li><a href="https://www.amazon.co.uk/Performance-Pineapple-Caffeine-Betaine-Taurine/dp/B0CJCGKDTS">C4 Performance Energy</a></li>
    <li><a href="https://www.bulk.com/uk/products/d-ribose/bpb-drib-0000?o=MTc5LTY5">D-Ribose</a></li>
  </ul>
  </div>

  <div class="training-panel training-panel-warm">
  <h3>Personal Best Sessions</h3>
  <ul>
    <li><a href="https://www.bulk.com/uk/products/dope-max-pre-workout/bble-dmax?o=MTc5LTE5Mjc2LDE3OC0zNjE=">Dope Max</a></li>
    <li><a href="https://www.bulk.com/uk/products/citrulline-malate/bpb-cmal-0000?o=MTc5LTY5">Citrulline Malate</a></li>
  </ul>
  </div>
</div>
</section>

<section class="training-section" markdown="1">
## Future Goals

<div class="training-goals-wrap">
  <div class="training-goal"><span>1</span><span>Reach 15% body fat</span></div>
  <div class="training-goal"><span>2</span><span>Improve bench to 100 kg</span></div>
  <div class="training-goal"><span>3</span><span>Improve squat to 150 kg</span></div>
  <div class="training-goal"><span>4</span><span>Return to Muay Thai</span></div>
</div>
</section>

</div>
