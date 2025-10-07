import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as networkTopic } from "../assets/network";

const Network = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={networkTopic}
      />
    </div>
  );
};

export default Network;
