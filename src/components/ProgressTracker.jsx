import React from "react";

const ProgressTracker = ({ subjects }) => {
  return (
    <div className="card">
      <h2>Progress Tracker</h2>
      {subjects.map((s, i) => (
        <p key={i}>
          {s.name} – Status: In Progress
        </p>
      ))}
    </div>
  );
};

export default ProgressTracker;
