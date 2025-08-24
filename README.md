# Renewly-API

Renewly-API is the backend for **Renewly** — a subscription tracker & reminder service.  
This API handles user authentication, subscription CRUD, scheduled reminders (via QStash), transactional emails, and bot protection & Rate Limiting (Arcjet).

> Repo: https://github.com/DEVAANSH001/Renewly-API  
> Deployed : https://renewly-api.onrender.com

---


## Features

- User auth (signup / login)  
- Subscription CRUD (create, read, update, delete)  
- Scheduled renewal reminders (QStash / Upstash)  
- Transactional email sending (Resend or similar)  
- Rate limiting & bot protection via Arcjet  
- MongoDB (Mongoose) models & controllers  


---

## Tech stack

- Node.js 
- Express  
- MongoDB + Mongoose  
- Upstash QStash (scheduling / publish)  
- Arcjet (bot detection / rate limiting)  
- Nodemailer email provider
- Nodemon (dev)

---

## Requirements

- Node.js & npm
- MongoDB URI (Atlas or self-hosted)
- Upstash account (QStash) for production scheduling
- Arcjet account and API key (for bot protection)
- Resend API key (or whichever email provider you use)

---

## Environment variables

> **Important:** Do **not** commit `.env` to source control. Use `.env.local` for development and set environment variables securely on your hosting provider (Render / Vercel / Heroku).

Below are the environment variables used by the project. I included the variables you supplied and added short descriptions and examples.

```env
# Server / App
PORT=5500                        
SERVER_URL="http://localhost:5500"

# Database
DB_URL=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/renewly?retryWrites=true&w=majority

# Auth / Tokens
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d                  # Example: '7d' or '24h'

# Arcjet
ARCJET_API_KEY=arcjet_xxx
ARCJET_ENV=development             

# QStash / Upstash (scheduling)
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=upstash_xxx
QSTASH_CURRENT_SIGNING_KEY=signing-key-current
QSTASH_NEXT_SIGNING_KEY=signing-key-next

# Email (SMTP or provider)
EMAIL_PASSWORD=super-secret-smtp-password
