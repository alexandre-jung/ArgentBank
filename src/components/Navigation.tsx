import { Link } from 'react-router-dom';
import { useUserIsAuthenticated } from 'store/auth';
import { useUserProfileQuery } from 'store/user';
import routes from 'routes';
import { Icon } from 'components';
import { useGenerateLogoutLink } from 'hooks/index';

export function Navigation () {
  const isAuthenticated = useUserIsAuthenticated();
  const { profile } = useUserProfileQuery();
  const targetTo = useGenerateLogoutLink();

  return (
    <nav>
      <ul className="list-unstyled">
        {isAuthenticated ? (
          <>
            <li>
              <Link to={routes.user()}>
                <Icon name="user" style={{ verticalAlign: 'middle' }} size={16} />
                <span
                  className="ml-1 bold"
                  style={{ verticalAlign: 'middle' }}
                >{profile?.firstName}</span>
              </Link>
            </li>
            <li className="ml-2">
              <Link
                to={targetTo}
                replace
              >
                <Icon
                  name="sign-out"
                  style={{ verticalAlign: 'middle' }}
                  size={16}
                />
                <span
                  className="ml-1 bold"
                  style={{ verticalAlign: 'middle' }}
                >
                  Sign out
                </span>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={routes.login()}>
              <Icon
                name="user"
                style={{ verticalAlign: 'middle' }}
                size={16}
              />
              <span
                className="ml-1 bold"
                style={{ verticalAlign: 'middle' }}
              >
                Sign in
              </span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
