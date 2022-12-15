import { useState } from 'react';
import { UpdateForm } from '@components';
import styles from './styles.module.scss';

export function EditName () {
  const [isEditing, setIsEditing] = useState(false);
  const showForm = () => setIsEditing(true);
  const hideForm = () => setIsEditing(false);

  return (
    <div className={styles.editSection}>
      {
        isEditing ?
          <UpdateForm
            onSuccess={hideForm}
            onCancel={hideForm}
          /> :
          <button
            className={styles.editButton}
            type="button"
            onClick={showForm}
          >
            Edit name
          </button>
      }
    </div>
  );
}
