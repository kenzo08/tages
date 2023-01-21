<script setup lang="ts">
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import ProductCard from '../ProductCard.vue';
import ProductFilter from "../ProductFilter.vue";


const store = useStore();
const productsData = computed(()=>store.getters.getProducts);

onMounted(()=>{
  store.dispatch('getProducts');
});
</script>

<template>
  <h1>Комплекты стеллажных систем</h1>
  <ProductFilter/>
  <div :class="$style.products">
    <ProductCard v-for="product in productsData"
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
