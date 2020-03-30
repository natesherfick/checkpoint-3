import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  create(newListName){
    let newList = new List(newListName)
    _store.State.lists.push(newList)
    console.log(_store.State.lists);
    
    _store.saveState()
  }

delete(listId) {
  let i = _store.State.lists.findIndex(list => listId == list.id)
  _store.State.lists.splice(i,1)

  _store.saveState()
}

addTask(newTaskName, listId){
  let newTask = new Task(newTaskName)
  let list = _store.State.lists.find(list => listId == list.id)
  list.tasks.push(newTask)

  _store.saveState()
}

deleteTask(listId, taskId){
  debugger
let list = _store.State.lists.find(list => listId == list.id)
let i = list.tasks.findIndex(i => taskId == taskId.id)
_store.State.list.tasks.splice(i,1)

_store.saveState()
}







}

const SERVICE = new ListService();
export default SERVICE;
