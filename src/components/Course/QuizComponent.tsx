import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, Trophy, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '@/data/courses';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

type AnswerState = {
  selected: number | null;
  submitted: boolean;
};

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(
    questions.map(() => ({ selected: null, submitted: false }))
  );
  const [showResults, setShowResults] = useState(false);

  const current = answers[currentIdx];
  const question = questions[currentIdx];

  const handleSelect = (optionIdx: number) => {
    if (current.submitted) return;
    setAnswers((prev) =>
      prev.map((a, i) => (i === currentIdx ? { ...a, selected: optionIdx } : a))
    );
  };

  const handleSubmit = () => {
    if (current.selected === null) return;
    setAnswers((prev) =>
      prev.map((a, i) => (i === currentIdx ? { ...a, submitted: true } : a))
    );
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setAnswers(questions.map(() => ({ selected: null, submitted: false })));
    setShowResults(false);
  };

  const score = answers.filter(
    (a, i) => a.submitted && a.selected === questions[i].correctIndex
  ).length;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-2xl p-8 text-center border-2 ${passed ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : 'border-orange-200 bg-orange-50 dark:bg-orange-900/10'}`}>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-green-100 dark:bg-green-800/30' : 'bg-orange-100 dark:bg-orange-800/30'}`}>
            <Trophy size={32} className={passed ? 'text-green-600' : 'text-orange-500'} />
          </div>
          <h3 className="text-2xl font-bold text-[#1c2939] dark:text-[#faf5ef] mb-2">
            {passed ? 'Great work!' : 'Keep practicing!'}
          </h3>
          <p className="text-[#1c2939]/60 dark:text-[#faf5ef]/50 mb-6">
            You scored <span className="font-bold text-[#1c2939] dark:text-[#faf5ef]">{score}/{questions.length}</span> ({percentage}%)
          </p>

          {/* Per-question summary */}
          <div className="space-y-2 mb-8 text-left">
            {questions.map((q, i) => {
              const ans = answers[i];
              const correct = ans.selected === q.correctIndex;
              return (
                <div key={q.id} className={`flex items-start gap-3 p-3 rounded-lg ${correct ? 'bg-green-100/60 dark:bg-green-800/20' : 'bg-red-100/60 dark:bg-red-800/20'}`}>
                  {correct ? (
                    <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-[#1c2939] dark:text-[#faf5ef] font-medium">{q.question}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#d9cfcd] text-[#1c2939] dark:text-[#faf5ef] dark:border-[#2d3f5a] hover:bg-[#faf5ef] dark:hover:bg-[#1c2939] transition-colors text-sm font-medium"
            >
              <RotateCcw size={15} />
              Retake quiz
            </button>
            {passed && (
              <button
                onClick={onComplete}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#db8a6c] text-white hover:bg-[#c97b5d] transition-colors text-sm font-semibold"
              >
                Continue
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = current.submitted && current.selected === question.correctIndex;
  const isWrong = current.submitted && current.selected !== question.correctIndex;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-[#1c2939]/50 dark:text-[#faf5ef]/40">
          Question {currentIdx + 1} of {questions.length}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i < currentIdx
                  ? 'bg-[#db8a6c] w-6'
                  : i === currentIdx
                  ? 'bg-[#db8a6c]/60 w-6'
                  : 'bg-[#d9cfcd] dark:bg-[#2d3f5a] w-4'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-[#1c2939] dark:text-[#faf5ef] leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          const isSelected = current.selected === idx;
          const isCorrectOption = idx === question.correctIndex;

          let optionStyle = 'border-[#d9cfcd] dark:border-[#2d3f5a] bg-white dark:bg-[#162130] hover:border-[#db8a6c] hover:bg-[#db8a6c]/5 cursor-pointer';

          if (current.submitted) {
            if (isCorrectOption) {
              optionStyle = 'border-green-400 bg-green-50 dark:bg-green-900/20 cursor-default';
            } else if (isSelected && !isCorrectOption) {
              optionStyle = 'border-red-400 bg-red-50 dark:bg-red-900/20 cursor-default';
            } else {
              optionStyle = 'border-[#d9cfcd] dark:border-[#2d3f5a] bg-white dark:bg-[#162130] opacity-60 cursor-default';
            }
          } else if (isSelected) {
            optionStyle = 'border-[#db8a6c] bg-[#db8a6c]/10 cursor-pointer';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${optionStyle}`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                  current.submitted && isCorrectOption
                    ? 'border-green-500 bg-green-500 text-white'
                    : current.submitted && isSelected && !isCorrectOption
                    ? 'border-red-500 bg-red-500 text-white'
                    : isSelected
                    ? 'border-[#db8a6c] bg-[#db8a6c] text-white'
                    : 'border-[#d9cfcd] dark:border-[#2d3f5a] text-[#1c2939]/40 dark:text-[#faf5ef]/30'
                }`}
              >
                {current.submitted && isCorrectOption ? (
                  <CheckCircle2 size={14} />
                ) : current.submitted && isSelected && !isCorrectOption ? (
                  <XCircle size={14} />
                ) : (
                  String.fromCharCode(65 + idx)
                )}
              </div>
              <span className={`text-sm font-medium ${current.submitted && isCorrectOption ? 'text-green-700 dark:text-green-400' : current.submitted && isSelected && !isCorrectOption ? 'text-red-600 dark:text-red-400' : 'text-[#1c2939] dark:text-[#faf5ef]'}`}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {current.submitted && (
        <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800' : 'bg-orange-50 dark:bg-orange-900/15 border border-orange-200 dark:border-orange-800'}`}>
          <div className="flex items-start gap-2">
            {isCorrect ? (
              <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`text-sm font-semibold mb-1 ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                {isCorrect ? 'Correct!' : 'Not quite.'}
              </p>
              <p className="text-sm text-[#1c2939]/80 dark:text-[#faf5ef]/70">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end">
        {!current.submitted ? (
          <button
            onClick={handleSubmit}
            disabled={current.selected === null}
            className="px-6 py-2.5 rounded-lg bg-[#db8a6c] text-white font-semibold text-sm hover:bg-[#c97b5d] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#db8a6c] text-white font-semibold text-sm hover:bg-[#c97b5d] transition-colors"
          >
            {currentIdx < questions.length - 1 ? 'Next question' : 'See results'}
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
