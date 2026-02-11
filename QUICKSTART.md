# 🚀 QUICK START - Deploy in 5 Minutes

## What You Need
1. Anthropic API Key (free to get)
2. Vercel account (free)

---

## Step-by-Step Deployment

### 1️⃣ Get Your API Key (2 minutes)

1. Go to: https://console.anthropic.com/settings/keys
2. Sign up or log in
3. Click "Create Key"
4. Copy the key (starts with `sk-ant-...`)
5. Save it somewhere safe!

---

### 2️⃣ Deploy to Vercel (3 minutes)

**Option A: Drag & Drop (Easiest)**

1. Go to: https://vercel.com
2. Sign up with GitHub/Email
3. Click "Add New..." → "Project"
4. Drag and drop the entire `prompt-engineer-fullstack` folder
5. Click "Deploy"

**Option B: GitHub (Better for updates)**

1. Create a GitHub account if you don't have one
2. Create a new repository
3. Upload all files to the repository
4. Go to https://vercel.com
5. Click "Import Project"
6. Select your GitHub repository
7. Click "Deploy"

---

### 3️⃣ Add Your API Key (1 minute)

After deployment:

1. In Vercel, go to your project
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add new variable:
   ```
   Name:  ANTHROPIC_API_KEY
   Value: sk-ant-your-actual-key-here
   ```
5. Click "Save"
6. Go to "Deployments" tab
7. Click the three dots on the latest deployment
8. Click "Redeploy"

---

### 4️⃣ Done! 🎉

Your app is now live! Click the deployment URL to test it.

Example URL: `https://your-app-name.vercel.app`

---

## Test Your App

1. Enter a prompt like: "Write a blog post about AI"
2. Click "Generate Engineered Prompts"
3. See 4 professional versions!

---

## Troubleshooting

**"Failed to generate suggestions"**
→ Check that you added the API key in Step 3

**API key doesn't work**
→ Make sure you copied the entire key including `sk-ant-`

**Deployment failed**
→ Make sure you uploaded ALL files including `api/` folder

---

## Need Help?

Check the full README.md for detailed instructions and troubleshooting.

---

**Happy prompting! ✨**
