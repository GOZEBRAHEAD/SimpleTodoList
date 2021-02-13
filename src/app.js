// ======== VARIABLES ======== //
const divList = document.querySelector("#div-list");
const buttonCreate = document.querySelector("#btn-create");
const textArea = document.querySelector("#cuerpo");
const MAX_CHARACTERES = 158;
 
// ======== FUNCTIONS ======== //
const addItemToList = (text) => {

    const newItem = document.createElement("div");
    newItem.classList.add("list-item");
    newItem.textContent = text;

    divList.appendChild(newItem);

    textArea.value = "";
}

// ======== EVENTS ======== //
buttonCreate.addEventListener("click", () => {

    let text = textArea.value.trim();

    if (text.length === 0 || text.length > MAX_CHARACTERES) {
        alert("The text should be between 1 and " + MAX_CHARACTERES + ".");
        return;
    }

    addItemToList(text);
});