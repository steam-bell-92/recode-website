import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { roadmaps } from "../../data/roadmaps/index";
import Head from "@docusaurus/Head";
import "./roadmaps.css";

export default function RoadmapLanding(): React.JSX.Element {
  return (
    <Layout
      title="Learning Roadmaps"
      description="Step-by-step guides to mastering web development and modern technologies."
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="roadmap-page">
        {/* Hero Section */}
        <section className="roadmap-hero">
          <div className="container">
            <h1 className="hero-title">
              <span className="gradient-text">Master</span> Your Craft
            </h1>
            <p className="hero-subtitle">
              Choose a path and follow our step-by-step guides to become a 
              professional developer. Our roadmaps are curated by experts to 
              take you from zero to hero.
            </p>
          </div>
        </section>

        {/* Roadmaps Grid */}
        <section className="roadmaps-section">
          <div className="container">
            <div className="roadmaps-grid">
              {roadmaps.map((roadmap) => (
                <Link
                  to={`/roadmaps/${roadmap.id}`}
                  key={roadmap.id}
                  className="roadmap-card"
                >
                  <div className="card-icon">
                    {roadmap.id === 'html' && '📄'}
                    {roadmap.id === 'css' && '🎨'}
                    {roadmap.id === 'javascript' && '⚡'}
                    {!['html', 'css', 'javascript'].includes(roadmap.id) && '🚀'}
                  </div>
                  <h3 className="card-title">{roadmap.title}</h3>
                  <p className="card-description">{roadmap.description}</p>
                  <div className="card-footer">
                    <span className="lesson-count">
                      {roadmap.lessons.length} Modules
                    </span>
                    <span className="explore-btn">Explore Path →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
