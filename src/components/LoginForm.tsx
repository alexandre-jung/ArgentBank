import { SyntheticEvent, useState } from 'react';
import { BASE_URL, endpoints } from 'api/config';
import { useFetchUserProfile } from 'store/user';
import { useAuthenticate } from 'store/auth';

export function LoginForm () {
  const authenticate = useAuthenticate();
  const fetchProfile = useFetchUserProfile();

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
      <p>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </p>
      <input type="submit" value="Login" />
    </form>
  );
}
