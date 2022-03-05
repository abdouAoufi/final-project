import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

function Reset() {
  const [email, setEmail] = useState("");
  const beginReset = () => {
    const payload = {
      email: email,
    };
    alert(JSON.stringify(payload));
    // ! https://myapp.api/reset-pwd
  };
  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-48'>
        <div className=' border-2 border-sky-500 rounded-lg flex flex-col py-8 px-12 gap-4 shadow-md drop-shadow-md'>
          <h4 className='text-center font-bold text-2xl'>
            Reset your password
          </h4>

          <input
            className='border-2 px-4 py-2 rounded-md'
            type='email'
            placeholder='Your email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />

          <Button text='Send verification' onPress={() => beginReset()} />
        </div>
      </div>
    </div>
  );
}

export default Reset;
