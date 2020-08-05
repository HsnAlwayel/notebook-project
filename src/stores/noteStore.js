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
}

decorate(NoteStore, {
  notes: observable,
  loading: observable,
});

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
