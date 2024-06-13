<template>
    <div class="mt-30">
        <h1>
            Scrivimi!
        </h1>
        <form action="#">
            <div class="pt-30">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Inserisci il Nome">
            </div>
            <div class="pt-30">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" placeholder="Inserisci la tua Email">
            </div>
            <div class="pt-30">
                <label for="message">Message: </label>
                <textarea name="message" id="" rows="8"></textarea>
            </div>
            <div class="pt-30">
                <button>Invia</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {}
</script>

<style>

</style>