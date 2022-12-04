import { createContext, useState } from "react";

type AuthProps = { name?: string; accessToken?: string };
type Context = ReturnType<typeof useState<AuthProps>>;

export const AuthContext = createContext<Context>([] as any);

interface Props {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const defaultAuth = JSON.parse(localStorage.getItem("token") ?? "{}");

  const [auth, setAuth] = useState<AuthProps | undefined>(defaultAuth);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
