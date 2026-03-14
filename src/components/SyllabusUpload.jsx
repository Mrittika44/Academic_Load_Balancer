import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function SyllabusUpload() {
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [locked, setLocked] = useState(false);

  const addSubject = () => {
    if (!subjectName.trim()) return;

    const newSubject = {
      id: Date.now(),
      name: subjectName,
      file: null
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName("");
  };

  const handleFileChange = (id, file) => {
    setSubjects(subjects.map(sub =>
      sub.id === id ? { ...sub, file } : sub
    ));
  };

  const removeSubject = (id) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject.id !== id
    );
    setSubjects(updatedSubjects);
  };

  const confirmSubjects = () => {
    setLocked(true);
    console.log("Final subjects:", subjects);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload Semester Syllabus</h1>

      {!locked && (
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter subject name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            onClick={addSubject}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}

      <div className="space-y-4">
        {subjects.map((sub) => (
          <div
            key={sub.id}
            className="border p-4 rounded flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{sub.name}</h3>

              {!locked && (
                <FaTrash
                              style={{ cursor: "pointer", color: "red" }}
                              onClick={() => removeSubject(sub.id)}
                              title="Remove subject"
                            />
              )}
            </div>

            <input
              type="file"
              accept=".pdf,image/*"
              disabled={locked}
              onChange={(e) => handleFileChange(sub.id, e.target.files[0])}
            />

            {sub.file && (
              <p className="text-sm text-green-600">
                Uploaded: {sub.file.name}
              </p>
            )}
          </div>
        ))}
      </div>

      {subjects.length > 0 && !locked && (
        <button
          onClick={confirmSubjects}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
        >
          Confirm Subjects
        </button>
      )}

      {locked && (
        <p className="mt-6 text-green-700 font-semibold">
          Subjects confirmed. You can no longer add or delete subjects.
        </p>
      )}
    </div>
  );
}
