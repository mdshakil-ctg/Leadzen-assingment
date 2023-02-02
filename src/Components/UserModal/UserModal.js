import React from "react";

const UserModal = ({ userData }) => {
  console.log(userData);
  const { address, company, email, name, phone, username, website } = userData;
  return (
    <div className="w-2/3">
      <input type="checkbox" id="user-modal" className="modal-toggle" />
      <label htmlFor="user-modal" className="modal cursor-pointer">
        <label className="modal-box w-11/12 max-w-5xl" htmlFor="">
          <h3 className="text-xl font-bold ml-16  mb-3" >User Full Details</h3>
          <div className="flex">
            <div className="w-2/5 px-20">
              <p className="font-bold mb-4">Name <br /><span className="font-normal">{name}</span> </p>
              <p className="font-bold mb-4">UserName <br /><span className="font-normal">{username}</span> </p>
              <p className="font-bold mb-4">Email <br /><span className="font-normal">{email}</span> </p>
              <p className="font-bold mb-4">Phone <br /><span className="font-normal">{phone}</span> </p>
            </div>
            <div className="w-3/5 px-24">
            <p className="font-bold mb-4">Address <br /><span className="font-normal">{address?.street} {address?.suite}</span> </p>
            <p className="font-bold mb-4">City <br /><span className="font-normal">{address?.city}</span> </p>
            <p className="font-bold mb-4">Website <br /><span className="font-normal">{website}</span> </p>
            <p className="font-bold mb-4">Company Name <br /><span className="font-normal">{company?.name}</span> </p>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default UserModal;
