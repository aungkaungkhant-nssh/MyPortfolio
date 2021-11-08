import React from 'react'
import {Paper,Avatar} from '@mui/material'
import {makeStyles} from '@mui/styles'
// import HomeDetail from './HomeDetail'
// import AboutDetail from './AboutDetail'
const useStyles=makeStyles((theme)=>({
    detailRoot:{
       minHeight:"380px",
       marginTop:"10px",
       
    },
    // '@media screen and (max-width: 600px)': {
    //     detailRoot: {
    //       maxHeight:"370px",
    //       overflowY:"scroll"
    //     },
    //   },
    
}))
function Detail({options,index}) {
    const classes=useStyles()
    return (
        <Paper>
            
            <div className={classes.detailRoot}>
                {
                    options[index].component
                }
            </div>
        </Paper>
    )
}

export default Detail
