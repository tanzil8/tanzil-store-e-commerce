
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themcontext';
import { useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { AuthContext } from '../context/login';
import { getAuth, signOut } from 'firebase/auth';
import { Badge, imageListClasses } from '@mui/material';
import { TiShoppingCart } from "react-icons/ti";
import { Cardcontex } from '../context/cardpagecontex';


function Header() {

  const {Carditem} = useContext(Cardcontex)
console.log('Carditem',Carditem);

    const {theme , setTheme} = useContext(ThemeContext)
    console.log('theme', theme);
    
    const {user, setUser } = useContext(AuthContext)
 console.log('user',user);
 
function handlinglogout() {
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  alert(error)
});
}


    return(
    <>   


<nav className={`${theme == 'light' ? "bg-white text-gray-600" : "bg-gray-800 text-white"}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-PNG.png" className="h-20" alt="Flowbite Logo" />
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Tanzil store</span>
    </a>
    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
    <div className="" >
      <ul className={` mb-3 flex ${theme == 'light' ? "bg-white text-gray-600" : "bg-gray-800 text-white"}`}>
        {user?.isLogin? < ><img class="mt-4 w-12 h-12 rounded-full" src={user?.userInfo.photoUrl} alt="Rounded avatar"/>  <button onClick={handlinglogout} type="button" class= "mt-5 ml-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button> </> :  <> <li className="mt-5 px-4 py-2 font-bold"><Link to="/Signin">Signin</Link></li> <li className="mt-5 px-4 py-2 font-bold"><Link to="/signup">Signup</Link></li>     </>  }
 
             
                <li className="mt-5 px-4 py-2 font-bold"><Link to="/">Home</Link></li>
              
      </ul>
    </div>
    <Link to={'/cardpage'}>
    <div class="relative inline-flex">
  <TiShoppingCart style={{fontSize: 35}}/>
  <span class="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white">
  {Carditem.length}
  </span>
</div>
  </Link>

<Brightness4Icon  onClick={()=>{
if (theme == "light") {
  setTheme('dark')
}else{
  setTheme('light')
}

}}/>
  </div>

</nav>


</>
    )
   
}

export default Header


