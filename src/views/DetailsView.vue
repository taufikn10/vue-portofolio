<script>
import "../assets/style/detail.css";
import BaseImage from "../components/base/BaseImage.vue";
export default {
  name: "DetailsView",
  computed: {
    mounted() {
      return this.project$list.find((x) => x.slug == this.$route.params.slug);
    },
  },
  components: { BaseImage },
};
</script>

<template>
  <section class="py-4">
    <div class="text-center">
      <h3 class="title-a">Detail Product</h3>
      <div class="line-mf mb-4"></div>
    </div>
    <div class="container">
      <div class="col-lg-6 offset-lg-3">
        <div class="card card-detail">
          <div class="row align-items-center no-glutters">
            <div class="col-auto"></div>
          </div>
          <h1 class="text-center fw-bold">
            {{ mounted.title }}
          </h1>
          <hr />
          <div class="row">
            <div>
              <span>{{ mounted.category }} / </span>
              <span class="blue-span">{{ mounted.date }}</span>
            </div>
          </div>
          <!-- foto -->
          <div class="gallery mt-1">
            <div class="xzoom-container">
              <BaseImage :src="`${mounted.img}`" class="xzoom" alt="images" />
            </div>
          </div>
          <h2 class="fw-semibold mt-1">About Website</h2>
          <p>{{ mounted.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
