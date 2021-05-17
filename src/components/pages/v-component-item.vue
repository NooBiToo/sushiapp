<template>
  <div class="item" v-if="item.gsx$active.$t == 'TRUE'">
    <div class="item__image">
      <img :src="'/assets/images/' + item.gsx$image.$t" :alt="item.gsx$name.$t" />
    </div>
    <div class="item__main">
      <div class="item__title">
        <h2>{{ item.gsx$name.$t }}</h2>
      </div>
      <div class="item__subtitle">{{ item.gsx$shortdesc.$t }}</div>
      <div class="item__description">
        {{ item.gsx$desc.$t }}
      </div>
      <div class="item__buy">
        <div class="buy__price">
          {{ item.gsx$price.$t }} ₽<span class="item__weight">/ {{ item.gsx$weight.$t }}</span>
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
