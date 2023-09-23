import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutesLogin(props) {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  return props.children;
}
