import React from 'react'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Button  from '../components/controls/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fdfdff",
        width:  "1050px",
    },
    pageHeader: {
        padding: theme.spacing(0.5),
        display: 'flex',
        margimBottom: theme.spacing(0.5),
    },

    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(1),
        color: '#3c44b1',
    },

    pageTitle:{
        paddingLeft: theme.spacing(3),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6',
        }
    },

    pageButton:{
        position: 'absolute',
        left: '700%',
    }

    
}))

export default function PageHeader (props) {

  const classes = useStyles()
  const {title, subTitle, icon} = props;
  return (
    <Grid container>
    <Paper elevation={0} square className={classes.root}>
       
        <div className={classes.pageHeader}>
            <Card className={classes.pageIcon}>
                 {icon}
            </Card>
            
              <div className={classes.pageTitle}>
                    <Typography 
                        variant="h6" component="div" >
                        {title}
                    </Typography>
                   
                    <Typography
                        variant="subtitle2" component="div" >
                        {subTitle}
                    </Typography>
                   
             </div>
             {/* <Box >
                    <Button className={classes.pageButton}
                   
                    text="Novo"
                    fontSize="small"
                    >  
                    </Button>
            </Box> */}
        </div>
      
    </Paper>
    </Grid>
  )
}
