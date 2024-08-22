import { createBrowserRouter } from 'react-router-dom';
import RouteEnum from './enum';
import PrivateRoutes from './private-routes';
import ReducerPage from '../../modules/reducer';
import ReactFlowPage from '../../modules/react-flow';
import { RoleNodesProvider } from '../../hooks/use-role-nodes';

const router = createBrowserRouter([
  {
    path: RouteEnum.Reducer,
    element: <ReducerPage />,
  },
  {
    path: RouteEnum.ReactFlow,
    element: (
      <RoleNodesProvider>
        <ReactFlowPage />
      </RoleNodesProvider>
    ),
  },
  {
    element: <PrivateRoutes />,
    children: [], // register your private routes overhere
  },
]);

export default router;
