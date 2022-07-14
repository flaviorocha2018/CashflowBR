import React, {useState} from 'react'
import ClientsForm from '../pages/ClientsForm';
import PageHeader from '../components/PageHeader';
import Controls from "../components/controls/Controls";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { makeStyles } from '@mui/styles';
import { TableRow, TableBody, TableCell } from '@mui/material';
import Popup from '../components/Poup';
import Notification from '../components/Notifications';
import ConfirmDialog from '../components/ConfirmDialog';
import Grid from '@mui/material/Grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CloseIcon from '@mui/icons-material/Close';
import * as employeeService from '../services/EmployeeService';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';

    
  const tableData = [{
    "id": 1,
    "name": "Armazém das Ferramentas",
    "celular": "(21)9.9617-8974",
    "email": "armazem@hotmail.com",
    "contato": "Maria José"
  }, {
    "id": 2,
    "name": "Tramontina S.A.",
    "celular": "(11)9.7611-9821",
    "email": "tramontina.contato@hotmail.com",
    "contato": "Augusto Lero Lero"
  }, {
    "id": 3,
    "name": "Jaguaribe Escadas",
    "celular": "(11)9.8574-6311",
    "email": "contato.jaguaribe@gmail.com",
    "contato": "Antônio Carlos"
  }, {
    "id": 4,
    "name": "Fabrimar S.A.",
    "celular": "(51)8.6548-8799",
    "email": "fabrimar.contato@fabrimar.com.br",
    "contato": "José Maria"
  }, {
    "id": 5,
    "name": "Deca S.A",
    "celular": "(11)9.7611-9821",
    "email": "deca.contato@hotmail.com",
    "contato": "José Augusto"
  }, {
    "id": 6,
    "name": "Rio Tapetes S.A.",
    "celular": "(21)8.7896-5687",
    "email": "rio.tapetes@gmail.com",
    "contato": "João Gilberto"
  }, {
    "id": 7,
    "name": "Gavine Aços Galvanizados",
    "celular": "(11)9.9547-8912",
    "email": "gavine.contato@hotmail.com",
    "contato": "Ricardo Augusto"
  }, 
    ];


const useStyles = makeStyles(theme => ({
    TblPagination: {
        '& .MuiTablePagination-root':{
            width: '960px',
            height: '35px',
            backgroundColor: '#a9aeb3',
            color: 'rgb(41, 39, 39)',
            fontFamily: 'Arial, Helvetica, sansSerif',
            fontWeight: '700',
        }
    },

  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
},
  searchInput: {
    width: '50%'
},
  newButton: {
    position: 'absolute',
    right: '80px'
},
  
}));


export default function ClientsTable() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [records, setRecords] = useState(employeeService.getAllEmployees())


const handleSearch = (e) => {
 
}

const addOrEdit = () => {

}

const openInPopup = item => {
  setRecordForEdit(item)
  setOpenPopup(true)
}

const onDelete = id => {
  setConfirmDialog({
      ...confirmDialog,
      isOpen: false
  })
  employeeService.deleteEmployee(id);
  setRecords(employeeService.getAllEmployees())
  setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
  })
}
// justifyContent="space-between"
  return (
    <>  
        <PageHeader
        title= "Cadastro de Clientes"
        subTitle="Tabela de Títulos Clientes - Novo / Atualizar"
        icon={<PeopleAltTwoToneIcon fontSize="large" text-align='center'/>}
        />
        
        <Box sx={{width: "1060px", ml: "-4px"}}>
        <Paper className={classes.pageContent}> 
        <Grid container direction= 'row' sx={{width: "700px"}}>
        <Controls.Input sx={{width: "700px"}}
                        label="Pesquisar Cliente"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>)
                        }}
                        onChange={(e) => handleSearch}
                    />

                   <Box sx={{color: 'red'}}>
                    <Grid  >
                    <Controls.Button sx={{mr: '50px'}}
                        text="Adicionar"
                        variant="outlined"
                        color="primary"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    /></Grid></Box>
                    </Grid>
        <TableContainer sx={{maxHeight: '400px'}}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
             
                <TableCell>id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Celular</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contato</TableCell>
                <TableCell align="center">Consultar</TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
                <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.celular}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.contato}</TableCell>
                <TableCell align="center">
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(row) }}>
                                            <ModeEditOutlineIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Tem certeza que deseja deletar?',
                                                    subTitle: "Vocẽ não poderá desfazer a operação.",
                                                    onConfirm: () => { onDelete(row.id) }
                                                })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                </TableRow>

            ))}
                
          </TableBody>
        </Table>
      </TableContainer>
      
 
            </Paper>
            </Box>
            <Popup
                title="Inserir / Editar - Cliente"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <ClientsForm
                    margimBottom="350px"
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
    </>
  )
}
