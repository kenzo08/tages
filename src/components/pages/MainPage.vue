<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import {ProductDataType} from "../../types";
import ProductCard from '../ProductCard.vue';
import ProductFilter from "../ProductFilter.vue";

interface IProductData {
  id: string;
  name: string;
  code: string | null;
  imgUrl: string;
  oldPrice: number | null;
  currentPrice: number;
  material: number;

}

const productsData = ref<IProductData[]>([])

axios.get('/mock-data/items.json')
    .then((response) => {
      response.data.map((i: ProductDataType) => {
        return productsData?.value.push(
            {
              id: i.id,
              name: i.name,
              code: i.code,
              oldPrice: i.price.old_price,
              currentPrice: i.price.current_price,
              imgUrl: i.image.url,
              material: i.material

            }
        )
      })
    })
    .catch((error) => {
      console.log(error);
    })

</script>

<template>
  <h1>Комплекты стеллажных систем</h1>
  <ProductFilter/>
  <div :class="$style.products">
    <ProductCard v-for="product in productsData"
                 :title="product.name"
                 :code="product.code"
                 :imgLink="product.imgUrl"
                 :currentPrice="product.currentPrice"
                 :oldPrice="product.oldPrice"
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
