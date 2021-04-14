import { configureStore } from '@reduxjs/toolkit';
import reducer from 'src/reducer';

export default configureStore({
  reducer,
});
