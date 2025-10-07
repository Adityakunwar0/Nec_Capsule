import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CsePage from "./pages/CsePage";
import Feedback from "./pages/Feedback";
import ScrollToTop from "./components/ScrollTop";
import Electrical from "./pages/Electrical";
import Ai from "./pages/Ai"; 
import Coa from "./pages/Coa";
import Dld from "./pages/Dld";
import Programming from "./pages/Programming";
import Network from "./pages/Network";
import Toc from "./pages/Toc";
import Dsa from "./pages/Dsa";
import Software from "./pages/Software";
import Project from "./pages/Project";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <ScrollToTop />

      {/* Main routes */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cse" element={<CsePage />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Electrical Engineering */}
          <Route
            path="/cse/e&e"
            element={
              <Electrical
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />

          {/* Artificial Intelligence */}
          <Route
            path="/cse/ai&nn"
            element={
              <Ai
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/coa&e"
            element={
              <Coa
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/dld&m"
            element={
              <Dld
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/programming"
            element={
              <Programming
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/cns"
            element={
              <Network
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/toc&cg"
            element={
              <Toc
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/dsa&os&dbms"
            element={
              <Dsa
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/se&ooad"
            element={
              <Software
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          <Route
            path="/cse/ppd&i"
            element={
              <Project
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            }
          />
          
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
