import { Routes, Route } from "react-router-dom";
import SignInForm from "../src/_auth/forms/signInForm";
import Home from "../src/_root/pages/home";
import SignUpForm from "../src/_auth/forms/signUpForm";
import AuthLayout from "../src/_auth/AuthLayout";
import RootLayout from "../src/_root/RootLayout";
import "./global.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route index element={<Home />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
