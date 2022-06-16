//define UI variables
const toggle = document.getElementById("toggle");
const form = document.querySelector(".input-field");
const todoInput = document.getElementById("todo");

//events
toggle.addEventListener("change", () => {
  console.log("clicked");
  document.body.classList.toggle("dark");
});

form.addEventListener("submit", addTask);

//Add task
function addTask(e) {
  console.log(todoInput.value);
  console.log("dipti");
  // if(todoInput.value !=== ''){
  //random comment
  // }
  //random comment
  e.preventDefault();
}
