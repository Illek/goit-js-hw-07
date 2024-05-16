const categoriesList = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesList.length);

categoriesList.forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Element: ${li.lastElementChild.children.length}`);
});
