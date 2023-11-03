import { createSlice, nanoid } from '@reduxjs/toolkit';

const motorsSlice = createSlice({
  name: 'motors',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addMotor: (state, action) => {
      //Assumption
      // action.payload = { name: 'Model S', cost: 80000 }
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeMotor: (state, action) => {
      const updated = state.data.filter((motor) => {
        return motor.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addMotor, removeMotor } = motorsSlice.actions;
export const motorsReducer = motorsSlice.reducer;
