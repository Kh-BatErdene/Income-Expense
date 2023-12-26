"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [drop, setDrop] = useState();
  const [modal, setModal] = useState(false);
  //Add category

  const data = [
    {
      title: "Home",
      img: "Vector.svg",
    },
  ];
  const [select, setSelect] = useState("");
  function handleCategory(e) {
    setSelect(e.title);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider
          value={{
            drop,
            setDrop,
            modal,
            setModal,
            handleCategory,
            select,
            data,
          }}
        >
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAll = () => {
  return useContext(AuthContext);
};
