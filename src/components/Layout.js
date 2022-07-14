import { makeStyles } from '@mui/styles';
import React, {useContext} from 'react';
import '../Styles.css';
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
import CashFlowContext from '../context/Context';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import Divider from '@mui/material/Divider';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import MovingSharpIcon from '@mui/icons-material/MovingSharp';

// Menu Items
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// List Items
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListSubheader from '@mui/material/ListSubheader';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';

const drawerWidth = 245;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f8f9fa',
            width: '100%',
            height: '520px',
            marginTop: '50px',
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
            color: '#2196f3',
            background: 'white',
        },
        title: {
            padding: theme.spacing(1),
        },
        appbar: {
            width: `calc(100%-${drawerWidth}px)`,
            transform: 'translateZ(0)',
        },
       
        ListItemButton: {
          marginLeft: 'auto',
          '&:hover': {
            background: '#f8f9fa',
          }
        },
          ToolbarRootAppBar:{
          width: '1000px',
          marginLeft: '255px',
          height: '65px',
          backgroundColor: '#1483dd',
          color: 'white',
          fontWeight: '700',
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
    const {userEmail, setUserEmail} = useContext(CashFlowContext);
    const [open, setOpen] = React.useState(true);
    console.log('userEmail', userEmail);


    const handleClick = e => {
     history.push('/login')
    }
   
// Menu Items for Drawer
    const menuItems = [
        {
            text: 'Minhas Notas',
            icon: <FormatListNumberedIcon style={{color: '#e2e7ea'}} fontSize="medium" />,
            path: '/notes',
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
          path: '/bancos',
        },

        {
          text: 'Centro de Custos',
          icon:  <AttachMoneyIcon style={{color: '#e2e7ea'}} />,
          path: '/custos',
        },
        {
          text: 'Clientes',
          icon:   <PeopleAltIcon style={{color: '#e2e7ea'}} />,
          path: '/clientstable',
        },
        {
          text: 'Despesas',
          icon:   <PaidIcon style={{color: '#e2e7ea'}} />,
          path: '/expensestable',
        },
        {
          text: 'Fornecedores',
          icon:  <FactoryIcon style={{color: '#e2e7ea'}} />,
          path: '/suppliers',
        },
        {
          text: 'Títulos a Pagar',
          icon:  <PaymentsIcon style={{color: '#e2e7ea'}} />,
          path: '/accpayables',
        },
        {
          text: 'Títulos a Receber',
          icon:  <CurrencyExchangeSharpIcon style={{color: '#e2e7ea'}} />,
          path: '/accrecvbles',
        },
        {
          text: 'Usuários',
          icon:  <GroupsSharpIcon style={{color: '#e2e7ea'}} />,
          path: '/',
        },
    ]
    return(   

        <div className={classes.root}>
          <Box>
            <AppBar className={classes.appbar} elevation={2} position="fixed"
            sx={{display:{xs:"flex", md:"flex"}}}>    
            
            
                <Toolbar className={classes.appbar}>
                
                    <Typography className={classes.date} ml={1} >
                        Bem Vindo ao CashFlowBR - Hoje:  {format(new Date(), 'do MMMM Y')}
                    </Typography>

                   {/* App-bar Menu - consultas */}
                   
                   <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <DesktopWindowsTwoToneIcon sx={{marginRight: 1 }}/>
                            <Button variant="text" {...bindTrigger(popupState)}
                            sx={{ bgcolor: "#1483dd", color: "#ffffff", mr: 3, mt: 0.7 }}
                            >
                              Consultas
                            </Button>
                          
                            <Menu {...bindMenu(popupState)} sx={{ mt: 1 }}>
                            <Route>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               Títulos a Pagar</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               Títulos a Receber</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               Lançamentos Bancários</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem onClick={popupState.close}>
                               Títulos Pagos</MenuItem>
                              <MenuItem onClick={popupState.close}>
                               Títulos Recebidos</MenuItem>
                              </Route>
                            </Menu>
                          
                          </React.Fragment>
                        )}
                  </PopupState> 
                  
                   {/* App-Bar - Relatórios */}
                   <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <PrintTwoToneIcon sx={{marginRight: 1 }}/>
                            <Button variant="text" {...bindTrigger(popupState)}
                            sx={{ bgcolor: "#1483dd", color: "#ffffff", mr: 6, mt: 0.7 }}
                            >
                              Relatórios
                            </Button>
                          
                            <Menu {...bindMenu(popupState)} sx={{ mt: 1 }}>
                            <Route>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                               Extrato de Lançamentos</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              Títulos a Pagar em aberto - Total</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              Títulos a Pagar por Fornecedor</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              Títulos a Receber em aberto</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              Títulos Pagos</MenuItem>
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              Títulos Recebidos</MenuItem>
                              <Divider color="#616161" mt={1} /> 
                              <MenuItem component={Link} to="/create" onClick={popupState.close}>
                              D.R.E</MenuItem>
                              
                              </Route>
                            </Menu>
                          
                          </React.Fragment>
                        )}
                  </PopupState>

                  <Typography sx={{color: "#ffffff", mr: 2 }}>
                     {userEmail}
                  </Typography>

                  <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                  <Button type="button" variant="text" 
                  sx={{ bgcolor: "#1483dd", color: "#ffffff", mt:0.7, marginRight: 13 }}
                  onClick={() => { handleClick() }} >
                   
                  Sair</Button>
                  </Link>
              
                </Toolbar>
                
            </AppBar>
            </Box>
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
            <Divider color="#616161" mt={2}/>

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

          <ListItemButton mb={3} onClick={() => history.push("/bankgmovtable")}>
            <ListItemIcon>
              <AccountBalanceRoundedIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText sx={{ mt: 1, mb: 1 }} primary="Lançamentos Bancários" className='listItem' />
          </ListItemButton>
            
          <Divider color="#616161" mt={1} />
          <ListItemButton>
            <ListItemIcon>
              <InventoryIcon style={{color: '#e2e7ea'}} />
            </ListItemIcon>
            <ListItemText sx={{ mb: 1, mt: 1 }} primary="Cadastros" className='listItem' />
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

          {/*  novo item dropdown */}
          
        </List>
           
      </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
                </div>
            
        </div>
    )
}