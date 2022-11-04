import { SyntheticEvent, useState } from 'react';
import { BASE_URL, endpoints } from 'api/config';
import { useFetchUserProfile, useUserProfileQuery } from 'store/user';
import { useAuthenticate, useAuthenticationQuery } from 'store/auth';

function LoginForm () {
  const authenticate = useAuthenticate();
  const authenticationQuery = useAuthenticationQuery();
  const fetchProfile = useFetchUserProfile();
  const { profile } = useUserProfileQuery();

  const [email, setEmail] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');

  function handleEmailChange (event: SyntheticEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  function handlePasswordChange (event: SyntheticEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  async function handleSubmit (event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    await authenticate(email, password);
    await fetchProfile();
  }

  return (
    <form
      action={BASE_URL + '/' + endpoints.user.login}
      method="post"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Username</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <input type="submit" value="Login" />
      {authenticationQuery.error && <p>{authenticationQuery.error.message}</p>}
      {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
    </form>
  );
}

export default LoginForm;
