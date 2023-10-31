import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

const currentStatus: AuthorizationStatus = AuthorizationStatus.Auth;

export type TProtectedRoute = {
    status: AuthorizationStatus;
    redirectPage: AppRoute;
    children: JSX.Element;
  }

export function ProtectedRoute(props: TProtectedRoute): JSX.Element {
  const { status, redirectPage, children } = props;

  return (
    currentStatus === status ? children : <Navigate to={redirectPage} />
  );
}
