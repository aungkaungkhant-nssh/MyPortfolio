
import './App.css';
import Navbar from './components/Navbar';
import React,{useEffect,useState} from 'react'
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
const useStyles=makeStyles((theme)=>({
    mainRoot:{
       display:"flex",
    },
    
}))
const options=[
  {value:"home",label:"Home",icon:<HomeIcon />},
  {value:"about",label:"About",icon:<InfoIcon />},
  {value:"skill",label:"Skill",icon:<LaptopIcon />},
  {value:"project",label:"Project",icon:<GitHubIcon />}
]
function App() {
  const classes=useStyles();
  const [mobile,setMobile]=useState(false)
  const checkscreen=()=>{
      if(window.innerWidth<=768){
        setMobile(true);
      }
  }
  useEffect(()=>{
    window.addEventListener("resize",checkscreen);
    checkscreen()
  },[])
  return (
    <div className="App">
        {mobile && <Navbar options={options}/>}
        <main>
           <Grid container>
              <Grid  md={3} sx={{display:{xs:"none",md:"block"}}}>
                  <Sidebar options={options}/>
              </Grid>
              <Grid item xs={12} md={9}>
                
              </Grid>
           </Grid>
        </main>
    </div>
  );
}

export default App;
