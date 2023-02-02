import React from "react";

const UserData = ({ user, setUserData }) => {
  const { address, name, phone } = user;
  

  
  return <div className="flex justify-between items-center text-center my-8 bg-red-300 py-12 rounded">
   <span className="w-1/5">{name}</span>
   <div className="w-1/5">
      <p className="font-bold">CONTACT</p>
      <p>{phone}</p>
   </div>
   <div className="w-1/5">
      <p className="font-bold">CITY</p>
      <p>{address?.city}</p>
   </div>
   <div className="w-1/5">
      <p className="font-bold">Address</p>
      <p>{address?.street}</p>
   </div>
   <div className="w-1/5">
       {/* The button to open modal */}
<label
onClick={()=>setUserData(user)}
htmlFor="user-modal" className="btn btn-error">View Details</label>
   </div>
  </div>;

  
};

export default UserData;
