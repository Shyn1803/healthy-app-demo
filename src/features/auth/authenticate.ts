import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authService from 'src/api/authApi';
interface AuthenticateState {
  token: string;
  user: any;
  loading: boolean;
  error: any;
  diet: any[];
  diary: any[];
}

const initialState: AuthenticateState = {
  token: localStorage.getItem('accessToken') || '',
  loading: false,
  user: undefined,
  error: null,
  diet: [],
  diary: [],
};

export const login = createAsyncThunk('users/login', async (params: any) => {
  const login = await authService.login(params);
  console.log('login: ', login);
  return login;
});

// export const getMe = createAsyncThunk('users/getMe', async () => {
//   const me = await authService.me();
//   return me;
// });

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = '';
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setDiet: (state, action: PayloadAction<any>) => {
      state.diet = [...state.diet, ...action.payload];
    },
    setDiary: (state, action: PayloadAction<any>) => {
      console.log('action.payload: ', action.payload);
      state.diary = [...state.diary, ...action.payload];
    },
    logOut: (state) => {
      state.token = '';
      state.user = undefined;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = undefined;
      localStorage.removeItem('accessToken');
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log('state.user: ', state.user);
      console.log('action: ', action);
      state.loading = false;
      state.user = action.payload.data;
      state.token = action.payload.data.token;
      localStorage.setItem('accessToken', action.payload.data.token);
      localStorage.setItem('user', JSON.stringify(action.payload.data));
    });
  },
});

const { actions, reducer } = authenticateSlice;
export const { setToken, removeToken, setUser, logOut, setLoading, setDiet, setDiary } = actions;
export default reducer;
