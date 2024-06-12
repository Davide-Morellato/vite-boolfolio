<template>
  <div class="pt-30">
    <h2>Name Project: {{ singleProject.name_project }}</h2>
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
