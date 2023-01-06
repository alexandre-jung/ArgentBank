import styles from './styles.module.scss';

interface ButtonProps {
  onClick?: () => void;
  as?: React.FC;
  children: React.ReactNode;
}

export function Button ({ onClick, as, children }: ButtonProps) {
  const Component = as || 'button';

  return (
    <Component
      className={styles.Button}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
