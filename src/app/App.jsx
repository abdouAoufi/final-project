import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Reset from "../pages/Reset/Reset";
import Confirmation from "../pages/Confirmation/Confirmation";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reset' element={<Reset />} />
      <Route path='/confirmation' element={<Confirmation />} />
    </Routes>
  );
};

export default App;
