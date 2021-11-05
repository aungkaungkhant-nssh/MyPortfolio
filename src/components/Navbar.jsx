import { Paper,Tab,Tabs} from '@mui/material'
import React from 'react'
import CTab from '../controls/CTab'

const options=[
    {value:"home",label:"Home"},
    {value:"about",label:"About"},
    {value:"skill",label:"Skill"},
    {value:"project",label:"Project"}
]
function Navbar() {

    return (
       <Paper>
           <CTab options={options}/>
       </Paper>
    )
}

export default Navbar
