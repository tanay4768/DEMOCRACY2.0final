import React, { useState } from 'react';
import { ethers } from "ethers";

const Proloc = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const proloc = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.proloc(1);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };
  return (
    <><button onClick={proloc}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Proloc;
