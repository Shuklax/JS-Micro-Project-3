import foodData from './food.json'// Replace with your JSON file path
const display = document.querySelector('.displayDiv');

// Function to filter by category
function listFood(category = '') {
  result = category ? foodData.filter(food => food.category === category) : foodData;
  console.log(result);
  display.innerHTML = JSON.stringify(result, null, 2);
}

// Function to sort by calorie (replace 'calorie' with actual value or user input)
function sortCalorie(condition) {
  let result;
  if (condition === 'asec') {
    result = foodData.filter(food => food.calorie < calorie);
  } else if (condition === 'desc') {
    result = foodData.filter(food => food.calorie > calorie);
  }
  console.log(result);
  display.innerHTML = JSON.stringify(result, null, 2);
}

// Function to sort by protein or carbs
function sort(type) {
  let result;
  if (type === 'protein') {
    result = foodData.sort((a, b) => b.protiens - a.protiens); // Descending order (highest protein first)
  } else if (type === 'carbs') {
    return foodData.sort((a, b) => a.cab - b.cab); // Ascending order (lowest carb first)
  }
  console.log(result);
  display.innerHTML = JSON.stringify(result, null, 2);
}

// Examples of usage:
// console.log(listFood('Fruits')); // Filter fruits
// console.log(sortCalorie('asec')); // Sort by calorie ascending (calories below a value)
// console.log(sort('protein')); // Sort by protein (highest to lowest)