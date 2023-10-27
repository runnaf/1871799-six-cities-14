import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

const currentStatus: AuthorizationStatus = AuthorizationStatus.NoAuth;

export type TProtectedRoute = {
    status: AuthorizationStatus;
    redirectPage: AppRoute;
    children: JSX.Element;
  }

export function ProtectedRoute(props: TProtectedRoute): JSX.Element {
  const { status, redirectPage, children } = props;

  return (
    currentStatus === status ? <Navigate to={redirectPage} /> : children
  );
}
