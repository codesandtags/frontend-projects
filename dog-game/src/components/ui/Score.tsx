interface ScoreProps {
  score: number;
}

import "./Score.css";

export default function Score({ score }: ScoreProps) {
  return (
    <div className="score-section">
      <h2>
        Score: <span className="score-value">{score}</span>
      </h2>
    </div>
  );
}
