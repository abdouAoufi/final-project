import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import { getDataUser } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { getAllPostAPI } from "../../api/api";

function Home() {
  const navigate = useNavigate();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const res = getDataUser();
    if (res.email == undefined && res.name == undefined) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getAllPostAPI()
      .then((response) => {
        setPost(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />

      <Sidebar />

      <div className='flex justify-center flex-col mx-32 '>
        <CreatePost />
        {/* <Post
          name='Adel'
          time='12 min'
          comment={12}
          content="Here's my new car for the camping"
          likes={24}
          imgSrc='https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        /> */}
        {/* <Post
          name='Mohamed'
          time='13 h'
          comment={12}
          content="Here's my new car for the camping"
          likes={24}
          imgSrc='https://images.unsplash.com/photo-1646422462528-0a48ac201c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        /> */}

        {posts.map((post) => {
          console.log(post)
          return (
            <Post
              name={post.postCreator}
              content={post.description}
              imgSrc={post.imgUrl}
              time='13 h'
              comment={post.postInfo.comments}
              likes={post.postInfo.likes}
              postID={post._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
