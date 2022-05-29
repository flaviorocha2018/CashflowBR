import { makeStyles } from '@mui/styles';
import * as React  from 'react';
import { Link, Route } from 'react-router-dom';

import { Drawer, ListItemButton } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FactoryIcon from '@mui/icons-material/Factory';
import PaidIcon from '@mui/icons-material/Paid';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { format } from 'date-fns';
import '../Styles.css';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import Divider from '@mui/material/Divider';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import MovingSharpIcon from '@mui/icons-material/MovingSharp';

// Menu Items
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// List Items
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListSubheader from '@mui/material/ListSubheader';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';



const drawerWidth = 255;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f8f9fa',
            width: '100%',
            height: '475px',
            marginTop: '60px',
            marginLeft:'-1px',
            marginRight: '0px',
            padding: theme.spacing(3),
        },
        formControl: {
          minWidth: 150
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex',
            '&$focusVisible': {
              backgroundColor: theme.palette.action.selected,
        },
        
        '&$selected, &$selected:hover': {
          backgroundColor: theme.palette.action.selected,
        },

      },
        active: {
            background: 'white',
        },
        title: {
            padding: theme.spacing(1),
        },
        appbar: {
            width: `calc(100%-${drawerWidth}px)`
        },
        toolbar:{
            marginLeft: theme.spacing(10),
        }, 
        ListItemButton: {
          marginLeft: 'auto',
          '&:hover': {
            background: '#f8f9fa',
          }
        },

        date: {
            flexGrow: 1,
        }
    }
})

export default function Layout({children}){
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    
    const [open, setOpen] = React.useState(true);
    

// Menu Items for Drawer
    const menuItems = [
        {
            text: 'Minhas Notas',
            icon: <FormatListNumberedIcon style={{color: '#e2e7ea'}} fontSize="medium" />,
            path: '/',
        },
        {
            text: 'Inserir Post-It',
            icon: <DescriptionSharpIcon style={{color: '#e2e7ea'}}/>,
            path: '/create',
        },
        {
            text: 'Dashboard',
            icon: <MovingSharpIcon style={{color: '#e2e7ea'}}/>,
            path: '/',
        },
    ]
    const fileItems = [
        {
          text: 'Bancos',
          icon:  <AccountBalanceRoundedIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },

        {
          text: 'Centro de Custos',
          icon:  <AttachMoneyIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Clientes',
          icon:   <PeopleAltIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Despesas',
          icon:   <PaidIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Fornecedores',
          icon:  <FactoryIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Títulos a Pagar',
          icon:  <PaymentsIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Títulos a Receber',
          icon:  <CurrencyExchangeSharpIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
        {
          text: 'Usuários',
          icon:  <GroupsSharpIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
    ]
    return(   

        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={1} position="fixed">    
            
                <Toolbar style={ { margimleft: 1000 }}  width="1270px" className="toolbar">
                    <Typography className={classes.date} ml={3}>
                        Bem Vindo ao CashFlowBR - Hoje:  {format(new Date(), 'do MMMM Y')}
                    </Typography>

                   {/* App-bar Menu - consultas */}
                   
                   <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            
                            <Button variant="text" {...bindTrigger(popupState)}
                            sx={{ bgcolor: "#1483dd", color: "#ffffff", mr: 5, mt: 1 }}
                            >
                              Consultas
                            </Button>
                          
                            <Menu {...bindMenu(popupState)} sx={{ mt: 1 }}>
                            <Route>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               <DesktopWindowsTwoToneIcon sx={{marginRight: 1}}/>Títulos a Pagar</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               <DesktopWindowsTwoToneIcon sx={{marginRight: 1}}/> Títulos a Receber</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               <DesktopWindowsTwoToneIcon sx={{marginRight: 1}}/>Lançamentos Bancários</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem onClick={popupState.close}>
                               <DesktopWindowsTwoToneIcon sx={{marginRight: 1}}/>Títulos Pagos</MenuItem>
                              <MenuItem onClick={popupState.close}>
                               <DesktopWindowsTwoToneIcon sx={{marginRight: 1}}/>Títulos Recebidos</MenuItem>
                              </Route>
                            </Menu>
                          
                          </React.Fragment>
                        )}
                  </PopupState>
                  
                   {/* App-Bar - Relatórios */}
                   <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            
                            <Button variant="text" {...bindTrigger(popupState)}
                            sx={{ bgcolor: "#1483dd", color: "#ffffff", mr: 23, mt: 1 }}
                            >
                              Relatórios
                            </Button>
                          
                            <Menu {...bindMenu(popupState)} sx={{ mt: 1 }}>
                            <Route>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               <PrintTwoToneIcon sx={{marginRight: 1}}/>Extrato de Lançamentos</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>Títulos a Pagar em aberto - Total</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>Títulos a Pagar por Fornecedor</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>Títulos a Receber em aberto</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>Títulos Pagos</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>Títulos Recebidos</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              <PrintTwoToneIcon sx={{marginRight: 1}}/>D.R.E</MenuItem>
                              
                              </Route>
                            </Menu>
                          
                          </React.Fragment>
                        )}
                  </PopupState>

                  <Button type="button" variant="text" 
                  sx={{ bgcolor: "#1483dd", color: "#ffffff", mt:1, marginRight: 7 }}
                  // onClick={() => { history.push('/login') }}
                  >Login</Button> 
                
                </Toolbar>

            </AppBar>
            <Drawer PaperProps={{ sx: {backgroundColor: "#262C29" ,color: "#e0e0e0",}}}
                className={classes.drawer} variant="permanent" elevation={1}
                anchor="left" classes={{paper: classes.drawerPaper}}>
                    <div>
                        <Typography variant="h6" marginLeft="10px" color="rgba(255, 255, 255, 0.4)" className={classes.title}
                            mt={1} mb={1}>
                              Menu - CashFlowBR
                        </Typography>
                    </div>
                    <Divider color="#616161" mt={3}/>
                  {/* links/list section */}
            <List>
              {menuItems.map((item) => (
                <ListItem 
                  button 
                  dense
                  key={item.text} 
                  
                  onClick={() => history.push(item.path)}
                  className={location.pathname == item.path ? classes.active : null}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} className='listItem'/> 
                </ListItem>
              ))}
            </List>
            {/* <Divider color="#616161" mt={2}/> */}

            <List 
            dense
          sx={{ width: '100%', maxWidth: 360, bgcolor: "#262C29"  }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader  component="div" id="nested-list-subheader" sx={{ bgcolor: "#262C29", color: "#e0e0e0" }}>
            </ListSubheader>
          }
        >
          <Divider color="#616161" mt={1} />  

          <ListItemButton mb={3}>
            <ListItemIcon>
              <AccountBalanceRoundedIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText sx={{ mt: 1 }} primary="Lançamentos Bancários" className='listItem'/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneySharpIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText primary="Pagamento de Títulos" className='listItem' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CurrencyExchangeSharpIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText sx={{ mb: 1 }} primary="Recebimento de Títulos" className='listItem' />
          </ListItemButton>
            
          <Divider color="#616161" mt={1} />
          <ListItemButton>
            <ListItemIcon>
              <InventoryIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText sx={{ mb: 1 }} primary="Cadastros" className='listItem' />
          </ListItemButton>
          <Divider color="#616161" mt={1} />

          <List dense>
            
              {fileItems.map((item) => (
                <ListItem 
                  button 
                  dense
                  key={item.text} 
                  
                  onClick={() => history.push(item.path)}
                  className={location.pathname == item.path ? classes.active : null}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} className='listItem'/> 
                </ListItem>
              ))}
            </List>
          {/* novo item dropdown */}
          
        </List>
           
      </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
                </div>
            
        </div>
    )
}