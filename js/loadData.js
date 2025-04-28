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
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
        const data = await res.json();
        displayAllPet(data.pets);
    }
    catch {
        (error) => console.error("Error fetching categories:", error)
    }
}

loadCategories()
loadAllPet()