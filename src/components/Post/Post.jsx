import React from "react";

function Post(props) {
  const { name, time, content, comment, likes, imgSrc } = props;
  return (
    <div className='bg-white mx-32 rounded-md shadow-md h-auto py-3 px-3 my-5'>
      <div className='w-full h-16  items-center flex justify-between '>
        <div className='flex'>
          <img
            className=' rounded-full w-10 h-10 mr-3'
            src='http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp'
            alt
          />
          <div>
            <h3 className='text-md font-semibold '>{name}</h3>
            <p className='text-xs text-gray-500'>{time}</p>
          </div>
        </div>
        <svg
          className='w-16'
          xmlns='http://www.w3.org/2000/svg'
          width={27}
          height={27}
          viewBox='0 0 24 24'
          fill='none'
          stroke='#b0b0b0'
          strokeWidth={2}
          strokeLinecap='square'
          strokeLinejoin='round'>
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
          <circle cx={5} cy={12} r={1} />
        </svg>
      </div>
      <p>{content}</p>
      {imgSrc !== undefined && <img className='h-full w-full' src={imgSrc} />}
      {/* {imgSrc ? <img className='h-full w-full' src={imgSrc} /> : null} */}

      <div className='w-full h-8 flex items-center px-3 my-3'>
        <div className='bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center '>
          <svg
            className='w-3 h-3 fill-current text-white'
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#b0b0b0'
            strokeWidth={2}
            strokeLinecap='square'
            strokeLinejoin='round'>
            <path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' />
          </svg>
        </div>
        <div className='bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1'>
          <svg
            className='w-3 h-3 fill-current stroke-current text-white'
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#b0b0b0'
            strokeWidth={2}
            strokeLinecap='square'
            strokeLinejoin='round'>
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
          </svg>
        </div>
        <div className='w-full flex justify-between'>
          <p className='ml-3 text-gray-500'>{likes}</p>
          <p className='ml-3 text-gray-500'>{comment} comment</p>
        </div>
      </div>
      <hr />
      <div className='grid grid-cols-3 w-full px-5 px-5 my-3'>
        <button className='flex flex-row justify-center items-center w-full space-x-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#838383'
            strokeWidth={2}
            strokeLinecap='square'
            strokeLinejoin='round'>
            <path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' />
          </svg>
          <span className='font-semibold text-lg text-gray-600'>Like</span>
        </button>
        <button className='flex flex-row justify-center items-center w-full space-x-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#838383'
            strokeWidth={2}
            strokeLinecap='square'
            strokeLinejoin='round'>
            <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
          </svg>
          <span className='font-semibold text-lg text-gray-600'>Comment</span>
        </button>
        <button className='flex flex-row justify-center items-center w-full space-x-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#838383'
            strokeWidth={2}
            strokeLinecap='square'
            strokeLinejoin='round'>
            <circle cx={18} cy={5} r={3} />
            <circle cx={6} cy={12} r={3} />
            <circle cx={18} cy={19} r={3} />
            <line x1='8.59' y1='13.51' x2='15.42' y2='17.49' />
            <line x1='15.41' y1='6.51' x2='8.59' y2='10.49' />
          </svg>
          <span className='font-semibold text-lg text-gray-600'>Share</span>
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Post;
