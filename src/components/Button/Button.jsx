import React from "react";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.onPress();
      }}
      className='bg-sky-500 hover:bg-sky-700 py-3 text-white font-bold text-xl rounded-lg px-2'>
      {props.text}
    </button>
  );
}

export default Button;
