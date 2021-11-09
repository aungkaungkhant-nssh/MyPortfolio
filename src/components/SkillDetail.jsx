import React from 'react'
import {makeStyles} from '@mui/styles'
import CHeader from '../controls/CHeader';
import LaptopIcon from '@mui/icons-material/Laptop';
import useData from '../data/useData';
import CSkill from '../controls/CSkill';


const useStyles=makeStyles((theme)=>({
    mainRoot:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"30px"
    },
    skill:{
        marginTop:"20px",
        width:"70%"
    },
    '@media screen and (max-width: 600px)': {
        skill: {
            maxHeight:"300px",
            overflowY:"scroll"
        },
    }
}))
function SkillDetail() {
    const classes=useStyles()
    const [,skills]=useData();
    return (
        <div  className={classes.mainRoot}>
            <CHeader title="Skills" icon={ <LaptopIcon sx={{ fontSize: 38 }}/> }/>
            <div className={classes.skill}>
                {
                    skills.map((skill)=>(
                        <CSkill value={skill.value} color={skill.color} percent={skill.percent} language={skill.language}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillDetail
