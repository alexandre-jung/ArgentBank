import styles from './styles.module.scss';

interface ButtonProps {
  as?: React.FC;
  children: React.ReactNode;
}

export function Button ({ as, children }: ButtonProps) {
  const Component = as || 'button';

  return (
    <Component className={styles.Button}>
      {children}
    </Component>
  );
}
