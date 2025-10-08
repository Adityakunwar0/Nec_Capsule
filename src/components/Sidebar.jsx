import React, { useState, useEffect } from "react";
import MCQItem from "./McqItem";
import { Menu, X } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, topic }) => {
  const [selected, setSelected] = useState(null);

  // Load last selected from localStorage on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem(`${topic.name}_selectedSubtopic`);
    if (savedIndex !== null && topic.subtopics[Number(savedIndex)]) {
      setSelected(Number(savedIndex));
    } else if (topic.subtopics.length > 0) {
      setSelected(0); // Default to first subtopic if available
    }
  }, [topic.name, topic.subtopics]);

  // Save to localStorage whenever selected changes
  useEffect(() => {
    if (selected !== null) {
      localStorage.setItem(`${topic.name}_selectedSubtopic`, selected);
    }
  }, [selected, topic.name]);

  // Initialize MCQ state only for mcq blocks
  const [mcqState, setMcqState] = useState(
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
      const temp = [...prev];
      temp[subIndex][blockIndex] = data;
      return temp;
    });
  };

  const goToNext = () => {
    if (selected < topic.subtopics.length - 1) {
      setSelected(selected + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrev = () => {
    if (selected > 0) {
      setSelected(selected - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 flex">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block w-80 bg-sky-500/10 border-r min-h-screen p-4 pb-0">
        <h2 className="text-xl font-bold mb-4">{topic.name}</h2>

        {topic.subtopics.map((sub, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`block w-full text-left p-2 rounded mb-1 transition ${
              selected === i
                ? "bg-indigo-600 text-white"
                : "hover:bg-sky-500/20 text-gray-800"
            }`}
          >
            {sub.subname?.slice(0, 50) || "Untitled"}...
          </button>
        ))}
      </div>

      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-20 left-0 right-0 z-50 bg-sky-500/100 border-b p-2 flex justify-between items-center shadow">
        <button
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
            if (!sidebarOpen && typeof window.closeNavbar === "function") {
              window.closeNavbar();
            }
          }}
          className="p-2 bg-indigo-600 text-white rounded "
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h2 className="ml-10 font-semibold">{topic.name}</h2>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed top-12 left-0 mt-22 h-screen bg-sky-500/100 border-r p-4 overflow-y-auto z-40">
          {topic.subtopics.map((sub, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setSidebarOpen(false);
              }}
              className={`block w-full text-left p-2 rounded mb-1 transition ${
                selected === i
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-sky-500/20 text-gray-800"
              }`}
            >
              {sub.subname?.slice(0, 50) || "Untitled"}...
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 p-6 relative">
        {selected !== null && topic.subtopics[selected] ? (
          <>
            <h1 className="text-xl font-bold mb-2 mt-12 md:text-2xl  ">{topic.name}</h1>
            <h2 className="flex justify-between pl-3 text-base font-semibold mb-4 text-black md:text-xl">
              {topic.subtopics[selected]?.subname || ""}
            </h2>

            {/* Render Blocks */}
            {topic.subtopics[selected].blocks.map((block, idx) => {
              if (block.type === "bold") {
                return (
                  <p
                    key={idx}
                    className="font-semibold text-gray-800 text-xl underline mt-4 mb-3 md:font-bold "
                  >
                    {block.text}
                  </p>
                );
              } else if (block.type === "text") {
                return (
                  <p
                    key={idx}
                    className={`mb-2  text-gray-800 ${
                      block.center ? "pl-10 md:pl-12" : ""
                    }`}
                  >
                    {block.text}
                  </p>
                );
              } else if (block.type === "semibold") {
                return (
                  <p
                    key={idx}
                    className="mb-2 mt-3 font-semibold text-lg text-gray-800"
                  >
                    {block.text}
                  </p>
                );
              } else if (block.type === "important") {
                return (
                  <div
                    key={idx}
                    className="flex items-nowrap mb-3 text-gray-800"
                  >
                    <span className="font-semibold mr-2 whitespace-nowrap">
                      {block.text}
                    </span>
                    <span className=" ">
                      {Array.isArray(block.desc)
                        ? block.desc.join(" ")
                        : block.desc}
                    </span>
                  </div>
                );
              } else if (block.type === "image") {
                return (
                  <img
                    key={idx}
                    src={block.src}
                    alt="Content"
                    className=" mb-5 my-4 w-full max-w-md rounded shadow"
                  />
                );
              } else if (block.type === "mcq") {
                return (
                  <div key={idx} className="my-6">
                    <MCQItem
                      mcq={block}
                      mcqData={mcqState[selected][idx]}
                      setMcqData={(data) => updateMCQData(selected, idx, data)}
                    />
                  </div>
                );
              }
              return null;
            })}

            {/* Prev + Next Buttons */}
            <div className="mt-10 flex justify-between items-center">
              {selected > 0 ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={goToPrev}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                  >
                    Previous
                  </button>
                  <span className="font-semibold text-gray-700">
                    {topic.subtopics[selected - 1]?.subname?.slice(0, 30)}...
                  </span>
                </div>
              ) : (
                <div></div>
              )}

              {selected < topic.subtopics.length - 1 && (
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-700">
                    {topic.subtopics[selected + 1]?.subname?.slice(0, 30)}...
                  </span>
                  <button
                    onClick={goToNext}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center text-3xl">
            Select a subtopic from the sidebar to view content and MCQs.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
