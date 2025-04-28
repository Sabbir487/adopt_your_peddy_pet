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