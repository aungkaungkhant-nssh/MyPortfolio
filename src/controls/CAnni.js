import React from 'react'
import {Typography,Card, CardContent,Grid} from '@mui/material'
function CAnni({anni}) {
    return (
        <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{backgroundColor:"#ec407a",color:"#fff"}}>
                            <CardContent>
                                <Typography variant="h6" >
                                        {anni.yr} {anni.yr>1?"Years":"Year"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{backgroundColor:"#1c92d2",color:"#fff"}}>
                            <CardContent>
                                <Typography variant="h6" >
                                        {anni.mth} {anni.mth>1?"Months":"Month"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{backgroundColor:"#ec407a",color:"#fff"}}>
                            <CardContent>
                                <Typography variant="h6" >
                                        {anni.dy}  {anni.dy>1?"Days":"Day"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
    )
}

export default CAnni
