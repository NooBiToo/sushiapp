<template>
  <div class="ship">
    <h2 class="ship__title">Доставка и оплата</h2>

    <div class="ship__content">
      <p>
        Бесплатная доставка действует от суммы заказа 1000 рублей в
        <span class="ship__text_bold">Центральный район</span>
      </p>
      <p>В остальные районы доставка стоит 200 рублей к стоимости заказа</p>
    </div>

    <h2 class="ship__title">Время работы и контакты</h2>

    <div class="ship__content">
      <p>
        Мы работаем с <span class="ship__text_bold">12:00</span> до
        <span class="ship__text_bold">02:00</span> (без перерывов и выходных)
      </p>
      <p>
        Телефон доставки: <span class="ship__text_bold">+7(995)553-35-53</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VShip",
};
</script>

<style lang="scss">
.ship {
  background-color: #fff;
  padding: 20px;
}
.ship__title {
  font-size: 1.2rem;
  font-family: TT Norms Medium;
}
.ship__content {
  margin-top: 15px;
  margin-bottom: 20px;
}
.ship__text_bold {
  font-weight: 600;
}
.ship__zone {
  margin: 5px 0;
}
</style>
