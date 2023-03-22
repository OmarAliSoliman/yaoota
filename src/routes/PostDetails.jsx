import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { post_api, comments_api, users_api } from '../api/api';
import CommentCard from '../components/CommentCard';
import UserDetails from '../components/UserDetails';

function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  useEffect(()=>{
    retreveData();
  },[])


  const retreveData=()=>{
    axios.get(`${post_api}/${params.id}`).then((res)=>{
      if(res.status == 200){
        console.log(res.data)
        setPost(res.data)
      }
    })

    axios.get(`${comments_api}/?postId=${params.id}`).then((res)=>{
      if(res.status == 200){
        setComments(res.data);
        console.log(res.data)
      }
    })

    axios.get(`${users_api}/${post.userId}`).then((res)=>{
      if(res.status == 200){
        setUserDetails(res.data);
      }
    })
  }
  

  return (
    <>
      <div className="post_details">
        <div className="container">
          <h5>{post?.title}</h5>
          <p>{post?.body}</p>

          <h5 className='mt-5'>User Details</h5>
          <UserDetails  userDetails={userDetails}/>

          <h5 className='mt-5'>Comments</h5>
          {comments.map((comment)=>(
            <CommentCard comment={comment} />
          ))}

          
        </div>
      </div>
    </>
  )
}

export default PostDetails