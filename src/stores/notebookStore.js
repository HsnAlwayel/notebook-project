import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];
  loading = true;

  fetchNotebook = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };

  createNotebook = async (newNotebook) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      this.notebooks.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(NotebookStore, {
  notebooks: observable,
  loading: observable,
});

const notebookStore = new NotebookStore();
notebookStore.fetchNotebook();
export default notebookStore;
