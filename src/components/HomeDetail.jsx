import React from 'react'
import {Typography,Avatar,Box} from '@mui/material'
import {makeStyles} from '@mui/styles'
import CTypical from '../controls/CTypical'
import { FaFacebook,FaTwitter,FaInstagram,FaGithub,FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import { IconContext } from "react-icons";

const useStyles=makeStyles((theme)=>({
    mainRoot:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        padding:"40px"
    },
    socialIcon:{
        marginTop:"15px",
        "& a":{
            padding:"15px",
        },
    }
}))
const socialIcons=[
    {link:"https://web.facebook.com/debugger.bug.10101/",icon:<FaFacebook />},
    {link:"https://web.facebook.com/debugger.bug.10101/",icon:<FaTwitter />},
    {link:"https://www.instagram.com/aung.kaung.khant.777/",icon:<FaInstagram />},
    {link:"https://github.com/aungkaungkhant-nssh",icon: <FaGithub />}
]
function HomeDetail() {
   const classes=useStyles()
    return (
        <div className={classes.mainRoot}>
            <Avatar alt="Remy Sharp" src={"https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/252573855_432211788499830_5608821501418439130_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEj4m_CZN92lZzLFLtWoKVv8dRPmuQlbNTx1E-a5CVs1HNJt5z-avaMiZ9Hle97Bkbuowtd49lAFrHCEE5pduiM&_nc_ohc=5nbGlTzAt90AX_QXLgO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9162fb5cd65d6c211aecc332fd383970&oe=61A939D3"}  sx={{ width:100, height: 100 }} style={{marginBottom:"10px",textAlign:"center"}}/>
            <div>
                <CTypical />
            </div>
            <div style={{margin:"20px 0px"}}>
                <div style={{marginBottom:"15px"}}>
                  <FaPhoneAlt /> <Typography variant="p" sx={{color:"#607d8b",marginLeft:"10px"}}> 09261804445</Typography>
                </div>
                <div>
                    <FaEnvelope /> <Typography variant="p" sx={{color:"#607d8b",marginLeft:"10px"}}> akkgit0909@gmail.com</Typography>
                </div>
               
            </div>
            
            <div className={classes.socialIcon}>
            <Box sx={{ backgroundColor:"#f1f8e9",borderRadius:"10px",padding:"7px 0px",'&:hover':{backgroundColor:"#ffebee"}}}>
            <IconContext.Provider value={{ color: "#1c92d2",  size: 30, }}>
              
                   {
                        socialIcons.map((social)=>(
                            <a href={social.link} >{social.icon}</a>
                        ))
                    } 
            </IconContext.Provider>
            </Box>       
            </div>
          
        </div>
    )
}

export default HomeDetail
