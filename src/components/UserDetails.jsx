import React from "react";

function UserDetails({userDetails}) {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">name: {userDetails.name}</li>
        <li className="list-group-item">username: {userDetails.username}</li>
        <li className="list-group-item">phone: {userDetails.phone}</li>
        <li className="list-group-item">company name: {userDetails.company?.name}</li>
      </ul>
    </>
  );
}

export default UserDetails;
