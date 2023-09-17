import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../../features/audioPlayer/audioPlayerSlice";
const PageLink = ({ linkText, className, icon, to, ...props }) => {
  // alert("to", to);
  const dispatch = useDispatch();

  return (
    <NavLink
      {...props}
      to={to}
      onClick={() => dispatch(setShowSidebar(false))}
      className={({ isActive }) => {
        return `${className} ${
          isActive
            ? "text-slate-500 font-medium underline underline-offset-4 decoration-double decoration-slate-300"
            : "text-slate-900 font-medium"
        }`;
      }}
    >
      <img src={icon} alt="icon" className="" />
      <p>{linkText}</p>
    </NavLink>
  );
};

PageLink.propTypes = {
  linkText: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  // Other props that you might want to validate
};

export default PageLink;
