import React, { useState } from 'react';
import { ethers } from "ethers";

const Getctime = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const getctime = async () => {
    try {
      const { contract } = state;
      const transaction = await contract.getComplaintdes(1,0);
      console.log('Transaction successful:', transaction.toString());
      setTransactionDetails(transaction.toString());
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionDetails('Transaction failed.');
    }
  };

  return (
    <><button onClick={getctime}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Getctime;
