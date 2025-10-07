import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as tocTopic } from "../assets/toc";

const Toc = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={tocTopic}
      />
    </div>
  );
};

export default Toc;
