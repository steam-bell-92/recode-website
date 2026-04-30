import React from "react";
import Layout from "@theme-original/Layout";
import Link from "@docusaurus/Link";
import { roadmaps } from "../../data/roadmaps/index";
import Head from "@docusaurus/Head";
import "./roadmaps.css";

export default function CSSRoadmap(): React.JSX.Element {
  const cssRoadmap = roadmaps.find(r => r.id === 'css');
  
  if (!cssRoadmap) {
    return (
      <Layout title="Roadmap Not Found">
        <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
          <h1>Roadmap Not Found</h1>
          <Link to="/roadmaps">Back to All Roadmaps</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="CSS Learning Roadmap"
      description="Master the art of styling web pages with CSS, from fundamentals to advanced layouts."
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
        {/* Back Link */}
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/roadmaps" className="back-link">
            ← Back to All Roadmaps
          </Link>
        </div>

        {/* Hero Section */}
        <section className="roadmap-hero" style={{ padding: '3rem 0' }}>
          <div className="container">
            <h1 className="hero-title">
              <span className="gradient-text">CSS</span> Roadmap
            </h1>
            <p className="hero-subtitle">
              {cssRoadmap.description}
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="roadmap-timeline">
          <div className="timeline-section">
            <div className="section-dot"></div>
            <h2 className="section-title">Core Concepts</h2>
            <div className="timeline-items">
              {cssRoadmap.lessons.map((lesson, idx) => (
                <a 
                  key={idx} 
                  href={lesson.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-item"
                >
                  <div className="item-content">
                    <span className="item-status-icon">⭕</span>
                    <div>
                      <div className="item-text">{lesson.title}</div>
                      <div className="item-subtext" style={{ fontSize: '0.85rem', opacity: 0.6 }}>Duration: {lesson.duration}</div>
                    </div>
                  </div>
                  <span className="item-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
