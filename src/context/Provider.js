import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CashFlowContext from './Context';


function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [accBalance, setAccBalance] = useState('');
  const [searchInput, setSearchInput] = useState({ searchInput: '' });
  const [searchParam, setSearchParam] = useState({ searchParam: '' });
  const [idClient, setIdClient] = useState({idClient: 'idClient'});
  const [idSupplier, setIdSupplier] = useState({idSupplier: 'idSupplier'});
  const [idBank, setIdBank] = useState({idBank: 'idBank'});
  const [idCenterCost, setIdCenterCost] = useState({idCenterCost:'idCenterCost'});
  const [idExpense, setIdExpense] = useState({idExpense: 'idExpense'});
  const [idOperations, setIdOperations] = useState({idOperations: 'idOperations'});
  const [dateOperation, setDateOperation] = useState({dateOperation: 'dateOperation'});
  const [paymentInvoiceNumber, setPaymentInvoiceNumber] = 
         useState({paymentInvoiceNumber: 'paymentInvoiceNumber'});
  const [issuedInvoiceNumber, setIssuedInvoiceNumber] = 
         useState({issuedInvoiceNumber: 'issuedInvoiceNumbe'});
  const [idPaymentInvoice, setIdPaymentInvoice] =
         useState({idPaymentInvoice:'idPaymentInvoice'});
  const [idIssuedInvoiceNumber, setIdIssuedInvoiceNumber] =
         useState({idIssuedInvoiceNumber: 'idIssuedInvoiceNumber'});
  const [idReceivables, setIdReceivables] = useState({idReceivables: 'idReceivables'})
  

  return (
    <CashFlowContext.Provider
      value={ {
        userEmail,
        setUserEmail,
        userName,
        setUserName,
        accBalance,
        setAccBalance,
        searchInput,
        setSearchInput,
        searchParam,
        setSearchParam,
        idClient,
        setIdClient,
        idSupplier,
        setIdSupplier,
        idBank,
        setIdBank,
        idCenterCost,
        setIdCenterCost,
        idExpense,
        setIdExpense,
        idReceivables,
        setIdReceivables,
        idOperations,
        setIdOperations,
        dateOperation,
        setDateOperation,
        idPaymentInvoice,
        setIdPaymentInvoice,
        paymentInvoiceNumber,
        setPaymentInvoiceNumber,
        idIssuedInvoiceNumber,
        setIdIssuedInvoiceNumber,
        issuedInvoiceNumber,
        setIssuedInvoiceNumber,
      } }
    >
      {children}
    </CashFlowContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
