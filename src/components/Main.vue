<template>
  <div>

    <ProjectCard v-for="project in projects" :key="project.id" :singleProject="project"/>

    <div class="container pt-30 pb-20 d-flex flex-wrap flex-row justify-content-center gap-30">
        <p class="page m-0 bg-softpetrol rounded-pill w-10px fw-bold text-center" @click="nextPage(n)" v-for="n in pageNumber" :key="n">
            {{ n }}
        </p>
    </div>

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
      currentPage: 1,
      pageNumber: null
    };
  },
  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects",
        {params:{
            page: this.currentPage
        }}
      ).then((result) => {
        // console.log(result.data.projects.data);
        this.projects = result.data.projects.data
        this.pageNumber = result.data.projects.last_page
      });
    },

    nextPage(n){
        this.currentPage = n
        this.fetchProjects()
    }
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style>

</style>
