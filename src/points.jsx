import React, { useState } from 'react';
import { ethers } from "ethers";

const Points = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const points = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.getpoints(1);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };
  return (
    <><button onClick={points}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Points;
