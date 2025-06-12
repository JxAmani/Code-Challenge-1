function estimateTransactionFee() {
  const amountToSendInput = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = parseFloat(amountToSendInput);//input into a number

  const percentageFeeRate = 0.015;
  const maximumFee = 70;
  const minimumFee = 10;

  if (isNaN(amountToSend) || amountToSend <= 0) {
    alert("Invalid amount. Please enter a number above 0.");
    return;
  }

  let transactionFee = amountToSend * percentageFeeRate;

  if (transactionFee < minimumFee) {
    transactionFee = minimumFee;
  } else if (transactionFee > maximumFee) {
    transactionFee = maximumFee;
  }

  const totalAmountToBeDebited = amountToSend + transactionFee;

  
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