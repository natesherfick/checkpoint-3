import { generateId } from "../utils.js";

export default class Task {

constructor(data){
  this.taskName = data.taskName
  this.id = data.id || generateId()
}

getTemplate(listId){
  return `
  <dd>
      <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${listId}','${this.id}')">
      <span>&times;</span>
      </button>
      <h5 class="taskish-font">${this.taskName}</h5>
      </dd>
    `
}






}