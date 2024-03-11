import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  PlusCircleIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios';
import { useEffect } from 'react';
import Toast from './Toast';
import TButton from './core/TButton';

const navigation = [
  { name: 'Dashboard', to: '/' },
  { name: 'Surveys', to: '/surveys' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DefaultLayout() {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    useStateContext();

  if (!userToken) {
    return <Navigate to='login' />;
  }

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post('/logout').then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get('/me').then(({ data }) => {
      setCurrentUser(data);
    });
  }, []);

  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-gray-800'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <svg
                        version='1.1'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        viewBox='0 0 460 460'
                        xmlSpace='preserve'
                        fill='#fff'
                        width={40}
                        className=''
                      >
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          {' '}
                          <g>
                            {' '}
                            <path
                              style={{ fill: '#5488A8' }}
                              d='M230,0C102.974,0,0,102.975,0,230c0,89.757,51.414,167.505,126.398,205.4l330.487-167.458 C458.934,255.6,460,242.924,460,230C460,102.975,357.025,0,230,0z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#366796' }}
                              d='M456.868,267.936L327.105,138.173l-21.75,23.471l-32.547-32.547l-15.233,15.227L164.212,50.96 v338.883l169.814,45.339C397.989,402.683,444.715,341.15,456.868,267.936z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#273B7A' }}
                              d='M126.405,435.392C157.54,451.126,192.732,460,230,460c2.533,0,5.053-0.056,7.566-0.137 l12.429-94.243l-123.59,21.97V435.392z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#121149' }}
                              d='M229.995,460c37.273,0,72.466-8.874,103.6-24.609V387.59l-103.6-21.97V460z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#38C6D9' }}
                              d='M126.405,66.62c0-12.23,9.91-22.15,22.15-22.15c12.23,0,22.14,9.92,22.14,22.15v132.34l-44.29-20 C126.405,178.96,126.405,66.62,126.405,66.62z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#38C6D9' }}
                              d='M180.695,135.69c0-12.23,9.92-22.15,22.16-22.15c12.23,0,22.14,9.92,22.14,22.15v63.27h-44.3V135.69 z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#38C6D9' }}
                              d='M234.995,144.76c0-12.23,9.92-22.15,22.15-22.15c12.24,0,22.15,9.92,22.15,22.15v54.2h-44.3 L234.995,144.76L234.995,144.76z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#38C6D9' }}
                              d='M289.295,153.83c0-12.23,9.92-22.14,22.15-22.14c12.23,0,22.15,9.91,22.15,22.14v25.13l-44.3,20 V153.83z'
                            ></path>{' '}
                            <path
                              style={{ fill: '#71E2F0' }}
                              d='M126.405,351.04l103.59,30l103.6-30V178.96h-207.19C126.405,178.96,126.405,297.52,126.405,351.04z'
                            ></path>{' '}
                            <polygon
                              style={{ fill: '#C2FBFF' }}
                              points='229.995,351.04 333.595,351.04 333.595,387.59 229.995,387.59 209.995,369.315 '
                            ></polygon>{' '}
                            <rect
                              x='126.405'
                              y='351.04'
                              style={{ fill: '#FFFFFF' }}
                              width='103.59'
                              height='36.55'
                            ></rect>{' '}
                            <circle
                              style={{ fill: '#C2FBFF' }}
                              cx='148.55'
                              cy='203.762'
                              r='10'
                            ></circle>{' '}
                            <circle
                              style={{ fill: '#C2FBFF' }}
                              cx='202.848'
                              cy='203.762'
                              r='10'
                            ></circle>{' '}
                            <circle
                              style={{ fill: '#C2FBFF' }}
                              cx='257.147'
                              cy='203.762'
                              r='10'
                            ></circle>{' '}
                            <circle
                              style={{ fill: '#C2FBFF' }}
                              cx='311.445'
                              cy='203.762'
                              r='10'
                            ></circle>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-5 flex items-baseline space-x-4'>
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {/* Profile dropdown */}
                      <Menu as='div' className='relative ml-3'>
                        <div className='flex gap-2'>
                          <div className='ml-3 flex flex-col items-end'>
                            <div className='text-base font-medium leading-none text-white'>
                              {currentUser.name}
                            </div>
                            <div className='text-sm font-medium leading-none text-gray-400'>
                              {currentUser.email}
                            </div>
                          </div>
                          <Menu.Button className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                            <span className='sr-only'>Open user menu</span>
                            <UserIcon className='w-8 h-8 bg-black/25 p-2 rounded-full text-white' />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <Menu.Item>
                              <a
                                href='#'
                                onClick={(ev) => logout(ev)}
                                className={
                                  'block px-4 py-2 text-sm text-gray-700'
                                }
                              >
                                Sign out
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <NavLink
                                className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'
                                color='green'
                                to='/surveys/create'
                              >
                                <PlusCircleIcon className='h-6 w-6 mr-2' />
                                Create new Survey
                              </NavLink>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      ) : (
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className='border-t border-gray-700 pt-4 pb-3'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <UserIcon className='w-8 h-8 bg-black/25 p-2 rounded-full text-white' />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>
                        {currentUser.name}
                      </div>
                      <div className='text-sm font-medium leading-none text-gray-400'>
                        {currentUser.email}
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 space-y-1 px-2'>
                    <Disclosure.Button
                      as='a'
                      href='#'
                      onClick={(ev) => logout(ev)}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                    >
                      Sign out
                    </Disclosure.Button>

                    <NavLink
                      className='flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                      color='green'
                      to='/surveys/create'
                    >
                      <PlusCircleIcon className='h-6 w-6 mr-2' />
                      Create new Survey
                    </NavLink>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Outlet />

        <Toast />
      </div>
    </>
  );
}
