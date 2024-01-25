const categoriesList = document.querySelectorAll(" .item");
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const itemsInCategory = category.querySelectorAll("ul > li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemsInCategory}`);
});
