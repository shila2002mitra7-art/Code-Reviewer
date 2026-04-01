import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeRepo = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/review/", null, {
        params: { repo_url: repoUrl },
      });
      setReport(res.data);
    } catch (error) {
      alert("System busy. Retry in a few seconds.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cyber-bg">
      <div className="dashboard">
        <header className="top-bar">
          <div>
            <h1>CODEPULSE</h1>
            <p>CYBERPUNK MULTI-LLM COMMAND GRID</p>
          </div>
          <div>
            <p>STATUS: ONLINE</p>
            <p>MODE: THREAT ANALYSIS</p>
          </div>
        </header>

        <div className="grid-layout">
          <div className="left-panel">
            <div className="hud-card">
              <p>HEALTH</p>
              <h2>{report?.health_score ?? "--"}</h2>
            </div>
            <div className="hud-card">
              <p>ISSUES</p>
              <h2>{report?.total_issues ?? "--"}</h2>
            </div>
            <div className="hud-card">
              <p>VERDICT</p>
              <h2>{report?.verdict ?? "READY"}</h2>
            </div>
          </div>

          <div className="center-panel">
            <h2>SCAN ENGINE</h2>
            <input
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="PASTE GITHUB REPOSITORY URL"
            />
            <button onClick={analyzeRepo}>
              {loading ? "SCANNING..." : "▶ INITIATE SCAN"}
            </button>

            <div className="terminal">
              {loading
                ? "Running reviewer agents..."
                : "System idle. Awaiting repository target."}
            </div>
          </div>

          <div className="right-panel">
            <h2>AGENTS</h2>
            <div>BUG HUNTER</div>
            <div>SECURITY SENTINEL</div>
            <div>PERF ANALYZER</div>
            <div>ARCHITECT CORE</div>
          </div>
        </div>

        {report && (
          <div className="threat-log">
            <h2>⚔ THREAT LOG</h2>
            {report.issues.map((issue, index) => (
              <div key={index} className="issue-card">
                <h3>{issue.type}</h3>
                <p><b>Severity:</b> {issue.severity}</p>
                <p><b>Message:</b> {issue.message}</p>
                <p><b>Fix:</b> {issue.fix}</p>
                <p><b>Agent:</b> {issue.reviewer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}