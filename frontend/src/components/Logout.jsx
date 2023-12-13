import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.js";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    async function _logout() {
      setCurrentUser({
        _id: null,
        username: null,
        userType: null,
      });
      navigate("/signin");
    }

    setTimeout(() => {
      _logout();
    }, 500);
  }, []);

  return <div>You are currently being logged out....</div>;
}
