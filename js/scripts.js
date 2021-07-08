// Business Logic for ToDoList  Object
function ToDoList() {
  this.lists = {};
  this.currentId = 0;
}

ToDoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.addList = function (list) {
  list.id = this.assignId();
  this.lists[list.id] = list;
};

ToDoList.prototype.findList = function (id) {
  if (this.lists[id] != undefined) {
    return this.lists[id];
  }
  return false;
};

ToDoList.prototype.UpdateList = function (list) {
  let id = list.id;
  if (this.lists[id] === undefined) {
    return false;
  }
  this.lists[id].toDoName = list.toDoName;
  this.lists[id].notes = list.notes;
  this.lists[id].dateFrom = list.dateFrom;
  this.lists[id].timeFrom = list.timeFrom;
  this.lists[id].dateTo = list.dateTo;
  this.lists[id].timeTo = list.timeTo;
  this.lists[id].attention = list.attention;
  return true;
};

ToDoList.prototype.deleteList = function (id) {
  if (this.lists[id] === undefined) {
    return false;
  }
  delete this.lists[id];
  return true;
};

// Business Logic for List Object
function List(toDoName, notes, dateFrom, timeFrom, dateTo, timeTo, attention) {
  this.toDoName = toDoName;
  this.notes = notes;
  this.dateFrom = dateFrom;
  this.timeFrom = timeFrom;
  this.dateTo = dateTo;
  this.timeTo = timeTo;
  this.attention = attention;
}

// UI Logic
let listData = new ToDoList();

function displayListDetails(listDataToDisplay) {
  let listContent = document.getElementById('lists');
  let htmlForListInfo = '';
  Object.keys(listDataToDisplay.lists).forEach(function (key) {
    const list = listDataToDisplay.findList(key);
    htmlForListInfo +=
      '<li class="far fa-check-circle toDoList" id=' + list.id +
      '>' + '<span class="name">' + list.toDoName+ '</span>' +
      '<br>' + '<span class="date">' + list.dateFrom + ' ' + 'To' + ' ' + list.dateTo + ' ' + '</li><br></span>'
  });
  listContent.innerHTML = htmlForListInfo;
}

document.getElementById('form-1').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputtedToDoListName = document.getElementById('toDoName').value;
  const inputtedNote = document.getElementById('note').value;
  const inputtedDateFrom = document.getElementById('dateFrom').value;
  const inputtedTimeFrom = document.getElementById('timeFrom').value;
  const inputtedDateTo = document.getElementById('dateTo').value;
  const inputtedTimeTo = document.getElementById('timeTo').value;
  const inputtedAttention = document.getElementById('attention').value;

  document.getElementById('toDoName').value = '';
  document.getElementById('note').value = '';
  document.getElementById('dateFrom').value = '';
  document.getElementById('timeFrom').value = '';
  document.getElementById('dateTo').value = '';
  document.getElementById('timeTo').value = '';
  document.getElementById('attention').value = '';

  let newList = new List(inputtedToDoListName, inputtedNote, inputtedDateFrom, inputtedTimeFrom, inputtedDateTo, inputtedTimeTo, inputtedAttention);

  listData.addList(newList);
  displayListDetails(listData);
  console.log(listData);
});
