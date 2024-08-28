import { createBrowserRouter } from 'react-router-dom';
import RouteEnum from './enum';
import PrivateRoutes from './private-routes';
import { RoleNodesProvider } from '../../modules/react-flow/hooks/use-role-nodes';
import ReducerPage from '../../modules/reducer/page';
import ReactFlowPage from '../../modules/react-flow/page';

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
