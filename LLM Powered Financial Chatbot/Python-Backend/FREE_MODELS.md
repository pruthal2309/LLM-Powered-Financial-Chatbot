# 100% FREE AI Models on OpenRouter

All these models are completely free to use. Just change `LLM_MODEL` in `app/config/settings.py`

## ✅ Currently Using:
```python
# LLM_MODEL: str = "google/gemini-flash-1.5:free"
LLM_MODEL: str = "deepseek/deepseek-chat"
```

## 🆓 All Free Models Available:

### Google Models (FREE)
```python
"google/gemini-flash-1.5:free"           # ⭐ RECOMMENDED - Fast, reliable
"google/gemini-flash-1.5-8b:free"        # Smaller, faster version
```

### Meta Llama Models (FREE)
```python
"meta-llama/llama-3.2-3b-instruct:free"  # Fast, good quality
"meta-llama/llama-3.2-1b-instruct:free"  # Very fast, smaller
"meta-llama/llama-3.1-8b-instruct:free"  # Balanced performance
```

### Microsoft Models (FREE)
```python
"microsoft/phi-3-mini-128k-instruct:free"  # Good for long documents
"microsoft/phi-3-medium-128k-instruct:free" # Better quality
```

### Qwen Models (FREE)
```python
"qwen/qwen-2-7b-instruct:free"           # Good multilingual support
"qwen/qwen-2.5-7b-instruct:free"         # Latest version
```

### Other Free Models
```python
"mistralai/mistral-7b-instruct:free"     # Good general purpose
"nousresearch/hermes-3-llama-3.1-405b:free" # Very powerful (when available)
```

## 📊 Comparison:

| Model | Speed | Quality | Best For |
|-------|-------|---------|----------|
| google/gemini-flash-1.5:free | ⚡⚡⚡ | ⭐⭐⭐⭐ | General chat, documents |
| meta-llama/llama-3.2-3b-instruct:free | ⚡⚡⚡⚡ | ⭐⭐⭐ | Quick responses |
| microsoft/phi-3-mini-128k-instruct:free | ⚡⚡⚡ | ⭐⭐⭐ | Long documents |
| qwen/qwen-2-7b-instruct:free | ⚡⚡⚡ | ⭐⭐⭐ | Multilingual |

## 🔄 How to Change Model:

1. Open `app/config/settings.py`
2. Change this line:
   ```python
   LLM_MODEL: str = "your-chosen-model:free"
   ```
3. Save the file
4. Server will auto-reload (if using --reload flag)

## ⚠️ Important Notes:

- All models with `:free` are 100% FREE
- No credit card required
- Rate limits apply (usually 10-20 requests/minute)
- If one model is slow, try another
- Models without `:free` are paid (avoid them)

## 💡 Recommended Setup:

**For best results, use:**
```python
LLM_MODEL: str = "google/gemini-flash-1.5:free"
```

This is currently the best free model for your financial chatbot!

## 🆘 If Model Doesn't Work:

If you get "No endpoints found" error, try these in order:

1. `"google/gemini-flash-1.5:free"`
2. `"meta-llama/llama-3.2-3b-instruct:free"`
3. `"microsoft/phi-3-mini-128k-instruct:free"`
4. `"qwen/qwen-2-7b-instruct:free"`

## 📚 More Info:

- View all models: https://openrouter.ai/models?order=newest&supported_parameters=tools&max_price=0
- Filter by free: Look for "Free" badge
- Check status: https://status.openrouter.ai/
