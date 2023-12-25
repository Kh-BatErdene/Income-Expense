"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [drop, setDrop] = useState();
  const [modal, setModal] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{ drop, setDrop, modal, setModal }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAll = () => {
  return useContext(AuthContext);
};
