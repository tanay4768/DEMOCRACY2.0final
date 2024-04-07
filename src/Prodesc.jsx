import React, { useState } from 'react';
import { ethers } from "ethers";

const Prodesc = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const prodesc = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.prodesc(1);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };
  return (
    <><button onClick={prodesc}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Prodesc;
