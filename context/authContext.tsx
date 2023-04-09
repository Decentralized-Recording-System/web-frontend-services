import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
  user: String;
  login: (token: any) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: "",
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<String>("");

  const login = (token: any) => {
    setUser(token);
  };

  const logout = () => {
    setUser("");
  };

  const value = {
    user,
    login,
    logout,
  };
  
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
