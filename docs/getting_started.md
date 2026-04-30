---
id: Getting-Started
title: How to Contribute to Blogs
sidebar_label: How to Contribute to Blogs
sidebar_position: 2
---

This guide walks you through everything you need to write and publish a blog post on recode hive — from setting up the project locally to pushing your changes as a pull request.

---

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Git](https://git-scm.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Step 1: Fork and Clone the Repository

1. Go to [https://github.com/recodehive/recode-website](https://github.com/recodehive/recode-website) and click **Fork** (top-right corner).

2. Clone your fork to your local machine:

   ```bash
   git clone https://github.com/your-username/recode-website.git
   cd recode-website
   ```

3. Add the upstream remote so you can stay in sync:

   ```bash
   git remote add upstream https://github.com/recodehive/recode-website.git
   ```

---

## Step 2: Install Dependencies and Run Locally

```bash
npm install
npm start
```

This starts a local development server. Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site live. Changes you make to files will hot-reload automatically.

---

## Step 3: Create a New Branch

Never commit directly to `main`. Create a dedicated branch for your blog post:

```bash
git checkout -b blog/your-blog-title
```

Use a short, descriptive name — for example `blog/intro-to-docker` or `blog/react-hooks-guide`.

---

## Step 4: Create the Blog Folder and File

All blog posts live inside the `blog/` directory. Each post gets its own folder.

**Folder structure:**

```
blog/
└── your-blog-title/
    ├── index.md          ← your blog content
    └── images/           ← screenshots and images (optional)
        ├── cover.png
        └── step-01.png
```

Create the folder and file:

```bash
mkdir -p blog/your-blog-title/images
touch blog/your-blog-title/index.md
```

---

## Step 5: Write the Frontmatter

Open `blog/your-blog-title/index.md` and add the following frontmatter at the very top of the file:

```md
---
title: "Your Blog Post Title"
authors: [your-author-id]
sidebar_label: "Your Blog Post Title"
tags: [tag1, tag2, tag3]
date: 2026-04-30

description: A one or two sentence summary of what this blog post covers.

draft: false
canonical_url:
---
```

| Field | Description |
|---|---|
| `title` | The full title displayed at the top of the post and in search results |
| `authors` | Your author ID from `blog/authors.yml` (see Step 6) |
| `sidebar_label` | Short label shown in navigation sidebars |
| `tags` | Comma-separated list of relevant topic tags |
| `date` | Publication date in `YYYY-MM-DD` format |
| `description` | SEO meta description (keep under 160 characters) |
| `draft` | Set to `true` to hide the post; `false` to publish |
| `canonical_url` | Leave blank unless cross-posting from another site |

---

## Step 6: Register Yourself as an Author

Open `blog/authors.yml` and add an entry for yourself if you are not already listed:

```yaml
your-author-id:
  name: Your Full Name
  title: Your Role or Title
  url: https://github.com/your-username
  image_url: https://avatars.githubusercontent.com/u/YOUR_GITHUB_USER_ID?v=4
  page: true
  description: >
    A short bio about yourself (2–3 sentences).
  socials:
    github: your-username
    linkedin: your-linkedin-handle   # optional
    x: your-twitter-handle           # optional
```

The `your-author-id` value must exactly match what you put in the `authors` field of your frontmatter.

---

## Step 7: Write Your Blog Content

After the closing `---` of your frontmatter, add the `<!-- truncate -->` comment. Everything **above** this comment becomes the preview shown on the blog listing page; everything below is the full post.

```md
---
...frontmatter...
---

 <!-- truncate -->

Your introduction paragraph goes here. This will appear as the preview on the blog index page.

## Section Heading

Body content continues here...
```

### Formatting Tips

- Use `##` and `###` headings to structure your content.
- Use fenced code blocks with the language name for syntax highlighting:

  ````md
  ```python
  print("Hello, world!")
  ```
  ````

- Use `>` for callout blockquotes and `---` for horizontal dividers between sections.

---

## Step 8: Add Screenshots and Images

### Recommended Screenshot Dimensions

| Use Case | Recommended Size |
|---|---|
| Cover / hero image | **1200 × 630 px** (16:9 ratio, also ideal for social sharing) |
| Full-width step screenshots | **1280 × 720 px** or **1280 × 800 px** |
| UI close-ups / partial screenshots | **800 × 450 px** |
| Maximum file size | **500 KB** per image (compress with [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)) |

Use **PNG** for UI screenshots (crisp text) and **JPEG/WebP** for photos.

### Naming Convention

Use lowercase, hyphen-separated, numbered filenames so they sort correctly:

```
images/
├── cover.png
├── 01-open-settings.png
├── 02-navigate-to-plugins.png
└── 03-final-result.png
```

### Embedding Images in Markdown

Reference images relative to `index.md`:

```md
![Alt text describing the image](./images/01-open-settings.png)
```

Always write descriptive alt text — it improves accessibility and SEO.

---

## Step 9: Preview Your Post

Make sure your dev server is still running (`npm start`), then navigate to [http://localhost:3000/blog](http://localhost:3000/blog) to see your post in the listing and click into it to read the full content. Verify:

- The frontmatter title, date, and author show correctly.
- The truncate preview looks right on the blog index.
- All images load and are properly sized.
- Code blocks are syntax-highlighted.

---

## Step 10: Commit and Push Your Changes

Once you are happy with the preview, stage and commit your files:

```bash
git add blog/your-blog-title/
git add blog/authors.yml          # only if you added yourself
git commit -m "blog: add post on your-blog-title"
```

Push the branch to your fork:

```bash
git push origin blog/your-blog-title
```

---

## Step 11: Open a Pull Request

1. Go to your fork on GitHub — you will see a **"Compare & pull request"** banner. Click it.
2. Set the **base repository** to `recodehive/recode-website` and **base branch** to `main`.
3. Write a clear PR title, e.g. `blog: Add post on Your Blog Title`.
4. In the description, briefly summarize what the post covers.
5. Click **Create pull request**.

A maintainer will review and merge your post. You may be asked to make small edits before it is approved.

---

## Keeping Your Fork Up to Date

Before starting a new post, pull the latest changes from upstream to avoid merge conflicts:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

---

## Quick Reference Checklist

Before submitting your PR, go through this checklist:

- [ ] Blog folder created at `blog/your-blog-title/index.md`
- [ ] Frontmatter is complete (title, authors, tags, date, description, draft: false)
- [ ] Author entry exists in `blog/authors.yml`
- [ ] `<!-- truncate -->` comment placed after the intro paragraph
- [ ] All images are in `blog/your-blog-title/images/` and named with the convention
- [ ] Cover image is 1200 × 630 px; step screenshots are no wider than 1280 px
- [ ] Image file sizes are under 500 KB each
- [ ] Post previews correctly at `localhost:3000/blog`
- [ ] Committed on a feature branch (not `main`)
- [ ] Pull request targets `recodehive/recode-website` `main` branch
