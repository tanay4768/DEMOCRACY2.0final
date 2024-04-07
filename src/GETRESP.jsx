import React, { useState } from 'react';
import { ethers } from "ethers";

const Getresp = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const getresp = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.getComplaintresp(1,0);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };

  return (
    <><button onClick={getresp}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Getresp;
