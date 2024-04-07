import React, { useState } from 'react';
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const [transactionDetails, setTransactionDetails] = useState('');

  const buyChai = async () => {
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
    <><button onClick={buyChai}>Buy Chai</button><p>{transactionDetails}</p></>
  );
};

// Export the buyChai function separately
export default Buy;
