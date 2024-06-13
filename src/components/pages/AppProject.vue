<template>
  <div class="mt-30">
    <h2>
        Name Project: {{ project.name_project }}
    </h2>
    <p>
        <strong>Slug: </strong>{{ $route.params.slug }}
    </p>
    <p>
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


    <button class="mt-30" @click="goBack">Back to the Future</button>
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
          console.log(result.data.project);
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
