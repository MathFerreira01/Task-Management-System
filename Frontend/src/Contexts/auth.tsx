import { createContext, useEffect, useState, ReactNode } from "react";
import IUserAuth from "../interface/IUserAuth";

interface Children {
  children: ReactNode;
}

interface ContextData {
  user: null | IUserAuth;
  signed: boolean;
  signin: (username: string, email: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  signout: () => void;
}

const AuthContext = createContext<ContextData>({
  user: null,
  signed: false,
  signin: () => {},
  signup: () => {},
  signout: () => {},
});

const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<IUserAuth | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user: { email: string }) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email: string, password: string, username: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") as string);

    const hasUser = usersStorage?.filter(
      (user: { email: string }) => user.email === email
    );

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem(
          "user_token",
          JSON.stringify({ email, token, username })
        );
        setUser({ email, password, username });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (username: string, email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") as string);

    const hasUser = usersStorage?.filter(
      (user: { email: string }) => user.email === email
    );

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { username, email, password }];
    } else {
      newUser = [{ username, email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
