import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { getDataUser , deleteDataUser } from "../../utils/utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const res = getDataUser();
    if (res.email !== null && res.name !== null) {
      setIsLogged(true);
    }
  }, []);

  return (
    <nav className='py-4 fixed top-0 right-0 left-0 z-10 px-16 bg-sky-500 shadow-lg'>
      <div className='flex justify-between'>
        <Link to='/' className='flex items-center gap-4 cursor-pointer'>
          <img className='h-10 w-10' src={logo} alt='logo' />
          <h3 className='font-bold text-white leading-4 text-xl'>Flow</h3>
        </Link>
        <div className='flex items-center gap-8'>
          {isLogged === true ? (
            <Link
              onClick={() => {
                deleteDataUser();
              }}
              to='/login'
              className='font-bold text-white text-md text-lg'>
              Log out
            </Link>
          ) : (
            <>
              {" "}
              <Link
                to='/login'
                className='font-bold text-white text-md text-lg'>
                Login
              </Link>
              <Link
                to='/signup'
                className='font-bold text-white text-md text-lg'>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
