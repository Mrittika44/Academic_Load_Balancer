import React, { useState } from "react";

const Dashboard = ({ subjects, setPlan }) => {
  const [hours, setHours] = useState("");

  const generatePlan = () => {
    if (subjects.length === 0) return;

    const totalWeight = subjects.reduce(
      (sum, s) => sum + s.weight,
      0
    );

    const newPlan = subjects.map((s) => ({
      name: s.name,
      hours: ((s.weight / totalWeight) * hours).toFixed(2),
    }));

    setPlan(newPlan);
  };

  return (
    <div className="card">
      <h2>Today's Study Availability</h2>
      <input
        type="number"
        placeholder="Available study hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button onClick={generatePlan}>Generate Study Plan</button>
    </div>
  );
};

export default Dashboard;
