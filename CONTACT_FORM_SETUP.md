# Contact Form Email Setup - Frontend Only (No Backend)

Your contact form now works **completely from the frontend** - no backend server needed!

## How It Works

The form uses **Formspree**, a free service that collects form submissions and sends them to your email.

1. User fills form → Data captured
2. User clicks submit → Sends to Formspree
3. Formspree → Sends email to your inbox
4. User sees → Thank you message

## Setup (2 minutes):

### Step 1: Get Your Formspree Form ID

1. Go to https://formspree.io/
2. Sign up (free account)
3. Create a new form
4. Enter your email address
5. Copy the **Form ID** (looks like: `mzzpzyne`)

### Step 2: Update ContactUsSection.jsx

Open `src/screens/Desktop/sections/ContactUsSection/ContactUsSection.jsx`

Find this line (around line 36):
```javascript
const response = await fetch("https://formspree.io/f/mzzpzyne", {
```

Replace `mzzpzyne` with your actual Formspree Form ID:
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### Step 3: Done!

That's it! Your contact form is now live and sending emails.

## Testing

1. Go to your website
2. Fill out the contact form
3. Click "Book a consultation"
4. Check your email - you should receive the submission!

## Features

✅ No backend server needed
✅ Works directly from frontend
✅ Free tier available (50 submissions/month)
✅ Automatic email notifications
✅ Form validation
✅ Error handling
✅ Loading states
✅ Works on any hosting (Vercel, Netlify, GitHub Pages, etc.)

## Formspree Plans

- **Free**: 50 submissions/month
- **Paid**: Unlimited submissions from $25/month

## What Happens

When someone submits the form:

1. You receive an email with:
   - Name, Email, Company Website
   - Services of Interest
   - Project Timeline
   - Primary Business Challenge
   - Estimated Budget

2. User sees "Thank You!" message

3. Formspree automatically sends confirmation to user

## Troubleshooting

**"Failed to submit form"**
- Check that your Form ID is correct
- Make sure you copied the full ID from Formspree

**Email not received**
- Check spam/junk folder
- Verify the email address in Formspree
- Check Formspree dashboard to see submissions

**Form not working at all**
- Open browser console (F12)
- Check for error messages
- Verify Form ID is correct

## Other Options

Instead of Formspree, you can also use:

- **EmailJS** - https://www.emailjs.com/ (free tier: 200/month)
- **Basin** - https://usebasin.com/ (free with unlimited submissions)
- **Getform** - https://getform.io/ (free tier available)

Just replace the fetch URL with their endpoint.

---

✅ Your contact form is ready to go! No server needed. 🚀
