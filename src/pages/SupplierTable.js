import React, {useState} from 'react'
import './SupplierTable.css';
import SupplierForm from './SupplierForm';
import PageHeader from '../components/PageHeader';
import FactoryTwoToneIcon from '@mui/icons-material/FactoryTwoTone';
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

const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'code', label: 'celular', minWidth: 100 },
    {
      id: 'population',
      label: 'email',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('pt-BR'),
    },
    {
      id: 'contato',
      label: 'contato',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('pt-BR'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
    
  const tableData = [{
    "id": 1,
    "name": "InnoZ",
    "mobile": "0378-6060",
    "email": "cbirts0@sitemeter.com",
    "contato": "Architect"
  }, {
    "id": 2,
    "name": "Eamia",
    "mobile": "67544-332",
    "email": "cmecozzi1@google.ca",
    "contato": "Construction Manager"
  }, {
    "id": 3,
    "name": "Jabbersphere",
    "mobile": "51596-005",
    "email": "fogormley2@lulu.com",
    "contato": "Subcontractor"
  }, {
    "id": 4,
    "name": "Zoomdog",
    "mobile": "61995-2921",
    "email": "dtoohey3@symantec.com",
    "contato": "Construction Expeditor"
  }, {
    "id": 5,
    "name": "Innojam",
    "mobile": "49999-763",
    "email": "mstillert4@fotki.com",
    "contato": "Construction Worker"
  }, {
    "id": 6,
    "name": "Abata",
    "mobile": "0615-7590",
    "email": "abrane5@istockphoto.com",
    "contato": "Project Manager"
  }, {
    "id": 7,
    "name": "Gabvine",
    "mobile": "50742-153",
    "email": "ccowburn6@pinterest.com",
    "contato": "Architect"
  }, {
    "id": 8,
    "name": "Centidel",
    "mobile": "68645-341",
    "email": "gmacgillicuddy7@webnode.com",
    "contato": "Architect"
  }, {
    "id": 9,
    "name": "Meetz",
    "mobile": "0023-9277",
    "email": "zhasley8@hibu.com",
    "contato": "Construction Foreman"
  }, {
    "id": 10,
    "name": "Chatterbridge",
    "mobile": "55154-6262",
    "email": "audie9@elegantthemes.com",
    "contato": "Construction Expeditor"
  }];


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
    right: '-480px'
},
  
}));


export default function Supplyer() {
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
        title= "Fornecedores"
        subTitle="Tabela de Fornecedores - Novo / Atualizar"
        icon={<FactoryTwoToneIcon fontSize="large" text-align='center'/>}
        />
        
        <Box sx={{width: "1060px", ml: "-4px"}}>
        <Paper className={classes.pageContent}> 
        <Grid container direction= 'row' sx={{width: "700px"}}>
        <Controls.Input sx={{width: "700px"}}
                        label="Pesquisar Fornecedor"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>)
                        }}
                        onChange={(e) => handleSearch}
                    />

                   <Box >
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
                <TableCell>Celular</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contato</TableCell>
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
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contato}</TableCell>
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
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You can't undo this operation",
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
                title="Inserir Fornecedores"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <SupplierForm
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
