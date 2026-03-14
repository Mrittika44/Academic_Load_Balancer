import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import SyllabusUpload from "./components/SyllabusUpload";
import StudyPlan from "./components/StudyPlan";
import ProgressTracker from "./components/ProgressTracker";

import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [plan, setPlan] = useState([]);

  return (
    <div className="container">
      <h1>Academic Load Balancer</h1>

      <SyllabusUpload />

      <Dashboard subjects={subjects} setPlan={setPlan} />

      <StudyPlan plan={plan} />

      <ProgressTracker subjects={subjects} />

      
    </div>
  );
}

export default App;