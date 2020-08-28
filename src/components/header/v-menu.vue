<template>
  <nav class="nav__bar">
    <div class="nav__bar-wrapper">
      <ul class="nav__menu">
        <li class="nav__item">
          <router-link to="/sets" class="nav__link">Наборы</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/rolls" class="nav__link">Роллы</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/chicken" class="nav__link">Курица</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/salads" class="nav__link">Салаты</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/ship" class="nav__link"
            >Доставка и оплата</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "vMenu",
};
</script>

<style lang="scss">
.nav__bar {
  display: block;
}
.nav__menu {
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  background-color: transparent;
  list-style-type: none;
}
.nav__item {
  margin-right: 15px;
}
.nav__link {
  text-decoration: none;
  padding: 5px;
  color: inherit;
  transition: 0.2s;
  text-transform: uppercase;
}
.nav__link:hover {
  color: #f0c013;
}
.nav__link-active,
.router-link-exact-active {
  border-bottom: 2px solid #efefef;
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
    top: -1px;
  }
  .nav__bar:before {
    content: '⋖';
    left: -5px;
  }
  .nav__bar:after {
    content: '⋗';
    right: -5px;
  }
  .nav__menu {
    width: 620px;
  } 
}
</style>
