import React, { useState } from 'react';
import { ethers } from "ethers";

const Compno= ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const compno = async () => {
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
    <><button onClick={compno}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Compno;
