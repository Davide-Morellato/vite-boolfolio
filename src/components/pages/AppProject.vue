<template>
    <div>
        <p>
            {{ $route.params.slug }}
        </p>

        <button @click="goBack">
            Back to the Future
        </button>
    </div>

</template>

<script>
    export default {
        methods:{
            goBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>