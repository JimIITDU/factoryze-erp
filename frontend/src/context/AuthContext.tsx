'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { AuthUser } from '@/types/auth.types';

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const id = localStorage.getItem('id');
    if (token && role && id) {
      setUser({ token, role: role as AuthUser['role'], id });
    }
  }, []);

  const login = (u: AuthUser) => {
    localStorage.setItem('token', u.token);
    localStorage.setItem('role', u.role);
    localStorage.setItem('id', u.id);
    setUser(u);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);