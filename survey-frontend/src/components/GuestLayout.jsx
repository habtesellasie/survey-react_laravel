import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function GuestLayout() {
  const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <div className='flex min-h-full items-center justify-center py-64 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div className='flex h-16 items-center justify-center'>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 460 460'
              xmlSpace='preserve'
              fill='#fff'
              width={80}
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

          <Outlet />
        </div>
      </div>
    </div>
  );
}
