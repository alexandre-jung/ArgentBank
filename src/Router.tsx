import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import routes from './routes';
import * as Views from './views';
import { PrivateRoute } from 'components';

export default function Router () {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home()} element={<Views.Home />} />
        <Route path={routes.user()} element={
          <PrivateRoute>
            <Views.User />
          </PrivateRoute>
        } />
        <Route path={routes.login()} element={<Views.Login />} />
        <Route path={routes.logout()} element={<Views.Logout />} />
      </Route>
    </Routes>
  );
}
