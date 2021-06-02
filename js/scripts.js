"user scripts";

function toggleModal() {
    const overlay = document.querySelector("#overlay");
    overlay.classList.toggle("visible");
}


const closeModalButton = document.querySelector("#closeModal");
closeModalButton.addEventListener("click", function () {
    toggleModal ();
});

const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", function () {
    toggleModal();
})

function buildQuote(theQuote) {
    // 1. get modal element
    // 2. select paragraph element from the modal
    // 3. change inner text of paragraph to be the quote
    // 4. profit

    const modalElement = document.querySelector("#modal p");
    modalElement.innerText = theQuote;
    toggleModal();

}

document.addEventListener("DOMContentLoaded", function (){
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            buildQuote(data.value);
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        });
    document.addEventListener("keydown", function (event) {
        console.log("the key that was pressed is: ", event.key);
        if (event.key === "Escape") {
            toggleModal();
        }
    })
});