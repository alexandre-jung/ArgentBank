import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Api, UserUpdateParams } from 'api';
import { serializeError } from 'store/helpers';

type State = {
  id: string | null
  email: string | null
  firstName: string | null
  lastName: string | null
  createdAt: string | null
  updatedAt: string | null
  error: SerializedError | null
  isFetching: boolean
}

const initialState: State = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
  error: null,
  isFetching: false,
};

/**
 * [rejectWithValue()](https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results)
 */
export const profileThunk = createAsyncThunk(
  'user/profile',
  async (args: void, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token ?? '';

    try {
      return await Api.user.profile(token);
    } catch (error) {
      const serializedError = serializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);

export const updateThunk = createAsyncThunk(
  'user/update',
  async (updateInfo: UserUpdateParams, { rejectWithValue, getState, dispatch }) => {
    const state = getState() as RootState;
    const token = state.auth.token ?? '';

    try {
      const result = await Api.user.update(updateInfo, token);
      dispatch(actions.setName(updateInfo));
      return result;
    } catch (error) {
      const serializedError = serializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<UserUpdateParams>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
  extraReducers: builder => {
    builder.addCase(profileThunk.pending, (state) => {
      state.id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.createdAt = null;
      state.updatedAt = null;
      state.error = null;
      state.isFetching = true;
    });
    builder.addCase(profileThunk.fulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.createdAt = payload.createdAt;
      state.updatedAt = payload.updatedAt;
      state.error = null;
      state.isFetching = false;
    });
    builder.addCase(profileThunk.rejected, (state, action) => {
      state.id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.createdAt = null;
      state.updatedAt = null;
      state.error = action.payload as SerializedError;
      state.isFetching = false;
    });
  },
});
