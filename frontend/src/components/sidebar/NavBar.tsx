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
          <button
            type='button'
            className='text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Hamburger</p>
          </button>
        </div>

        <div
          className={`md:flex items-center ${
            isOpen ? 'block' : 'hidden'
          } mt-4 md:mt-0`}
        >
          {/* Navigation Links */}
          <LinkGroup />
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
    <>
      {user?.roles?.includes('ceo') && <AdminLink />}
      <DashboardLink />
      <LogoutButton onLogout={onLogout} />
    </>
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
