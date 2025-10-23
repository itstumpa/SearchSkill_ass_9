// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router';
// import '../../App.css';

// const Navbar = () => {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     if (isHome) {
//       window.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isHome]);

//   const navbarClasses = `navbar px-4 md:px-8 lg:px-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//     isHome
//       ? scrolled
//         ? 'bg-black/30 backdrop-blur-md text-white shadow-md'
//         : 'bg-transparent text-white'
//       : 'bg-black/30 backdrop-blur-md text-white shadow-md'
//   }`;

//   return (
//     <div className={navbarClasses}>
//       {/* Navbar Start */}
//       <div className="navbar-start flex items-center">
//         <div className="dropdown">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-sm lg:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/register">Register</NavLink>
//             </li>
//             <li>
//               <NavLink to="/login">Login</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Logo */}
//         <NavLink to="/" className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="STAR.IO Logo"
//             className="h-6 w-6 md:h-8 md:w-8"
//           />
//           <span className="text-lg md:text-xl font-bold">SearchSkill</span>
//         </NavLink>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-4">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/register">Register</NavLink>
//           </li>
//           <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//           <li>
//             <NavLink to="/myprofile">My Profile</NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import '../../App.css';

const auth = getAuth();

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const { user, loading } = useAuth();

  const navbarClasses = `navbar px-4 md:px-8 lg:px-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome
      ? scrolled
        ? 'bg-black/30 backdrop-blur-md text-white shadow-md'
        : 'bg-transparent text-white'
      : 'bg-black/30 backdrop-blur-md text-white shadow-md'
  }`;

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optionally, redirect user or show a message here
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
console.log(user)
  return (
    <div className={navbarClasses}>
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <NavLink to="/myprofile">My Profile</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="STAR.IO Logo"
            className="h-6 w-6 md:h-8 md:w-8"
          />
          <span className="text-lg md:text-xl font-bold">SearchSkill</span>
        </NavLink>
      </div>

      {/* Navbar End */}
     <div className="navbar-end hidden lg:flex items-center space-x-4">
  <ul className="menu menu-horizontal px-1 space-x-4">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    {!user && (
      <>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </>
    )}
    {user && (
      <>
        <li>
          <NavLink to="/myprofile" className="flex items-center text-center">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "/default-avatar.png"}
                referrerPolicy="no-referrer"
                alt="User Avatar"
                className="w-8 h-8 border-2  rounded-full object-cover cursor-pointer"
              />
            </div>
            <span className=''>My Profile</span>
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogout} className="btn btn-ghost ml-8 bg-red-700 hover:text-white">
            Logout
          </button>
        </li>
      </>
    )}
  </ul>
</div>

    </div>
  );
};

export default Navbar;
