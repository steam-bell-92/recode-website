import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './SocialShare.css';

const SocialShare = () => {
  // Safe hook call
  let blogPost;
  try {
    blogPost = useBlogPost();
  } catch (e) {
    return null;
  }
  
  if (!blogPost) return null;
  
  const { metadata } = blogPost;
  const { permalink, title } = metadata;
  const blogUrl = `https://www.recodehive.com${permalink}`;
  const shareText = encodeURIComponent(`Check out this article: ${title}`);

  return (
    <div className="blog-post-share-section">
      <h3 className="share-title">Enjoyed the article? Share it!</h3>
      <div className="share-buttons-row">
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(blogUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn-large twitter"
          title="Share on X (Twitter)"
        >
          <FaTwitter /> <span>Share on X</span>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn-large linkedin"
          title="Share on LinkedIn"
        >
          <FaLinkedin /> <span>Share on LinkedIn</span>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn-large facebook"
          title="Share on Facebook"
        >
          <FaFacebook /> <span>Share on Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default SocialShare;
