# 🚀 CodePulse AI


CodePulse AI is a **web-based intelligent code review system** that
accepts a **GitHub repository URL** and generates a **structured
AI-powered review report**.

The platform combines: - 🧠 **LLM-based repository analysis (Gemini)** -
🛡️ **Bug, security, performance, and architecture perspectives** - 🎮
**Cyberpunk hacker-style dashboard UI** - 📊 **Health score, verdict,
and threat logs**

------------------------------------------------------------------------

# ✨ Features

- ✅ GitHub repository URL input
- ✅ FastAPI backend review API
- ✅ Google Gemini powered code analysis
- ✅ Multi-role reviewer simulation
- ✅ Structured issue cards
- ✅ Health score + verdict
- ✅ Graceful API cooldown fallback
- ✅ Hacker green cyberpunk HUD UI

------------------------------------------------------------------------

#  Tech Stack

## Frontend

- React
- Vite
- Custom CSS

## Backend

- FastAPI
- Python
- Gemini API
- dotenv
- requests / repo parsing utilities

------------------------------------------------------------------------

#  System Workflow

``` text
GitHub Repo URL
   ↓
React Frontend
   ↓
FastAPI POST /review
   ↓
Repository Parser
   ↓
Gemini LLM Reviewer
   ↓
Structured JSON Report
   ↓
Cyberpunk Threat Log UI
```

------------------------------------------------------------------------

#  Project Structure

``` text
codepulse-ai-structure/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │   └── review.py
│   │   └── services/
│   │       ├── prompts.py
│   │       └── reviewer_agents.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
```

------------------------------------------------------------------------

#  Setup Instructions

## 1) Backend

``` bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Create `.env`:

``` env
GEMINI_API_KEY=your_api_key_here
```

------------------------------------------------------------------------

## 2) Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

# 🧠 API Endpoint

## POST `/review/`

### Query Param

``` text
repo_url=https://github.com/user/repo
```

### Response

``` json
{
  "health_score": 80,
  "total_issues": 4,
  "verdict": "Good",
  "issues": []
}
```

------------------------------------------------------------------------

# 🎮 UI Preview

The frontend uses a **Matrix-inspired cyberpunk HUD design** with: -
neon green grid background - scan engine terminal - threat log issue
cards - agent panels - futuristic score HUD

------------------------------------------------------------------------

# ⚠️ Current Limitation

Gemini free-tier API may temporarily hit cooldown after repeated scans.

Fallback message: \> Gemini API rate limit reached. Please retry after
cooldown.

------------------------------------------------------------------------

# 🔮 Future Scope

- 📄 PDF export report
- 🤖 multi-LLM fallback (GPT / Claude)
- ⚡ single-call optimization
- 🔌 GitHub PR bot integration

------------------------------------------------------------------------

# 🏆 Project Vision

CodePulse AI aims to evolve into a **real-time AI code intelligence
platform** for repository scanning, DevSecOps quality checks, and
futuristic developer experience.
