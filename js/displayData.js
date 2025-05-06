// Display Here Pet Category Button
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categoryContainer");
    categories.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="btn-${item.category}" onclick="loadCategoryPage('${item.category}')" class="btn category-btn btn-xs lg:py-9 md:py-5 md:px-9 lg:px-28 md:text-lg lg:text-2xl md:font-bold">
            <img class="lg:w-7 w-4 h-4 lg:h-7" src="${item.category_icon}"/>
            <p>${item.category}</p>
        </button>
        `;
        categoryContainer.appendChild(div);
    })
}

// Display All Peddy Pet Here Like a Card
const displayAllPet = (pets) => {
    const cardContainer = document.getElementById("cardContainer");
    if (pets.length === 0) {
        cardContainer.classList.remove("grid");
        cardContainer.innerHTML = `
        <div class="bg-gray-100 lg:p-24 md:p-12 p-4 rounded-xl text-center space-y-2 md:space-y-4">
            <img class="mx-auto mb-4 w-20 md:w-32 lg:w-40" src="./assets/error.webp"/>
            <h2 class="font-bold text-xl md:text-3xl">No Information Available</h2>
            <p class="text-gray-500 lg:px-40 text-xs md:text-base">This page currently does not contain any information. We are working on updating it soon. Please check back later for the latest content. Thank you for your patience.</p>

        </div>
        `;
        return
    }
    else {
        cardContainer.classList.add("grid");
    }
    pets.forEach((pet) => {
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
        <div class="card bg-base-100 p-4 border border-gray-300">
            <figure>
                <img src="${pet.image}" alt="Pets" class="w-full h-56 md:h-36 lg:h-56 object-cover rounded-xl" />
            </figure>
            <div class="pt-6">
                <h2 class="font-extrabold text-2xl">${pet.pet_name}</h2>
                <h4 class="flex items-center py-2 gap-2 text-lg font-semibold text-gray-500">
                <i class="fa-solid fa-paw"></i> Breed: ${pet.breed ?? "It's Not Available"}
                </h4>
                <h4 class="flex items-center pb-2 gap-3 text-lg font-semibold text-gray-500">
                <i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth ?? "Date is Not Available"}
                </h4>
                <h4 class="flex items-center pb-2 gap-2 text-lg font-semibold text-gray-500">
                <i class="fa-solid fa-transgender"></i> Gender: ${pet.gender ?? "It's Not Defined"}
                </h4>
                <h4 class="flex items-center pb-2 gap-4 text-lg font-semibold text-gray-500">
                <i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price ? pet.price + '$' : "Coming Soon"}
                </h4>
            </div>
            <hr class="text-gray-300 pb-4">
            <div class="flex items-center justify-between px-2">
                <button onclick="likedButton('${pet.image}')" class="btn py-1 px-4 pxtext-lg rounded-md border bg-white border-teal-600 hover:text-teal-600 font-bold cursor-pointer"> <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button onclick="adoptModal(this)" class="btn py-1 px-4 font-bold text-lg rounded-md border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer disabled:bg-slate-500 disabled:text-gray-600">Adopt</button>
                <button onclick="loadDetails('${pet.petId}')" class="btn py-1 px-4 font-bold text-lg rounded-md border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer disabled:bg-slate-500 disabled:text-gray-600">Details</button>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    })
}

// Adopt Modal Will Show Here
const adoptModal = (id) => {
    let count = 3;
    const adoptCount = document.getElementById("adopt_count");
    adoptCount.innerText = count;
    modalContainer.showModal();
    const adoptInterval = setInterval(() => {
        count--
        if (count !== 0) {
            adoptCount.innerText = count;
        }
        if (count < 1) {
            clearInterval(adoptInterval);
            modalContainer.close();
            id.textContent = "Adopted";
            id.disabled = true;
        }
    }, 1000)
}