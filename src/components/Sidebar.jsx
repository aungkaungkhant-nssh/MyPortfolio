import React from 'react'
import { Paper,Avatar,Box} from '@mui/material'
import CList from '../controls/CList'
import { makeStyles } from '@mui/styles';
import CTab from '../controls/CTab';
const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",flexDirection:"column",alignItems:"center",
        padding:"20px"
    },
    
}))
function Sidebar({options}) {
    const classes=useStyles();
    return (
        <Paper>
            <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={"https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/251497064_3712980925593668_5401179695239504798_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFabeNtsuHSWiMkiNc-lch3PJSw7Ot4Qz08lLDs63hDPQOw02PSbSPwb79pHIC3qxXQ1l3yESPjP5Tolt9t5Q8j&_nc_ohc=-2WJDRICum0AX-9XQe4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=96fd34814506362bdfe24aeb0e4cd064&oe=61AADADB"}  sx={{ width:150, height: 150 }} style={{marginBottom:"10px"}}/>
                <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 270 }}>
                    <CTab options={options} iconPosition="start" orientation="vertical"  variant="scrollable"/>
                </Box>
                
            </div>
            
        </Paper>
    )
}

export default Sidebar
