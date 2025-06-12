function calculateChaiIngredients() {
  const numberOfCupsInput = prompt("Please, enter the number of chai cups you want to make");
  const numberOfCups = parseFloat(numberOfCupsInput);
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log(" enter the number of chai cups you want to make ");
    return ; //exit the function
  }

  // Standard recipe for 1 cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoon

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
  //Added alert because i like the idea of the user getting the output instantly
  alert(`To make ${numberOfCups} cups of Kenyan Chai, you will need
  Water: ${totalWater} ml
  Milk: ${totalMilk} ml
  Tea Leaves (Majani): ${totalTeaLeaves} tablespoons
  Sugar (Sukari): ${totalSugar} teaspoons


  Enjoy your Chai Bora!`);

}




