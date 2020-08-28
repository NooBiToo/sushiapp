<template>
  <div class="telephone">
    <a href="tel:+79955533553" class="telephone__link">+7(995)553-35-53</a>
  </div>
</template>

<script>
export default {
  name: "vTelephone",
}
</script>

<style>
.telephone {
  font-size: 1.2rem;
}
.telephone__link {
  color: inherit;
  text-decoration: none;
}
.telephone__link:hover {
  color: #f0c013;
}
</style>