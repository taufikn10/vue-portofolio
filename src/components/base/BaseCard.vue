<script>
import BaseImage from "./BaseImage.vue";
export default {
  name: "BaseCard",
  props: {
    to: Object,
    data: Object,
  },
  components: { BaseImage },
};
</script>

<template>
  <div class="card border-0 shadow-sm work-box">
    <div class="work-img">
      <BaseImage :src="`${data.img}`" alt="" class="img-fluid" />
    </div>
    <div class="work-content">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="w-title">{{ data.title }}</h2>
          <div class="w-more">
            <span class="w-ctegory">{{ data.category }}</span>
            /
            <span class="w-date">{{ data.date }}</span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="w-like">
            <RouterLink :to="to"
              ><font-awesome-icon icon="fa-solid fa-eye"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
