import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { post_api } from '../api/api';
import PostCard from '../components/PostCard';


function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    retreveData();
  }, [])

  const retreveData = () => {
    axios.get(`${post_api}`).then((res) => {
      setPost(res.data)
    })
  }
  return (
    <>
      <div className="all_posts">
        <div className="container">
          <h5 className="post_header">All Posts</h5>
          <div className="row">
            {posts.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <PostCard post={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts