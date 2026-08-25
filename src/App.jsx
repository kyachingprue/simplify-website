import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ComingSoon title="Services" />} />
          <Route path="/industries" element={<ComingSoon title="Industries" />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="/pages" element={<ComingSoon title="Pages" />} />
          <Route path="/news" element={<ComingSoon title="News" />} />
          <Route path="*" element={<ComingSoon title="Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
