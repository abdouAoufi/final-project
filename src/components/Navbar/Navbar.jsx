import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='py-4 px-16 bg-sky-500 shadow-lg'>
      <div className='flex justify-between'>
        <Link to="/" className='flex items-center gap-4 cursor-pointer'>
          <img className='h-10 w-10' src={logo} alt='logo' />
          <h3 className='font-bold text-white leading-4 text-xl'>Flow</h3>
        </Link>
        <div className='flex items-center gap-8'>
          <Link to='/login' className='font-bold text-white text-md text-lg'>
            Login
          </Link>
          <Link to='/signup' className='font-bold text-white text-md text-lg'>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
