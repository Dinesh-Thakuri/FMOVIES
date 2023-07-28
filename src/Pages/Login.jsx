import React, { useState } from "react";

import isEmail from "validator/lib/isEmail";
import { login } from "../Redux/Slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(isEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert("Enter correct email.");
    }

    // api call to backend/firebase
    // backend gives token

    let token = "hhhjhajsdf.adsfuipi2323";

    // let isRememberMe = false;

    dispatch(login(token));
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center text-black bg-black">
      <h1>Hello</h1>
    </div>
  );
};

export default Login;
