# consensus_engine.py
def merge_reviews(reviews):
    final_issues = []

    for reviewer_name, report in reviews.items():
        for issue in report["issues"]:
            issue["reviewer"] = reviewer_name
            final_issues.append(issue)

    health_score = max(0, 100 - len(final_issues) * 5)

    return {
        "health_score": health_score,
        "total_issues": len(final_issues),
        "issues": final_issues,
        "verdict": "Needs Improvement" if health_score < 80 else "Good"
    }