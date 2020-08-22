<template>
  <nav class="nav__bar">
    <ul class="nav__menu">
      <!-- <li class="nav__item">
        <router-link to="/" class="nav__link">Главная</router-link>
      </li> -->
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
        <router-link to="/ship" class="nav__link">Доставка и оплата</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "vMenu",

}
</script>

<style>
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
  transition: .2s;
  text-transform: uppercase;
}
.nav__link:hover {
  color: green;
}
.nav__link-active, .router-link-exact-active {
  border-bottom: 2px solid #efefef;
}
</style>