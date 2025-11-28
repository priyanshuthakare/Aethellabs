# Frontend Email Setup Guide (No Backend Required)

You now have a **frontend-only** email solution using **EmailJS**. No server needed!

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service

1. Go to **Email Services** (in the left sidebar)
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP** (like your company email)
4. Click **Connect Account**
5. Follow the prompts to authenticate
6. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** (in the left sidebar)
2. Click **Create New Template**
3. Give it a name like "Contact Form"
4. In the template, use these variables (they'll be replaced with form data):

**Email Template Content:**

```
To: {{to_email}}
Subject: New Contact Form Submission from {{from_name}}

---ADMIN EMAIL TEMPLATE---

Name: {{from_name}}
Email: {{from_email}}
Company Website: {{company_website}}
Services Of Interest: {{services_of_interest}}
Project Timeline: {{project_timeline}}
Primary Business Challenge: {{primary_business_challenge}}
Estimated Budget: {{estimated_budget}}

---

Or create separate templates for admin and user:

FOR ADMIN: Shows all form details
FOR USER: Shows confirmation message - "{{user_message}}"
```

5. Click **Save**
6. Copy your **Template ID** (looks like: `template_xxxxxxxxx`)

### Step 4: Get Your Keys

1. Go to **Account** (top right menu)
2. Go to **API** tab
3. Copy your **Public Key** (starts with alphanumeric characters)
4. Keep your **Private Key** safe (don't share it)

### Step 5: Update ContactUsSection.jsx

Open `src/screens/Desktop/sections/ContactUsSection/ContactUsSection.jsx`

Replace these lines at the top:

```jsx
// OLD:
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// NEW:
emailjs.init("YOUR_PUBLIC_KEY_FROM_EMAILJS");
```

And replace these lines in the `handleSubmit` function:

```jsx
// OLD:
const result = await emailjs.send(
    "YOUR_SERVICE_ID_HERE",     
    "YOUR_TEMPLATE_ID_HERE",    
    templateParams
);

// NEW:
const result = await emailjs.send(
    "service_abc123xyz",     // Your Service ID
    "template_abc123xyz",    // Your Template ID
    templateParams
);
```

And update the email to receive submissions:

```jsx
// Change this line:
to_email: "detectivefire69@gmail.com", // Replace with your email
```

### Step 6: Test Your Form

1. Go to your website's contact form
2. Fill in all fields
3. Click **Book a consultation**
4. Check your email for the submission!

## How It Works

1. **User fills form** → Data captured in React
2. **User clicks submit** → Frontend sends to EmailJS
3. **EmailJS** → Connects to your email service (Gmail, Outlook, etc.)
4. **Email sent** → To your inbox within seconds
5. **Thank you shown** → User sees success message

## File Changes

✅ `src/screens/Desktop/sections/ContactUsSection/ContactUsSection.jsx` - Updated with EmailJS
✅ `package.json` - @emailjs/browser installed
⏭️ `server/server.js` - No longer needed (optional - can be deleted)
⏭️ `server/sendEmail.js` - No longer needed (optional - can be deleted)

## Example Configuration

After getting your keys from EmailJS:

```jsx
// Line 7 in ContactUsSection.jsx
emailjs.init("pk_live_1234567890abcdefghijklmn");

// Lines in handleSubmit function
const result = await emailjs.send(
    "service_1234567890",
    "template_1234567890",
    templateParams
);

// Line with email
to_email: "your-email@example.com",
```

## Features

✅ No backend server needed
✅ Works directly from browser
✅ Automatic email sending
✅ User confirmation emails
✅ Admin notifications
✅ Error handling
✅ Loading states
✅ Form validation

## Free Plan Limits

- EmailJS free tier allows **200 emails per month**
- Perfect for testing and small projects
- Upgrade to paid plan for unlimited emails

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Dashboard: https://dashboard.emailjs.com/
- Create multiple templates for different email types

## Troubleshooting

**"Invalid Public Key"**
- Check that you copied the full Public Key
- Make sure it's the right key from **Account > API**

**Email not received**
- Check spam/junk folder
- Verify Service ID and Template ID are correct
- Check that email service is authenticated in EmailJS

**Form not submitting**
- Check browser console for errors (F12)
- Make sure all three IDs are correct
- Verify the email service is connected

---

You're all set! Your contact form is now live with no server required. 🎉
