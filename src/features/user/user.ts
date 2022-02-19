import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isCollapsed: boolean;
  diet: any[];
}

const initialState: UserState = {
  isCollapsed: false,
  diet: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDiet: (state, action) => {
      state.diet = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setDiet } = actions;
export default reducer;
