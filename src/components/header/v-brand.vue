<template>
  <div class="brand">
    <router-link to="/" class="brand__title">
      VERSAL
      <span class="brand__subtitle">роллы & курочка</span>
    </router-link>
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
  font-size: 36px;
  font-family: PerpetuaTitlingMT;
  font-weight: 600;
}
.brand__title > .nav__link-active,
.router-link-exact-active {
  border: none !important;
}
.brand__subtitle {
  display: block;
  font-size: 1rem;
  text-align: center;
  transition: 0.5s;
  font-weight: normal;
}
@media (max-width: 1200px) {
  .brand__title {
    font-size: 30px;
  }
  .brand__subtitle {
    font-size: 0.9rem;
  }
}
@media (max-width: 495px) {
  .brand__title {
    font-size: 1.5rem;
  }
}
</style>