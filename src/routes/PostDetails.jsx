import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { post_api } from '../api/api';

function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState();
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
  }
  

  return (
    <>
      <div className="post_details">
        <div className="container">
          <h5>{post?.title}</h5>
          <p>{post?.body}</p>
        </div>
      </div>
    </>
  )
}

export default PostDetails