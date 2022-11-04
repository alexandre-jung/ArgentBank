import { useUserProfileQuery } from 'store/user';

export function User () {
  const { profile } = useUserProfileQuery();

  return (
    <>
      <h1>User dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
}
