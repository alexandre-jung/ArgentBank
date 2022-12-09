import { useUserProfileQuery } from 'store/user';
import { UpdateForm } from '@components/UpdateForm';
import { useFetchProfileOrRedirectToLogin } from '@hooks/index';

export function User () {
  useFetchProfileOrRedirectToLogin();
  const { profile } = useUserProfileQuery();

  return (
    <>
      <h1>User dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <UpdateForm />
    </>
  );
}
