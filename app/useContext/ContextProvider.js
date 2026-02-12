'use client'

import { createContext, useContext } from "react"


const ContextData = createContext()

export function useData() {
    return useContext(ContextData)
}



export default function ContextProvider({ children }) {


    return (
        <ContextData.Provider value={{}}>
            {children}
        </ContextData.Provider>
    )
}
