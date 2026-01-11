# Next Tailwind Site 🚀

A modern full-stack web application built with **Next.js (App Router)**, **Tailwind CSS**, **NextAuth.js**, and **Prisma with PostgreSQL**, deployed on **Vercel**.

---

## ✨ Features

- ⚡ Next.js 14 (App Router)
- 🎨 Tailwind CSS for modern UI
- 🔐 Authentication with NextAuth (Credentials)
- 🗄️ PostgreSQL database using Prisma ORM
- 🔒 Protected dashboard routes
- ☁️ Production-ready Vercel deployment

---

## 📁 Project Structure

├── app/ # App Router pages (UI)
├── pages/api/auth/ # NextAuth API (Pages Router – production safe)
├── lib/ # Prisma & auth helpers
├── prisma/ # Prisma schema & migrations
├── middleware.ts # Route protection
├── tailwind.config.js
├── next.config.js

---

## 🔐 Authentication

- Uses **NextAuth Credentials Provider**
- Secure password hashing with **bcrypt**
- Session strategy: **JWT**
- Protected routes via middleware

---

## 🗄️ Database

- **PostgreSQL** (Vercel Postgres)
- **Prisma ORM**
- User model with email & hashed password

---

## 🛠️ Development

Install dependencies:
```bash
npm install

Run locally:
npm run dev

🚀 Deployment
Deployed on Vercel with environment variables:

DATABASE_URL
NEXTAUTH_SECRET
NEXTAUTH_URL

📌 Notes
node_modules and .env are intentionally excluded
App Router + Pages Router are used together (recommended for NextAuth)
SQLite is avoided in production (PostgreSQL only)

👤 Author
Habib Rahman
Built as a production-ready Next.js full-stack project.

📄 License
MIT


---

## ✅ Why this README is good

- Short & clear
- Recruiter-friendly
- Explains **why** Pages Router is used for auth
- Shows production awareness
- No unnecessary noise

If you want, I can also:
- 🔹 Make a **GitHub profile–optimized README**
- 🔹 Add **screenshots section**
- 🔹 Add **API documentation**
- 🔹 Write a **portfolio-ready description**

Just tell me 👍

