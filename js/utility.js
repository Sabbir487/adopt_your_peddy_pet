// Dynamically Showing Img From Like Button
const likedButton = (id) => {
    const likeBtn = document.getElementById("liked_btn");
    const div = document.createElement("div");
    div.innerHTML = `
    <img class="rounded-lg object-cover h-full" src="${id}" alt="Pets" />
    `;
    likeBtn.appendChild(div);
}
// Load Spinner Here
const loadSpinner = (show) => {
    const spinner = document.getElementById("spinner");
    if (show) {
        spinner.classList.remove("hidden");
        document.getElementById("cardContainer").innerHTML = "";
    }
    else {
        spinner.classList.add("hidden");
    }
}

// Dynamically Active Btn Implement
const activeBtnRemove = () => {
    const button = document.getElementsByClassName("category-btn");
    for (const btn of button) {
        btn.classList.remove("active");
    }
}

// Store Pets Data Here
let petsData = [];

// Handle Sort By Price Button
let isAscending = true;

const sort = () => {
    loadSpinner(true);

    const sortedData = petsData.sort((a, b) => {
        if (isAscending) {
            return b.price - a.price;
        } else {
            return a.price - b.price;
        }
    });

    isAscending = !isAscending;

    setTimeout(() => {
        displayAllPet(sortedData);
        loadSpinner(false);
    }, 1000);
}
