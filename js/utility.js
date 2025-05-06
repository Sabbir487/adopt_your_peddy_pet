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

const activeBtnRemove = () => {
    const button = document.getElementsByClassName("category-btn");
    for (const btn of button) {
        btn.classList.remove("active");
    }
}