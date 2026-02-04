import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const SubjectForm = ({ subjects, setSubjects }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const addSubject = () => {
    if (!name) return;

    const weights = { Easy: 1, Medium: 1.5, Hard: 2 };

    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        name,
        difficulty,
        weight: weights[difficulty],
      },
    ]);

    setName("");
  };

  const removeSubject = (id) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject.id !== id
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div className="card">
      <h2>Add Subject</h2>

      <input
        type="text"
        placeholder="Subject Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button onClick={addSubject}>Add</button>

      <ul style={{ marginTop: "10px" }}>
        {subjects.map((s) => (
          <li
            key={s.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 0",
            }}
          >
            <span>
              {s.name} ({s.difficulty})
            </span>

            <FaTrash
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => removeSubject(s.id)}
              title="Remove subject"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectForm;

