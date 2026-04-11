# Project Structure Guide - My Comics Website

## Overview
This document outlines the recommended folder structure for maintaining and scaling the comics website based on the new category organization (Option B).

---

## 📁 Recommended Project Structure

```
my_comics_website/
│
├── 📄 index.html                    # Main homepage
├── 📄 about.html                    # About page
├── 📄 style.css                     # Global stylesheet
├── 📄 badges.js                     # Badges/interactions script
├── 📄 logo.png                      # Site logo
│
├── 📂 categories/                   # Category pages (organized by type)
│   │
│   ├── 🎯 PROGRAMMING CATEGORY
│   │   ├── python.html
│   │   └── web-development.html     # NEW
│   │
│   ├── 🤖 AI & ML CATEGORY
│   │   ├── ai-basics.html           # NEW
│   │   ├── ml.html
│   │   └── llm.html
│   │
│   └── 📖 CREATIVE STORIES CATEGORY
│       ├── moral.html
│       ├── adventure.html
│       ├── mysteries.html
│       ├── funny.html
│       └── culture.html
│
├── 📂 pdf/                          # Comic PDFs (organized by category)
│   │
│   ├── 🎯 PROGRAMMING
│   │   ├── python/
│   │   │   ├── Python_vol1.pdf
│   │   │   ├── Python_Intermediate_Level.pdf
│   │   │   └── Sriju_Learns_Time_and_System_Magic_with_Python.pdf
│   │   │
│   │   └── web-development/         # NEW - For future web comics
│   │       └── (Coming soon)
│   │
│   ├── 🤖 AI & ML
│   │   ├── ai-basics/               # NEW - For AI Basics comics
│   │   │   └── (Coming soon)
│   │   │
│   │   ├── ml/
│   │   │   └── (ML comics)
│   │   │
│   │   └── LLM/
│   │       ├── Prompt_Engineering.pdf
│   │       └── (Other LLM comics)
│   │
│   └── 📖 CREATIVE STORIES
│       ├── moral/
│       │   ├── krishna's_secret_with_sriju.pdf
│       │   └── (Other moral comics)
│       │
│       ├── adventure/
│       │   └── (Adventure comics)
│       │
│       ├── mysteries/
│       │   └── (Mystery comics)
│       │
│       ├── funny/
│       │   └── (Humorous comics)
│       │
│       └── culture/
│           └── (Culture comics)
│
├── 📂 thumbnails/                   # Comic thumbnails (organized by category)
│   │
│   ├── 🎯 PROGRAMMING
│   │   ├── python/
│   │   │   ├── python_vol1.jpg
│   │   │   ├── python_vol2.jpg
│   │   │   └── python_lib_1.jpg
│   │   │
│   │   └── web-development/         # NEW
│   │       └── (Coming soon)
│   │
│   ├── 🤖 AI & ML
│   │   ├── ai-basics/               # NEW
│   │   │   └── (Coming soon)
│   │   │
│   │   ├── ml/
│   │   │   └── (ML thumbnails)
│   │   │
│   │   └── LLM/
│   │       ├── llm_1.jpg
│   │       └── (Other LLM thumbnails)
│   │
│   └── 📖 CREATIVE STORIES
│       ├── moral/
│       │   ├── moral_1.jpg
│       │   └── (Other moral thumbnails)
│       │
│       ├── adventure/
│       │   └── (Adventure thumbnails)
│       │
│       ├── mysteries/
│       │   └── (Mystery thumbnails)
│       │
│       ├── funny/
│       │   └── (Humorous thumbnails)
│       │
│       └── culture/
│           └── (Culture thumbnails)
│
└── 📂 docs/                         # Documentation (OPTIONAL - suggested)
    ├── DEVELOPER_GUIDE.md          # Development guidelines
    ├── STRUCTURE.md                # This file
    ├── EMAILJS_SETUP_GUIDE.md      # Email setup documentation
    └── ADDING_NEW_COMICS.md        # Guide for adding new comics

```

---

## 🎯 New Category Files Created

### 1. **AI Basics** (`categories/ai-basics.html`)
   - **Path**: `categories/ai-basics.html`
   - **PDF folder**: `pdf/ai-basics/`
   - **Thumbnails folder**: `thumbnails/ai-basics/`
   - **Purpose**: Introductory AI concepts separate from ML/LLM
   - **Status**: Ready for content

### 2. **Web Development** (`categories/web-development.html`)
   - **Path**: `categories/web-development.html`
   - **PDF folder**: `pdf/web-development/`
   - **Thumbnails folder**: `thumbnails/web-development/`
   - **Purpose**: HTML, CSS, JavaScript, and web technologies
   - **Status**: Ready for content

---

## 📊 Category Organization Schema

### Category Grouping
```
┌─────────────────────────────────────────────────────┐
│                  SITE NAVIGATION                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🎯 PROGRAMMING & DEVELOPMENT                      │
│  ├─ Python                                          │
│  └─ Web Development                                 │
│                                                     │
│  🤖 AI & MACHINE LEARNING                          │
│  ├─ AI Basics                                       │
│  ├─ ML (Machine Learning)                           │
│  └─ LLM (Large Language Models)                     │
│                                                     │
│  📖 CREATIVE & STORYTELLING                        │
│  ├─ Moral                                           │
│  ├─ Adventure                                       │
│  ├─ Mysteries                                       │
│  ├─ Humorous                                        │
│  └─ Culture                                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📋 Naming Conventions

### PDF Files
- **Format**: `TitleCase_Description.pdf`
- **Examples**:
  - `Python_vol1.pdf`
  - `Prompt_Engineering.pdf`
  - `krishna's_secret_with_sriju.pdf`

### Thumbnail Files
- **Format**: `category_number.jpg` (lowercase)
- **Examples**:
  - `python_vol1.jpg`
  - `llm_1.jpg`
  - `moral_1.jpg`

### HTML Category Files
- **Format**: `category-name.html` (lowercase, hyphen-separated)
- **Examples**:
  - `python.html`
  - `web-development.html`
  - `ai-basics.html`

---

## ⚙️ How to Add New Comics

### 1. Choose Your Category
Determine which category your comic belongs to:
- **Programming**: Python, Web Development
- **AI & ML**: AI Basics, ML, LLM
- **Creative Stories**: Moral, Adventure, Mysteries, Humorous, Culture

### 2. Create/Update Folders
- Add PDF to: `pdf/{category}/{filename}.pdf`
- Add Thumbnail to: `thumbnails/{category}/{filename}.jpg`

### 3. Update Category HTML File
In `categories/{category}.html`:
```html
<div class="comic-card">
  <a href="../pdf/{category}/{filename}.pdf" target="_blank">
    <img src="../thumbnails/{category}/{filename}.jpg" alt="Comic Title">
  </a>
  <p class="caption">Comic Title</p>
  <div class="comic-metadata">
    <span class="tag difficulty-{level}">{Level}</span>
    <span class="tag category-{category}">{Category}</span>
    <span class="date">DD Mon YYYY</span>
  </div>
  <!-- rating and interaction divs -->
</div>
```

### 4. (Optional) Update Homepage Hero
If it's a featured comic, update `index.html` hero section.

---

## 🔄 Scaling for Future Growth

### When to Subdivide Categories
Consider creating subcategories when:
- A category has 15+ comics
- Comics have distinct skill levels or focus areas
- Users need better filtering

### Example Subdivision Structure
```
pdf/
├── python/
│   ├── beginner/          # New subdivision
│   ├── intermediate/
│   └── advanced/
│
└── web-development/
    ├── frontend/          # New subdivision
    ├── backend/
    └── fullstack/
```

---

## 📝 File Naming Guidelines

### Do's ✅
- Use descriptive, clear filenames
- Use underscores for multi-word PDFs
- Keep thumbnails lowercase
- Use hyphens in HTML filenames

### Don'ts ❌
- Avoid special characters (except underscore/hyphen)
- Don't use spaces in filenames
- Don't use uppercase in folder names
- Don't mix naming conventions

---

## 🔍 SEO & Meta Tags

Each category page includes proper meta tags:
- **Title**: Descriptive with category name
- **Description**: What the category offers
- **Keywords**: Relevant search terms
- **OG Tags**: Social media sharing

Update these in each HTML file for new categories.

---

## 🐛 Troubleshooting

### Navigation Links Not Working
- Check file paths use `../` for relative navigation from categories folder
- Ensure category HTML files are in correct locations

### Images Not Loading
- Verify thumbnail filenames match exactly (case-sensitive)
- Check paths: `../thumbnails/{category}/{filename}.jpg`

### PDF Links Broken
- Ensure PDF files exist in correct `pdf/{category}/` folder
- Check paths: `../pdf/{category}/{filename}.pdf`

---

## 📚 Related Documentation
- `DEVELOPER_GUIDE.md` - General development guidelines
- `EMAILJS_SETUP_GUIDE.md` - Email integration setup
- `EMAILJS_IMPLEMENTATION.md` - Email implementation details

---

**Last Updated**: April 2026
**Structure Version**: 2.0 (Organized by Category Groups)
