import { decorate, observable } from "mobx";
import notebookss from "../notebooks";

class NotebookStore {
  notebooks = notebookss;

  createNotebook = (newNotebook) => {
    newNotebook.id = this.notebooks[this.notebooks.length - 1].id + 1;
    this.notebooks.push(newNotebook);
  };
}

decorate(NotebookStore, {
  notebooks: observable,
});

const notebookStore = new NotebookStore();

export default notebookStore;
