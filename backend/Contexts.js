import {createContext} from "react";
export const AuthenticatedContext = createContext(true);
export const UserContext = createContext({
    type: "parent"
})