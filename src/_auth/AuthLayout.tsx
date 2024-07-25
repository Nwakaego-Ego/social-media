import { Outlet, Navigate } from "react-router-dom";
import "./auth.css";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="auth-container ">
          <div className="image-container"></div>
          <div className="signUpValidation">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
