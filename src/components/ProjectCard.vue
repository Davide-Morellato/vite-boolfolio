<template>
  <div class="pt-30">
    <h2>
      Name Project: 
      <RouterLink :to="{name: 'project.show', params:{slug: singleProject.slug}}">{{ singleProject.name_project }} </RouterLink>
    </h2>
    <p><strong>Description: </strong>{{ singleProject.description }}</p>
    <p><strong>Link: </strong>{{ singleProject.url_github }}</p>

    <p v-if="singleProject.type_id">
      <strong>Type: </strong>{{ singleProject.type.name }}
    </p>
    <p v-else><strong>Type: </strong> --</p>
    <div>
      <p>
        <strong>Techs: </strong>
      </p>
      <span
        class="p-10"
        v-for="tech in singleProject.technologies"
        :key="tech.id">
        {{ tech.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

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
