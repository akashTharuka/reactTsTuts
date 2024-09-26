import React, { useState, createContext } from "react"
import User from "./User"

export type AuthUser = {
    name: string,
    email: string
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

const UserContext = createContext<UserContextType | null>(null);

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {

    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;