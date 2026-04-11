# Adding New Comics - Implementation Guide

## Quick Reference Checklist

When adding a new comic to the website, follow these steps:

### ✅ Step-by-Step Checklist

- [ ] **1. Identify Category**: Programming (Python/Web Dev), AI & ML (AI Basics/ML/LLM), or Creative (Moral/Adventure/Mysteries/Funny/Culture)
- [ ] **2. Prepare Files**:
  - [ ] Finalized PDF file: `{Title}.pdf` (proper naming)
  - [ ] High-quality thumbnail: `{number}.jpg` (1000x1400px recommended)
  
- [ ] **3. Add to Folders**:
  - [ ] Upload PDF → `pdf/{category}/{filename}.pdf`
  - [ ] Upload Thumbnail → `thumbnails/{category}/{filename}.jpg`
  
- [ ] **4. Update Category HTML**:
  - [ ] Add comic card to correct category file
  - [ ] Fill in all metadata (title, difficulty, date)
  - [ ] Test internal links
  
- [ ] **5. Test**:
  - [ ] Verify PDF link works
  - [ ] Verify thumbnail loads
  - [ ] Check navigation links
  - [ ] Test on mobile & desktop
  
- [ ] **6. (Optional) Feature Comic**:
  - [ ] Edit `index.html` hero section if featured
  - [ ] Update keywords in meta tags

---

## 📝 Comic Card Template

Copy this template and customize for your comic:

```html
<div class="comic-card">
  <a href="../pdf/{CATEGORY}/{FILENAME}.pdf" target="_blank">
    <img src="../thumbnails/{CATEGORY}/{FILENAME}.jpg" alt="{COMIC_TITLE}">
  </a>
  <p class="caption">{COMIC_TITLE}</p>
  <div class="comic-metadata">
    <span class="tag difficulty-{LEVEL}">{LEVEL}</span>
    <span class="tag category-{CATEGORY}">{CATEGORY}</span>
    <span class="date">{DD Mon YYYY}</span>
  </div>
  <div class="comic-interactions">
    <div class="rating-section">
      <div class="stars" data-comic="{COMIC_ID}">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <span class="rating-count">(0)</span>
    </div>
    <div class="action-buttons">
      <button class="btn-favorite" data-comic="{COMIC_ID}" title="Add to favorites">♡</button>
      <button class="btn-share" data-comic="{COMIC_ID}" title="Share comic">↗</button>
    </div>
  </div>
</div>
```

### Template Variables Explained

| Variable | Example | Notes |
|----------|---------|-------|
| `{CATEGORY}` | `python`, `ai-basics`, `moral` | Must match folder name exactly (lowercase) |
| `{FILENAME}` | `Python_vol1` | Use TitleCase for PDFs, lowercase for thumbnails |
| `{COMIC_TITLE}` | `Learning Python` | Title shown to users |
| `{LEVEL}` | `beginner`, `intermediate`, `advanced` | Difficulty level tag |
| `{DD Mon YYYY}` | `22 Jan 2026` | Release date |
| `{COMIC_ID}` | `python_vol1` | Unique identifier (no spaces, lowercase) |

---

## 📂 Implementation Examples

### Example 1: New Python Comic

**Files to create:**
```
pdf/python/Python_Advanced_OOP.pdf
thumbnails/python/python_vol3.jpg
```

**HTML to add** in `categories/python.html`:
```html
<div class="comic-card">
  <a href="../pdf/python/Python_Advanced_OOP.pdf" target="_blank">
    <img src="../thumbnails/python/python_vol3.jpg" alt="Python Advanced OOP">
  </a>
  <p class="caption">Python Advanced OOP</p>
  <div class="comic-metadata">
    <span class="tag difficulty-advanced">Advanced</span>
    <span class="tag category-python">Python</span>
    <span class="date">25 Feb 2026</span>
  </div>
  <div class="comic-interactions">
    <div class="rating-section">
      <div class="stars" data-comic="python_vol3">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <span class="rating-count">(0)</span>
    </div>
    <div class="action-buttons">
      <button class="btn-favorite" data-comic="python_vol3" title="Add to favorites">♡</button>
      <button class="btn-share" data-comic="python_vol3" title="Share comic">↗</button>
    </div>
  </div>
</div>
```

---

### Example 2: New AI Basics Comic

**Files to create:**
```
pdf/ai-basics/Neural_Networks_101.pdf
thumbnails/ai-basics/ai_basics_1.jpg
```

**HTML to add** in `categories/ai-basics.html`:
```html
<div class="comic-card">
  <a href="../pdf/ai-basics/Neural_Networks_101.pdf" target="_blank">
    <img src="../thumbnails/ai-basics/ai_basics_1.jpg" alt="Neural Networks 101">
  </a>
  <p class="caption">Neural Networks 101</p>
  <div class="comic-metadata">
    <span class="tag difficulty-intermediate">Intermediate</span>
    <span class="tag category-ai-basics">AI Basics</span>
    <span class="date">10 Mar 2026</span>
  </div>
  <div class="comic-interactions">
    <div class="rating-section">
      <div class="stars" data-comic="ai_basics_1">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <span class="rating-count">(0)</span>
    </div>
    <div class="action-buttons">
      <button class="btn-favorite" data-comic="ai_basics_1" title="Add to favorites">♡</button>
      <button class="btn-share" data-comic="ai_basics_1" title="Share comic">↗</button>
    </div>
  </div>
</div>
```

---

### Example 3: New Web Development Comic

**Files to create:**
```
pdf/web-development/HTML_Basics_Guide.pdf
thumbnails/web-development/web_dev_1.jpg
```

**HTML to add** in `categories/web-development.html`:
```html
<div class="comic-card">
  <a href="../pdf/web-development/HTML_Basics_Guide.pdf" target="_blank">
    <img src="../thumbnails/web-development/web_dev_1.jpg" alt="HTML Basics Guide">
  </a>
  <p class="caption">HTML Basics Guide</p>
  <div class="comic-metadata">
    <span class="tag difficulty-beginner">Beginner</span>
    <span class="tag category-web-development">Web Development</span>
    <span class="date">15 Mar 2026</span>
  </div>
  <div class="comic-interactions">
    <div class="rating-section">
      <div class="stars" data-comic="web_dev_1">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <span class="rating-count">(0)</span>
    </div>
    <div class="action-buttons">
      <button class="btn-favorite" data-comic="web_dev_1" title="Add to favorites">♡</button>
      <button class="btn-share" data-comic="web_dev_1" title="Share comic">↗</button>
    </div>
  </div>
</div>
```

---

## 🎨 Thumbnail Guidelines

### Recommended Specifications
- **Dimensions**: 1000px × 1400px (portrait orientation)
- **Format**: JPG with 90-95% quality
- **File Size**: 200-400KB (optimized)
- **Style**: Matches website color scheme and design language

### Thumbnail Naming Pattern
```
{category}_{number}.jpg

Examples:
- python_vol1.jpg (Volume numbering)
- ai_basics_1.jpg (Sequential numbering)
- web_dev_1.jpg (Category abbreviation)
- moral_1.jpg (Simple sequential)
```

---

## 📊 Category Tags Reference

### Difficulty Levels
- `beginner` - Perfect for newcomers
- `intermediate` - Builds on basics
- `advanced` - For experienced readers

### Category Tags
- `category-python`
- `category-web-development`
- `category-ai-basics`
- `category-ml`
- `category-llm`
- `category-moral`
- `category-adventure`
- `category-mysteries`
- `category-funny`
- `category-culture`

---

## 🔍 Testing Your Changes

### Local Testing Checklist
1. **Image Loading**
   - [ ] Thumbnail appears correctly
   - [ ] Image is clickable
   - [ ] No broken image icons

2. **Link Testing**
   - [ ] PDF opens in new tab
   - [ ] Navigation links work (all pages accessible)
   - [ ] Breadcrumb navigation works

3. **Responsiveness**
   - [ ] Comic card displays correctly on mobile
   - [ ] Comic card displays correctly on tablet
   - [ ] Comic card displays correctly on desktop
   - [ ] Grid layout adjusts properly

4. **Data Verification**
   - [ ] Comic title is correct
   - [ ] Difficulty level is accurate
   - [ ] Category is correct
   - [ ] Date is in DD Mon YYYY format

---

## 📋 Common Mistakes to Avoid

### ❌ Path Issues
- **Wrong**: `pdf/python/Python_vol1.pdf` (path uses relative `..` from categories folder)
- **Correct**: `../pdf/python/Python_vol1.pdf`

### ❌ Case Sensitivity
- **Wrong**: `AI_Basics/Neural_Networks.pdf`
- **Correct**: `ai-basics/Neural_Networks.pdf`

### ❌ Filename Conventions
- **Wrong**: `Neural-Networks-101.pdf` (hyphens in PDF names)
- **Correct**: `Neural_Networks_101.pdf`

### ❌ Comic IDs with Spaces
- **Wrong**: `data-comic="python vol1"`
- **Correct**: `data-comic="python_vol1"`

---

## 🚀 Making Comics Featured

To make a comic the "Editor's Pick" on the homepage:

Edit `index.html` hero section:
```html
<section class="hero-section">
  <div class="hero-content">
    <div class="hero-image">
      <a href="pdf/web-development/HTML_Basics_Guide.pdf" target="_blank">
        <img loading="lazy" src="thumbnails/web-development/web_dev_1.jpg" alt="Editor's Pick: HTML Basics">
      </a>
    </div>
    <div class="hero-text">
      <div class="editor-badge">🌟 Editor's Pick</div>
      <h2>HTML Basics Guide</h2>
      <p class="hero-description">Start building websites with Sriju! This beginner-friendly guide to HTML covers the fundamentals...</p>
      <div class="hero-metadata">
        <span class="meta-item difficulty">Beginner</span>
        <span class="meta-item category">Web Development</span>
        <span class="meta-item date">Mar 2026</span>
      </div>
      <a href="pdf/web-development/HTML_Basics_Guide.pdf" target="_blank" class="hero-cta">Read This Comic →</a>
    </div>
  </div>
</section>
```

---

## 📞 Need Help?

Refer to:
- `STRUCTURE_GUIDE.md` - Folder organization details
- `DEVELOPER_GUIDE.md` - General development guidelines
- Existing category HTML files - Use as templates

---

**Last Updated**: April 2026
**Version**: 1.0
