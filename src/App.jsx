import { useState, useMemo, useCallback } from "react";
import questions from "./data/questions";
import { classes, professions, raceClassMap } from "./data/classData";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import ScorePanel from "./components/ScorePanel";
import Results from "./components/Results";
import "./App.css";

const initialClassScores = Object.fromEntries(
  Object.keys(classes).map((k) => [k, 0])
);
const initialProfScores = Object.fromEntries(
  Object.keys(professions).map((k) => [k, 0])
);
const initialRaceScores = Object.fromEntries(
  Object.keys(raceClassMap).map((k) => [k, 0])
);

// Filter questions based on conditional logic (supports invert flag)
function getVisibleQuestions(answers) {
  return questions.filter((q) => {
    if (!q.condition) return true;
    const { questionId, hasAnswer, invert } = q.condition;
    const parentAnswer = answers[questionId];

    // For single-select questions, parentAnswer is a number index
    // For multi-select questions, parentAnswer is an array of indices
    const parentQ = questions.find((pq) => pq.id === questionId);
    if (!parentQ) return false;

    let matched;
    if (Array.isArray(parentAnswer)) {
      matched = parentAnswer.some(
        (idx) => parentQ.answers[idx]?.text === hasAnswer
      );
    } else if (typeof parentAnswer === "number") {
      matched = parentQ.answers[parentAnswer]?.text === hasAnswer;
    } else {
      // No answer yet — condition not met
      matched = false;
    }

    return invert ? !matched : matched;
  });
}

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const visibleQuestions = useMemo(
    () => getVisibleQuestions(answers),
    [answers]
  );

  const { classScores, profScores, raceScores, specScores, faction, flags, exclusions, raceExclusions } = useMemo(() => {
    const cs = { ...initialClassScores };
    const ps = { ...initialProfScores };
    const rs = { ...initialRaceScores };
    const ss = {};
    let fac = null;
    const fl = {};
    const excl = new Set();
    const rExcl = new Set();

    Object.entries(answers).forEach(([qId, answer]) => {
      const q = questions.find((q) => q.id === qId);
      if (!q) return;

      // Determine which answer indices to process
      const indices =
        q.type === "multi" || q.type === "exclude"
          ? Array.isArray(answer)
            ? answer
            : []
          : [answer];

      indices.forEach((aIdx) => {
        const a = q.answers[aIdx];
        if (!a) return;

        // Class exclusions
        if (q.type === "exclude" && a.excludeClass) {
          excl.add(a.excludeClass);
          return;
        }

        // Race exclusions
        if (q.type === "exclude" && a.excludeRace) {
          rExcl.add(a.excludeRace);
          return;
        }

        // Class scores
        if (a.classScores) {
          Object.entries(a.classScores).forEach(([cls, pts]) => {
            cs[cls] = (cs[cls] || 0) + pts;
          });
        }

        // Profession scores
        if (a.profScores) {
          Object.entries(a.profScores).forEach(([prof, pts]) => {
            ps[prof] = (ps[prof] || 0) + pts;
          });
        }

        // Race scores
        if (a.raceScores) {
          Object.entries(a.raceScores).forEach(([race, pts]) => {
            rs[race] = (rs[race] || 0) + pts;
          });
        }

        // Spec scores
        if (a.specScores) {
          Object.entries(a.specScores).forEach(([spec, pts]) => {
            ss[spec] = (ss[spec] || 0) + pts;
          });
        }

        // Flags
        if (a.flags) {
          if (a.flags.faction) fac = a.flags.faction;
          Object.entries(a.flags).forEach(([k, v]) => {
            fl[k] = v;
          });
        }
      });
    });

    return { classScores: cs, profScores: ps, raceScores: rs, specScores: ss, faction: fac, flags: fl, exclusions: excl, raceExclusions: rExcl };
  }, [answers]);

  // Clamp currentQ to visible range
  const clampedQ = Math.min(currentQ, visibleQuestions.length - 1);
  const question = visibleQuestions[clampedQ];

  const handleAnswer = useCallback(
    (value) => {
      if (!question) return;
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
    },
    [question]
  );

  function handleNext() {
    if (clampedQ < visibleQuestions.length - 1) {
      setCurrentQ(clampedQ + 1);
    } else {
      setFinished(true);
    }
  }

  function handleBack() {
    if (clampedQ > 0) {
      setCurrentQ(clampedQ - 1);
    }
  }

  function handleReset() {
    setCurrentQ(0);
    setAnswers({});
    setFinished(false);
  }

  // For multi/exclude, allow proceeding even with nothing selected
  const isMulti = question?.type === "multi" || question?.type === "exclude";
  const hasAnswer =
    isMulti || answers[question?.id] !== undefined;

  return (
    <div className="app">
      <header className="app-header">
        <h1>WoW Forever Main Picker</h1>
        <p className="subtitle">Answer the questions. Find your main.</p>
      </header>

      {!finished ? (
        <div className="layout">
          <div className="main-content">
            <ProgressBar
              current={clampedQ + 1}
              total={visibleQuestions.length}
            />
            {question && (
              <QuestionCard
                key={question.id}
                question={question}
                selectedAnswer={answers[question.id]}
                onAnswer={handleAnswer}
              />
            )}
            <div className="nav-buttons">
              <button
                className="nav-btn"
                onClick={handleBack}
                disabled={clampedQ === 0}
              >
                Back
              </button>
              <button
                className="nav-btn primary"
                onClick={handleNext}
                disabled={!hasAnswer}
              >
                {clampedQ === visibleQuestions.length - 1
                  ? "See Results"
                  : "Next"}
              </button>
            </div>
          </div>
          <aside className="sidebar">
            <ScorePanel
              classScores={classScores}
              profScores={profScores}
              raceScores={raceScores}
              exclusions={exclusions}
              raceExclusions={raceExclusions}
            />
          </aside>
        </div>
      ) : (
        <div className="results-layout">
          <Results
            classScores={classScores}
            profScores={profScores}
            specScores={specScores}
            faction={faction}
            flags={flags}
            exclusions={exclusions}
            raceExclusions={raceExclusions}
          />
          <button className="nav-btn reset-btn" onClick={handleReset}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
