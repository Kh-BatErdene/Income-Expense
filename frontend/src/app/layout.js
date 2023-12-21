"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Geld",
// };
const AuthContext = createContext();
export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "abv");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, signIn }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
