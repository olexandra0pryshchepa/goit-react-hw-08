import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ redirectTo, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default RestrictedRoute;
