import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./components/Dashboard";
import SubjectForm from "./components/SubjectForm";
import StudyPlan from "./components/StudyPlan";
import ProgressTracker from "./components/ProgressTracker";

import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>Academic Load Balancer</h1>

      <SubjectForm />
      <Dashboard />
      <StudyPlan />
      <ProgressTracker />
    </div>
  );
}

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Home />} />

      </Routes>

    </Router>
  );
}

export default App;