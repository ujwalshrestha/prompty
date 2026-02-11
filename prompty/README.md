# Prompt Engineer - Full Stack App

A professional web app that transforms basic prompts into expertly engineered ones using Claude AI.

## 🚀 Quick Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Get Your Anthropic API Key
1. Go to https://console.anthropic.com/settings/keys
2. Click "Create Key"
3. Copy your API key (starts with `sk-ant-...`)

### Step 2: Deploy to Vercel
1. Go to https://vercel.com and sign up (free)
2. Click "Add New..." → "Project"
3. Import this project:
   - Option A: Upload the files directly
   - Option B: Push to GitHub first, then import from GitHub

### Step 3: Add Environment Variable
In Vercel project settings:
1. Go to "Settings" → "Environment Variables"
2. Add variable:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Your API key from Step 1
3. Click "Save"

### Step 4: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes
3. Your app is live! 🎉

---

## 📁 Project Structure

```
prompt-engineer-fullstack/
├── api/
│   └── generate.js          # Backend API endpoint
├── public/
│   └── index.html           # Frontend React app
├── package.json             # Dependencies
├── vercel.json              # Vercel configuration
├── .env.example             # Environment variables template
└── README.md                # This file
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- Anthropic API key

### Setup
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Clone/download this project

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
   
5. Edit `.env` and add your API key:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

6. Run development server:
   ```bash
   vercel dev
   ```

7. Open http://localhost:3000

---

## 🌐 Alternative Deployment Options

### Option 1: Netlify
1. Sign up at https://netlify.com
2. Drag and drop the project folder
3. Add environment variable in Site Settings → Environment Variables
4. Add build command: `npm install`

### Option 2: Railway
1. Sign up at https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Add environment variable `ANTHROPIC_API_KEY`
4. Deploy!

### Option 3: Your Own Server
1. Install Node.js on your server
2. Upload files
3. Set environment variable: `export ANTHROPIC_API_KEY=your-key`
4. Run: `npm install && npm start`

---

## 🎨 Features

✨ **4 Prompt Engineering Techniques**
- Chain-of-Thought Reasoning
- Role-Based Prompting
- Few-Shot Examples
- Structured Output Formatting

🔒 **Secure**
- API key stored as environment variable
- Backend handles all API calls
- No sensitive data exposed to frontend

🎯 **User-Friendly**
- Clean, modern interface
- One-click copy to clipboard
- Keyboard shortcuts (Cmd/Ctrl + Enter)
- Responsive design

---

## 📝 How to Use

1. Enter your basic prompt (e.g., "Write a blog post about AI")
2. Click "Generate Engineered Prompts" or press Cmd/Ctrl + Enter
3. Review 4 professionally engineered versions
4. Copy the one you like best!

---

## 🔧 API Endpoint

### POST `/api/generate`

**Request:**
```json
{
  "prompt": "Your basic prompt here"
}
```

**Response:**
```json
{
  "suggestions": [
    {
      "label": "Chain-of-Thought",
      "prompt": "Engineered prompt text...",
      "technique": "Uses step-by-step reasoning"
    }
  ]
}
```

---

## 💡 Tips

- **Be specific**: More detailed prompts get better engineered versions
- **Try variations**: Different inputs produce different techniques
- **Experiment**: Use generated prompts as starting points for further refinement

---

## 🐛 Troubleshooting

**Error: "Failed to generate suggestions"**
- Check that your API key is correctly set in environment variables
- Verify your API key is active at https://console.anthropic.com
- Check Vercel logs for detailed error messages

**Deployment fails**
- Ensure Node.js version is 18 or higher
- Check that all files are uploaded correctly
- Verify vercel.json configuration

**Local development not working**
- Run `npm install` first
- Check that `.env` file exists and has your API key
- Try `vercel dev --debug` for detailed logs

---

## 📄 License

MIT License - feel free to use for personal or commercial projects!

---

## 🙏 Credits

- Built with [Claude AI](https://www.anthropic.com/claude)
- UI components inspired by modern design principles
- Hosted on [Vercel](https://vercel.com)

---

## 📞 Support

Having issues? Check:
1. Vercel deployment logs
2. Browser console for errors
3. Environment variables are set correctly

---

**Ready to deploy? Follow Step 1 above!** 🚀
