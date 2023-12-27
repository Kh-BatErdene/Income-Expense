"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";
import ChangeColor from "@/components/ChangeColor";

const inter = Inter({ subsets: ["latin"] });

const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [drop, setDrop] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const [categorytitle, setTitle] = useState("");
  const [categoryimg, setImg] = useState("");
  const [colorgg, setColorgg] = useState("");
  const [color, setColor] = useState("");
  const [categoryAdd, setCategoryAdd] = useState("");
  //Add category

  const data = [
    { img: "/home.svg", title: "Home" },
    { img: "/gift.svg", title: "Gift" },
    { img: "/food.svg", title: "Food" },
    { img: "/Wine.svg", title: "Drink" },
    { img: "/Taxi.svg", title: "Taxi" },
    { img: "/TShirt.svg", title: "Shopping" },
  ];

  const [select, setSelect] = useState("");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider
          value={{
            drop,
            setDrop,
            modal,
            setModal,
            select,
            data,
            categorytitle,
            setTitle,
            categoryimg,
            setImg,
            colorgg,
            setColorgg,
            categoryAdd,
            setCategoryAdd,
            modal2,
            setModal2,
            modal3,
            setModal3,
            color,
            setColor,
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
