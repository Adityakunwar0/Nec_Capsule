import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔹 Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // component doesn't render anything
};

export default ScrollToTop;
