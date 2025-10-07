import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as projectTopic } from "../assets/project";

const Project = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={projectTopic}
      />
    </div>
  );
};

export default Project;
