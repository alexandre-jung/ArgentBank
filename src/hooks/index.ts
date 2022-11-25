import { useCallback, useEffect, useRef } from 'react';
import { NavigateOptions, To, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useFetchUserProfile } from '@store/user';
import { useLogout } from 'store/auth';
import routes from '../routes';

export function useAppNavigate () {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  function navigateCallback (to: To, options?: NavigateOptions) {
    navigateRef.current(to, options);
  }

  return useCallback(navigateCallback, []);
}

export function useFetchProfileOrRedirectToLogin () {
  const fetchProfile = useFetchUserProfile();
  const logout = useLogout();
  const navigate = useAppNavigate();

  useEffect(() => {
    fetchProfile().unwrap().catch(error => {
      if (error.code == 401) {
        logout();
        navigate(routes.login());
      }
    });
  }, [fetchProfile, logout, navigate]);
}

export function useGenerateLogoutLink () {
  const location = useLocation();
  return {
    pathname: routes.logout(),
    search: `?from=${encodeURIComponent(location.pathname)}`,
  };
}

export function useLogoutRedirectTarget () {
  const [searchParams] = useSearchParams();
  return searchParams.get('from') ?? '/';
}
