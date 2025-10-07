import React from "react";
import Sidebar from "../components/Sidebar";
import { topic as dsaTopic } from "../assets/dsa";

const Dsa = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] min-h-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        topic={dsaTopic}
      />
    </div>
  );
};

export default Dsa;
