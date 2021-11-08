import React, { useContext } from 'react'
import {List, ListItem,ListItemText,ListItemIcon} from '@mui/material'
import { ValueContext } from '../App'

function CList({options}) {
    const {index}=useContext(ValueContext)
    return (
        <List>
            {
                options.map((option,index)=>(
                <ListItem button sx={{marginBottom:"10px"}}>
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    <ListItemText primary={option.label} />
                </ListItem>
                ))
            }
        
         </List>
    )
}

export default CList
