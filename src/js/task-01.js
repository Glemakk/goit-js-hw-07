const allItemsRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${allItemsRef.length} категории.`);

const categoriesRef = [...allItemsRef]
    .map(itemRef => console.log(`Категория: ${itemRef.firstElementChild.textContent}
Количество элементов: ${itemRef.lastElementChild.children.length}`));
