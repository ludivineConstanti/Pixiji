import { createSlice } from '@reduxjs/toolkit';

import kanjisArrFormatter from 'src/helpers/formatters/kanjisArrFormatter';

export const kanjisArrSlice = createSlice({
  name: 'kanjisArr',
  initialState: {
    home: kanjisArrFormatter(17),
    readMe: '',
    about: '',
    error404: '',
  },

  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const {

} = kanjisArrSlice.actions;

export default kanjisArrSlice.reducer;
