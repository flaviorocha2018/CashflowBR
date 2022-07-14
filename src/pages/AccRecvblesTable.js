import React, {useState} from 'react'
import '../Styles.css';
import AccRecvblesForm from './AccRecvblesForm';
import PageHeader from '../components/PageHeader';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
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
import TablePagination from '@mui/material/TablePagination';


  const tableData = [{
    "id": 1,
    "name": "Armazém das Ferramentas",
    "nf": "037860/60",
    "ammount": "23.560,89",
    "datepaymt": "01/03/2022"
  }, {
    "id": 2,
    "name": "Tramontina S.A.",
    "nf": "67544/33",
    "ammount": "3.560,92",
    "datepaymt": "02/10/2022"
  }, {
    "id": 3,
    "name": "Jaguaribe Escadas",
    "nf": "51596/05",
    "ammount": "8.587,23",
    "datepaymt": "10/07/2022"
  }, {
    "id": 4,
    "name": "Fabrimar S.A.",
    "nf": "6199529",
    "ammount": "7.587,00",
    "datepaymt": "10/06/2022"
  }, {
    "id": 5,
    "name": "Deca S.A",
    "nf": "499998",
    "ammount": "4.897,11",
    "datepaymt": "30/08/2022"
  }, {
    "id": 6,
    "name": "Rio Tapetes S.A.",
    "nf": "061502",
    "ammount": "6.780,14",
    "datepaymt": "20/09/2022"
  }, {
    "id": 7,
    "name": "Gabvine",
    "nf": "50742036",
    "ammount": "23.560,89",
    "datepaymt": "30/12/2022"
  }, {
    "id": 8,
    "name": "Centidel",
    "nf": "6864512",
    "ammount": "9.580,85",
    "datepaymt": "12/11/2022"
  }, {
    "id": 9,
    "name": "Meetz",
    "nf": "0023156",
    "ammount": "11.589,15",
    "datepaymt": "15/09/2022"
  }, {
    "id": 10,
    "name": "Chatterbridge",
    "nf": "551548",
    "ammount": "7.558,809",
    "datepaymt": "25/07/2022"
  }];


const useStyles = makeStyles(theme => ({
 
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
        title= "Títulos a Receber"
        subTitle="Tabela de Títulos a Receber - Novo / Atualizar"
        icon={<PaidTwoToneIcon fontSize="large" text-align='center'/>}
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
        <TableContainer sx={{maxHeight: '340px'}}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
             
                <TableCell>id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Nota Fiscal</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Data Pgto</TableCell>
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
                <TableCell align="center">{row.nf}</TableCell>
                <TableCell align="center">{row.ammount}</TableCell>
                <TableCell align="center">{row.datepaymt}</TableCell>
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
      <TablePagination  
      className="MuiToolbarPagination"
      sx={{
      '.MuiTablePagination-toolbar': {
        backgroundColor: '#a9aeb3 !important',
        width: '650px',
        color: '#1867A0',
        fontWeight: '700',
        height: '15px',
        margimLeft: '2px',
       
      },
    }}
    />
 
            </Paper>
            </Box>
            <Popup
                title="Inserir Títulos a Receber"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <AccRecvblesForm
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
