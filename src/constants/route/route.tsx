import { createBrowserRouter } from 'react-router-dom';
import RouteEnum from './enum';
import PrivateRoutes from './private-routes';
import Homepage from '../../modules/homepage';

const router = createBrowserRouter([
  {
    path: RouteEnum.Home,
    element: <Homepage />,
  },
  {
    element: <PrivateRoutes />,
    children: [], // register your private routes overhere
  },
]);

export default router;
