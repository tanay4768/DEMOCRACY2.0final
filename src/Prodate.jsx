import React, { useState } from 'react';
import { ethers } from "ethers";

const Prodate = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const prodate = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.prodate(1);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };
  return (
    <><button onClick={prodate}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Prodate;
