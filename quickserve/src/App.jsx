import { useState } from "react";
import { UserProvider } from "./contex";
import AppRoutes from "./routes/AppRoutes";
import ProductTile from "./components/ProductTile";
import CategoryDetails from "./pages/CategoryDetails";
import ProductCard from "./components/ProductCard";




function App() {



const [users,setUsers] = useState([
  {
    id: Date.now(),
    name: "Raj Sapale",
    email: "raj@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
    profilePic: "https://i.pravatar.cc/150?img=3"
}
])

const updateUser = (user,id) => {
  setUsers((prev) =>(prev.map((prevUser) => prevUser.id == id ? user : prevUser)))
};

const addUser = (user) =>{
  setUsers((prev)=>([...prev,{...user}]))
}


  return (
    <div className="scroll-smooth">
    <UserProvider value={{users,updateUser,addUser}}>
      <AppRoutes></AppRoutes>
      {/* <ProductTile></ProductTile> */}
    </UserProvider> 
    {/* <CategoryDetails></CategoryDetails> */}
   
  <ProductCard></ProductCard>
    


    </div>
  );
}

export default App;
