import { SyntheticEvent } from 'react';
import { useFetchUserProfile } from 'store/user';
import { useAuthenticate, useAuthenticationQuery } from 'store/auth';
import { useCheckboxWithLabel, useInputWithLabel, usePasswordToggle } from 'components/inputs';
import { Icon } from 'components';
import styles from './styles.module.scss';

export function LoginForm () {
  const Email = useInputWithLabel();
  const Password = useInputWithLabel();
  const passwordToggle = usePasswordToggle();
  const RememberMe = useCheckboxWithLabel();

  const authenticate = useAuthenticate(RememberMe.isChecked());
  const fetchProfile = useFetchUserProfile();
  const { error } = useAuthenticationQuery();

  async function handleSubmit (event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    await authenticate(Email.getValue(), Password.getValue());
    await fetchProfile();
  }

  return (
    <form
      className={styles.LoginForm}
      onSubmit={handleSubmit}
    >
      <Icon name="user" size={16} />
      <h1>Sign in</h1>
      <p className={styles.InputGroup}>
        <Email.Label>Username</Email.Label>
        <Email.Input name="email" required />
      </p>
      <p className={styles.InputGroup}>
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
      <p className={styles.CheckboxGroup}>
        <RememberMe.Checkbox />
        <RememberMe.Label>Remember me</RememberMe.Label>
      </p>
      <p>{error?.message}</p>
      <input type="submit" value="Sign in" />
    </form>
  );
}
