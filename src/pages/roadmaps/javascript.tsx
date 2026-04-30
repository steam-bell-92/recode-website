import React from "react";
import Layout from "@theme-original/Layout";
import Link from "@docusaurus/Link";
import roadmapJavaScript from "../../data/roadmaps/javascript/index";
import Head from "@docusaurus/Head";
import "./roadmaps.css";

export default function JavascriptRoadmap(): React.JSX.Element {
  return (
    <Layout
      title="JavaScript Learning Roadmap"
      description="Step-by-step guide to mastering JavaScript, from beginner to advanced topics."
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
              <span className="gradient-text">JavaScript</span> Roadmap
            </h1>
            <p className="hero-subtitle">
              The language of the web. Move from basic syntax to advanced 
              asynchronous patterns and modern frameworks.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="roadmap-timeline">
          {roadmapJavaScript.map((section, idx) => (
            <div key={idx} className="timeline-section">
              <div className="section-dot"></div>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem', opacity: 0.7 }}>{section.description}</p>
              <div className="timeline-items">
                {section.topics.map((topic, topicIdx) => (
                  <div key={topicIdx} className="timeline-item inactive">
                    <div className="item-content">
                      <span className="item-status-icon">⭕</span>
                      <div>
                        <div className="item-text">{topic.title}</div>
                        <div className="item-subtext" style={{ fontSize: '0.85rem', opacity: 0.6 }}>{topic.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
