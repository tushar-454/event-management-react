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
import React from 'react';

// profile menu component
const profileMenuItems = [
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = false;
  const { pathname } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  return user ? (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          <Typography variant='h6' color='blue'>
            Material Tailwind
          </Typography>
          <Avatar
            variant='circular'
            size='sm'
            alt='tania andrew'
            className='border border-gray-900 p-0.5'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
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
              onClick={closeMenu}
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
    <Link
      to={'/signup'}
      state={'Event Management | SNOW | Login'}
      className='flex items-center lg:ml-auto'
    >
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
    <Link
      to={'/login'}
      state={'Event Management | SNOW | Register'}
      className='flex items-center lg:ml-auto'
    >
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
    path: 'faq',
  },
  {
    label: 'Event Clendar',
    icon: CalendarDaysIcon,
    path: 'event-clender',
  },
  {
    label: 'Team',
    icon: UserGroupIcon,
    path: 'team',
  },
];

function NavList() {
  return (
    <ul className='mb-4 mt-2 flex flex-col text-black gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {navListItems.map(({ label, icon, path }) => (
        <NavLink
          key={label}
          to={path}
          state={label}
          className={({ isActive }) => (isActive ? 'font-bold' : '')}
        >
          {/* <Typography key={label} as='span' variant='small' color='blue-gray'> */}
          <MenuItem className={`flex items-center gap-2 lg:rounded-full`}>
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
            {label}
          </MenuItem>
          {/* </Typography> */}
        </NavLink>
      ))}
    </ul>
  );
}

import { Link, NavLink, useLocation } from 'react-router-dom';
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
          <Link to={'/'} state={'SNOW Event management'}>
            <img src={PMLogo} alt='logo' className='w-12' />
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
