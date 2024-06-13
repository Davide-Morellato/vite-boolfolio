<script>

</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/portfolio">Go to Portfolio</RouterLink>
    <RouterLink to="/contact">Go to contact</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
