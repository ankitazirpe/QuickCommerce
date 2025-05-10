import React, { useState } from "react";
import Order from "./Orders";
import EditProfile from "./EditProfile";
import { useUser } from "../contex";
import { useNavigate } from "react-router-dom";


function Profile() {
//   const user = {
//     name: "Raj Sapale",
//     email: "raj@example.com",
//     phone: "+91 9876543210",
//     address: "Mumbai, Maharashtra",
//     profilePic: "https://i.pravatar.cc/150?img=3", // placeholder image
//   };
const navigate = useNavigate()
const{users}=useUser()

const user = users[0];
// console.log(users)


const[isOrder,setIsOrder] = useState(false) 
const[isEditProfile,setIsEditProfile] = useState(false) 
const [display, setDisplay] = useState(true)

function handleProfile(){
    setIsOrder(false)
    setIsEditProfile(true)
    setDisplay(false)
    }

const handleOrder =() =>{
setIsOrder(true)
setIsEditProfile(false)
setDisplay(false)
}

const handleClick = () =>{
    navigate('/')
    // console.log("clicked")
}

  return (
    <div className="h-full w-full flex justify-between items-center ">
      <div className=" w-[20%] h-screen bg-gradient-to-b from-[#2a9d906d] to-white p-6 rounded-2xl shadow-md ml-60 my-2 relative  ">
        <div className="flex flex-col items-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-800">{user.email}</p>
          <p className="text-gray-800">{user.phone}</p>
          <p className="text-gray-800 text-center mt-2">{user.address}</p>       
        </div>

        <button
        onClick={handleProfile}
        className="mt-6 w-[95%] bg-[#8e8d8d] text-white px-4 py-2 rounded-md hover:bg-[#ff7d00] transition-all">
            Edit Profile
          </button>

        <button
        onClick={handleOrder}
        className="mt-2 w-[95%] bg-[#8e8d8d] text-white px-4 py-2 rounded-md hover:bg-[#ff7d00] transition-all">
           Orders
          </button>  

        <button 
        onClick={handleClick}
        className=" w-[95%] mt-6 bg-[#8e8d8d] text-white px-4 py-2 rounded-md hover:bg-[#ff0000] transition-all absolute  bottom-1 left-2 ">
            Log Out 
          </button>
       
      </div>
      <div
        className="w-1/2 h-screen border-2 border-gray-400 rounded-2xl mr-45 shadow-md">
        {display && <h1
        className=" h-40 w-[100%] text-5xl bg-gradient-to-l from-[#2a9d90] via-[#ffb347]  to-[#9e0059] bg-clip-text text-transparent m-10 font-extrabold">
            Hello <br/> {user.name}</h1>}

        {isOrder && <Order></Order>}
        {isEditProfile && <EditProfile></EditProfile>}

        </div>
    </div>
  );
};

export default Profile;
