import { useAppDispatch, useAppSelector } from 'store';
import { profileThunk, updateThunk } from './user.slice';
import { useCallback } from 'react';
import { UserUpdateParams } from '@api/api.types';

export function useUserProfileQuery () {
  return useAppSelector(state => {
    const profileData = state.user.id ? {
      id: state.user.id,
      email: state.user.email,
      firstName: state.user.firstName,
      lastName: state.user.lastName,
      createdAt: state.user.createdAt ? new Date(state.user.createdAt) : null,
      updatedAt: state.user.updatedAt ? new Date(state.user.updatedAt) : null,
    } : null;

    return {
      isFetching: state.user.isFetching,
      error: state.user.error,
      profile: profileData,
    };
  });
}

export function useFetchUserProfile () {
  const dispatch = useAppDispatch();

  return useCallback(() => {
    return dispatch(profileThunk());
  }, [dispatch]);
}

export function useUpdateUserProfile () {
  const dispatch = useAppDispatch();

  return useCallback((updateInfo: UserUpdateParams) => {
    return dispatch(updateThunk(updateInfo));
  }, [dispatch]);
}
