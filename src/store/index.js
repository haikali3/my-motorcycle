import { configureStore } from '@reduxjs/toolkit';
import {
  motorsReducer,
  addMotor,
  removeMotor,
  changeSearchTerm,
} from './slices/motorsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

const store = configureStore({
  reducer: {
    motors: motorsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeName,
  changeCost,
  changeSearchTerm,
  addMotor,
  removeMotor,
};
