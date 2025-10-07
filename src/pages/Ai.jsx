import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as aiTopic } from "../assets/ai";

const Ai = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={aiTopic}
      />
    </div>
  );
};

export default Ai;
