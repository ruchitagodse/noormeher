# Noor Meher Charitable Trust

A responsive website built for **Noor Meher Charitable Trust**, focused on education, community welfare, student activities, achievements, galleries, contact information, and online donations.

## 🌐 Live Website

https://noormeher.vercel.app

---

## 📌 Overview

The website provides a digital platform for Noor Meher Charitable Trust to showcase its initiatives, educational activities, student information, achievements, and community work.

It also includes dynamic student and gallery sections, contact functionality, and an online donation flow powered by Razorpay.

---

## ✨ Features

- Responsive website across desktop, tablet and mobile
- About, Mission and Vision sections
- Services and community activities
- Student lookup and student details
- Student listing and records
- Achievements section
- Quran education section
- Dynamic galleries by year and type
- FAQ / Help section
- Contact page
- Online donations
- Razorpay Checkout integration
- Donation order creation
- Razorpay payment signature verification
- API integration through Next.js API routes
- Reusable layout and navigation components

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Next.js
- JavaScript
- Sass / SCSS
- HTML5
- CSS3

### Framework & Architecture

- Next.js Pages Router
- Reusable React components
- Next.js API Routes
- Dynamic routes
- Responsive layouts

### Payments

- Razorpay Checkout
- Razorpay Orders API
- Payment signature verification

### Backend Integration

The application uses Next.js API routes to communicate with the Noor Meher backend API.

---

## 💳 Donation Flow

The website includes an online donation workflow using Razorpay.

The flow is:

1. User enters donation information.
2. A donation order is created through a Next.js API route.
3. Razorpay Checkout is opened.
4. Payment is processed through Razorpay.
5. The Razorpay payment signature is verified on the server.
6. The verified donation is recorded through the backend.

This approach keeps payment verification on the server side rather than relying only on client-side confirmation.

---

## 🗂️ Project Structure

```text
.
├── components/
│   ├── Layout.js
│   ├── Header.js
│   └── ...
│
├── pages/
│   ├── index.js
│   ├── donate.js
│   ├── ...
│   └── api/
│       ├── create-order.js
│       └── verify-donation.js
│
├── public/
│   └── images/
│
├── styles/
│   └── main.scss
│
├── package.json
└── ...
