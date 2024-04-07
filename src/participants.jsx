import React, { useState } from 'react';
import { ethers } from "ethers";

const Participants = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const participants = async () => {
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
    <><button onClick={participants}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

export default Participants;
