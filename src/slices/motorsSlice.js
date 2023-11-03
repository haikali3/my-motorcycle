import { createSlice, nanoid } from '@reduxjs/toolkit';

const motorsSlice = createSlice({
  name: 'motors',
  initialState: {
    searchTerm: '',
    motors: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addMotor: (state, action) => {
      state.motors.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeMotor: (state, action) => {
      const updated = state.motor.filter((motor) => {
        return motor.id !== action.payload;
      });
      state.motors = updated;
    },
  },
});

export const { changeSearchTerm, addMotor, removeMotor } = motorsSlice.actions;

export const motorsReducer = motorsSlice.reducer;
