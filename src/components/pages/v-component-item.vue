<template>
  <div class="item">
    <div class="item__image">
      <img :src="'/assets/images/' + item.image" :alt="item.name" />
    </div>
    <div class="item__main">
      <div class="item__title">
        <h2>{{ item.name }}</h2>
      </div>
      <div class="item__subtitle">{{ item.short_desc }}</div>
      <div class="item__description">
        {{ item.desc }}
      </div>
      <div class="item__buy">
        <div class="buy__price">
          {{ item.price }} ₽<span class="item__weight">/ {{ item.weight }}</span>
        </div>
        <button type="button" class="buy__button" @click="addToCart">
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VComponentItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart',this.item);
    },
  },
};
</script>

<style></style>
