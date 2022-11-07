import { useContext } from "react";
import { NavContext } from "./NavContext";

export const useNavContext = () => useContext(NavContext);
