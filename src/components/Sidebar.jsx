import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MCQItem from "./McqItem"; // Assuming MCQItem component exists

// --- Helper Component for Rendering Content Blocks ---
// This replaces the long if/else chain in the original code, making it more scalable.
const BlockRenderer = ({
  block,
  subIndex,
  blockIndex,
  mcqState,
  updateMCQData,
}) => {
  switch (block.type) {
    case "bold":
      return (
        <h3 className="font-bold text-gray-800 text-xl underline mt-4 mb-3">
          {block.text}
        </h3>
      );

    case "semibold":
      return (
        <h4 className="mb-2 mt-3 font-semibold text-lg text-gray-800">
          {block.text}
        </h4>
      );

    case "text":
      return (
        <div
          className={`flex text-lg items-start gap-2 mb-2 text-gray-800 ${
            block.center ? "pl-10 md:pl-12" : ""
          }`}
        >
          {block.bullet && <span className="mt-1">{block.bullet}</span>}
          <span>{block.text}</span>
        </div>
      );

    case "important":
      return (
        <div className="flex text-lg items-start gap-2 mb-2 text-gray-800">
          {block.bullet && <span className="mt-1">{block.bullet}</span>}
          <div>
            <span className="font-semibold mr-2">{block.text}:</span>
            <span>
              {Array.isArray(block.desc) ? block.desc.join(" ") : block.desc}
            </span>
          </div>
        </div>
      );

    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt || "Content image"}
          className="my-4 w-full max-w-md rounded shadow-lg"
        />
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto">
          <table className="border border-gray-300 w-full text-sm md:text-base border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                {block.headers.map((header, hIndex) => (
                  <th
                    key={hIndex}
                    className="border border-gray-300 px-4 py-2 font-semibold text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIndex) => (
                <tr
                  key={rIndex}
                  className={rIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.map((cell, cIndex) => (
                    <td
                      key={cIndex}
                      className="border border-gray-300 px-4 py-2 text-center align-middle"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "mcq":
      return (
        <div className="my-6">
          <MCQItem
            mcq={block}
            mcqData={mcqState[subIndex]?.[blockIndex]}
            setMcqData={(data) => updateMCQData(subIndex, blockIndex, data)}
          />
        </div>
      );

    default:
      return null;
  }
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, topic }) => {
  const [selected, setSelected] = useState(null);

  // Load last selected subtopic from localStorage on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem(`${topic.name}_selectedSubtopic`);
    const initialIndex =
      savedIndex !== null && topic.subtopics[Number(savedIndex)]
        ? Number(savedIndex)
        : 0;
    setSelected(initialIndex);
  }, [topic.name, topic.subtopics]);

  // Save selected subtopic to localStorage whenever it changes
  useEffect(() => {
    if (selected !== null) {
      localStorage.setItem(`${topic.name}_selectedSubtopic`, selected);
    }
  }, [selected, topic.name]);

  // Initialize state for all MCQ blocks
  const [mcqState, setMcqState] = useState(() =>
    topic.subtopics.map((sub) =>
      sub.blocks.map((block) =>
        block.type === "mcq"
          ? { selectedOption: null, showAnswer: false }
          : null
      )
    )
  );

  const updateMCQData = (subIndex, blockIndex, data) => {
    setMcqState((prev) => {
      const temp = JSON.parse(JSON.stringify(prev)); // Deep copy to avoid mutation
      temp[subIndex][blockIndex] = data;
      return temp;
    });
  };

  const handleSubtopicSelect = (index) => {
    setSelected(index);
    setSidebarOpen(false); // Close mobile sidebar on selection
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNext = () => {
    if (selected < topic.subtopics.length - 1) {
      handleSubtopicSelect(selected + 1);
    }
  };

  const goToPrev = () => {
    if (selected > 0) {
      handleSubtopicSelect(selected - 1);
    }
  };

  const SubtopicButton = ({ sub, i }) => (
    <button
      onClick={() => handleSubtopicSelect(i)}
      className={`block w-full text-left p-2 rounded mb-1 transition truncate ${
        selected === i
          ? "bg-indigo-600 text-white"
          : "hover:bg-sky-500/20 text-gray-800"
      }`}
    >
      {sub.subname || "Untitled"}
    </button>
  );

  return (
    <div className="pt-20 flex">
      {/* --- Desktop Sidebar --- */}
      <nav className="hidden md:block w-80 bg-sky-500/10 border-r min-h-screen p-4">
        <h2 className="text-xl font-bold mb-4">{topic.name}</h2>
        {topic.subtopics.map((sub, i) => (
          <SubtopicButton key={i} sub={sub} i={i} />
        ))}
      </nav>

      {/* --- Mobile UI --- */}
      <div className="md:hidden">
        {/* Topbar */}
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b p-2 flex justify-between items-center shadow-md h-16">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-indigo-600 text-white rounded"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="font-semibold text-lg truncate mx-4">{topic.name}</h2>
        </div>

        {/* Backdrop for Mobile Sidebar */}
        <div
          className={`fixed inset-0  bg-opacity-50 z-40 transition-opacity ${
            sidebarOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        {/* Mobile Sidebar */}
        <nav
          className={`fixed  w-full top-0 left-0 h-full  bg-white border-r p-4 overflow-y-auto z-50 transition-transform duration-300 ease-in-out transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4 pt-2">
             <h2 className="text-xl font-bold">Subtopics</h2>
             <button onClick={() => setSidebarOpen(false)} className="p-2 text-gray-600">
                <X size={24} />
             </button>
          </div>
          {topic.subtopics.map((sub, i) => (
            <SubtopicButton key={i} sub={sub} i={i} />
          ))}
        </nav>
      </div>

      {/* --- Content Area --- */}
      <main
        className="flex-1 p-6 relative"
        aria-hidden={sidebarOpen && window.innerWidth < 768}
      >
        {selected !== null && topic.subtopics[selected] ? (
          <>
            <div className="mt-16 md:mt-0">
              <h1 className="text-lg font-bold mb-2 md:text-2xl">
                {topic.name}
              </h1>
              <h2 className="text-base font-semibold mb-6 text-gray-700 md:text-xl">
                {topic.subtopics[selected]?.subname || ""}
              </h2>
            </div>

            {/* Render Blocks */}
            {topic.subtopics[selected].blocks.map((block, idx) => (
              <BlockRenderer
                key={idx}
                block={block}
                subIndex={selected}
                blockIndex={idx}
                mcqState={mcqState}
                updateMCQData={updateMCQData}
              />
            ))}

            {/* Prev/Next Buttons */}
            <div className="mt-12 pt-6 border-t flex justify-between items-center gap-4">
              {selected > 0 ? (
                <button
                  onClick={goToPrev}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition flex-grow md:flex-grow-0 text-center"
                >
                  Previous
                </button>
              ) : (
                <div /> // Spacer
              )}
              {selected < topic.subtopics.length - 1 && (
                <button
                  onClick={goToNext}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition flex-grow md:flex-grow-0 text-center"
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center text-2xl mt-20">
            Select a subtopic to begin.
          </p>
        )}
      </main>
    </div>
  );
};

export default Sidebar;
