<script setup lang="ts">
import SelectBase from "./atom/SelectBase.vue";
import {ref} from "vue";

const materialOption = [{label: 'Металл', value:'1'}, {label: 'Древесина', value:'2'}]
const priceOption = [{label: 'По возрастанию', value:'more_expensive'}, {label: 'По убыванию', value:'cheaper'}]
const activeMaterial= ref(materialOption[0]);
const activePrice = ref(priceOption[0])
</script>

<template>
  <div :class="$style['filter_container']">
    <div :class="$style['selector_wrapper']">
      <span :class="$style.label">Сортировать по:</span>
      <SelectBase v-model="activePrice" :options="priceOption"/>
    </div>
   <div :class="$style['selector_wrapper']">
     <span :class="$style.label">Материал:</span>
     <SelectBase v-model="activeMaterial" :options="materialOption"/>
   </div>
  </div>
</template>

<style module>
.filter_container{
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.selector_wrapper{
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label{
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #4F4F4F;
}
</style>
