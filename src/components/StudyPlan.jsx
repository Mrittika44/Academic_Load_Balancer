import React from "react";

const StudyPlan = ({ plan }) => {
  return (
    <div className="card">
      <h2>📅 Today's Study Plan</h2>
      {plan.length === 0 && <p>No plan generated yet.</p>}
      <ul>
        {plan.map((p, i) => (
          <li key={i}>
            {p.name} → {p.hours} hrs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPlan;
