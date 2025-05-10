import { useState } from "react";
import { useUser } from "../contex";

function EditProfile() {
//   const [profile, setProfile] = useState({  // passing object from parent 
//     name: user.name,
//     phone: user.phone,
//     address: user.address,
//   });


const{users,updateUser}=useUser();
// console.log(users)
const user=users[0];
const [profile, setProfile] = useState(user)


  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(profile , profile.id)
    console.log("Updated profile:", profile);
    // Call API or update storage here
  };

  return (
    <div className="h-full w-[95%] flex flex-col items-center justify-center p-4">
     
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Edit Profile</h2>
        <form
        className='w-full ml-8 space-y-3'
         onSubmit={handleSubmit} >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              maxLength="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              rows="3"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#9e0059] text-white py-2 rounded-md hover:bg-[#ff7d00]"
          >
            Save Changes
          </button>
        </form>
     
    </div>
  );
};

export default EditProfile;
