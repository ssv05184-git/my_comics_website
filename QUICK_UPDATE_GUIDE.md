# Quick Update Guide - New Categories

## How to Replace Placeholder Comics

When you have your PDFs and thumbnails ready, follow these simple steps:

---

## 🤖 AI Basics Category

### File: `categories/ai-basics.html`

#### Comic 1 - Replace These Items:

**In HTML:**
```html
<!-- FIND THIS: -->
<a href="../pdf/ai-basics/AI_Basics_Placeholder_1.pdf" target="_blank">
  <img src="../thumbnails/ai-basics/ai_basics_1.jpg" alt="AI Basics - Placeholder 1">
</a>
<p class="caption">[PLACEHOLDER] - Replace with your comic title</p>
<div class="comic-metadata">
  <span class="tag difficulty-beginner">Beginner</span>
  <span class="tag category-ai-basics">AI Basics</span>
  <span class="date">Coming Soon</span>
</div>
<div class="comic-interactions">
  <div class="rating-section">
    <div class="stars" data-comic="ai_basics_1">

<!-- REPLACE WITH: -->
<a href="../pdf/ai-basics/{YOUR_PDF_NAME}.pdf" target="_blank">
  <img src="../thumbnails/ai-basics/ai_basics_1.jpg" alt="{YOUR_COMIC_TITLE}">
</a>
<p class="caption">{YOUR_COMIC_TITLE}</p>
<div class="comic-metadata">
  <span class="tag difficulty-{beginner/intermediate/advanced}">{LEVEL}</span>
  <span class="tag category-ai-basics">AI Basics</span>
  <span class="date">{DD Mon YYYY}</span>
</div>
<div class="comic-interactions">
  <div class="rating-section">
    <div class="stars" data-comic="ai_basics_1">
```

**File Actions:**
1. Upload your PDF: `pdf/ai-basics/{YOUR_PDF_NAME}.pdf`
2. Upload your thumbnail: `thumbnails/ai-basics/ai_basics_1.jpg`
3. Update the HTML with your title, difficulty, and date

#### Comic 2 - Same process
- Update: `../pdf/ai-basics/AI_Basics_Placeholder_2.pdf`
- Update: `ai_basics_2.jpg`
- Update: `data-comic="ai_basics_2"`

---

## 🌐 Web Development Category

### File: `categories/web-development.html`

#### Comic 1 - Replace These Items:

**Follow the same pattern as AI Basics:**
1. Upload PDF: `pdf/web-development/{YOUR_PDF_NAME}.pdf`
2. Upload thumbnail: `thumbnails/web-development/web_dev_1.jpg`
3. Update HTML title, difficulty, date, and placeholder values

#### Comic 2 - Same process
- Update: `../pdf/web-development/Web_Development_Placeholder_2.pdf`
- Update: `web_dev_2.jpg`
- Update: `data-comic="web_dev_2"`

---

## 📋 Replacement Checklist

For each comic, update:

- [ ] **PDF Path**: `{CATEGORY}/PDF_Filename.pdf`
- [ ] **Thumbnail Path**: `{category}_number.jpg`
- [ ] **Alt Text**: Comic description
- [ ] **Caption**: Comic title (what users see)
- [ ] **Difficulty**: `beginner`, `intermediate`, or `advanced`
- [ ] **Date**: Format as `DD Mon YYYY` (e.g., `15 Mar 2026`)
- [ ] **data-comic ID**: Change to unique identifier (no spaces, lowercase)

---

## 🖼️ Placeholder Image Specs

When you add your thumbnails, use:
- **Size**: 1000px × 1400px (portrait)
- **Format**: JPG (90% quality)
- **Name Pattern**: `{category}_{number}.jpg`
- **Examples**: `ai_basics_1.jpg`, `web_dev_2.jpg`

---

## ✅ Current Status

**AI Basics:**
- ✅ Category page created: `categories/ai-basics.html`
- ✅ Placeholder structure ready
- ✅ Folder created: `pdf/ai-basics/`
- ✅ Folder created: `thumbnails/ai-basics/`
- ⏳ Waiting for: Your PDFs and thumbnails

**Web Development:**
- ✅ Category page created: `categories/web-development.html`
- ✅ Placeholder structure ready
- ✅ Folder created: `pdf/web-development/`
- ✅ Folder created: `thumbnails/web-development/`
- ⏳ Waiting for: Your PDFs and thumbnails

---

## 📝 Example Update

### Before (Placeholder):
```html
<a href="../pdf/ai-basics/AI_Basics_Placeholder_1.pdf" target="_blank">
  <img src="../thumbnails/ai-basics/ai_basics_1.jpg" alt="AI Basics - Placeholder 1">
</a>
<p class="caption">[PLACEHOLDER] - Replace with your comic title</p>
<span class="date">Coming Soon</span>
<div class="stars" data-comic="ai_basics_1">
```

### After (Your Content):
```html
<a href="../pdf/ai-basics/Introduction_to_Neural_Networks.pdf" target="_blank">
  <img src="../thumbnails/ai-basics/ai_basics_1.jpg" alt="Introduction to Neural Networks">
</a>
<p class="caption">Introduction to Neural Networks</p>
<span class="date">20 Mar 2026</span>
<div class="stars" data-comic="neural_networks_1">
```

---

## 🚀 Next Steps

Once you have your files:
1. Upload PDFs to `pdf/{category}/` folders
2. Upload thumbnails to `thumbnails/{category}/` folders
3. Update the HTML files with your comic details
4. Test links and image loading

That's it! The categories are ready to go.

---

**Date**: April 2026
**Status**: Ready for content
