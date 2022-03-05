import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-48'>
        <div className=' border-2 border-sky-500 rounded-lg flex flex-col py-8 px-12 gap-4 shadow-md drop-shadow-md'>
          <h4 className='text-center font-bold text-2xl'>Signup</h4>
          <input
            className='border-2 px-4 py-2 rounded-md'
            type='text'
            placeholder='Your name'
          />
          <input
            className='border-2 px-4 py-2 rounded-md'
            type='email'
            placeholder='Your email'
          />
          <input
            className='border-2 px-4 py-2 rounded-md '
            type='password'
            placeholder='Your password'
          />
          <Button text='Sign up' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
