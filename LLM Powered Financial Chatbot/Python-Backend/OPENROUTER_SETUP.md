# OpenRouter Migration Guide

## ✅ Migration Complete!

Your chatbot has been migrated from Google Gemini to OpenRouter.

## 🔑 Get Your OpenRouter API Key

1. Go to https://openrouter.ai/
2. Sign up or log in
3. Go to https://openrouter.ai/keys
4. Create a new API key
5. Copy the key

## 📝 Update Your .env File

Open `.env` and replace `your_openrouter_api_key_here` with your actual key:

```env
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
```

## 📦 Install New Dependencies

Run this command to install the OpenRouter package:

```bash
pip install -r requirements.txt
```

## 🎯 Available Models

The default model is set to `google/gemini-2.0-flash-exp:free` (FREE!)

### Other Free Models You Can Use:

- `google/gemini-2.0-flash-exp:free` - Fast, good for chat (DEFAULT)
- `google/gemini-flash-1.5:free` - Stable Gemini model
- `meta-llama/llama-3.2-3b-instruct:free` - Fast Llama model
- `microsoft/phi-3-mini-128k-instruct:free` - Good for documents
- `qwen/qwen-2-7b-instruct:free` - Chinese + English support

### Paid Models (Better Quality):

- `anthropic/claude-3.5-sonnet` - Best reasoning
- `openai/gpt-4o` - OpenAI's latest
- `google/gemini-pro-1.5` - Advanced Gemini

To change the model, edit `app/config/settings.py`:

```python
LLM_MODEL: str = "meta-llama/llama-3.2-3b-instruct:free"
```

## 🚀 Start Your Server

```bash
cd "LLM Powered Financial Chatbot/Python-Backend"
python -m uvicorn app.main:app --reload --port 5000
```

## 💰 Pricing

- Free models: $0 (with rate limits)
- Paid models: Pay per token (very affordable)
- Check pricing: https://openrouter.ai/models

## 🎉 Benefits of OpenRouter

✅ Access to 100+ models from one API
✅ Better rate limits than free Gemini
✅ Automatic fallback if one model is down
✅ Mix free and paid models
✅ No quota exhaustion issues

## 🔍 Monitor Usage

Check your usage at: https://openrouter.ai/activity

## ❓ Troubleshooting

If you get errors:
1. Make sure your API key is correct in `.env`
2. Restart the Python backend
3. Check if the model name is correct
4. Verify you have credits (for paid models)
