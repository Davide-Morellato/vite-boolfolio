<script></script>

<template>
  <header class="py-4 bg-softpetrol">
    <div class="container mx-auto">
      <div class="row justify-content-around align-items-baseline">
        <div class="col-auto">
          <RouterLink class="p-10" to="/">
            <img class="w-80px logo" src="../logo/fly_logo.png" alt="logo">
          </RouterLink>
        </div>
        <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
        <div class="col-auto">
          <nav class="d-flex text-white fw-light gap-30">
          <RouterLink class="button left" to="/"><span>Home</span></RouterLink>
          <RouterLink class="button left" to="/portfolio"><span>Portfolio</span></RouterLink>
          <RouterLink class="button left" to="/contact"><span>Contact</span></RouterLink>
        </nav>
        </div>
      </div>
    </div>
  </header>

  <main class="bg-soft">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "./style/general.scss";
</style>
