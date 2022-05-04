import { makeStyles } from '@mui/styles';
import React from 'react';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { format } from 'date-fns';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';




const drawerWidth = 220;


const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex',
        },
        active: {
            background: '#f4f4f4',
        },
        title: {
            padding: theme.spacing(2),
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
        }
    }
   
})



export default function Layout({children}){
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Bancos',
            icon: <AccountBalanceRoundedIcon color="primary" fontSize="medium" />,
            path: '/'
        },
        {
            text: 'Clientes',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '../pages/Login.js'
        },
        {
            text: 'Despesas',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Fornecedor',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/'
        },
    
    ]
    return(   

        <div className={classes.root}>
            <AppBar className={classes.appbar}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Bem Vindo ao CashFlowBR {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="permanent" 
            anchor="left" classes={{paper: classes.drawerPaper}}>
                <div>
                    <Typography variant="h6" marginLeft="15px" color="#324376" className={classes.title}>
                          Menu - CashFlowBR
                    </Typography>
                </div>
                <List>
                {
                    menuItems.map(item => (
                        <ListItem button key={item.text} onClick={() => history.push(item.path) }
                        className={location.pathname == item.path ? classes.active : null }
                        >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>
                    ))
                  
                }
                </List>
               
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
            </div>
            
        </div>
    )
}