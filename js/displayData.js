// Display Here Pet Category Button
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categoryContainer");
    categories.forEach((item) => {
        const btn = document.createElement("button");
        btn.classList = "btn btn-xs lg:py-9 md:py-5 md:px-9 lg:px-28 md:text-lg lg:text-2xl md:font-bold"
        btn.innerHTML = `
        <img class="lg:w-7 w-4 h-4 lg:h-7" src="${item.category_icon}"/>
        <p>${item.category}</p>
        `;
        categoryContainer.appendChild(btn);
    })
}
// Display All Peddy Pet Here Like a Card
const displayAllPet = (pets) => {
    console.log(pets)
}