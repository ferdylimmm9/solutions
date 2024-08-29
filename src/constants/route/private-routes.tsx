import { Navigate, Outlet } from 'react-router-dom';
import { Token } from '../token';

export default function PrivateRoutes() {
  const token = Token.getToken();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
