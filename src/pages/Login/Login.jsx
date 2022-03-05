import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Button from "../../components/Button/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const beginLogin = () => {
    const payload = {
      email,
      password,
    };
    alert(JSON.stringify(payload, null, 2));
  };
  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-48'>
        <div className=' border-2 border-sky-500 rounded-lg flex flex-col py-8 px-12 gap-4 shadow-md drop-shadow-md'>
          <h4 className='text-center font-bold text-2xl'>Login</h4>
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
          <Button
            text='Login'
            onPress={() => {
              beginLogin();
            }}
          />

          <p className='text-center text-md '>
            Forget your password?{" "}
												<br/>
            <span className='font-bold text-sky-500'>Click here</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
