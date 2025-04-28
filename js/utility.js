// Display All Peddy Pet Here Like a Card

const displayAllPet = (pets) => {
    pets.forEach((pet) => {
        console.log(pet)
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
        <div class="card bg-base-100 p-5 w-96 border border-gray-300">
            <figure>
                <img src="${pet.image}" alt="Shoes" class="w-96 h-56 object-cover rounded-xl" />
            </figure>
            <div class="pt-6 ">
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
            <div class="flex items-center justify-between">
                <button class="btn py-5 px-5 text-lg rounded-md border border-teal-600 hover:text-teal-600 font-bold cursor-pointer"> <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <button class="btn py-5 px-5 font-bold text-lg rounded-md border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer disabled:bg-slate-500 disabled:text-gray-600">Adopt</button>
                <button class="btn py-5 px-5 font-bold text-lg rounded-md border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer disabled:bg-slate-500 disabled:text-gray-600">Details</button>
            </div>
        </div>
        `;
        document.getElementById("cardContainer").append(cardDiv);
    })
}

// Load Spinner After Show The Data
const loadSpinner = () => {
    cardSection.innerHTML = '';
    cardSection.classList.remove('grid');
    const div = document.createElement('div');
    div.classList.add('w-full')
    div.innerHTML = `<div id="spinner" class="h-10 w-10 mt-16 border-gray-200 border-4 border-t-4 border-t-black rounded-full my-5 mx-auto animate-spin"></div>`
    cardSection.appendChild(div);
}

// Active Button Functionality for Category Section
const activeButton = (e) => {
    const activeBtn = document.querySelectorAll('.active');
    activeBtn.forEach((a) => a.classList.remove('active'));
    e.classList.add('active');
}