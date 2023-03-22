import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({post}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <Link to={`/post-details/${post.id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </>
  )
}

export default PostCard