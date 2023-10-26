/* const form = document.querySelector("#poster")
const DOMSelectors = {
    form: document.querySelector("#poster"),
    n:document.querySelector(".first-name"),
    label:document.querySelectorAll("label"), 
    //select the textbox
    //select all the h2s in one property
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> (el.textContent.value));
}
); */

const DOMSelectors = {
    form: document.querySelector("poster")
}