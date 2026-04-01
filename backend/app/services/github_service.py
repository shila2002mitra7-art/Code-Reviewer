# github_service.py
import git
import uuid


def clone_repo(repo_url: str):
    path = f"temp/{uuid.uuid4()}"
    git.Repo.clone_from(repo_url, path)
    return path