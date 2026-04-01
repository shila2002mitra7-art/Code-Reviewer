import os
from google import genai
from dotenv import load_dotenv
from app.services.prompts import (
    bug_prompt,
    security_prompt,
    performance_prompt,
    architecture_prompt,
)

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def gemini_review(prompt, files):
    try:
        code_sample = files[0]["content"][:3000] if files else "No code found"

        full_prompt = f"""
        {prompt}

        Review this code carefully:
        {code_sample}

        Return concise structured review:
        severity, type, message, fix
        """

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=full_prompt,
        )

        return {
            "issues": [
                {
                    "severity": "High",
                    "type": "AI Review",
                    "message": response.text[:400],
                    "fix": "Suggested by Gemini",
                }
            ]
        }

    except Exception as e:
        error_text = str(e)

        if "429" in error_text or "RESOURCE_EXHAUSTED" in error_text:
            message = "Gemini API rate limit reached. Please retry after 40 seconds."
            fix = "Retry after cooldown or use another LLM provider."
        else:
            message = error_text
            fix = "Check Gemini SDK or API key"

        return {
            "issues": [
                {
                    "severity": "Medium",
                    "type": "Gemini Error",
                    "message": message,
                    "fix": fix,
                }
        ]
    }


def run_all_reviewers(files):
    return {
        "bug": gemini_review(bug_prompt, files),
        "security": gemini_review(security_prompt, files),
        "performance": gemini_review(performance_prompt, files),
        "architecture": gemini_review(architecture_prompt, files),
    }