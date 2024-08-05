import { useState } from "react";
import { NavLink } from "react-router-dom";
import {IoClose, IoMenuSharp} from "react-icons/io5"
import {useDispatch, useSelector} from 'react-redux'
import avatarImg from '../assets/commentor.png'
import {useLogoutUserMutation} from '../redux/features/Auth/authApi'
import {logout} from '../redux/features/Auth/authSlice'
const navLists=[
  {name:"Home",path:"/"},
  {name:"About us",path:"/about-us"},
  {name:"Privacy Policy",path:"/privacy"},
  {name:"Contact Us",path:"/contact"},
]
const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen]=useState()
  const {user}=useSelector((state)=>state.auth)
  const toggleMenu=()=>setIsMenuOpen(!isMenuOpen)
 const [logoutUser]=useLogoutUserMutation
 const dispatch=useDispatch()
  const handleLogout=async()=>{
    try{
await logoutUser().unwrap()
dispatch(logout())
    }catch(error){

    }
  }
  return (
   <header className="bg-slate-50 py-6 border">
    <nav className="container mx-auto flex justify-between px-5">
 <ul className="sm:flex hidden item-center gap-8">
  {navLists.map((list,index)=>(
    <li key={index}>
      <NavLink to={`${list.path}`}
      className={({isActive})=>isActive?"active":""}
      
      >{list.name}</NavLink>
      </li>

  ))}
   {
    user && user.role==='user'?(<li className="flex items-center gap-3">
      <img src={avatarImg} alt="" className="size-8"/>
   <button className="bg-[#1e73be] px-4 py-1.5 text-white rounded-sm"
   onClick={handleLogout}
   >Logout</button>
    </li>):(<li>
      <NavLink to="/login">Login</NavLink>
    </li>)
  }
  {
    user && user.role==='admin' &&(<li className="flex items-center gap-3">
      <img src={avatarImg} alt="" className="size-8"/>
   <Link to="/dashboard"><button className="bg-[#1e73be] px-4 py-1.5 text-white rounded-sm">Dashboard</button></Link>
    </li>) 
  }
  
 </ul>
 <div className="flex items-center sm:hidden">
  <button 
  onClick={toggleMenu}
  className='flex item-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900'> 
  {
    isMenuOpen?<IoClose className="size-6"/>:<IoMenuSharp className="size-6"/>
  }
  </button>
 </div>
 
    </nav>

    {/* mobile menu items */}
    {
      isMenuOpen &&(
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
  {navLists.map((list,index)=>(
    <li className="mt-5 px-4" key={index}>
      <NavLink to={`${list.path}`}
      onClick={()=>setIsMenuOpen(false)}
      className={({isActive})=>isActive?"active":""}
      
      >{list.name}</NavLink>
      </li>

  ))}
  <li className="px-4 mt-5">
    <NavLink to="/login">Login</NavLink>
  </li>
 </ul>
      )
    }
    </header>
  )
}

export default Navbar
 