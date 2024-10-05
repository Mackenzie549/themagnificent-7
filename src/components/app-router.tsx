import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TeamView from "./pages/TeamView";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamView />} />
        </Routes>
      </main>
    </Router>
  );
};

export default AppRouter;
