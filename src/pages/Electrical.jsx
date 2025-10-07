import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as electricTopic } from "../assets/electric";

const Electrical = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff]">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={electricTopic}
      />
    </div>
  );
};

export default Electrical;
