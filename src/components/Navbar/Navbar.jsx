import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className='py-4 px-16 bg-sky-500 shadow-lg'>
      <div className="flex justify-between" >
        <div className='flex items-center gap-4 cursor-pointer'>
          <img className='h-10 w-10' src={logo} alt='logo' />
          <h3 className='font-bold text-white leading-4 text-xl'>Flow</h3>
        </div>
        <div className="flex items-center gap-8">
          <p className="font-bold text-white text-md text-lg">Login</p>
          <p className="font-bold text-white text-md text-lg">Sign up</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
