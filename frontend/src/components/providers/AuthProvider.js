"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cateUser, setCateUser] = useState("");
  const router = useRouter();

  const signup = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/signup", {
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

  const AddCategory = async (value) => {
    setModal2(!modal2);
    setIsLoading(true);

    try {
      const { data } = await api.post("/addcategory", {
        value,
      });
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }

    // try {
    //   const token = localStorage.getItem("token");
    //   const { data } = await api.get("/addcategory", {
    //     headers: {
    //       authorization: token,
    //     },
    //   });

    //   console.log("GGG", data, typeof data);
    //   const { CategoryUser } = data;
    //   setCateUser(CategoryUser[0]);
    //   console.log(CategoryUser[0]);
    // } catch (error) {
    //   console.log("---boldgve duraka", error);
    // }
  };

  //get Token
  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  }, []);

  const SignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  const login = async (email, password) => {
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
  const [select, setSelect] = useState("");

  //Category data

  const data = [
    { img: "/home.svg", title: "Home" },
    { img: "/gift.svg", title: "Gift" },
    { img: "/food.svg", title: "Food" },
    { img: "/Wine.svg", title: "Drink" },
    { img: "/Taxi.svg", title: "Taxi" },
    { img: "/TShirt.svg", title: "Shopping" },
  ];

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
        AddCategory,
        SignOut,
        cateUser,
      }}
    >
      {isReady && children}
      {!isReady && (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="flex flex-col justify-center items-center gap-7">
            <img className="w-40 mb-10" src="/logo.svg" />
            <div className="loading loading-spinner loading-lg "></div>
            <p>Түр хүлээнэ үү...</p>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAll = () => {
  return useContext(AuthContext);
};
