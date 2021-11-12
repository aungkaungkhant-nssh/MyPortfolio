import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
const useStyles=makeStyles((theme)=>({
    mainRoot:{
       margin:"10px 0px"
    },
    
    
}))
function CTypical({text}) {
    const classes=useStyles();
    return (
        <div className={classes.mainRoot}>
            <Typewriter
                 options={{
                    strings: ["<strong style='color:#1c92d2'>Hi I'm Aung Kaung Khant</strong>", "<strong style='color:#1c92d2'>Trying To Be A Web Devloper</strong>","<strong style='color:#1c92d2'>Contact me below social media</strong>"],
                    autoStart: true,
                    loop: true,
                  }}
                  
            />
        </div>
    )
}

export default CTypical
