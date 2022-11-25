import { SyntheticEvent } from 'react';
import { useFetchUserProfile } from 'store/user';
import { useAuthenticate, useAuthenticationQuery } from 'store/auth';
import { useCheckboxWithLabel, useInputWithLabel, usePasswordToggle } from 'components/inputs';
import { Icon } from 'components';
import styles from './styles.module.scss';

export function LoginForm () {
  const authenticate = useAuthenticate();
  const fetchProfile = useFetchUserProfile();
  const { error } = useAuthenticationQuery();

  const Email = useInputWithLabel({ initialValue: 'tony@stark.com' });
  const Password = useInputWithLabel({ initialValue: 'password123' });
  const passwordToggle = usePasswordToggle();
  const RememberMe = useCheckboxWithLabel();

  async function handleSubmit (event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    await authenticate(Email.getValue(), Password.getValue());
    await fetchProfile();
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <p>
        <Email.Label>Email</Email.Label>
        <Email.Input name="email" required />
      </p>
      <p>
        <Password.Label>Password</Password.Label>
        <Password.Input
          name="password"
          required
          {...passwordToggle.inputProps}
        />
        <button
          type="button"
          className={styles.passwordVisibilityToggle}
          {...passwordToggle.toggleProps}
          title={passwordToggle.isVisible ? 'Hide password' : 'Show password'}
        >
          <Icon
            name={passwordToggle.isVisible ? 'eye-hidden' : 'eye'}
            style={{ verticalAlign: 'middle' }}
          />
        </button>
      </p>
      <p>
        <RememberMe.Checkbox />
        <RememberMe.Label>Remember me</RememberMe.Label>
      </p>
      <p>{error?.message}</p>
      <input type="submit" value="Login" />
    </form>
  );
}
