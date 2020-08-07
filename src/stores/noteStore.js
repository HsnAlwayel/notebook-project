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
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(res.data);
      notebook.notes.push(res.data);
    } catch (error) {
      console.log("Note ->create-> error", error);
    }
  };

  updateNote = async (updatedNote) => {
    try {
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        updatedNote
      );
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in updatedNote) note[key] = updatedNote[key];
    } catch (error) {
      console.log("Note->updatedNote ->error", error);
    }
  };

  deleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      this.notes = this.notes.filter((_note) => _note.id !== noteId);
    } catch (error) {
      console.log(error);
    }
  };
}
decorate(NoteStore, {
  notes: observable,
  loading: observable,
});

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
