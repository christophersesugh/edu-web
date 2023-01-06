import React from "react";
import { useRouter } from "next/router";
import { app } from "config/firebase";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useAlert } from "./alert-context";

type AuthContextProps = {
  user: any;
  register: ({ email, password }: { email: string; password: string }) => void;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};

const auth = getAuth(app);

const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider = (props: any) => {
  const [user, setUser] = React.useState<any | null>(null);
  const router = useRouter();
  const { setAlert } = useAlert();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  const register = ({ email, password }: { email: string; password: string }) =>
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setUser(user);
        router.push("/");
        setAlert({
          message: `Welcome ${user.email}`,
          status: "success",
          showAlert: true,
        });
      }
    );

  const login = ({ email, password }: { email: string; password: string }) =>
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      router.push("/");
      setAlert({
        message: `Welcome back ${user.email}`,
        status: "success",
        showAlert: true,
      });
    });

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout }}
      {...props}
    />
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
