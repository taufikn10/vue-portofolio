<script>
import "../assets/style/home.css";
import BaseCard from "../components/Base/BaseCard.vue";
import projectStore from "../stores/projectStore";
import { mapState } from "pinia";

export default {
  name: "ProjectView",
  components: { BaseCard },
  computed: {
    ...mapState(projectStore, ["project$list"]),
  },
};
</script>

<template>
  <!--  Project Section  -->
  <section id="project" class="py-4 mt-1">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">Project</h3>
            <div class="line-mf mb-5"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="(project, index) in project$list" :key="index">
          <div class="col-md-4">
            <BaseCard
              :data="project"
              :to="{
                name: 'details',
                params: {
                  slug: project.slug,
                },
              }"
            >
            </BaseCard>
          </div>
        </template>
      </div>
      <nav aria-label="Page navigation example ">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              <font-awesome-icon icon="fa-solid fa-chevron-left"
            /></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <font-awesome-icon icon="fa-solid fa-chevron-right"
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <!-- End Portfolio Section -->
</template>
