import { mapState } from "pinia";
import projectStore from "../stores/projectStore";

export default {
  computed: {
    ...mapState(projectStore, ["project$list"]),
  },
};
