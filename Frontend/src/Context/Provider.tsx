import { useState, ReactElement } from "react";
import AuthContext from "./Auth";

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [token, setToken] = useState({});
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
