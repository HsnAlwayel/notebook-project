import { decorate, observable } from "mobx";
import axios from "axios";

class TagStore {
  tags = [];
  loading = true;

  fetchTags = async () => {
    try {
      const res = await axios.get("http://localhost:8000/tags");
      this.tags = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };
}
decorate(TagStore, {
  tags: observable,
  loading: observable,
});

const tagStore = new TagStore();
tagStore.fetchTags();
export default tagStore;
