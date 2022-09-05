const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.innerText = ingredient;
  ingredientEl.classList.add("item");
  ingredientsList.appendChild(ingredientEl);
}