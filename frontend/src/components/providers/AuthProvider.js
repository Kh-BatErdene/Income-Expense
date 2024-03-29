"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../../common";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

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
  const [recordIcon, setRecordIcon] = useState();
  const [inputIcon, setInputIcon] = useState("");
  const [inputText, setInputText] = useState("");
  const [colorgg, setColorgg] = useState("");
  const [color, setColor] = useState("");
  const [CategoryAdd, setCategoryAdd] = useState();
  const [select, setSelect] = useState("");
  const [cateUser, setCateUser] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [Category_name, setCategory_name] = useState("");
  const [iconId, setIconId] = useState();
  const [Icon, setIcon] = useState();
  const [upIcon, setUpIcon] = useState();
  const [cateColor, setCateColor] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isType, setIsType] = useState(false);

  const signup = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/signup", {
        email,
        password,
      });
      router.push("/");
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
      const { data } = await api.post("/login", { email, password });
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
  const [clickcate, setClickCate] = useState(true);
  const handleCategory = async () => {
    setModal2(false);

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/addcategory",
        { Category_name, iconId, Icon, color },
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

      setCategoryData(data);
      setIsReady2(true);
    } catch (err) {
      console.log(err);
    }
  };

  const [amount, setAmount] = useState("");

  //Record
  const AddRecordCard = async () => {
    try {
      setIsReady(false);
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/records",
        { amount, inputText, recordIcon, cateColor, isExpense, time, date },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsReady(true);
      setModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  const [recordData, setRecordData] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState(90);
  const [refresh, setRefresh] = useState(0);

  const changeDays = async () => {
    if (days === 90) {
      setDays(60);
    }
    console.log(days);
    if (days === 60) {
      setDays(30);
    }
    if (days === 30) {
      setDays(14);
    }
    if (days === 14) {
      setDays(7);
    }
    if (days === 7) {
      setDays(90);
    }
    setRefresh(refresh + 2);
  };
  const changeDays2 = async () => {
    if (days === 90) {
      setDays(7);
    }
    console.log(days);
    if (days === 7) {
      setDays(14);
    }
    if (days === 14) {
      setDays(30);
    }
    if (days === 30) {
      setDays(60);
    }
    if (days === 60) {
      setDays(90);
    }
    setRefresh(refresh + 2);
  };
  const [old, setOld] = useState(false);

  const GetRecordCard = async () => {
    setIsReady2(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/records", {
        headers: {
          Authorization: token,
        },
        params: {
          days: days,
          old: old,
        },
      });
      setRecordData(data.reverse());
      setIsReady2(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    GetRecordCard();
    getCategoryData();
  }, []);

  useEffect(() => {
    GetRecordCard();
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        clickcate,
        setClickCate,
        changeDays2,
        changeDays,
        old,
        setOld,
        days,
        setDays,
        time,
        setTime,
        date,
        setDate,
        isType,
        setIsType,
        isExpense,
        setIsExpense,
        recordIcon,
        cateColor,
        setCateColor,
        setRecordIcon,
        recordData,
        AddRecordCard,
        GetRecordCard,
        setAmount,
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
        setIsLoggedIn,
        SignOut,
        cateUser,
        getCategoryData,
        categoryData,
        handleCategory,
        Category_name,
        setCategory_name,
        setCategoryData,
        iconId,
        setIconId,
        isReady2,
        setIcon,
        Icon,
        setUpIcon,
        upIcon,
        inputIcon,
        setInputIcon,
        inputText,
        setInputText,
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
