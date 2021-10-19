import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })

function Home(props) {
    const classes = styles(); 

    return (
        <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
                Hi {props.user}, Welcome Back!
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
                Please click on the buttons above to access the various ewallet functions.
            </Typography>
        </div>
    )
}

export default Home
