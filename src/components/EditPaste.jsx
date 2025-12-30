import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTopastes } from "../redux/pasteSlice";

export default function EditPastes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ FIX 1: correct slice name
  const pastes = useSelector((state) => state.paste.pastes);

  // ✅ FIX 2: match id types
  const paste = pastes.find((p) => String(p.id) === String(id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (paste) {
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [paste]);

  const handleSave = (e) => {
    e.preventDefault();

    if (!paste) {
      alert("Paste not found!");
      return;
    }

    dispatch(
      updateTopastes({
        id: paste.id,
        title,
        content,
      })
    );

    navigate("/");
  };

  if (!paste) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Paste not found 😢</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Paste</h2>

      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
