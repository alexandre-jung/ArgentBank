import { SyntheticEvent, useState } from 'react';
import { useFetchUserProfile } from 'store/user';
import { useAuthenticate, useAuthenticationQuery } from 'store/auth';

export function LoginForm () {
  const authenticate = useAuthenticate();
  const fetchProfile = useFetchUserProfile();
  const { error } = useAuthenticationQuery();

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
      <p>{error?.message}</p>
      <input type="submit" value="Login" />
    </form>
  );
}
