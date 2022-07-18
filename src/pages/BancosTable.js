import React, {useState} from 'react';
import Table from '@mui/material/Table';
import PageHeader from '../components/PageHeader';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PopUp from '../components/PopUp';
import SearchIcon from '@mui/icons-material/Search';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Bancos from '../pages/Bancos';
import Controls from '../components/controls/Controls';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import { InputAdornment } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

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



function createData(name, date, address, bairro, city, CEP, contact, telefone, celular, email, state, numBank, branch, account, balance) {
  return { name, date, address, bairro, city, CEP, contact, telefone, celular, email, state, numBank, branch, account, balance };
}

const rows = [
  createData('Banco do Brasil', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco Bradesco S/A', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco Itaú', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco Santander', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco Caixa Econômica Federal', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco of America', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('CityBank', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Nubank', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),
  createData('Banco Original', '15/05/2012', 'Av. Brasil, 500', 'Centro', 'Rio de Janeiro', '22790-100', 'Maria', '(21)2437-6869', '(21)9.9465-1129', 'f.rocha@gmail.com', 'RJ', '001', '2375', '120.657', 'R$752,36'),

];

export default function BancosTable() {
  const [ openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null);
  const classes = useStyles();

  const addOrEdit = (newBank, resetForm) => {
    resetForm()
    setOpenPopup(false)

 } 

 const handleSearch = (e) => {
 
}

const openInPopup = item => {
  setRecordForEdit(item)
  setOpenPopup(true)
}
 
  return (
    <>
     <PageHeader
        title= "Cadastro de Bancos"
        subTitle="Tabela de Bancos - Novo / Atualizar"
        icon={<AccountBalanceTwoToneIcon fontSize="large" text-align='center'/>}
        />
        
        <Box sx={{width: "1060px", ml: "-4px"}}>
        <Paper className={classes.pageContent}> 
        <Box display='flex' justifyContent= 'space-between' alignItems= 'center'>
        <Controls.Input sx={{width: "700px"}}
                        label="Pesquisar Banco"
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
      <Table sx={{ minWidth: 1800, mt: 2 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome do Banco</StyledTableCell>
            <StyledTableCell align="left">Contato</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">Celular</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="center">Nº Banco</StyledTableCell>
            <StyledTableCell align="center">Agência</StyledTableCell>
            <StyledTableCell align="center">C.corrente</StyledTableCell>
            <StyledTableCell align="center">Saldo</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.contact}</StyledTableCell>
              <StyledTableCell align="center">{row.telefone}</StyledTableCell>
              <StyledTableCell align="center">{row.celular}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.numBank}</StyledTableCell>
              <StyledTableCell align="center">{row.branch}</StyledTableCell>
              <StyledTableCell align="center">{row.account}</StyledTableCell>
              <StyledTableCell align="center">{row.balance}</StyledTableCell>
              <StyledTableCell align="center">
                                        <Controls.ActionButton
                                            
                                            color="primary"
                                            onClick={() => { openInPopup(row) }}>
                                            <ModeEditOutlineIcon fontSize="small"/>
                                        </Controls.ActionButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
      </Paper>
      </Box>
      <PopUp
                title="Inserir / Editar - Bancos"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
        <Bancos
          margimBottom="350px"
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit} />
        </PopUp>
    </>
  );
}

