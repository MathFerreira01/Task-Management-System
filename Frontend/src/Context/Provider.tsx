import {
  useContext,
  useState,
  ReactElement,
  createContext,
  useEffect,
} from "react";
import { auth } from "../services/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";

export interface AuthContextModel {
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logout: () => {};
}

const UserContext = createContext<AuthContextModel>({} as AuthContextModel);

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, logout, signIn, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(UserContext);
};
