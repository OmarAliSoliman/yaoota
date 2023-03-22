import React from "react";

function CommentCard({comment}) {
  return (
    <>
      <div className="card mb-2">
        
        <div className="card-body">
        <h5 className="card-title">{comment.name}</h5>
          <p className="card-text">{comment.body}</p>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
