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
import Vue from "vue";
import VBrand from "./header/v-brand.vue";
import VMenu from "./header/v-menu.vue";
import VTelephone from "./header/v-telephone.vue";

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

export default {
  name: "VHeader",
  components: {
    VBrand,
    VMenu,
    VTelephone,
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 0) {
        el.classList.add("header__sticky");
      } else {
        el.classList.remove("header__sticky");
      }
    },
  },
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
  transition: 0.5s;
}
.header__sticky {
  height: 50px;
}
.header__sticky > .brand > .brand__title > .brand__subtitle {
  opacity: 0;
  display: none;
}
@media (max-width: 1600px) {
  .header {
    width: 100%;
  }
  .header__container {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
  }
}
@media (max-width: 900px) {
  .header {
    position: fixed;
  }
  .header__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 5px;
    height: 75px;
  }
  .header__sticky {
    height: 75px;
  }
  .brand {
    order: 1;
  }
  .brand__subtitle {
    display: none;
  }
  .nav__bar {
    order: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;
    width: 100%;
  }
  .nav__menu {
    justify-content: space-between;
  }
  .nav__item {
    margin: 0;
  }
  .telephone {
    order: 2;
    justify-self: end;
  }
}
@media (max-width: 620px) {
  .nav__bar-wrapper {
    position: relative;
    overflow-y: scroll;
    width: 95%;
    margin: 0 auto;
  }
  .nav__bar {
    position: relative;
  }
  .nav__bar:before, .nav__bar:after {
    position: absolute;
    display: block;
  }
  .nav__bar:before {
    content: '⋖';
    left: 0;
    top: 0;
  }
  .nav__bar:after {
    content: '⋗';
    right: -5px;
    top: 0;
  }
  .nav__menu {
    width: 620px;
  } 
}
@media (max-width: 550px) {
  .nav__menu {
    width: 600px;
  } 
}
</style>
