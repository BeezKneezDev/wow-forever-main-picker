import { classes, professions } from "../data/classData";

function ScoreBar({ score, maxScore, color }) {
  const pct = maxScore > 0 ? Math.min((score / maxScore) * 100, 100) : 0;
  return (
    <div className="score-bar-track">
      <div
        className="score-bar-fill"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function ScorePanel({
  classScores,
  profScores,
  exclusions = new Set(),
}) {
  const maxClassScore = Math.max(
    ...Object.entries(classScores)
      .filter(([k]) => !exclusions.has(k))
      .map(([, v]) => v),
    1
  );
  const maxProfScore = Math.max(...Object.values(profScores), 1);

  const sortedClasses = Object.entries(classScores).sort(
    ([, a], [, b]) => b - a
  );

  const sortedProfs = Object.entries(profScores).sort(
    ([, a], [, b]) => b - a
  );

  return (
    <div className="score-panel">
      <div className="score-section">
        <h3>Classes</h3>
        {sortedClasses.map(([key, score]) => {
          const cls = classes[key];
          const excluded = exclusions.has(key);

          return (
            <div
              key={key}
              className={`score-row ${excluded ? "locked" : ""} ${
                !excluded && score === maxClassScore && score > 0
                  ? "leading"
                  : ""
              }`}
            >
              <span className="score-icon">{cls.icon}</span>
              <span className="score-name">{cls.name}</span>
              <ScoreBar
                score={excluded ? 0 : score}
                maxScore={maxClassScore}
                color={cls.color}
              />
              <span className="score-value">{excluded ? "-" : score}</span>
              {excluded && <span className="lock-badge" title="Excluded">X</span>}
            </div>
          );
        })}
      </div>

      <div className="score-section">
        <h3>Professions</h3>
        {sortedProfs.map(([key, score]) => {
          const prof = professions[key];
          return (
            <div
              key={key}
              className={`score-row ${
                score === maxProfScore && score > 0 ? "leading" : ""
              }`}
            >
              <span className="score-icon">{prof.icon}</span>
              <span className="score-name">{prof.name}</span>
              <ScoreBar score={score} maxScore={maxProfScore} color="#d4a017" />
              <span className="score-value">{score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
