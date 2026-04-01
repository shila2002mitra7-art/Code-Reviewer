# chunk_service.py
from pathlib import Path

SUPPORTED = [".py", ".cpp", ".js", ".java", ".ts"]


def read_codebase(repo_path):
    code_files = []
    for file in Path(repo_path).rglob("*"):
        if file.suffix in SUPPORTED:
            code_files.append({
                "path": str(file),
                "content": file.read_text(errors="ignore")
            })
    return code_files