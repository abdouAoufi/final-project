import Button from "../../components/Button/Button";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Confirmation = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const beginOtp = () => {
    const payload = {
      otp: otp,
      password: newPassword,
    };
    alert(JSON.stringify(payload, null, 2));
  };
  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-48'>
        <div className=' border-2 border-sky-500 rounded-lg flex flex-col py-8 px-12 gap-4 shadow-md drop-shadow-md'>
          <h4 className='text-center font-bold text-2xl'>
            Enter your OTP and new password
          </h4>

          <input
            className='border-2 px-4 py-2 rounded-md'
            type='number'
            placeholder='Otp'
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            value={otp}
          />
          <input
            className='border-2 px-4 py-2 rounded-md'
            type='password'
            placeholder='Your new password'
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
          />

          <Button text='Reset' onPress={() => beginOtp()} />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
