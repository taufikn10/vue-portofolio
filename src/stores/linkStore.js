import { defineStore } from "pinia";

const sosmedStore = defineStore({
  id: "sosmed",
  state: () => ({
    list: [
      {
        icon: "fa-brands fa-facebook",
        link: "https://www.facebook.com/taufik.nurrahman.980/",
      },
      {
        icon: "fa-brands fa-square-github",
        link: "https://github.com/taufikn10",
      },
      {
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/taunur_/",
      },
      {
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/taunur/",
      },
    ],
  }),
  getters: {
    sosmed$list: ({ list }) => list,
  },
});

export default sosmedStore;
