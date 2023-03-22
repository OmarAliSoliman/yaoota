import axios from "axios";
import React, { useState, useEffect, useMemo} from "react";
import { useParams } from "react-router-dom";
import { post_api } from "../api/api";
import PostCard from "../components/PostCard";

function UserPosts() {
  const [userPost, setUsersPost] = useState([]);
  const params = useParams();


  //use useMemeo
  // const userId = useMemo(()=>{
  //   return params.userId;
  // }, [params.userId])

  useEffect(() => {
    retreveData();
  }, [params.userId]);

  const retreveData = async()=>{
    await axios.get(`${post_api}?userId=${params.userId}`).then((res) => {
      if (res.status == 200) {
        setUsersPost(res.data);
      }
    });
  }

  return (
    <>
      <div className="all_posts">
        <div className="container">
          <div className="row">
            {userPost.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <PostCard post={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPosts;
