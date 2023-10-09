import {
  Bars2Icon,
  BoltIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  HomeIcon,
  PowerIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import React, { useContext } from 'react';

// profile menu component
const profileMenuItems = [
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { updateProfile, user, signOutAccount } = useContext(AuthContext);
  const { pathname } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);

  // handle account signout
  const handleSignOut = () => {
    signOutAccount()
      .then(() => {
        setTimeout(() => {
          swal('Signout Successfull', '', 'success');
        }, 500);
        closeMenu();
      })
      .catch((error) => {
        swal('Error an occur', error.message, 'error');
      });
  };
  return user ? (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          <Typography variant='h6' color='blue'>
            {user?.displayName || updateProfile.name}
          </Typography>
          <Avatar
            variant='circular'
            size='lg'
            alt='tania andrew'
            className='border border-gray-900 p-0.5'
            src={user?.photoURL || updateProfile.photo}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-5 w-5 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={handleSignOut}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as='span'
                variant='small'
                className='font-normal'
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  ) : pathname === '/login' ? (
    <Link to={'/signup'} state={''} className='flex items-center lg:ml-auto'>
      <Menu placement='bottom-end'>
        <button className='group relative h-12 w-32 overflow-hidden rounded-lg bg-white text-lg shadow'>
          <div className='absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
          <span className='relative text-black group-hover:text-white'>
            Signup
          </span>
        </button>
      </Menu>
    </Link>
  ) : (
    <Link to={'/login'} state={''} className='flex items-center lg:ml-auto'>
      {' '}
      <Menu placement='bottom-end'>
        <div className=''>
          <button className='group relative h-12 w-32 overflow-hidden rounded-lg bg-white text-lg shadow'>
            <div className='absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
            <span className='relative text-black group-hover:text-white'>
              Login
            </span>
          </button>
        </div>
      </Menu>
    </Link>
  );
}

// nav list component
const navListItems = [
  {
    label: 'Home',
    icon: HomeIcon,
    path: '/',
  },
  {
    label: 'FAQ',
    icon: BoltIcon,
    path: '/faq',
  },
  {
    label: 'Event Clendar',
    icon: CalendarDaysIcon,
    path: '/event-clender',
  },
  {
    label: 'Team',
    icon: UserGroupIcon,
    path: '/team',
  },
];

function NavList() {
  return (
    <ul className='mb-4 mt-2 flex flex-col text-black gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {navListItems.map(({ label, icon, path }) => (
        <NavLink
          key={label}
          to={path}
          state={'path'}
          className={({ isActive }) => (isActive ? '!text-[#2196F3]' : '')}
          id='navItem'
        >
          <span className='w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none outline-none flex items-center gap-2 font-semibold'>
            {React.createElement(icon, {
              className: 'h-[18px] w-[18px] relative -top-[1px]',
            })}{' '}
            {label}
          </span>
        </NavLink>
      ))}
    </ul>
  );
}

import { Link, NavLink, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import PMLogo from '../../../assets/PMLogo.png';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className='w-full mx-auto px-5'>
      <Navbar className='mx-auto max-w-screen-2xl px-2 lg:pl-6'>
        <div className='relative mx-auto flex items-center text-blue-gray-900'>
          <Link to={'/'} state={''}>
            <img src={PMLogo} alt='logo' className='w-16' />
          </Link>
          <div className='absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block'>
            <NavList />
          </div>
          <IconButton
            size='sm'
            color='blue-gray'
            variant='text'
            onClick={toggleIsNavOpen}
            className='ml-auto mr-2 lg:hidden'
          >
            <Bars2Icon className='h-6 w-6' />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen} className='overflow-scroll'>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
