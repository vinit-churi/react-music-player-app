import { useSelector, useDispatch } from "react-redux";
import { userSelector, loginWithGoogle } from "@/features/auth/authSlice";
import { useEffect, useRef } from "react";
const NavUserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  return (
    <div className="flex items-center order-3 max-[500px]:hidden">
      {user ? (
        <div aria-label="user profile dropdown">the user has logged in </div>
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
