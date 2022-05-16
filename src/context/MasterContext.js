import {createContext,useState} from 'react'

const MasterContext=createContext();

export const MasterProvider=({children})=>{
    const [state,setState]=useState(false);

    const switchBulb=()=>setState(!state);

    return <MasterContext.Provider value={{
        state,
        switchBulb
    }}>
        {children}
        </MasterContext.Provider>
};

export default MasterContext;