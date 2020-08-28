<template>
  <transition name="success">
    <div class="success">
      Спасибо за заказ, оператор свяжется с вами в ближайщее время
    </div>
  </transition>
</template>

<script>
export default {
  name: "VSuccess",
  computed: {
  },
  methods: {
    successClose() {
      this.$emit('successClose')
    }
  },
  mounted() {
    setTimeout(this.successClose, 5000);
  }
};
</script>

<style>
.success {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fcd83c;
  color: #000;
  font-size: 1.3rem;
  text-align: center;
  vertical-align: center;
  padding: 15px;
}

.success-enter {
  top: -1000px;
  transition: 1s;
}

.success-enter-active {
  top: 0;
  transition: 1s;
}

.success-leave {
  top: 0px;
}

.success-leave-active {
  top: -100px;
  transition: 1s;
}
</style>
