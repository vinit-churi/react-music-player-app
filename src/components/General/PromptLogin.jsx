import { useSelector, useDispatch } from "react-redux";
import { userSelector, loginWithGoogle } from "@/features/auth/authSlice";
const PromptLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  console.log(user);
  return (
    <button
      onClick={() => loginWithGoogle(dispatch)}
      className="h-10 rounded-full border-2 text-black border-slate-700 px-5 bg-yellow-200 mx-5"
    >
      login / Sign-up
    </button>
  );
};

export default PromptLogin;
