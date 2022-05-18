import {createContext,useEffect,useState} from 'react'

const MasterContext=createContext();

export const MasterProvider=({children})=>{
    
    useEffect(()=>{
        getBulbData();
    },[]);
    
    const [state,setState]=useState(false);
    const [bulbData,setBulbData]=useState([]);

    const switchBulb=()=>setState(!state);

    const getBulbData=async()=>{
        const response=await fetch('http://localhost:3000/bulbinfo.json');
        const data=await response.json();
        setBulbData(data);
    }

    return <MasterContext.Provider value={{
        state,
        bulbData,
        switchBulb,
    }}>
        {children}
        </MasterContext.Provider>
};

export default MasterContext;