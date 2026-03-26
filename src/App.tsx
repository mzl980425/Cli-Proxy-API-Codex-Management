import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

function RootShell() {
  return <Outlet />;
}

const router = createHashRouter([
  {
    element: <RootShell />,
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
