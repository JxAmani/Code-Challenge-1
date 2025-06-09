function calculateChaiIngredients(numberOfCups) {
  // Check if the input is a valid number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log(" enter the number of chai cups you want to make ");
    return; // Exit the function if input is invalid
  }

  // Standard recipe for 1 cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoon

  // Calculate required amounts
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Print the results
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("Enjoy your Chai Bora!");
}

// Call the function with an example number of cups:
console.log("Making 3 cups of Chai");
calculateChaiIngredients(3);

console.log("Making 1 cup of Chai ");
calculateChaiIngredients(1);

console.log("Testing invalid input");
calculateChaiIngredients("hello"); // Invalid input


