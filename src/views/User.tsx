import { useUserProfileQuery } from 'store/user';
import { UpdateForm } from '@components/UpdateForm';

export function User () {
  const { profile } = useUserProfileQuery();

  return (
    <>
      <h1>User dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <UpdateForm />
    </>
  );
}
