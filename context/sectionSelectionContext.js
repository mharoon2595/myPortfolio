'use client'
import {createContext, useContext, useState} from "react"


const SectionContext=createContext(null)


export const SectionContextProvider=({children})=>{
   const [activeSection, setActiveSection]=useState('Home');
   const [lastClick, setLastClick]=useState(0)


return(
    <SectionContext.Provider value={{activeSection, setActiveSection, lastClick, setLastClick}}>
    {children}
    </SectionContext.Provider>
)
}


export function useActiveContext(){
    const context=useContext(SectionContext)

    if(context===null){
        throw new Error("Must be used within an active component")
    }

    return context
}