import { createSlice } from '@reduxjs/toolkit';

import kanjisArrFormatter, { getKanjisNum } from 'src/helpers/formatters/kanjisArrFormatter';
import data from 'src/components/d_Illustrations/_data/dataIndex';

export const kanjisArrSlice = createSlice({
  name: 'kanjisArr',
  initialState: {
    home: kanjisArrFormatter(getKanjisNum(data.home[0].arrIllu)),
    readMe: kanjisArrFormatter(getKanjisNum(data.readMe[0].arrIllu)),
    about: kanjisArrFormatter(getKanjisNum(data.about[0].arrIllu)),
    error404: '',
  },

  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const {

} = kanjisArrSlice.actions;

export default kanjisArrSlice.reducer;
