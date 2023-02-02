import axios from "axios";
import React, { useEffect, useState } from "react";
import UserModal from "../UserModal/UserModal";
import UserData from "./../UserData/UserData";
import Pagination from './../Pagination/Pagination';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex)
  
  return (
    <div>
      <div className="text-3xl font-bold mt-5 text-center">All User Details</div>
      <div className="mx-24 h-screen">
        {currentPosts?.map((user) => (
          <UserData key={user.id} user={user} setUserData={setUserData}></UserData>
        ))}
      </div>
      <UserModal userData={userData}></UserModal>
      <Pagination
       totalPosts={users.length}
       postPerPage={postPerPage}
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default Users;
