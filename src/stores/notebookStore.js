import { decorate, observable } from "mobx";
import notebookss from "../notebooks"


class NotebookStore {
    notebooks = notebookss;

}

decorate(NotebookStore, {
    notebooks: observable,
});

const notebookStore = new NotebookStore();


export default notebookStore;