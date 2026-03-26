import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MicroApp from '@/pages/MicroApp';

const router = createHashRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <MicroApp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
