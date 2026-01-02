"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* =======================
   Types
======================= */
interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isInitialized: boolean;
  login: (email: string, password: string) => { ok: boolean; msg?: string };
  register: (email: string, password: string) => { ok: boolean };
  logout: () => void;
}

/* =======================
   Demo User
======================= */
const demoUser: User = {
  email: "admin@gmail.com",
  password: "123456",
};

/* =======================
   Context
======================= */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* =======================
   Provider
======================= */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  /* =======================
     Load user on mount (Client only)
  ======================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsInitialized(true);
  }, []);

  /* =======================
     Login
  ======================= */
  const login = (email: string, password: string) => {
    const dbUser = localStorage.getItem("authUserDB");
    const parsedUser: User = dbUser
      ? JSON.parse(dbUser)
      : demoUser;

    // Save demo user if DB not exists
    if (!dbUser) {
      localStorage.setItem("authUserDB", JSON.stringify(demoUser));
    }

    if (
      parsedUser.email === email &&
      parsedUser.password === password
    ) {
      setUser(parsedUser);
      localStorage.setItem("authUser", JSON.stringify(parsedUser));
      return { ok: true };
    }

    return { ok: false, msg: "Invalid email or password" };
  };

  /* =======================
     Register
  ======================= */
  const register = (email: string, password: string) => {
    const newUser: User = { email, password };
    localStorage.setItem("authUserDB", JSON.stringify(newUser));
    return { ok: true };
  };

  /* =======================
     Logout
  ======================= */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isInitialized,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* =======================
   Hook
======================= */
function assertContext(ctx: AuthContextType | undefined): asserts ctx is AuthContextType {
  if (ctx === undefined) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
}

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  assertContext(ctx);
  return ctx;
};
