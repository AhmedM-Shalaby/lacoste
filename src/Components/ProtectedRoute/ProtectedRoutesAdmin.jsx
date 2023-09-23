import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutesAdmin(props) {
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (role !== "admin") {
      return navigate("/");
    }
  }, [role]);
  return <>{props.children}</>;
}
