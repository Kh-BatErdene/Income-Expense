"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../../app/common";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const signup = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      router.push("/dashboard");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  });

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      {
        lo;
      }
    } catch (error) {}
  };

  //Modal states

  const [drop, setDrop] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  //Add Category

  const [categorytitle, setTitle] = useState("");
  const [categoryimg, setImg] = useState("");
  const [colorgg, setColorgg] = useState("");
  const [color, setColor] = useState("");
  const [CategoryAdd, setCategoryAdd] = useState("");

  //Category data

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
        CategoryAdd,
        setCategoryAdd,
        modal2,
        setModal2,
        modal3,
        setModal3,
        color,
        setColor,
        signup,
        login,
        isLoggedIn,
      }}
    >
      {isReady && children}
      {!isReady && (
        <span className="loading loading-spinner loading-lg absolute top-1/2 left-1/2"></span>
      )}
    </AuthContext.Provider>
  );
};

export const useAll = () => {
  return useContext(AuthContext);
};
