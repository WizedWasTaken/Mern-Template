import { Link } from 'react-router-dom';
import useNavLogic from '../../lib/component/nav/NavLogic';
{
  /* TODO: KESO ---> ^^ Best practice, eller findes der smartere måder? Som "@/"" i Vue? ^^
   * Kan jeg eventuelt lave det ligesom "@/" i vue?
   */
}

export default function Navbar() {
  const { isOpen, setIsOpen, isLoggedIn, user, handleLogout } = useNavLogic();

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='px-10 py-6 md:flex md:justify-between md:items-center'>
        <div className='flex justify-between items-center'>
          <Link
            to='/'
            className='text-white text-2xl font-bold hover:text-gray-300'
          >
            Template
          </Link>
          <div className='md:hidden'>
            <HamburgerButton
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>

        <div
          className={`md:flex items-center justify-between w-full ${
            isOpen ? 'block' : 'hidden'
          } mt-4 md:mt-0`}
        >
          {/* Navigation Links */}
          <div className='md:flex-grow md:flex md:justify-center'>
            <LinkGroup />
          </div>
          <div className='md:flex sm:mt-5 md:mt-0 md:justify-end'>
            {/* Conditional User Links */}
            {isLoggedIn ? (
              <UserLinks
                user={user}
                onLogout={handleLogout}
              />
            ) : (
              <LoginLink />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function LinkGroup() {
  return (
    <div className='flex flex-col md:flex-row md:mx-6'>
      <NavLink
        to='/'
        label='Hjem'
      />
      <NavLink
        to='/users'
        label='Brugere'
      />
      <NavLink
        to='/contact'
        label='Kontakt Os'
      />
    </div>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className='my-1 text-sm text-gray-200 hover:text-blue-500 md:mx-4 md:my-0'
    >
      {label}
    </Link>
  );
}

function UserLinks({ user, onLogout }) {
  return (
    <div className='flex'>
      {user?.roles?.includes('ceo') && <AdminLink />}
      <DashboardLink />
      <LogoutButton onLogout={onLogout} />
    </div>
  );
}

function AdminLink() {
  return (
    <Link
      to='/create'
      className='bg-blue-500 hover:bg-blue-600 text-white px-3 mr-5 py-2 rounded-md text-sm font-medium'
    >
      Admin
    </Link>
  );
}

function DashboardLink() {
  return (
    <Link
      to='/dashboard'
      className='bg-blue-500 hover:bg-blue-600 text-white px-3 mr-5 py-2 rounded-md text-sm font-medium'
    >
      Dashboard
    </Link>
  );
}

function LogoutButton({ onLogout }) {
  return (
    <button
      onClick={onLogout}
      className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium'
    >
      Log out
    </button>
  );
}

function LoginLink() {
  return (
    <Link
      to='/login'
      className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium'
    >
      Log in
    </Link>
  );
}

// TODO: Animate hamburger menu, button is animated.
function HamburgerButton({ isOpen, setIsOpen }) {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className='flex flex-col h-12 w-12 justify-center items-center group'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}
