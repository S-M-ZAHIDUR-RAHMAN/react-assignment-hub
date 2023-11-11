
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(swal("User Logged out successfully!"))
            .catch()
    }

    const navLinks = <div className="lg:flex text-blue-500">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignments">Assignments</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/createAssignments">Create Assignments</NavLink></li>
                <li><NavLink to="/myAssignments">My Assignments</NavLink></li>
                <li><NavLink to="/submittedAssignments">Submitted assignments</NavLink></li>
            </>
                : <>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </div>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-blue-400 rounded-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="normal-case text-white rounded-full py-1 px-4 text-xl font-extrabold bg-slate-500 flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:gap-2 animate-bounce">
                        <div>

                        </div>
                        <div>
                            <span className="text-yellow-300">Assignment</span>Hub
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-2 md:flex-row md:gap-2">
                            <div className="w-10" style={{position:"relative"}}>
                            <span className=""><img className="rounded-full" src={`${user?.photoURL}`} alt="" /></span>

                            <div style={{position:"absolute", bottom:"-20px", left:"50%", transform:"translateX(-50%)", opacity:"0", transition:"opacity 5.0s ease-in-out"}} onMouseOver={(e) => e.target.style.opacity ="1"} onMouseOut={(e) => e.target.style.opacity ="0"}>

                            <span className="text-white w-20 md:w-auto flex-wrap font-semibold px-1 rounded-md shadow-2xl bg-black lg:w-auto" style={{}}>{user?.displayName}</span>
                            </div>
                            </div>


                          
                            <a onClick={handleLogOut} className="btn accent bg-yellow-400">Log out</a>
                        </div>
                            : <Link to="/login" className="btn accent bg-yellow-400">Log in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;