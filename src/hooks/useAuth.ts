import { AuthContext } from "@/context/AuthProvider";
import { useContext, useDebugValue, useEffect } from "react";

export const useAuth = () => {
  const [auth] = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.name ? "logged in" : "logged out"));
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(auth ?? {}));
  }, [auth]);
  return useContext(AuthContext);
};
