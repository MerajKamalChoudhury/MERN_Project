// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   //  const Navigate = useNavigate();

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return <Element {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;


import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const {
    isAuthenticated,
    loading,
    children,
    adminRoute,
    isAdmin,
    redirect = "/login",
    redirectAdmin = "/profile",
  } = useSelector((state) => state.user);

  if (!loading) {
    if (isAuthenticated === false) {
      return <Navigate to={redirect} />;
    }

    if (adminRoute && !isAdmin) {
      return <Navigate to={redirectAdmin} />;
    }

    return children ? children : <Outlet />;
  }
  
  return null; // Render nothing while loading user data
};

export default ProtectedRoute;
