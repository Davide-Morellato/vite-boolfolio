<script></script>

<template>
  <header>
    <h1>LOGO</h1>
    <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
    <nav>
      <RouterLink class="p-10" to="/">Go to Home</RouterLink>
      <RouterLink class="p-10" to="/portfolio">Go to Portfolio</RouterLink>
      <RouterLink class="p-10" to="/contact">Go to contact</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
