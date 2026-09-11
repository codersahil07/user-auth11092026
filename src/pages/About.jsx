import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="inner-page">
      <div className="container-fluid px-3 px-lg-5">
        <section className="inner-hero">
          <div className="eyebrow"><span></span> ABOUT NOVAADMIN</div>
          <h1>Built for teams that<br /><em>think ahead.</em></h1>
          <p>NovaAdmin brings clarity to complex workflows with a beautifully focused workspace.</p>
        </section>

        <section className="about-story">
          <div className="story-number">01</div>
          <div>
            <h2>Less noise. More momentum.</h2>
            <p>
              We believe great tools should make work feel simpler. NovaAdmin
              is designed around that idea — clear information, thoughtful
              interactions and a visual system that helps you focus on what
              actually matters.
            </p>
            <p>
              From everyday administration to high-level insights, everything
              lives in one calm, connected experience.
            </p>
          </div>
        </section>

        <section className="values-grid">
          <div className="value-card"><span>01</span><i className="bi bi-bullseye"></i><h3>Purpose</h3><p>Every screen has a job. Every interaction is intentional.</p></div>
          <div className="value-card"><span>02</span><i className="bi bi-eye"></i><h3>Clarity</h3><p>We turn information into simple, actionable understanding.</p></div>
          <div className="value-card"><span>03</span><i className="bi bi-heart"></i><h3>Human</h3><p>Technology should feel intuitive, approachable and useful.</p></div>
        </section>

        <section className="about-stats">
          <div><strong>98%</strong><span>Customer satisfaction</span></div>
          <div><strong>24/7</strong><span>Workspace availability</span></div>
          <div><strong>50K+</strong><span>Actions managed</span></div>
          <div><strong>2026</strong><span>Our latest chapter</span></div>
        </section>

        <section className="cta-banner">
          <div><div className="eyebrow"><span></span> KEEP EXPLORING</div><h2>Your workspace is<br />just getting started.</h2></div>
          <Link to="/category" className="primary-btn">Explore Categories <i className="bi bi-arrow-up-right"></i></Link>
        </section>
      </div>
    </div>
  );
}

export default About;