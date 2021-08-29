import { useState, useEffect } from "react";
import { getData, storeData, deleteData } from "../libs/storage";

const getUserInfos = () => {
  return getData("user");
};

const saveUserInfos = async (userInfos) => {
  await storeData("user", userInfos);
};

const deleteUserInfos = async () => {
  await deleteData("user");
};



export const useUser = () => {
  const [userInfos, setUserInfos] = useState("loading");

  const handleGetUser = async () => {
    const userStoredData = await getUserInfos();
    setUserInfos(userStoredData);
  };

  const saveUser = async (infos) => {
    await saveUserInfos(infos);
    setUserInfos(infos);
  };

  const logout = async () => {
    await deleteUserInfos()
    setUserInfos(null)
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  const isConnected = userInfos === "loading" ? "loading" : userInfos !== null;

  return { userInfos, isConnected, saveUser, logout };
};
