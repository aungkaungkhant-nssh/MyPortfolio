import React from 'react'
import {Paper,Avatar} from '@mui/material'
import {makeStyles} from '@mui/styles'
import HomeDetail from './HomeDetail'
const useStyles=makeStyles((theme)=>({
    detailRoot:{
       height:"380px",
       marginTop:"10px"
    },
    socialIcon:{

    }
    
}))
function Detail() {
    const classes=useStyles()
    return (
        <Paper>
            <div className={classes.detailRoot}>
                    <HomeDetail />
            </div>
        </Paper>
    )
}

export default Detail
