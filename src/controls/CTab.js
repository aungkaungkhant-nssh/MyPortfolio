import React, { useContext, useEffect, useState } from 'react'
import { Paper,Tab,Tabs} from '@mui/material'
import { ValueContext } from '../App';

function CTab({options,iconPosition,...other}) {
    const {index,changeIndex}=useContext(ValueContext)
    const [value,setValue]=useState(0);
    const handleChange=(e,newValue)=>{
        changeIndex(newValue);
        setValue(newValue)
    }
  
    return (
        <Tabs value={value} onChange={handleChange}  centered   {...other} scrollButtons >
            
            {
                options.map((option)=>(
                    <Tab  icon={option.icon} iconPosition={iconPosition} label={option.label}/>
                ))
            }
        </Tabs>
    )
}

export default CTab
