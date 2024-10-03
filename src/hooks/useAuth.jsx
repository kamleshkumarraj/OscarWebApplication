// hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../contextAPI/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
