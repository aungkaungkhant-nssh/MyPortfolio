import { Paper,Tab,Tabs} from '@mui/material'
import React from 'react'
import CTab from '../controls/CTab'


function Navbar({options}) {
    return (
       <Paper>
           <CTab options={options} iconPosition="top" orientation="horizontal"  variant="scrollable" />
       </Paper>
    )
}

export default Navbar
