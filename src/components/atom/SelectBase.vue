<template>
  <select @change="changeOption">
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Props{
  modelValue: string;
  options: [];
}

defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const changeOption = (event) =>{
  emit('update:modelValue', event.target.value)
};
</script>

<style module>

select{
  padding: 9px 15px;
  height: 40px;
  border: none;
  font-size: 15px;
  background-color: #F2F2F2;
}
</style>
