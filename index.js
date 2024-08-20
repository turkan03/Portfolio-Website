let showContact = document.getElementById("hire_container_hidden");
let btn = document.getElementById("hire_btn");
let closeBtn = document.getElementById("close_btn");

function popUp() {
  showContact.style.visibility = "visible";
  document.body.style.cursor = "none";
  showContact.style.cursor = "pointer";
}

function popUpClose() {
  showContact.style.visibility = "hidden";
  showContact.style.cursor = "none";
}

btn.addEventListener("click", popUp);
closeBtn.addEventListener("click", popUpClose);
