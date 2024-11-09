import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <h2>
          <h3>Details</h3>
          <h3>Bannaer</h3>
        </h2>,
      },
      {
        path: '/add',
        element: <h2>add</h2>,
      },
    ],
  },
]);

export default router;
