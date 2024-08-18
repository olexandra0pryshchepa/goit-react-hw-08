import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ redirectTo, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
