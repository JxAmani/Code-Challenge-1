function estimateTransactionFee(amountToSend) {
  const percentageFeeRate = 0.015; // 1.5% as a decimal
  const maximumFee = 70; // KES
  const minimumFee = 10; // KES

  let transactionFee = amountToSend * percentageFeeRate;

  if (transactionFee < minimumFee) {
    transactionFee = minimumFee;
    alert="This is the minimum transaction fee";
  } else if (transactionFee > maximumFee) {
    transactionFee = maximumFee;
    alert="This is the maximum transaction fee";
  } 
  const totalAmountToBeDebited = amountToSend + transactionFee;
  
  // Print the results
  console.log(`Sending KES ${amountToSend}`);
  console.log(`Caculated Transaction Fee: KES${transactionFee}`);
  console.log(`Total amount to be debited KES${totalAmountToBeDebited}`);


  console.log(`Send Money securely!`);
};
console.log("Testing KES100 as amount yo send")
estimateTransactionFee(100)//KES