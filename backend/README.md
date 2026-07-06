# Straits Digital Bank Backend

Flask backend starter for the Straits Digital Bank school project.

## Tech Stack

- Python
- Flask
- Flask-CORS
- `python-dotenv`
- Mock/local setup for now

## Getting Started

Create and activate a virtual environment:

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
python run.py
```

The API should run at:

```text
http://127.0.0.1:5000
```

## Test Endpoint

Open this in your browser:

```text
http://127.0.0.1:5000/
```

Expected response:

```json
{
  "message": "Straits Digital Bank API is running"
}
```

## Project Notes

- Do not commit real API keys.
- Use a `.env` file later for PayPal and other Open Banking API credentials.
- PayPal login should be connected through the backend later, not directly from the frontend template.
- The current backend is only a starter and does not connect to the frontend yet.
