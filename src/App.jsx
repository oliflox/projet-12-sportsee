import "./assets/css/App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import HorizontalNav from "./components/layout/HorizontalNav";
import VerticalNav from "./components/layout/VerticalNav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <HorizontalNav />
      <section className="dashboard-container">
        <VerticalNav />
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/user/" replace />} />
        </Routes>
      </section>
    </>
  );
}

export default App;