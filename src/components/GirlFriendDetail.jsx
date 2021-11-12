import React from 'react'
import CHeader from '../controls/CHeader';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/styles';
import {Typography,ImageList,ImageListItem} from '@mui/material'
import CAnni from '../controls/CAnni';

const useStyles=makeStyles((theme)=>({
    mainRoot:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"30px"
    },
    gf:{
        marginTop:"13px",
      
    },
    '@media screen and (max-width: 600px)': {
        gf: {
            maxHeight:"300px",
            overflowY:"scroll"
        },
    },
}))

function GirlFriendDetail({gf,anni,itemData}) {
    const classes=useStyles()
   
    return (
        <div className={classes.mainRoot}>
            <CHeader title="My Baby" icon={ <FavoriteBorderIcon sx={{ fontSize: 35 }}/> }/>
            <div className={classes.gf}>
                <Typography variant="p" sx={{letterSpacing:'0.7px',lineHeight:"21px",textAlign:"center",color:"#757575"}}>
                       {gf.about}
                </Typography>
                <div style={{marginTop:"15px",textAlign:"center"}}>
                    <CAnni anni={anni}/>
                    <ImageList sx={{ height: 150,marginTop:"20px" }} cols={3} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}`}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                                style={{height:"100%",width:"100%"}}
                            />
                             </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </div>
    )
}

export default GirlFriendDetail
