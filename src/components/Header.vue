<script setup lang="ts">
import TagesIcon from '../../public/svg/tages.svg'
const navLinks = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Избранные товары',
    link: '/favourites',
  },
  {
    name: 'Корзина',
    link: 'basket',
  },
]
</script>
<template>
  <header :class="$style.header">
    <nav>
      <ul>
        <li><router-link to="/"><TagesIcon/></router-link></li>
        <li v-for="item in navLinks">
          <router-link :to="item.link">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

ul {
display: inline;
}
</style>
