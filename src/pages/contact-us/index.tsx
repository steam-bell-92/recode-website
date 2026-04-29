import React, { useRef, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Clock } from "lucide-react";
import "./index.css";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactUs: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const publicKey = siteConfig.customFields?.EMAILJS_PUBLIC_KEY as string;
    const serviceId = siteConfig.customFields?.EMAILJS_SERVICE_ID as string;
    const templateId = siteConfig.customFields?.EMAILJS_TEMPLATE_ID as string;

    if (!publicKey || !serviceId || !templateId) {
      setErrorMessage(
        "Email service is not configured. Please contact us directly at sanjay@recodehive.com.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (_err) {
      setErrorMessage(
        "Something went wrong. Please try again or email us directly at sanjay@recodehive.com.",
      );
      setStatus("error");
    }
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the recode hive team. We're here to help with your questions, feedback, and collaboration opportunities."
    >
      <div className="enhanced-contact-container">
        <div className="contact-content-wrapper">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-description">
              Have questions, feedback, or want to collaborate? We'd love to
              hear from you. Reach out to us and we'll get back to you as soon
              as possible.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <div>
                <h2 className="contact-info-title">Contact Information</h2>

                <div className="contact-info-items">
                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <Mail
                        className="h-6 w-6"
                        style={{ color: "var(--contact-accent-primary)" }}
                      />
                    </div>
                    <div className="contact-info-details">
                      <h3>Email</h3>
                      <a href="mailto:sanjay@recodehive.com">
                        sanjay@recodehive.com
                      </a>
                      <p>General inquiries and support</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <Clock
                        className="h-6 w-6"
                        style={{ color: "var(--contact-accent-primary)" }}
                      />
                    </div>
                    <div className="contact-info-details">
                      <h3>Response Time</h3>
                      <p
                        style={{
                          marginTop: 0,
                          color: "var(--contact-text-secondary)",
                        }}
                      >
                        Within 24-48 hours
                      </p>
                      <p>We'll get back to you promptly</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <MapPin
                        className="h-6 w-6"
                        style={{ color: "var(--contact-accent-primary)" }}
                      />
                    </div>
                    <div className="contact-info-details">
                      <h3>Location</h3>
                      <p
                        style={{
                          marginTop: 0,
                          color: "var(--contact-text-secondary)",
                        }}
                      >
                        Online & Global
                      </p>
                      <p>Serving developers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="contact-info-box">
                <h3>What we can help you with:</h3>
                <ul>
                  <li>
                    <span className="bullet"></span>
                    <span>Learning resources and tutorials</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Technical support and guidance</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Collaboration opportunities</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Partnership inquiries</span>
                  </li>
                  <li>
                    <span className="bullet"></span>
                    <span>Content suggestions and feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-form-title">Send us a message</h2>

              {status === "success" ? (
                <div className="form-success-message">
                  <div className="form-success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We'll get back to you within
                    24-48 hours.
                  </p>
                  <button
                    className="submit-button"
                    style={{ marginTop: "1rem" }}
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="form-error-message">{errorMessage}</div>
                  )}

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="contact-resources">
            <h2 className="resources-title">Other Ways to Connect</h2>
            <div className="resources-grid">
              <a href="/community" className="resource-card">
                <div className="resource-icon">📚</div>
                <h3>Community</h3>
                <p>Join our community and connect with fellow developers</p>
              </a>

              <a href="/docs" className="resource-card">
                <div className="resource-icon">📖</div>
                <h3>Documentation</h3>
                <p>Explore our comprehensive learning resources</p>
              </a>

              <a href="/blogs" className="resource-card">
                <div className="resource-icon">✍️</div>
                <h3>Blog</h3>
                <p>Read our latest articles and tutorials</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
