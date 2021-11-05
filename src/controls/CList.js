import React from 'react'
import {List, ListItem,ListItemText,ListItemIcon} from '@mui/material'

function CList({options}) {
    return (
        <List>
            {
                options.map((option)=>(
                <ListItem button>
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
