import { Link, LinkProps } from 'react-router-dom';
import Routes from '../../routes';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import styles from './styles.module.scss';

export function HomeLinkButton () {
  return (
    <Button as={HomeLink}>
      <HomeIcon />
      Go back to home
    </Button>
  );
}

function HomeLink (props: Omit<LinkProps, 'to'>) {
  return <Link to={Routes.home()} {...props} />;
}

function HomeIcon () {
  return <Icon
    name="home"
    size={18}
    className={styles.icon}
  />;
}
