# Developer Guide - Sriju's Comics Website

## 📊 How Contact & Subscribe Features Work

### 1. **Contact Us Form**
**Location:** Modal dialog (footer or "Contact" link)

**How It Works:**
- Users fill out: Name, Email, Message
- Data is **stored locally in browser's localStorage**
- Each contact message includes a timestamp
- Storage Key: `contactMessages` (JSON array)

**Data Structure:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great comics!",
  "timestamp": "2026-01-27T10:30:00.000Z"
}
```

**Backend:** Currently NO server integration - all data stays in browser. To implement backend:
1. Replace the localStorage code with an API call
2. Send POST request to your backend service
3. Store in database (MongoDB, PostgreSQL, etc.)

---

### 2. **Newsletter Subscription**
**Location:** Footer "Stay Updated" section

**How It Works:**
- Users enter email address
- Email is validated using regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Email stored locally in localStorage
- Storage Key: `newsletter-subscribers` (JSON array)
- Duplicate prevention: Won't add same email twice

**Data Structure:**
```json
["user1@example.com", "user2@example.com", "user3@example.com"]
```

**Backend:** Currently NO server integration. To implement:
1. Send email to backend API
2. Store in email list service (MailChimp, SendGrid, etc.)
3. Implement automated weekly email sending

---

### 3. **Ratings System**
**Location:** 5-star rating on each comic card

**How It Works:**
- Users click stars (1-5 rating)
- Rating stored for each comic individually
- Storage Key Pattern: `rating-{comicId}`
- Example: `rating-python_vol1`, `rating-ml_part2`
- Each comic tracks total rating count

**Data Structure:**
```javascript
localStorage.getItem('rating-python_vol1')  // Returns: "5"
localStorage.getItem('rating-ml_part1')     // Returns: "4"
```

---

## 🔓 Developer Tools - Export Data

### **Access Developer Tools**
Press: **`Ctrl + Shift + D`** on your keyboard to toggle the developer panel

### **Available Exports:**

#### 1. **Export Ratings**
- Downloads 2 files:
  - `ratings_export_2026-01-27.json` - Structured JSON
  - `ratings_export_2026-01-27.csv` - Spreadsheet compatible

**CSV Format:**
```
Comic ID,Rating,Date
"python_vol1",5,"2026-01-27T10:30:00.000Z"
"ml_part1",4,"2026-01-27T10:25:00.000Z"
```

#### 2. **Export Contact Messages**
- Downloads 2 files:
  - `contacts_export_2026-01-27.json`
  - `contacts_export_2026-01-27.csv`

**CSV Format:**
```
Name,Email,Message,Timestamp
"John Doe","john@example.com","Great comics!","2026-01-27T10:30:00.000Z"
```

#### 3. **Export Newsletter Subscribers**
- Downloads 2 files:
  - `subscribers_export_2026-01-27.json`
  - `subscribers_export_2026-01-27.csv`

**CSV Format:**
```
Email,SubscribedDate
"user1@example.com","2026-01-27T10:30:00.000Z"
```

---

## 📱 Weekly Export Automation

### **Current Setup (Manual):**
- Developer needs to manually press Ctrl+Shift+D and export files each week
- Files are timestamped for organization

### **To Automate Weekly Exports:**

**Option 1: Browser Service Worker (Advanced)**
```javascript
// Schedule weekly export
setInterval(() => {
  // Auto-export logic
}, 7 * 24 * 60 * 60 * 1000); // 7 days
```

**Option 2: Backend API + Cron Job (Recommended)**
```javascript
// Backend: Node.js + cron-job
const cron = require('node-cron');

// Every Monday at 9 AM
cron.schedule('0 9 * * 1', async () => {
  const data = await fetchAllUserData();
  const csv = convertToCSV(data);
  sendEmail(csv, 'analytics@example.com');
});
```

**Option 3: Google Sheets Integration**
```javascript
// Auto-send data to Google Sheets weekly
// Use Google Apps Script + Apps Mail
```

**Option 4: Cloud Function (AWS Lambda, Google Cloud)**
```javascript
// AWS Lambda triggered by CloudWatch Events
// Executes weekly export automatically
```

---

## 🔧 Implementation Checklist

### **To Move to Production:**

- [ ] Set up backend API (Node.js, Python, etc.)
- [ ] Connect contact form to database
- [ ] Implement email service (SendGrid/MailChimp)
- [ ] Set up automated weekly export
- [ ] Add server-side validation
- [ ] Implement rate limiting
- [ ] Add spam protection (CAPTCHA)
- [ ] Enable email notifications to admins
- [ ] Set up analytics dashboard
- [ ] Add data export scheduling

---

## 📊 Example Weekly Export Schedule

**Suggested Setup:**
```
Monday 9:00 AM UTC - Automated Export
↓
Email to: developer@example.com
↓
Files: ratings.csv, contacts.csv, subscribers.csv
↓
Attachment: Weekly Analytics Report
```

---

## 🔐 Data Privacy Notes

- ✅ All data currently stored **locally in browser only**
- ✅ No data sent to external servers
- ✅ Users can clear data anytime (Clear Browser Data)
- ⚠️ When implementing backend, ensure GDPR/privacy compliance
- ⚠️ Add unsubscribe option for newsletter
- ⚠️ Include data retention policies

---

## 📞 Support

For questions or to implement backend integration, refer to:
- localStorage API: MDN Web Docs
- Blob API for file downloads: MDN Web Docs
- Service Workers: Google Developers
- Backend frameworks: Node.js, Express.js, Django
