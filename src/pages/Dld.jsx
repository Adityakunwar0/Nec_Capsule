import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as dldTopic } from "../assets/dld";

const Ai = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={dldTopic}
      />
    </div>
  );
};

export default Ai;
