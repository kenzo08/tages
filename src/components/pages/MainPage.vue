<script setup lang="ts">
import {useStore} from "vuex";
import {computed, onMounted, reactive, ref} from "vue";
import ProductCard from '../ProductCard.vue';
import ProductFilter from "../ProductFilter.vue";


const store = useStore();
const productsData = computed(()=>store.getters.getProducts);
const filteredData = computed(()=>store.getters.getFiltered);

const filterData = (material:string)=>{
  store.dispatch('filterByMaterial', material)
}

const sortData = (sortType:string)=>{
store.dispatch('sortData', sortType )
}

onMounted(()=>{
  store.dispatch('getProducts');
});
</script>

<template>
  <h1>Комплекты стеллажных систем</h1>
  <ProductFilter @getActiveMaterial="filterData" @getActivePrice="sortData"/>
  <div :class="$style.products">
    <ProductCard v-for="product in (filteredData.length ? filteredData : productsData)"
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
