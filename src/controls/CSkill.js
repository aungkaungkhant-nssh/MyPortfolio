import React from 'react'
import {LinearProgress,Typography,Box} from '@mui/material';
function CSkill({value,color,percent,language}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' ,marginTop:"20px"}}>
            <Box  sx={{ minWidth: 35,mr:2 }}>
                 <Typography variant="body2" color="text.secondary">{language}</Typography>
            </Box>
            <Box sx={{ width: '100%', mr: 2 }}>
                <LinearProgress variant="determinate" value={value} color={color}/>
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{percent}</Typography>
            </Box>
        </Box>
    )
}

export default CSkill
