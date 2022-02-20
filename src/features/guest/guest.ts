import { createSlice } from '@reduxjs/toolkit';

interface GuestState {
  column: any[];
}

const initialState: GuestState = {
  column: [],
};

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    setColumn: (state, action) => {
      state.column = [...state.column, ...action.payload];
    },
  },
});

const { actions, reducer } = guestSlice;
export const { setColumn } = actions;
export default reducer;
