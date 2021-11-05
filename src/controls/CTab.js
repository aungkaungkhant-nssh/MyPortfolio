import React, { useState } from 'react'
import { Paper,Tab,Tabs} from '@mui/material'
function CTab({options,...other}) {
    const [value,setValue]=useState(0);
    const handleChange=(e,newValue)=>{
        setValue(newValue)
    }
    return (
        <Tabs value={value} onChange={handleChange}  centered>
            {
                options.map((option)=>(
                    <Tab  label={option.label} icon={option.icon} {...other} />
                ))
            }
        </Tabs>
    )
}

export default CTab
