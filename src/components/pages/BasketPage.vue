<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";
import ProductCard from '../ProductCard.vue';

const store = useStore();
const basketData = computed(()=>store.getters.getBasket)

console.log(1, basketData.value)
</script>

<template>
  <h1>Корзина товаров</h1>
  <div v-if="basketData.length" :class="$style.products">
    <ProductCard v-for="product in basketData"
                 :id="product.id"
                 :name="product.name"
                 :code="product.code"
                 :imgUrl="product.imgUrl"
                 :currentPrice="product.currentPrice"
                 :oldPrice="product.oldPrice"
                 :isInBasket="product.isInBasket"
                 :isInFavourites="product.isInFavourites"
                 :key="product.id"
    />
  </div>
  <span v-else :class="$style.empty">Вы еще не добавили товары в корзину</span>
</template>

<style module>
.products{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 41px;
}

.empty{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 280px 0;
}

@media (max-width: 1280px) {
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 41px;
  }
}
@media (max-width: 720px) {
  .products{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 41px;
  }
}

@media (max-width: 640px) {
  .products{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 41px;
  }
}
</style>
