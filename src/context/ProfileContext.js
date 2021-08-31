import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const { data: profile } = useFetch("/api/site-profile");
  return (
    <ProfileContext.Provider value={{ profile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
