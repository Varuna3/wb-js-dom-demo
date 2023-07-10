const formBtn = document.querySelector("#submit-btn");
formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const elmnt = document.createElement("li");
  elmnt.innerText = document.getElementById("input1").value;
  document.querySelector("#languages").appendChild(elmnt);
});
