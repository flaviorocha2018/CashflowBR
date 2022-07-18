import React from 'react';
import Provider from '../context/Provider';
import Notes from '../pages/Notes';
import CreateNotes from '../pages/CreateNotes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
// import LoginLucas from '../pages/LoginLucas';
import BancosTable from '../pages/BancosTable';
import ClientsTable from '../pages/ClientsTable';
import CenterCostTable from '../pages/CenterCostTable';
import ExpensesTable from '../pages/ExpensesTable';
import  AdapterDateFns  from '@mui/lab/AdapterDateFns';
import SupplierTable from '../pages/SupplierTable';
import AccPayablesTable from '../pages/AccPayablesTable';
import AccRecvblesTable from '../pages/AccRecvblesTable';
import BankingMovimentTable from '../pages/BankingMovimentTable';
import { LocalizationProvider } from '@mui/lab';
import ptBRLocale from 'date-fns/locale/pt-BR';


function App() {
  return (
    
    <Provider>
    <Router>
    <Switch>
    <Layout>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBRLocale}>
        <Route exact path="/" component={ Login } />
        <Route exact path="/notes" component={ Notes } />
        <Route exact path="/layout" component={ Layout } />
        <Route exact path="/create" component={ CreateNotes } />
        <Route exact path="/bancos" component={ BancosTable } />
        <Route exact path="/clientstable" component={ ClientsTable } />
        <Route exact path="/custos" component={ CenterCostTable } />
        <Route exact path="/expensestable" component={ ExpensesTable } />
        <Route exact path="/suppliers" component={ SupplierTable } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/accpayables" component={ AccPayablesTable } />
        <Route exact path="/accrecvbles" component={ AccRecvblesTable } />
        <Route exact path="/bankgmovtable" component={BankingMovimentTable} />
      </LocalizationProvider>
    </Layout> 
   </Switch>
    </Router>
    </Provider>
  );
}

export default App;