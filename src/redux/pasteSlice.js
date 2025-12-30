import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addTopastes: (state, action) => {
  state.pastes.push(action.payload);
  localStorage.setItem("pastes", JSON.stringify(state.pastes));
},

    updateTopastes: (state, action) => {
      const { id, title, content } = action.payload;
      const paste = state.pastes.find((p) => p.id === id);
      if (paste) {
        paste.title = title;
        paste.content = content;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    removeFromPastes: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter((p) => p.id !== id);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTopastes, updateTopastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;

