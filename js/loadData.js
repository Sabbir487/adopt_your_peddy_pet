// Load Here Pet Category Button Fetch
const loadCategories = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
        const data = await res.json();
        displayCategories(data.categories)
    }
    catch {
        (error) => console.error("Error fetching categories:", error)
    }
}
// Load All Peddy Pet Here Like a Card
const loadAllPet = async () => {
    loadSpinner(true);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
        const data = await res.json();
        setTimeout(() => {
            displayAllPet(data.pets);
            loadSpinner(false);
        }, 2000)
    }
    catch {
        (error) => console.error("Error fetching categories:", error)
    }
}

// Load Category Based Page
const loadCategoryPage = async (id) => {
    activeBtnRemove()
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active");
    loadSpinner(true);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
        const data = await res.json();
        setTimeout(() => {
            displayAllPet(data.data);
            loadSpinner(false);
        }, 2000)
    }
    catch {
        (error) => console.error("Error fetching categories:", error)
    }
}

loadCategories()
loadAllPet()