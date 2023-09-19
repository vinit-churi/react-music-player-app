import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { userSelector } from "@/features/auth/authSlice";
import PromptLogin from "@/components/General/PromptLogin";
const Protected = ({ children }) => {
  const user = useSelector(userSelector);

  return (
    <>
      {user ? (
        <>{children}</>
      ) : (
        <div className="h-[80vh] flex items-center justify-center">
          <PromptLogin />
        </div>
      )}
    </>
  );
};

// propType validation
Protected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protected;
