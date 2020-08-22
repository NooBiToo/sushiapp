<template>
  <div class="brand">
    <a href="/" class="brand__title">
    VERSAL
    <span class="brand__subtitle">суши & роллы</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "vBrand",
};
</script>

<style>
.brand {
  display: flex;
  align-items: center;
}
.brand__title {
  text-decoration: none;
  color: inherit;
  font-size: 30px;
}
.brand__subtitle {
  display: block;
  font-size: 1.1rem;
  text-align: center;
  transition: .5s;
}
</style>
