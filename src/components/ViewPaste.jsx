import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pastes = useSelector((state) => state.pastes.pastes);
  const paste = pastes.find((p) => p.id === id);

  if (!paste) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Paste not found ❌</h2>
        <button
          onClick={() => navigate("/pastes")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{paste.title}</h1>

      <div className="border p-4 rounded bg-gray-50">
        <p className="whitespace-pre-wrap text-gray-800">
          {paste.content}
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Created at: {new Date(paste.createdAt).toLocaleString()}
      </p>

      <button
        onClick={() => navigate("/pastes")}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
      >
        Back to Pastes
      </button>
    </div>
  );
};

export default ViewPaste;
