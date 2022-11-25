import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Api, Token, UserCredentials } from 'api';
import { serializeError } from 'store/helpers';

type State = {
  token: Token | null
  error: SerializedError | null
  isFetching: boolean
}

const initialState: State = {
  token: null,
  error: null,
  isFetching: false,
};

export const authenticationThunk = createAsyncThunk(
  'user/login',
  async (credentials: UserCredentials, { rejectWithValue }) => {
    try {
      const response = await Api.user.login(credentials);
      return response.token;
    } catch (error) {
      const serializedError = serializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);

export const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    retrieveToken: state => state,
  },
  extraReducers: builder => {
    builder.addCase(authenticationThunk.pending, (state) => {
      state.token = null;
      state.error = null;
      state.isFetching = true;
    });
    builder.addCase(authenticationThunk.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.isFetching = false;

    });
    builder.addCase(authenticationThunk.rejected, (state, action) => {
      state.token = null;
      state.error = action.payload as SerializedError;
      state.isFetching = false;
    });
  },
});
