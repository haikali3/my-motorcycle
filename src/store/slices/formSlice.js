import { createSlice } from '@reduxjs/toolkit';
import { addMotor } from './motorsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addMotor, (state, action) => {
      state.cost = 0;
      state.name = '';
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
