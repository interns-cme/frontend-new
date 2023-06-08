import { Dispatch, SetStateAction, useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import { User } from "../models/IUserProps.model";
type SetUser = Dispatch<SetStateAction<User | null>>;

const useCheckLoggedIn = (navigate: NavigateFunction, setUser: SetUser) => {
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [setUser, navigate]);
};

export default useCheckLoggedIn;
