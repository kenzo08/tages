<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Header/>
  <main :class="$style.container">
    <router-view/>
  </main>
<Footer/>
</template>

<style module>
.container{
  margin-bottom: 160px;
}
</style>
