const toggle = (e) => {
  if(e.previousElementSibling.classList.contains("d-none")){
    e.previousElementSibling.classList.remove("d-none")
    e.nextElementSibling.classList.add("text-decoration-line-through")
  }else{
    e.previousElementSibling.classList.add("d-none")
    e.nextElementSibling.classList.remove("text-decoration-line-through")
  }
};

const editTodo = (e) => {
  e.parentElement.previousElementSibling.querySelector(".title").classList.add("d-none")
  e.parentElement.previousElementSibling.querySelector(".editInput").classList.remove("d-none")
};

const deleteTodo = (event) => {
  // deleteTask(e)
  event.parentElement.parentElement.remove();
};

const addTodo = (task) => {
  // console.log(task);

  let div = document.createElement("DIV");
  div.setAttribute("class","task fs-4 my-2 d-flex justify-content-between")
  div.innerHTML = `<div class="d-flex align-items-center" style="position: relative">\
    <span class="checked${
      !task.type ? ' d-none"' : '"'
    }" style=" position: absolute; height: 1.3em; width: 1.3em; left: 0.2em; bottom: 0.3em;">\
      <img src="images/check.png" alt="Marked Complete" height="100%" style="position: absolute"/>\
    </span>\
    <span onclick="toggle(this)" class="unchecked" style="position: relative; height: 1.3em; width: 1.3em">\
      <img src="images/checkbox.png" alt="Marked Due" height="100%" style="position: absolute; left: 0"/>\
    </span>\
    <span class="title ms-3${
      task.type ? ' text-decoration-line-through"' : '"'
    }" id = "${task.id}">${task.task}</span>\
    <input type="text" class="d-none editInput" value="${task.task}"/>\
  </div>\
  <div>\
    <button class="d-none btn badge btn-danger mb-0 px-1 float-end edit" onclick="deleteTodo(this)">\
      <i class="fa fa-trash" aria-hidden="true"></i>\
    </button>\
    <button class="me-2 d-none btn badge btn-warning mb-0 px-1 float-end edit" onclick="editTodo(this)">\
      <i class="fa fa-pencil-alt" aria-hidden="true"></i>\
    </button>\
    <button class="me-2 d-none btn badge btn-success mb-0 px-1 float-end save" onclick="saveTodo(this)">\
      <i class="fa fa-save" aria-hidden="true"></i>\
    </button>\
  </div>`;

  if (task.type) document.querySelector(".list").append(div);
  else document.querySelector(".list").prepend(div);
  document.getElementById("add-task-input").value = "";
};

const handleChange = () => {
  let text = document.getElementById("add-task-input").value;

  text = text.trimStart();
  text = text.replace(/ +/g, " ");
  document.getElementById("add-task-input").value = text;

  document.getElementById("add-task-button").disabled = text == "";
};

document
  .getElementById("add-task-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      document.getElementById("add-task-button").click();

      document.getElementById("add-task-button").disabled =
        document.getElementById("add-task-input").value == "";
    }
  });

const toggleOrder = (e) => {
  // TODO

  // If ascending button is clicked then descending button should be shown and asc. should be hidden
  // we can use bootstrap class "d-none" to hide an element
  if(e.classList.contains("desc")){
    e.classList.add("d-none")
    e.nextElementSibling.classList.remove("d-none")
  }else{
    e.classList.add("d-none")
    e.previousElementSibling.classList.remove("d-none")
  }
  
  // reverseTasks()
};

const saveTodo = (e) => {

  // TODO
  
  // copy the changed input value to span with class title
  // hide the input field
  // show the span.title

  // saveTask(e)
};