<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="card w-50 bor-none shadow">
        <div class="card-body text-center">
          <h4 class="pt-2">
            {{ project.name_project }}
          </h4>
          <h5 class="card-subtitle pt-3 text-body-secondary">
            {{ project.slug }}
          </h5>
          <div class="card-text pt-3">
            <p class="pt-2"><strong>Link: </strong>{{ project.url_github }}</p>
            <div class="p-4">
              <div v-if="project.description">
                <p>
                  <strong>Description: </strong>
                </p>
                <p>
                  {{ project.description }}
                </p>
              </div>
              <div v-else>
                <p><strong>Description:</strong></p>
                <p>--</p>
              </div>
            </div>
            <div class="p-2">
              <div v-if="project.type_id">
                <p><strong>Type: </strong>{{ project.type.name }}</p>
              </div>
              <div v-else>
                <p><strong>Type: </strong> --</p>
              </div>
            </div>
            <div class="py-3">
              <p class="pb-2">
                <strong>Techs: </strong>
              </p>
              <span
                class="p-10"
                v-for="tech in project.technologies"
                :key="tech.id"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-100">
      <button class="btn-slice" @click="goBack">
        <div class="top"><span>BACK TO THE FUTURE</span></div>
        <div class="bottom"><span>BACK TO THE FUTURE</span></div> 
      </button>
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
      axios
        .get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
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
