import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  email: string;
  password: string;
}

const demoUser: User = {
  email: "admin@gmail.com",
  password: "123456",
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { ok: boolean; msg?: string };
  register: (email: string, password: string) => { ok: boolean };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email: string, password: string) => {
    const dbUser = localStorage.getItem("authUserDB");
    const parsed = dbUser ? (JSON.parse(dbUser) as User) : demoUser;

    if (!dbUser) {
      localStorage.setItem("authUserDB", JSON.stringify(demoUser));
    }

    if (parsed.email === email && parsed.password === password) {
      setUser(parsed);
      localStorage.setItem("authUser", JSON.stringify(parsed));
      return { ok: true };
    }

    return { ok: false, msg: "Invalid email or password" };
  };

  const register = (email: string, password: string) => {
    const newUser: User = { email, password };
    localStorage.setItem("authUserDB", JSON.stringify(newUser));
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
