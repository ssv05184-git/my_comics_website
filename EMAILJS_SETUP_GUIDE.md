# 📧 EmailJS Setup Guide - Automatic Email Notifications

This guide helps you set up automatic email notifications for your GitHub Pages hosted comics website using **EmailJS** (free service, no backend needed).

---

## 🚀 Quick Setup Steps

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (free plan available)
3. Create account using email
4. Verify your email

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add Service"**
3. Choose **"Gmail"** or your email provider
4. Connect your Gmail account (authorizes sending from that email)
5. Name your service: `service_comics`
6. Click **"Create Service"**

### Step 3: Create Email Templates

Go to **"Email Templates"** and create 3 templates:

#### **Template 1: Rating Notification**
- **Name:** `template_rating`
- **Subject:** `New Comic Rating Received`
- **Body:**
```
New rating received!

Comic ID: {{comic_id}}
Rating: {{rating}}/5 ⭐
Total Ratings: {{total_ratings}}
Time: {{timestamp}}

Check your developer tools to export all ratings!
```

#### **Template 2: Newsletter Subscription**
- **Name:** `template_newsletter`
- **Subject:** `New Newsletter Subscriber!`
- **Body:**
```
New newsletter subscriber!

Email: {{subscriber_email}}
Time: {{timestamp}}

Message: {{message}}

Check your developer tools to export all subscribers!
```

#### **Template 3: Contact Message**
- **Name:** `template_contact`
- **Subject:** `New Contact Message from {{from_name}}`
- **Body:**
```
You received a new contact message!

From: {{from_name}}
Email: {{from_email}}
Time: {{timestamp}}

Message:
{{message}}

Reply to: {{from_email}}

Check your developer tools to export all messages!
```

### Step 4: Get Your Public Key
1. In EmailJS dashboard, go to **"Account"**
2. Find **"Public Key"** (looks like: `abc123xyz456...`)
3. Copy it

### Step 5: Update Your Website Code
In **index.html**, find this line (around line 1143):
```javascript
publicKey: "YOUR_PUBLIC_KEY_HERE"
```

Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key from Step 4.

**Example:**
```javascript
publicKey: "3a1b2c4d5e6f7g8h9i0j"
```

### Step 6: Deploy to GitHub Pages
1. Commit and push your changes:
```bash
git add index.html
git commit -m "Add EmailJS email notifications"
git push origin main
```

2. Your site will auto-deploy (check GitHub Actions)

---

## ✅ How It Works Now

When deployed on GitHub Pages:

### **When User Rates a Comic:**
✉️ Email sent to `srijuvenkat1495@gmail.com` with:
- Comic ID
- Rating (1-5 stars)
- Total number of ratings
- Timestamp

### **When User Subscribes to Newsletter:**
✉️ Email sent to `srijuvenkat1495@gmail.com` with:
- Subscriber email
- Subscription timestamp

### **When User Submits Contact Form:**
✉️ Email sent to `srijuvenkat1495@gmail.com` with:
- User name
- User email
- Message
- Timestamp

---

## 🎯 Email Limitations (Free Plan)

| Feature | Free Plan | Limit |
|---------|-----------|-------|
| Emails/month | 200 | 200 free emails |
| Services | ✅ Yes | 1 service |
| Templates | ✅ Yes | Unlimited |
| Email template variables | ✅ Yes | Unlimited |

**Pricing:** 
- Free: 200 emails/month
- Pro: €25/month for 30,000 emails/month

---

## 🔧 Troubleshooting

### "Emails not sending?"
1. ✅ Check if public key is correct in code
2. ✅ Verify email templates are named exactly: `template_rating`, `template_newsletter`, `template_contact`
3. ✅ Check browser console (F12) for error messages
4. ✅ Verify Gmail account is connected in EmailJS

### "Getting CORS errors?"
- EmailJS automatically handles CORS - should work on GitHub Pages
- Check browser console for specific errors

### "Emails going to spam?"
- Check spam folder for emails from your service email
- Reply to emails to whitelist
- Add to contacts

---

## 🔒 Security Notes

✅ **Safe to use with:**
- Public key (it's public, no security risk)
- GitHub Pages (static hosting)
- Client-side JavaScript

⚠️ **Don't share:**
- Private key (if you add backend later)
- EmailJS account credentials

---

## 📊 Next Steps

### Optional Enhancements:

1. **Customize Email Templates** 
   - Add your logo
   - Change colors
   - Add footer

2. **Set Up Forwarding**
   - EmailJS → Forward to multiple people
   - EmailJS → Forward to Slack/Discord

3. **Upgrade Plan**
   - If you exceed 200 emails/month

4. **Analytics Integration**
   - Track which comics get most ratings
   - Analyze subscriber growth
   - Monitor contact form usage

---

## 📝 What Your Users See

✅ **They won't see any difference** - emails send in background
- Form still shows success message
- No delays or popups
- Seamless experience

---

## 🆘 Still Need Help?

1. **EmailJS Support:** https://www.emailjs.com/help/
2. **Check Console Errors:** Press F12 → Console tab
3. **Test Manually:** 
   - Rate a comic
   - Check your email inbox
   - Look for email from EmailJS

---

## 📧 Contact Email

All notifications go to: **srijuvenkat1495@gmail.com**

To change this, modify the email address in the JavaScript:
```javascript
emailjs.send('service_comics', 'template_rating', {
  to_email: 'YOUR_EMAIL_HERE', // Change this
  ...
})
```

---

**Setup Complete! 🎉 Your website now sends automatic emails!**
