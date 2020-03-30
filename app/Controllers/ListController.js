import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let templateHTML = "";
  let toDoLists = _store.State.lists;

  toDoLists.forEach(list => (templateHTML += list.Template));
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(event) {
    console.log("controller");
    
    event.preventDefault();
    let formData = event.target;
    //newList is being created as a new object, passing the "listName" name from the HTML form
    let newListName = {
      listName: formData.listName.value
    };

    _listService.createList(newListName);
    _drawLists();
    formData.reset();
  }
}
