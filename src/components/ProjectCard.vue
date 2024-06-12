<template>
    <div>
        <h2>
            {{ singleProject.name_project }}
        </h2>
        <p>
            {{ singleProject.description }}
        </p>
        <p>
            {{singleProject.url_github}}
        </p>
    </div>
</template>

<script>
export default {

    props:{
        singleProject: {
            type: Object,
        }
    },

    data () {
        return {

        }
    }
};
</script>

<style>

</style>