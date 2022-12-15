import { SyntheticEvent, useEffect } from 'react';
import { useUpdateUserProfile, useUserProfileQuery } from '@store/user';
// TODO fix all imports
import { useInputWithLabel } from '@components';
import styles from './styles.module.scss';

interface UpdateFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function UpdateForm ({ onSuccess, onCancel }: UpdateFormProps) {
  const { profile } = useUserProfileQuery();
  const updateUserProfile = useUpdateUserProfile();

  const FirstName = useInputWithLabel();
  const LastName = useInputWithLabel();

  useEffect(() => {
    FirstName.setValue(profile?.firstName ?? '');
    LastName.setValue(profile?.lastName ?? '');
  }, [FirstName, LastName, profile?.firstName, profile?.lastName]);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    updateUserProfile({
      firstName: FirstName.getValue(),
      lastName: LastName.getValue(),
    }).then(() => {
      if (onSuccess) {
        onSuccess();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.UpdateForm}>

      <div className={styles.inputs}>
        <FirstName.Label className="sr-only">
          First name
        </FirstName.Label>
        <FirstName.Input
          className={styles.input}
          placeholder={profile?.firstName}
          required
        />

        <LastName.Label className="sr-only">
          Last name
        </LastName.Label>
        <LastName.Input
          className={styles.input}
          placeholder={profile?.lastName}
          required
        />
      </div>

      <div className={`${styles.button} ${styles.right}`}>
        <button type="submit">Save</button>
      </div>

      <div className={`${styles.button} ${styles.left}`}>
        <button
          type="reset"
          onClick={() => {
            FirstName.setValue(profile?.firstName ?? '');
            LastName.setValue(profile?.lastName ?? '');
            if (onCancel) {
              onCancel();
            }
          }}
        >
          Cancel
        </button>
      </div>

    </form>
  );
}
