import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const beginSignup = () => {
    const payload = {
      name,
      email,
      password,
    };
    alert(JSON.stringify(payload , null , 2));
  };

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
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <input
            className='border-2 px-4 py-2 rounded-md'
            type='email'
            placeholder='Your email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            className='border-2 px-4 py-2 rounded-md '
            type='password'
            placeholder='Your password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Button text='Sign up' onPress={() => beginSignup()} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
