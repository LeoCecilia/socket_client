import { axiosPrivate } from "@/api/axios";
import { useSocket } from "@/hooks/useSocket";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const [auth, setAuth] = useAuth();
  const setupSocket = useSocket();
  async function handleLogin() {
    const res = await axiosPrivate.post(
      "/auth/login",
      JSON.stringify({
        userName: "kive",
        password: "123456",
      })
    );
    setAuth(res.data);
    setupSocket();
  }
  return auth?.name ? (
    <div>{auth.name}</div>
  ) : (
    <button onClick={handleLogin}>Login</button>
  );
}
