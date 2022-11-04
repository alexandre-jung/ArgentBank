import { Link } from 'react-router-dom';
import routes from 'routes';

export function Logo () {
  return (
    <Link to={routes.home()}>
      <img
        className="main-nav-logo-image"
        src="/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
    </Link>
  );
}
