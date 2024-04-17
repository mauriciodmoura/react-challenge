import { createSlice } from '@reduxjs/toolkit';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: {
    highlighted: [],
  },
  reducers: {
    highlightElements: (state, action) => {
    },
  },
});

export const { highlightElements } = elementsSlice.actions;

export default elementsSlice.reducer;
