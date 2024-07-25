import { Outlet, Navigate } from "react-router-dom";

const RootLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      <div>{!isAuthenticated ? <Navigate to="/sign-up" /> : <Outlet />}</div>
    </>
  );
};

export default RootLayout;
