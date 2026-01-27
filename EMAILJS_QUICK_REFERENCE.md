# ⚡ EmailJS Quick Reference

## 3-Minute Setup

```
1. Go to https://www.emailjs.com/ → Sign up
2. Connect Gmail service → Name it "service_comics"
3. Create 3 email templates:
   - template_rating
   - template_newsletter
   - template_contact
4. Copy Public Key from Account → replace "YOUR_PUBLIC_KEY_HERE" in index.html
5. Deploy to GitHub Pages
6. Done! ✅
```

---

## File Changes Made

### **index.html**
- ✅ Added EmailJS library (CDN)
- ✅ Initialize EmailJS with public key
- ✅ Rating system → sends email on rating
- ✅ Newsletter form → sends email on subscribe
- ✅ Contact form → sends email on submission

### **All emails go to:** srijuvenkat1495@gmail.com

---

## How to Verify It's Working

1. **Rate a comic** on your GitHub Pages site
2. **Check email** (wait 5-10 seconds)
3. Should receive email from EmailJS ✉️

---

## What Gets Emailed

| Event | Email Content |
|-------|---------------|
| **Comic Rating** | Comic ID, Rating (stars), Total ratings, Timestamp |
| **Newsletter Signup** | Email address, Timestamp |
| **Contact Form** | Name, Email, Message, Timestamp |

---

## Limits (Free Plan)

- ✅ 200 emails/month free
- ✅ Enough for personal projects
- 💰 $25/month for 30,000 emails

---

## Public Key Location

```javascript
// Find this in index.html (line ~1145):
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY_HERE"  ← Replace this
});
```

Your actual key looks like: `abc123def456ghi789jkl012`

---

## Troubleshooting Checklist

- [ ] Public key is correct
- [ ] Email templates named exactly right
- [ ] Gmail account connected in EmailJS
- [ ] Website deployed to GitHub Pages
- [ ] Check browser console (F12) for errors
- [ ] Check spam folder for emails
- [ ] Wait 5-10 seconds after action before checking email

---

## Files Created

```
index.html → Updated with EmailJS code
EMAILJS_SETUP_GUIDE.md → Full detailed guide
EMAILJS_QUICK_REFERENCE.md → This file
```

---

**You're ready to send automatic emails from GitHub Pages! 🎉**
