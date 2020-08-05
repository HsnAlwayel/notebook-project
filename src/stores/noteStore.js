import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notes");
      this.notes = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };

  getItemById = (noteId) => {
    return this.notes.find((note) => note.id === noteId);
  };


  createNote = async (newNote, notebook) => {
    try {
      const res = await axios.post(`http://localhost:8000/notebooks/${notebook.id}/notes`, newNote);
      this.notes.push(res.data);
      notebook.notes.push({ id: res.data.id });
    } catch (error) { console.log("Note ->create-> error", error); }
  };
  updateProduct = async (updatedProduct) => {
    try {
      await axios.put(`http://localhost:8000/products/${updatedProduct.id}`, updatedProduct);

      const product = this.products.find((product) => product.id === updatedProduct.id);
      for (const key in updatedProduct) product[key] = updatedProduct[key];
    } catch (error) { console.log("Product->updatedProduct ->error", error) };
  };

}
decorate(NoteStore, {
  notes: observable,
  loading: observable,
});

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
