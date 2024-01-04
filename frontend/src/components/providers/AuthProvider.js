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
  const [isReady2, setIsReady2] = useState(false);
  const router = useRouter();

  //Modal states

  const [drop, setDrop] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  //Add Category

  const [colorgg, setColorgg] = useState("");
  const [color, setColor] = useState("");
  const [CategoryAdd, setCategoryAdd] = useState("");
  const [select, setSelect] = useState("");
  const [cateUser, setCateUser] = useState("");
  const [categoryData, setCategoryData] = useState();
  const [addCategory, setAddCategory] = useState("");

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
  const handleCategory = async () => {
    setModal2(false);

    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/addcategory",
        { addCategory },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getCategoryData = async () => {
    setIsReady2(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/addcategory", {
        headers: {
          Authorization: token,
        },
      });
      const { userCategory } = data;
      setCategoryData(userCategory);
      console.log(userCategory);
      setIsReady2(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        drop,
        setDrop,
        modal,
        setModal,
        select,
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
        SignOut,
        cateUser,
        getCategoryData,
        categoryData,
        handleCategory,
        addCategory,
        setAddCategory,
        isReady2,
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
