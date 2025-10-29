# FinChatBot - Quick Setup Guide

A simplified financial AI chatbot with **no authentication required**. Just start the services and begin chatting!

---

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://python.org/))
- **MongoDB** 6+ ([Download](https://mongodb.com/try/download/community))
- **Google Gemini API Key** ([Get Free Key](https://makersuite.google.com/app/apikey))

---

## Quick Start (3 Steps)

### Step 1: Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```cmd
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
```

---

### Step 2: Configure Environment Variables

#### Backend Configuration
Edit `LLM Powered Financial Chatbot/Backend/.env`:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/finchatbot
PYTHON_SERVICE_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:5173
```

#### Python Backend Configuration
Edit `LLM Powered Financial Chatbot/Python-Backend/.env`:
```env
GOOGLE_API_KEY=your_gemini_api_key_here
NODE_WEBHOOK_URL=http://localhost:8000
PORT=5000
```

#### Frontend Configuration
Edit `LLM Powered Financial Chatbot/Frontend/.env`:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

---

### Step 3: Start All Services

Open **3 separate terminal windows** and run:

#### Terminal 1 - Node.js Backend
```bash
cd "LLM Powered Financial Chatbot/Backend"
npm install
npm run dev
```
Server should start on http://localhost:8000

#### Terminal 2 - Python AI Service
```bash
cd "LLM Powered Financial Chatbot/Python-Backend"
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app/main.py
```
Service should start on http://localhost:5000

#### Terminal 3 - Frontend
```bash
cd "LLM Powered Financial Chatbot/Frontend"
npm install
npm run dev
```
App should start on http://localhost:5173

---

## You're Ready!

Open your browser and go to: **http://localhost:5173**

You'll see the chat interface immediately - no login required!

---

## How to Use

1. **Start Chatting** - Type a message or question
2. **Upload Documents** - Click the paperclip icon to upload PDFs or Excel files
3. **Get AI Responses** - The AI will analyze your documents and answer questions
4. **Create New Chats** - Click "New Chat" to start a fresh conversation
5. **Manage Conversations** - View, select, or delete past conversations from the sidebar

---

## Key Changes from Original

### Removed Authentication System
- No user registration
- No login/logout
- No email verification
- No password management
- Direct access to chat interface

### Simplified Architecture
- Removed user management
- Removed JWT tokens
- Removed auth middleware
- Conversations are now global (not user-specific)

---

## Troubleshooting

### MongoDB Connection Error
**Problem:** Cannot connect to MongoDB  
**Solution:** Make sure MongoDB service is running

### Python Service Not Starting
**Problem:** Module not found errors  
**Solution:** 
```bash
pip install -r requirements.txt --force-reinstall
```

### Frontend Shows Blank Page
**Problem:** Cannot connect to backend  
**Solution:** 
1. Check backend is running on port 8000
2. Verify `.env` file has correct API URL
3. Check browser console for errors

### AI Not Responding
**Problem:** No response from AI  
**Solution:**
1. Verify Google Gemini API key is correct
2. Check Python backend terminal for errors
3. Make sure you have internet connection (for Gemini API)

---

## System Architecture

```
Browser (http://localhost:5173)
    ↓
Frontend (React + Vite)
    ↓
Node.js Backend (http://localhost:8000)
    ↓
MongoDB (Local Database)
    ↓
Python AI Service (http://localhost:5000)
    ↓
FAISS (Vector Store) + Google Gemini (AI)
```

---

## Features

- **No Authentication** - Direct access to chat
- **Document Upload** - PDF and Excel support
- **AI-Powered Responses** - Using Google Gemini
- **Multi-Modal Analysis** - Text and images
- **Conversation Management** - Create, view, delete chats
- **Local Storage** - All data stays on your machine
- **Free to Use** - No cloud costs

---

## Notes

- All conversations are stored locally in MongoDB
- Documents are processed and stored in FAISS vector database
- The system requires internet only for Google Gemini API calls
- No user data is sent to external services (except AI queries to Gemini)

---

## Next Steps

Once everything is running:

1. Try uploading a financial document (PDF or Excel)
2. Ask questions about the document
3. Explore different conversation modes
4. Create multiple conversations for different topics

---

**Happy Chatting!**
