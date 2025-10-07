import React from "react";

const McqItem = ({ mcq, mcqData, setMcqData }) => {
  const { selectedOption, showAnswer } = mcqData;

  const handleOptionClick = (option) => {
    if (selectedOption) return; // Only allow one click
    setMcqData({
      ...mcqData,
      selectedOption: option,
      showAnswer: option === mcq.ans ? true : false,
    });
  };

  const toggleShowAnswer = () => {
    setMcqData({ ...mcqData, showAnswer: !showAnswer });
  };

  return (
    <div className="border rounded p-4 bg-sky-500/10 ">
      <p className="font-medium text-gray-800 text-lg mb-2">{mcq.q}</p>

      {mcq.image && (
        <img
          src={mcq.image}
          alt="MCQ"
          className="w-full max-w-md mb-4 rounded shadow"
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mcq.options.map((opt, i) => {
          let bgClass = "hover:bg-sky-500/20";

          if (showAnswer) {
            if (opt === mcq.ans) bgClass = "bg-indigo-600 text-white";
            else if (selectedOption === opt && opt !== mcq.ans)
              bgClass = "bg-red-500 text-white";
          } else if (selectedOption === opt) {
            bgClass =
              opt === mcq.ans
                ? "bg-indigo-600 text-white"
                : "bg-red-500 text-white";
          }

          return (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className={`p-3 border rounded text-left transition ${bgClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <button
        onClick={toggleShowAnswer}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div className="mt-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
          <p>
            <span className="font-semibold">Correct Answer:</span> {mcq.ans}
          </p>
          {mcq.explanation && (
            <p className="mt-1">
              <span className="font-semibold">Explanation:</span>{" "}
              {mcq.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default McqItem;
