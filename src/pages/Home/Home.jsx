import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='w-1/2'>
          <CreatePost />
          <Post
            name='Adel'
            time='12 min'
            comment={12}
            content="Here's my new car for the camping"
            likes={24}
            imgSrc='https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          />
          <Post
            name='Adel'
            time='12 min'
            content="I'm happy"
            comment={12}
            likes={24}
          />
          <Post
            name='Mohamed'
            time='12 min'
            content="I'm happy"
            comment={12}
            likes={24}
          />
          <Post
            name='YASMINE'
            time='12 min'
            content="I'm happy"
            comment={12}
            likes={24}
          />
          <Post
            name='Tarek'
            time='12 min'
            content="I'm happy"
            comment={12}
            likes={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
