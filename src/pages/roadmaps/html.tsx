import React from "react";
import Layout from "@theme-original/Layout";
import Link from "@docusaurus/Link";
import { htmlRoadmapData } from "../../data/roadmaps/html";
import Head from "@docusaurus/Head";
import "./roadmaps.css";

export default function HTMLRoadmap(): React.JSX.Element {
  return (
    <Layout
      title="HTML Learning Roadmap"
      description="A comprehensive step-by-step guide to mastering HTML, from basics to SEO and accessibility."
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
              <span className="gradient-text">HTML</span> Roadmap
            </h1>
            <p className="hero-subtitle">
              The foundation of the web. Follow this path to learn how to 
              structure your web pages correctly and optimize them for 
              search engines.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <div className="roadmap-timeline">
          {htmlRoadmapData.map((section, idx) => (
            <div key={idx} className="timeline-section">
              <div className="section-dot"></div>
              <h2 className="section-title">{section.title}</h2>
              <div className="timeline-items">
                {section.items.map((item, itemIdx) => (
                  <Link 
                    key={itemIdx} 
                    to={item.link !== '#' ? item.link : undefined}
                    className={`timeline-item ${item.link === '#' ? 'inactive' : ''}`}
                  >
                    <div className="item-content">
                      <span className="item-status-icon">
                        {item.status === 'completed' ? '✅' : '⭕'}
                      </span>
                      <span className="item-text">{item.text}</span>
                    </div>
                    {item.link !== '#' && <span className="item-arrow">→</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
