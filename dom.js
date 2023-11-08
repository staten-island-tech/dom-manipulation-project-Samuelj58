const DOMSelectors = {
  form: document.querySelector("#poster"),
  pname: document.querySelector("#pname"),
  yname: document.querySelector("#yname"),
  link: document.querySelector("#link"),
  cards: document.querySelector("#cards"),
};
//get values to stay
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  makeposter();
  clear();
});
//collect values and display it
//beforeend = insert inside the element, after its last child.
function makeposter() {
  const cardHTML = `
      <div class="card">
        <h3>Name of Poster: ${DOMSelectors.pname.value}</h3>
        <h3>Your Name: ${DOMSelectors.yname.value}</h3>
        <img src="${DOMSelectors.link.value}" alt="Image">
        <button class="clear" onclick="clr(this)">Clear</button>
      </div>
    `;
  DOMSelectors.cards.insertAdjacentHTML("beforeend", cardHTML);
}
//clear text after typing it
function clear() {
  DOMSelectors.pname.value = "";
  DOMSelectors.yname.value = "";
  DOMSelectors.link.value = "";
}
//delete function
function clr(remove) {
    remove.parentElement.remove();
    }


