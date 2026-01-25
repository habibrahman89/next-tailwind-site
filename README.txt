First, make sure Node.js is installed.
Download from: https://nodejs.org
Install the LTS version

Verify installation:

node -v
npm -v

npm install
npm run dev

Local: http://localhost:3000

Incase of any error or npm audit fix --force

Run the command once:
npm audit fix --force



Second Database

Install Prisma
npm install prisma@5 @prisma/client@5

npx prisma init

Run migrations
npx prisma migrate dev --name init

Install NextAuth
npm install next-auth bcrypt


PUT YOUR PROJECT ON GITHUB (STEP-BY-STEP)
STEP 1: Create a GitHub repository (VERY IMPORTANT)

Go to 👉 https://github.com
Log in
Click New Repository
Repository name:
next-tailwind-site

You will see a page with a URL like:
https://github.com/YOUR_USERNAME/next-tailwind-site

Initialize Git
git init

Expected result:
Initialized empty Git repository

Add all files
git add .
git commit -m "Initial project setup"
git branch -M main

With YOUR real repo URL,
https://github.com/db02-design01/next-tailwind-site.git

Run:
git remote add origin https://github.com/YOUR_USERNAME/next-tailwind-site.git


Push code to GitHub
git push -u origin main

👉 Go back to GitHub
👉 Refresh the page
👉 Your code should appear

🎉 GitHub part is DONE


Install Git (ONCE)
Go to 👉 https://git-scm.com/download/win
Download & install Git
During install:
✔️ Use default options
✔️ Choose “Git from the command line”

git --version


VERCEL DEPLOYMENT
Push to GitHub

git init
git add .
git commit -m "Initial Next.js app with Auth & Prisma"
git commit -m "NextAuth + Prisma + Dashboard" (Old)
git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/next-tailwind-site.git
git push -u origin main

Set your Git identity (GLOBAL – recommended)
git config --global --list

git remote -v



Deploy
Go to https://vercel.com
Import GitHub repo
Add Environment Variables:

DATABASE_URL=file:./dev.db
NEXTAUTH_SECRET=any-random-string
NEXTAUTH_URL=https://your-project.vercel.app


git log --oneline


Add Environment Variables

Add exactly these 3, one by one:

DATABASE_URL
file:./dev.db

NEXTAUTH_SECRET
any-random-string-123

NEXTAUTH_URL
http://localhost:3000


(temporary – we’ll fix after deploy)


git add .
git commit -m "Fix NextAuth authOptions location and runtime"
git push

git add .
git commit -m "Disable Prisma auth for successful Vercel build"
git push


STEP 4 — CLEAR BUILD ARTIFACTS (IMPORTANT)
Run this locally:

rm -rf .next

(On Windows PowerShell, use:)
Remove-Item -Recurse -Force .next

git add .
git commit -m "Remove App Router auth route and clean build graph"
git push


Vercel → Settings → Environment Variables
DATABASE_URL = postgresql://...
NEXTAUTH_SECRET = super-secret-string
NEXTAUTH_URL = https://next-tailwind-site-kohl.vercel.app


git add .
git commit -m "Add NextAuth with Postgres (production safe)"
git push

git add .
git commit -m "Configure Prisma for Vercel Postgres (server-side migrations)"
git push


npx prisma migrate dev --name <change>
git push

git add .
git commit -m "Fix NextAuth credentials login and session handling"
git push origin main


http://localhost:3000/api/auth/callback/google
https://next-tailwind-site-kohl.vercel.app/api/auth/callback/google

node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
