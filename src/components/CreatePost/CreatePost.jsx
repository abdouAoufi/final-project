import React, { useState } from "react";
import { createPostAPI } from "../../api/api";
import { getDataUser } from "../../utils/utils";
import index from "axios";
import axios from "axios";

function CreatePost(props) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const name = getDataUser().name;
  function handleChange(e) {
    // setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    formdata.append("text", "dummy text");
    axios.post("http://localhost:1337/upload", formdata, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }
  const imgUrl =
    "https://images.unsplash.com/photo-1646932305829-aa5e39e8756e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80";

  const proceedCreationPost = () => {
    const payload = {
      postCreator: name,
      description: description,
      imgUrl,
    };
    createPostAPI(payload)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    props.setRefresh();
  };
  return (
    <div className='mt-28'>
      <div className='p-4 mt-8 rounded shadow-md lg:mx-32 bg-white text-gray-500'>
        <div>
          <div className='w-full h-16  items-center flex justify-between px-5'>
            <img
              className=' rounded-full w-10 h-10 mr-3'
              src='http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp'
              alt
            />
            <input
              type='text'
              className=' w-full rounded-full h-10 bg-gray-200 px-5'
              placeholder='What are you thinking?'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>
          <div className='w-full h-16 flex justify-between px-3 md:px-10 lg:px-24 xl:px-5 cursor-pointer'>
            <div className=' flex h-full items-center'>
              <svg
                className='h-12 fill-current text-red-500 stroke-current'
                xmlns='http://www.w3.org/2000/svg'
                width={27}
                height={27}
                viewBox='0 0 24 24'
                fill='none'
                stroke='#b0b0b0'
                strokeWidth={2}
                strokeLinecap='square'
                strokeLinejoin='round'>
                <path d='M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z' />
              </svg>
              <span className='text-xs lg:text-md mx-2 font-semibold text-gray-500'>
                {" "}
                Video live{" "}
              </span>
            </div>
            <div className=' flex h-full items-center cursor-pointer'>
              <svg
                className='h-12  text-green-500 stroke-current'
                xmlns='http://www.w3.org/2000/svg'
                width={27}
                height={27}
                viewBox='0 0 24 24'
                fill='none'
                stroke='#b0b0b0'
                strokeWidth={2}
                strokeLinecap='square'
                strokeLinejoin='round'>
                <rect x={3} y={3} width={18} height={18} rx={2} />
                <circle cx='8.5' cy='8.5' r='1.5' />
                <path d='M20.4 14.5L16 10 4 20' />
              </svg>
              <input type='file' placeholder='photo' onChange={handleChange} />
              <span className='text-xs lg:text-md mx-2 font-semibold text-gray-500'>
                {" "}
                Photo/Video{" "}
              </span>
            </div>
            <div className='hidden xl:flex h-full items-center cursor-pointer'>
              <button
                onClick={() => {
                  proceedCreationPost();
                }}
                className='px-6 py-3 rounded-md bg-blue-500 text-white font-bold'>
                Create post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
