export const UPDATE_VALUE_GLOBAL = 'UPDATE_VALUE_GLOBAL';

export const updateValueGlobal = (obj, prop, value) => ({
  type: UPDATE_VALUE_GLOBAL,
  obj,
  prop,
  value,
});
