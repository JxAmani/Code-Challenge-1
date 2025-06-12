function estimateTransactionFee() {
  const amountToSendInput = prompt("Unatuma Ngapi? (KES):");//pop-up
  const amountToSend = parseFloat(amountToSendInput);//input into a number
  
  //Simplified fee structure
  const percentageFeeRate = 0.015;
  const maximumFee = 70;
  const minimumFee = 10;

  if (isNaN(amountToSend) || amountToSend <= 0) {//If not a number or amount to send is below zero it will ask them put valid amount
    alert("Invalid amount. Please enter a valid amount.");
    return;
  }
  //caculation for transaction fee
  let transactionFee = amountToSend * percentageFeeRate;

  //Make sure the transaction fee is between minimum fee and maximum fee
  if (transactionFee < minimumFee) {
    transactionFee = minimumFee;
  } else if (transactionFee > maximumFee) {
    transactionFee = maximumFee;
  }
  //caculation for total amount to be debited
  const totalAmountToBeDebited = amountToSend + transactionFee;

  //console the output
  console.log(`Sending KES ${amountToSend}`);
  console.log(`Calculated  Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalAmountToBeDebited}`);
  console.log("Send money Securely");

  // Added alert cause i like the idea of the user seeing the result instantly
  alert(`Sending KES ${amountToSend}:
  Calculated Transaction Fee: KES ${transactionFee}
  Total amount to be debited: KES ${totalAmountToBeDebited}

 Send Money Securely!`);
}
estimateTransactionFee();