import { createContext, useContext } from "react";
interface User {
    role:string;
    id: string;
    name: string;
    email: string;
}
interface AuthContextType {
    user: User | null;
    login: (token:string) => void;
    logout: () => void; 
}
export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
)

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be insert inside of AuthProvider");
    }
    return context;
}