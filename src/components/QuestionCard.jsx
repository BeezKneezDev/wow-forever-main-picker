export default function QuestionCard({ question, selectedAnswer, onAnswer }) {
  const isMulti = question.type === "multi" || question.type === "exclude";

  function handleToggle(idx) {
    if (isMulti) {
      // Toggle in a Set-like array
      const current = Array.isArray(selectedAnswer) ? [...selectedAnswer] : [];
      if (current.includes(idx)) {
        onAnswer(current.filter((i) => i !== idx));
      } else {
        onAnswer([...current, idx]);
      }
    } else {
      onAnswer(idx);
    }
  }

  const selected = isMulti
    ? Array.isArray(selectedAnswer) ? selectedAnswer : []
    : selectedAnswer;

  return (
    <div className="question-card">
      <div className="question-category">{question.category}</div>
      <h2 className="question-text">{question.text}</h2>
      {isMulti && (
        <p className="question-hint">Select all that apply (or skip with none selected)</p>
      )}
      <div className={`answers ${isMulti ? "answers-multi" : ""}`}>
        {question.answers.map((answer, idx) => {
          const isSelected = isMulti
            ? selected.includes(idx)
            : selected === idx;

          return (
            <button
              key={idx}
              className={`answer-btn ${isSelected ? "selected" : ""} ${isMulti ? "multi" : ""}`}
              onClick={() => handleToggle(idx)}
            >
              {isMulti && (
                <span className={`checkbox ${isSelected ? "checked" : ""}`}>
                  {isSelected ? "\u2713" : ""}
                </span>
              )}
              {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
