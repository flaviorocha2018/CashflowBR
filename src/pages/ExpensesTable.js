import React, {useState} from 'react'
import ExpensesForm from '../pages/ExpensesForm';
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
import { TableRow, TableBody, TableCell, Button } from '@mui/material';
import PopUp from '../components/PopUp';
import Notification from '../components/Notifications';
import ConfirmDialog from '../components/ConfirmDialog';
import Grid from '@mui/material/Grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CloseIcon from '@mui/icons-material/Close';
import * as employeeService from '../services/EmployeeService';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';

    
  const tableData = [
    {
    "id": 1,
    "description": "Pagamento de aluguel",
    "number": "23567",
    "type": "administrativa",
    },
   {
    "id": 2,
    "description": "pagamento da Light",
    "number": "25694",
    "type": "administrativa",
    },
   {
    "id": 3,
    "description": "pagamento do condomínio",
    "number": "12568",
    "type": "administrativa",
    }, 
   {
    "id": 4,
    "description": "Serviço de Internet",
    "number": "78564",
    "type": "administrativa",
    },
   {
    "id": 5,
    "description": "Pagamento de combustível",
    "number": "78561",
    "type": "operacional",
    },
    {
    "id": 6,
    "description": "Manutenção de equipamentos",
    "number": "78965",
    "type": "operacional",
    },
    {
    "id": 7,
    "description": "Pagamento de Fornecedor",
    "number": "78654",
    "type": "operacional",
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
    right: '70px'
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

  return (
    <>  
        <PageHeader
        title= "Cadastro de Despesas"
        subTitle="Tabela de Despesas - Novo / Atualizar"
        icon={<PointOfSaleTwoToneIcon fontSize="large" text-align='center'/>}
        />
        
        <Box sx={{width: "1060px", ml: "-4px"}}>
        <Paper className={classes.pageContent}> 
        <Box display='flex' justifyContent= 'space-between' alignItems= 'center'>
        <Controls.Input sx={{width: "500px"}}
                        label="Pesquisar Despesa"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>)
                        }}
                        onChange={(e) => handleSearch}
                    />
                   <Button
                   variant="outlined"
                   color="primary"
                   startIcon={<AddIcon />}
                   size={"large"}
                   onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                   >
                   Adicionar
                    </Button>
                    </Box>
                  
        <TableContainer sx={{maxHeight: '400px'}}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
             
                <TableCell>id</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Tipo da Despesa</TableCell>
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
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.type}</TableCell>
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
            <PopUp
                title="Inserir / Editar - Despesa"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <ExpensesForm
                    margimBottom="350px"
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </PopUp>
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