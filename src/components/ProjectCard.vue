<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="card bg-white w-50">
        <div class="card-body text-center">
          <h2 class="title_proj pt-2">
            <RouterLink
              :to="{
                name: 'project.show',
                params: { slug: singleProject.slug },
              }"
            >
              {{ singleProject.name_project }}
            </RouterLink>
          </h2>
          <div class="card-text pt-3">
            <div>
              <div v-if="singleProject.description">
                <p><strong>Description:</strong></p>
                <p>{{ singleProject.description }}</p>
              </div>
              <div v-else>
                <p><strong>Description:</strong></p>
                <p>--</p>
              </div>
            </div>

            <p class="p-4">
              <strong>Link: </strong>{{ singleProject.url_github }}
            </p>

            <div class="p-2">
              <p v-if="singleProject.type_id">
                <strong>Type: </strong>{{ singleProject.type.name }}
              </p>
              <p v-else><strong>Type: </strong> --</p>
            </div>
            <div class="py-3">
              <p class="pb-2">
                <strong>Techs: </strong>
              </p>
              <span
                class="p-10"
                v-for="tech in singleProject.technologies"
                :key="tech.id"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    singleProject: {
      type: Object,
    },
  },

  data() {
    return {};
  },
};
</script>

<style></style>
