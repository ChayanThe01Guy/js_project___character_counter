const character_container = document.querySelector(".character_container");
const textarea = character_container.querySelector("#textarea");
const totalChar = character_container.querySelector(".totalChar");
const remain = character_container.querySelector(".remain");

counter();
textarea.addEventListener("keyup", () => {
    counter();
});

function counter () {
    totalChar.innerText = `Total Character: ${textarea.value.length}`;
    remain.innerText = `Remaining: ${textarea.getAttribute("maxlength") - textarea.value.length}`;
}