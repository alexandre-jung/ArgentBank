import { useAppDispatch, useAppSelector } from 'store';
import { profileThunk } from './user.slice';

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
  return () => dispatch(profileThunk());
}
