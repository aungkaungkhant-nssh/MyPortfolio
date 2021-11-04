import { Paper,Tab,Tabs} from '@mui/material'
import React from 'react'
import CTab from '../controls/CTab'


function Navbar({options}) {
    return (
       <Paper>
           <CTab options={options} iconsPosition="start"/>
       </Paper>
    )
}

export default Navbar
