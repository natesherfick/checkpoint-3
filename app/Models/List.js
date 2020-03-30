import { generateId } from "../utils.js";
import Task from "./Task.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listName = data.listName;
    this.id = data.id || generateId();
    /**@type {Task[]} */
    this.tasks = [];
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return `
<div class="col-4 border border-warning rounded shadow">
      <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h1 class="listish-font">${this.listName}</h1>
        <form onsubmit="app.listController.addTask(event, '${this.id}')">
          <div class="form-group">
            <label for="taskName">Task Name:</label>
            <input type="text" name="taskName" class="form-control" placeholder="Type a task in here..." aria-describedby="helpId">
          </div>
        </form>
        <h5>Tasks To Do</h5>
        <dl class"taskish-font">
          ${this.Tasks}
        </dl>
      </div>
    `;
  }

  get Tasks() {
    let template = "";
    this.tasks.forEach(task => (template += task.getTemplate(this.id)));
    return template;
  }
}
