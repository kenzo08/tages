<script setup lang="ts">
import { useStore} from "vuex";
import {computed} from "vue";
import ProductCard from '../ProductCard.vue';

const store = useStore();
const favourites = computed(()=>store.getters.getFavourite)
</script>

<template>
<h1>Избранные товары</h1>
  <div :class="$style.products">
    <ProductCard v-for="product in favourites"
                 :id="product.id"
                 :name="product.name"
                 :code="product.code"
                 :imgUrl="product.imgUrl"
                 :currentPrice="product.currentPrice"
                 :oldPrice="product.oldPrice"
                 :isInBasket="product.isInBasket"
                 :isInFavourites="product.isInFavourite"
                 :key="product.id"
    />
  </div>
</template>

<style module>
.products{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 41px;
}
</style>
