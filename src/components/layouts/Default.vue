<script>
import NavbarComp from "../main/Navbar.vue";
import FooterComp from "../main/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<template>
  <NavbarComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>
