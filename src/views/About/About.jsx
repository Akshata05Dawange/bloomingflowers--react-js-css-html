import { useState } from "react";
import "./About.css";

function About() {
  const [activeSection, setActiveSection] = useState("story");

  const sections = [
    {
      id: "story",
      title: "Our Story",
      content:
        "Blooming Flowers started with a seed of an idea: make floral design joyful and sustainable. We deliver curated bouquets, workshops, and expert care in every season.",
    },
    {
      id: "mission",
      title: "Mission",
      content:
        "Create environmentally friendly floral experiences with local growers and small-batch craftsmanship so every home feels more vibrant.",
    },
    {
      id: "team",
      title: "Team",
      content:
        "Our team includes designers, horticulturalists, and happy delivery artists who love creating meaningful moments with plants.",
    },
  ];

  return (
    <div className="about-page">
      <main className="about-content">
        <h1>About Blooming Flowers</h1>
        <p>Learn who we are and how we grow every day.</p>

        <div className="tab-list" role="tablist">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`tab-button ${activeSection === section.id ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
              role="tab"
              aria-selected={activeSection === section.id}
            >
              {section.title}
            </button>
          ))}
        </div>

        <section className="tab-panel" role="tabpanel">
          {sections.find((section) => section.id === activeSection)?.content}
        </section>

        <button
          className="toggle-button"
          onClick={() => setActiveSection((prev) => (prev === "story" ? "mission" : "story"))}
        >
          Toggle Story / Mission
        </button>
      </main>
    </div>
  );
}

export default About;
