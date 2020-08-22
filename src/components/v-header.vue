<template>
  <header class="header">
    <div class="header__container" v-scroll="handleScroll">
      <v-brand />
      <v-menu />
      <v-telephone />
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import VBrand from "./header/v-brand.vue";
import VMenu from "./header/v-menu.vue";
import VTelephone from "./header/v-telephone.vue";

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

export default {
  name: "VHeader",
  components: {
    VBrand,
    VMenu,
    VTelephone
  },
  methods: {
    handleScroll: function (evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 0) {
        el.classList.add('header__sticky')
      } else {
        el.classList.remove('header__sticky')
      }
    }
  }
};
</script>

<style>
.header {
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  width: 100%;
}
.header__container {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  height: 75px;
  align-items: center;
  font-family: TT Norms Medium;
  transition: .5s;
}
.header__sticky {
  height: 50px;
}
.header__sticky > .brand > .brand__title > .brand__subtitle {
  opacity: 0;
  display: none;
}
</style>
