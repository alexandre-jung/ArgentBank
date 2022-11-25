import { SyntheticEvent, useEffect } from 'react';
import { useUpdateUserProfile, useUserProfileQuery } from 'store/user';
import { useInputWithLabel } from 'components/inputs';

export function UpdateForm () {
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <FirstName.Label className="sr-only">
        First name
      </FirstName.Label>
      <FirstName.Input
        placeholder={profile?.firstName}
        required
      />

      <LastName.Label className="sr-only">
        Last name
      </LastName.Label>
      <LastName.Input
        placeholder={profile?.lastName}
        required
      />

      <br />

      <button type="submit">Save</button>

      <button
        type="reset"
        onClick={() => {
          FirstName.setValue(profile?.firstName ?? '');
          LastName.setValue(profile?.lastName ?? '');
        }}
      >
        Cancel
      </button>
    </form>
  );
}
