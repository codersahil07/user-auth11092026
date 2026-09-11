import React from "react";
import { Link } from "react-router-dom";
const categories = [
  ["Technology", "Build smarter digital experiences and products.", "bi-cpu", "08"],
  ["Business", "Organize operations and keep your goals moving.", "bi-briefcase", "12"],
  ["Education", "Create focused learning and knowledge workflows.", "bi-mortarboard", "06"],
  ["Design", "Shape polished experiences with creative thinking.", "bi-bezier2", "15"],
  ["Marketing", "Understand audiences and grow meaningful reach.", "bi-megaphone", "09"],
  ["Development", "Turn ideas into reliable, scalable solutions.", "bi-code-slash", "18"]
];

function Category() {
  return (
    <div className="inner-page">
      <div className="container-fluid px-3 px-lg-5">
        <section className="inner-hero category-hero">
          <div>
            <div className="eyebrow"><span></span> EXPLORE</div>
            <h1>Find your <em>category.</em></h1>
            <p>Explore curated spaces built around the way modern teams work.</p>
          </div>
          <div className="category-total"><strong>24</strong><span>ACTIVE<br />CATEGORIES</span></div>
        </section>

        <section className="category-grid">
          {categories.map(([name, description, icon, count], index) => (
            <article className="category-card" key={name}>
              <div className="category-top"><span className="category-icon"><i className={`bi ${icon}`}></i></span><span>0{index + 1}</span></div>
              <h2>{name}</h2>
              <p>{description}</p>
              <div className="category-bottom"><span>{count} resources</span><button>Explore <i className="bi bi-arrow-up-right"></i></button></div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Category;