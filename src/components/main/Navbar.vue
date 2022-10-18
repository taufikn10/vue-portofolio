<script setup>
import { RouterLink } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "vue";
const visible = ref(false);
</script>

<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <header id="header" class="header-scrolled sticky-top">
    <div class="container align-items-center justify-content-between">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <RouterLink to="/">
            <img src="/images/wlogo.png" alt="Taunur | Portfolio" height="36" />
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            :class="visible ? null : 'collapsed'"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            :aria-expanded="visible ? 'true' : 'false'"
            @click="visible = !visible"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-collapse"
            :class="!visible ? 'collapse' : ''"
            id="navbarNav"
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-txt" @click="visible = !visible"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/project"
                  class="nav-txt"
                  @click="visible = !visible"
                  >Project</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/contact"
                  class="nav-txt"
                  @click="visible = !visible"
                  >Contact</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
