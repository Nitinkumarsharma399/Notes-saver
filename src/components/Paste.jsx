import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { useNavigate } from "react-router-dom";

const Paste = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ 100% SAFE SELECTOR (IMPORTANT)
  const pastes = useSelector((state) => {
    if (!state) return [];
    if (!state.pastes) return [];
    if (!state.pastes.pastes) return [];
    return state.pastes.pastes;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>All Pastes</h2>

      {pastes.length === 0 ? (
        <p>No pastes found</p>
      ) : (
        pastes.map((paste) => (
          <div
            key={paste.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 10,
            }}
          >
            <h4>{paste.title}</h4>
            <p>{paste.content}</p>

            <button onClick={() => navigate(`/pastes/${paste.id}`)}>
              View
            </button>

            <button
              onClick={() => dispatch(removeFromPastes(paste.id))}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Paste;
