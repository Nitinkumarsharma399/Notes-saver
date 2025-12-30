import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  // total notes count
  const notesCount = useSelector(
    (state) => state.pastes.pastes.length
  );

  const handleSave = () => {
    if (!title || !content) {
      alert("Title and content cannot be empty");
      return;
    }

    dispatch(
      addTopastes({
        id: Date.now().toString(),
        title,
        content,
        createdAt: new Date().toISOString(),
      })
    );

    // clear inputs after save
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex flex-col gap-4 p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">Welcome to Note's Saver</h1>

      {/* show total notes */}
      <p className="text-gray-600">
        Total Notes Saved: <strong>{notesCount}</strong>
      </p>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        className="border p-2 rounded"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Home;
