import React, { useEffect, useState } from 'react'
import {makeStyles} from '@mui/styles'
import CHeader from '../controls/CHeader';
import GitHubIcon from '@mui/icons-material/GitHub';
import CBtnGroup from '../controls/CBtnGroup'
import { Typography } from '@mui/material';

const useStyles=makeStyles((theme)=>({
    mainRoot:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"30px"
    },
    pjs:{
        marginTop:"25px",
    },
    pj:{
        marginTop:"20px"
    },
    pjContainer:{
        marginTop:"20px",
        maxHeight:"200px",
        overflowY:"scroll",
    }
}))

function ProjectDetail({buttons,projects,language}) {
    const classes=useStyles();
   
    const [pj,setPj]=useState([]);
    const [category,setCategory]=useState(["all","js","php","vuejs","laravel","reactjs"])
    useEffect(()=>{
        let hasCategory=category.find(cat=>cat==language);
        if(hasCategory){
            if(hasCategory=="all"){
                setPj(projects);
                return;
            }
            setPj(projects.filter((p)=>p.category==hasCategory));
        }
    },[language])
    return (
        <div className={classes.mainRoot}>
              <CHeader title="Projects" icon={ <GitHubIcon sx={{ fontSize: 35 }}/> }/>
              <div className={classes.pjs}>
                    <CBtnGroup buttons={buttons}/>
                    <div className={classes.pjContainer}>
                            {
                                pj.map((p)=>(
                                    <div className={classes.pj}>
                                        <div>
                                            <a href={p.links}>{p.name}</a>
                                        </div>
                                    </div>
                                ))                                
                            }
                    </div>
              </div>
        </div>
    )
}

export default ProjectDetail
