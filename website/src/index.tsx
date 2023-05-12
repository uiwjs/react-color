import { createRoot } from 'react-dom/client';
import './index.css';
import { routes } from './router';
import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { Fallback } from './components/Fallback';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={createHashRouter([routes] as RouteObject[])} fallbackElement={<Fallback />} />);
