# review.py
from fastapi import APIRouter
from app.services.github_service import clone_repo
from app.services.chunk_service import read_codebase
from app.services.reviewer_agents import run_all_reviewers
from app.services.consensus_engine import merge_reviews

router = APIRouter(prefix="/review")

@router.post("/")
def review_repo(repo_url: str):
    path = clone_repo(repo_url)
    files = read_codebase(path)
    reviews = run_all_reviewers(files)
    final_report = merge_reviews(reviews)
    return final_report