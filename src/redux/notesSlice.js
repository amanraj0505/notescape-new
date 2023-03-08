import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const notesSlice = createSlice({
  name: 'notesData',
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.data.push(action.payload);
    },
    deleteNotes: (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data.splice(i, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNotes, deleteNotes} = notesSlice.actions;

export default notesSlice.reducer;
