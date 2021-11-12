import React from 'react'
import {Typography} from '@mui/material'
function CHeader({title,icon}) {
    return (
        <div style={{display:"flex",color:"#1c92d2",alignItems:"center"}}>
            {icon}
            <Typography variant="h4" sx={{marginLeft:"10px"}}>
              {title}
            </Typography>
        </div>
        
    )
}

export default CHeader
