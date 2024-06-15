<template>
  <div class="container py-5 text-center vh-100">
    <h1 class="contact">Contact Me</h1>
    <div class="pt-5 container mx-auto w-600px">
      <form action="#" method="get">
        <div class="input-group mb-4">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            type="email"
            class="form-control"
            placeholder="Insert your Email"
          />
        </div>

        <div class="input-group mb-4">
          <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input type="text" class="form-control" />
        </div>
        <div class="form-floating mb-4">
          <textarea
            class="form-control"
            placeholder="Leave your message"
            id="floatingTextarea2"
            style="height: 200px"></textarea>
          <label for="floatingTextarea2">Message....</label>
        </div>
        <button class="btn-submit mt-5"><span>Submit</span></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
