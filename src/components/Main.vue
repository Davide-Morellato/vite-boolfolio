<template>
  <div>

    <ProjectCard v-for="project in projects" :key="project.id" :singleProject="project"/>

    <!-- <ul>
        <li v-for="project in projects" :key="project.id">
            <h4>
                {{ project.name_project }}
            </h4>
            <p>
                {{ project.description }}
            </p>
            <p>
                {{ project.url_github }}
            </p>
        </li>
    </ul> -->
  </div>
</template>

<script>
import axios from "axios";
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((result) => {
        // console.log(result.data.projects);
        this.projects = result.data.projects
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style>

</style>
