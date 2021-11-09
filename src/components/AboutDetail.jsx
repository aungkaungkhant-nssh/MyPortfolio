import React, { useEffect } from 'react'
import {Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import InfoIcon from '@mui/icons-material/Info';
import CHeader from '../controls/CHeader';
const useStyles=makeStyles((theme)=>({
    mainRoot:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"30px"
    },
    content:{
        marginTop:"13px",
      
    },
    '@media screen and (max-width: 600px)': {
        content: {
            maxHeight:"300px",
            overflowY:"scroll"
        },
    },
}))
function AboutDetail({content}) {
    const classes=useStyles()
   
    return (
        <div className={classes.mainRoot}>
            <CHeader title="About" icon={ <InfoIcon sx={{ fontSize: 35 }}/> }/>
            <div className={classes.content}>
                <Typography variant="p" sx={{letterSpacing:'0.7px',lineHeight:"29px",textAlign:"center",color:"#757575"}}>
                    {content.about}
                </Typography>
            </div>
        </div>
    )
}

export default AboutDetail
