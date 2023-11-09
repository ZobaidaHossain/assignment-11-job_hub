import { Link, NavLink } from "react-router-dom";
import img from '../assets/logo.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  const{user,logOut}=useContext(AuthContext);

  const [isHovering, setIsHovering] = useState(false);



  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      console.log('user login successfully');
    })
    .catch(error=>console.log(error));
  }



  const navbar=<>
    <li ><NavLink className="btn btn-warning mr-4" to="/">Home</NavLink></li>
    <li><NavLink className="btn  btn-warning mr-4" to="/alljob">All Jobs</NavLink></li>
    <li><NavLink className="btn  btn-warning mr-4" to="/cart">Applied Jobs</NavLink></li>
    <li><NavLink className="btn  btn-warning mr-4" to="/addjob">Add A Job</NavLink></li>
    <li><NavLink className="btn  btn-warning mr-4" to="/myjobs">My Jobs</NavLink></li>
    <li><NavLink className="btn btn-warning mr-4" to="/blogs">Blogs</NavLink></li>
  
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navbar}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold">
    <img className="w-[4rem] h-[3rem]"src={img} alt="" />
    <p>JobHub</p>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      {navbar}
    </ul>
  </div>
  <div className="navbar-end ml-2">

  {user ? (
          <div className="profile-section ">
            <div
              className="btn btn-ghost btn-circle avatar w-[4.5rem] h-[4.5rem]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img className="" src={user.photoURL} alt="Profile" />
              {isHovering && (
                <div className="hover-text">
                  <p>{user.displayName || user.email}</p>
                </div>
              )}
            </div>
            <a onClick={handleLogOut} className="btn btn-sm ml-2">Sign out</a>
          </div>
        ) : (
          <Link to="/signin">
            <a className="btn btn-sm">Login</a>
          </Link>
        )}
  

  </div>
</div>
    );
};

export default Navbar;