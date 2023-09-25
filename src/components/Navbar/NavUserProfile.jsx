import { useSelector, useDispatch } from "react-redux";
import {
  userSelector,
  loginWithGoogle,
  logoutUser,
} from "@/features/auth/authSlice";
import { useEffect, useRef, useState } from "react";
const NavUserProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const user = useSelector(userSelector);
  useEffect(() => {
    // detect click outside of the element
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex items-center order-3 max-[500px]:hidden"
    >
      {user ? (
        <div
          aria-label="user profile dropdown"
          className="relative cursor-pointer mr-4"
        >
          <img
            src={user.photoURL}
            alt="user profile"
            className="h-10 w-10 rounded-full"
            onClick={() => setShowDropdown((prev) => !prev)}
          />
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-slate-100 border border-slate-700 rounded-lg w-40 z-[120]">
              <ul className="text-slate-900">
                <li className="p-2 border-b border-slate-300 hover:bg-white hover:text-black cursor-pointer rounded-tr-lg rounded-tl-lg">
                  Profile
                </li>
                <li className="p-2 border-b border-slate-300 hover:bg-white hover:text-black cursor-pointer">
                  Settings
                </li>
                <li
                  className="p-2 border-b border-slate-300 hover:bg-white hover:text-black cursor-pointer rounded-br-lg rounded-bl-lg"
                  onClick={() => logoutUser(dispatch)}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => loginWithGoogle(dispatch)}
          className="h-10 rounded-full border-2 text-black border-slate-700 px-5 bg-yellow-200 mx-5"
        >
          login / Sign-up
        </button>
      )}
    </div>
  );
};

export default NavUserProfile;
