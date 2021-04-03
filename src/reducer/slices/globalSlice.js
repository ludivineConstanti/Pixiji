import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    current: {
      cheating: true,
    },
    UI: {
      colorMain: '#0A2846',
      menuIsOpen: false,
    },
  },

  reducers: {
    updateValueGlobal: (state, { payload }) => {
      // the action prop will always have to be an object formatted as such
      // {obj: "objName", prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      // This way, I can change multiple values inside the same object
      for (let i = 0; i < payload.prop.length; i += 1) {
        state[payload.obj][payload.prop[i]] = payload.value[i];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateValueGlobal,
} = globalSlice.actions;

export default globalSlice.reducer;
