import React from "react";

function Button(props) {
  return (
    <button className='bg-sky-500 py-3 text-white font-bold text-xl rounded-lg'>
      {props.text}
    </button>
  );
}

export default Button;
