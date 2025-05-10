import { createContext,useContext } from "react";


export const UserContext = createContext({
 users: [ {
    id:Date.now(),
    name: "Raj Sapale",
    email: "raj@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
    profilePic: "https://i.pravatar.cc/150?img=3"
}],
updateUser: (user) => {},
addUser : (user) =>{}
})

export const useUser = () =>{
    return useContext(UserContext);
}

export const UserProvider = UserContext.Provider;