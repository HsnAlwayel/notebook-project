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

  updateNotebook = async (updatedNotebook) => {
    try {
      await axios.put(
        `http://localhost:8000/notebooks/${updatedNotebook.id}`,
        updatedNotebook
      );
      const notebook = this.notebooks.find(
        (notebook) => notebook.id === updatedNotebook.id
      );
      for (const key in notebook) notebook[key] = updatedNotebook[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteNotebook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
      this.notebooks = this.notebooks.filter(
        (_notebook) => _notebook.id !== notebookId
      );
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
