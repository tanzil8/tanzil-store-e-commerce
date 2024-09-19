import { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../utils/utils";

// Create AuthContext
export const AuthContext = createContext();

function Contextprovider({ children }) {
  const [user, setUser] = useState({
    isLogin : false,
    userInfo : {},
  }); // Default to null if no user is logged in

  console.log("test",user.userInfo);
  
  const [loading, SetLoading] = useState(true);

  // Handle user state changes
  function onAuthChanged(user) {
    if (user) {
        console.log(user);
        
        setUser({isLogin : true , userInfo : {
            name : user?.displayName,
            photoUrl : user?.photoURL,
            email : user?.email
        }})
    }else{
        setUser({isLogin : false, userInfo : {}})
    }

    SetLoading(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? (
      
        <div className="w-full  bg-white ">
        <p className="text-center mt-96 text-8xl font-extrabold">Loading...</p></div>
      ) : (
        children // No curly braces here
      )}
    </AuthContext.Provider>
  );
}

export default Contextprovider;
