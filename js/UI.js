document.getElementById('addToDo').addEventListener('click', showForm);
function showForm() {
  document.getElementById('formInput').style.display = 'block';
  document.getElementById('intro-message').style.display = 'none';
}

document.getElementById('toDoList').addEventListener('click', hideForm);
function hideForm() {
  document.getElementById('formInput').style.display = 'none';
  document.getElementById('intro-message').style.display = 'block';
  document.getElementById('content').style.display = 'block';
}
