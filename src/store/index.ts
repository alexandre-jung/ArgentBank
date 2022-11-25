import { configureStore } from '@reduxjs/toolkit';
import { reducer as UserReducer } from './user';
import { actions, reducer as AuthReducer, StoreJwtToken } from './auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      StoreJwtToken('JWT'),
    );
  },
});

store.dispatch(actions.retrieveToken());

// Infer the `RootState` and `AppDispatch` types from the features itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
export { StoreProvider } from './Provider';
