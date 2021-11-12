
import './App.css';
import Navbar from './components/Navbar';
import React,{useEffect,useState} from 'react'
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Detail from './components/Detail'
import useData from './data/useData';
const useStyles=makeStyles((theme)=>({
    mainRoot:{
       display:"flex",
    },
    
}))
export const ValueContext=React.createContext();
function App() {
  const classes=useStyles();
  const [options]= useData();
  const [index,setIndex]=useState(0);
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
  const changeIndex=(number)=>{
    setIndex(number)
  }

  return (
    <ValueContext.Provider value={{index,changeIndex}}>
        <div className="App">
        {mobile && <Navbar options={options}/>}
        <main>
           <Grid container spacing={2}>
              <Grid  md={2} sx={{display:{xs:"none",md:"block"}}}>
                  <Sidebar options={options}/>
              </Grid>
              <Grid item xs={12} md={10}>
                  <Detail options={options} index={index}/>
              </Grid>
           </Grid>
        </main>
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
