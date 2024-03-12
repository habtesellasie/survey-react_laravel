import { createBrowserRouter, Navigate, NavLink } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Signup from './views/Signup';
import SurveyPublicView from './views/SurveyPublicView';
import Surveys from './views/Surveys';
import SurveyView from './views/SurveyView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to='/' />,
      },
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/surveys',
        element: <Surveys />,
      },
      {
        path: '/surveys/create',
        element: <SurveyView />,
      },
      {
        path: '/surveys/:id',
        element: <SurveyView />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/survey/public/:slug',
    element: <SurveyPublicView />,
  },
  {
    path: '*',
    element: (
      <main className='h-screen w-full flex flex-col justify-center items-center bg-gray-800'>
        <h1 className='text-9xl font-extrabold text-white tracking-widest'>
          404
        </h1>
        <div className='bg-blue-500 px-2 text-sm rounded rotate-12 absolute'>
          Page Not Found
        </div>
        <button className='mt-5'>
          <a className='relative inline-block text-sm font-medium text-blue-500 group active:text-blue-600 focus:outline-none focus:ring'>
            <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0'></span>

            <span className='relative block px-8 py-3 bg-gray-700 border border-current'>
              <NavLink to='/'>Go Home</NavLink>
            </span>
          </a>
        </button>
      </main>
    ),
  },
]);

export default router;
