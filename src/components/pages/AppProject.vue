<template>
  <div class="container py-5 mx-auto vh-100 w-fit">
    <div class="row justify-content-center">
      <div class="card">
        <div class="card-body text-center">
          <h4>
              {{ project.name_project }}
          </h4>
          <h6 class="card-subtitle pt-3 text-body-secondary">
            Slug: {{ project.slug }}
          </h6>
          <p class="card-text pt-3">
            <strong>Link: </strong>{{ project.url_github }}
          </p>
          <p>
              <strong>Description: </strong>{{ project.description }}
          </p>
          <p v-if="project.type_id">
              <strong>Type: </strong>{{ project.type.name }}
          </p>
          <p v-else><strong>Type: </strong> --</p>
          <div>
            <p>
              <strong>Techs: </strong>
            </p>
            <span
              class="p-10"
              v-for="tech in project.technologies"
              :key="tech.id">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-30">
    <button @click="goBack">Back to the Future</button>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      project: [],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },

    fetchProject() {
      axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
        .then((result) => {
          // console.log(result.data.project);
          this.project = result.data.project;
        });
    },
  },
  created() {
    this.fetchProject();
  },
};
</script>

<style lang="scss" scoped></style>
