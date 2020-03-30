import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let templateHTML = "";
  let toDoLists = _store.State.lists;

  toDoLists.forEach(list => (templateHTML += list.Template));
  document.getElementById("listsHTML").innerHTML = templateHTML
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    console.log("controller");
    
    event.preventDefault();
    let formData = event.target;
    //newList is being created as a new object, passing the "listName" name from the HTML form
    let newListName = {
      listName: formData.listName.value
    };

    _listService.create(newListName);
    _drawLists();
    formData.reset();
  }

  delete(listId){
    let doIt = confirm("Are you sure?")
      if (doIt == true){
        _listService.delete(listId)
        _drawLists()
      }
    
  }

  addTask(event, listId){
    event.preventDefault()
    let formData = event.target
    let newTaskName = {
      taskName: formData.taskName.value
    }
    _listService.addTask(newTaskName, listId)
    _drawLists()
  }

  deleteTask(listId, taskId){
    let doIt = confirm("Are you sure?")
    if( doIt == true){
    _listService.deleteTask(listId, taskId)
    _drawLists()}
    
  }
}
