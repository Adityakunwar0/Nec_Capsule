import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as softwareTopic } from "../assets/software";

const Software = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={softwareTopic}
      />
    </div>
  );
};

export default Software;
