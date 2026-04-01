// Dashboard.jsx
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [repoUrl, setRepoUrl] = useState("");
  const [report, setReport] = useState(null);

  const analyzeRepo = async () => {
    const res = await axios.post("http://localhost:8000/review", null, {
      params: { repo_url: repoUrl },
    });
    setReport(res.data);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">CodePulse AI</h1>
      <input
        className="border p-2 w-full"
        placeholder="Paste GitHub repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button
        onClick={analyzeRepo}
        className="bg-black text-white px-4 py-2 mt-4 rounded"
      >
        Analyze Repository
      </button>

      {report && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Health Score: {report.health_score}</h2>
          <p>Total Issues: {report.total_issues}</p>
          <p>Verdict: {report.verdict}</p>
        </div>
      )}
    </div>
  );
}