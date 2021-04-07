const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsContainer = ingredients.map(ingredient => {
    const ItemingredientsRef = document.createElement('li');
    ItemingredientsRef.textContent = ingredient;
    
    return ItemingredientsRef;
});

ingredientsList.append(...ingredientsContainer);