import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: '1',
      title: 'Note1',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '2',
      title: 'Note2',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '3',
      title: 'Note3',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '4',
      type: 'note',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '5',
      title: 'Note5',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '6',
      title: 'Note6',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '6a',
      title: 'Note6',
      type: 'note',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam cum ligula justo.Nisi, consectetur elementum.',
    },
    {
      id: '7',
      title: 'FaceBook',
      type: 'password',
      description: 'Dyson Account',
      content: 'InteliApp@123',
    },
    {
      id: '8',
      title: 'Google',
      type: 'password',
      description: 'CNW Account',
      content: 'InteliApp@321',
    },
    {
      id: '9',
      title: 'Google',
      type: 'password',
      description: 'CNW Account',
      content: 'InteliApp@321',
    },
  ],
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
