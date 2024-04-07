import React, { useState } from 'react';
import { ethers } from "ethers";

const Protitle = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const protitle = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.protitle(1);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };
  return (
    <><button onClick={protitle}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Protitle;
