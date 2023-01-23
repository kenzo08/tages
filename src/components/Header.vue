<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";
import TagesIcon from '../../public/svg/tages.svg';



const store = useStore();

const amountOfBasketProducts = computed(() => store.state.amountOfBasketProducts)
const amountOfFavouritesProducts = computed(() => store.state.amountOfFavouritesProducts)

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
        <li>
          <router-link to="/">
            <TagesIcon/>
          </router-link>
        </li>
        <li v-for="item in navLinks">
          <router-link :to="item.link">
            {{ item.name }}
            <b :class="$style['amount_product']">
              <sup v-if="amountOfBasketProducts>0">
                {{ item.name === 'Корзина' ? amountOfBasketProducts : '' }}
              </sup>
            </b>
            <b :class="$style['amount_product']">
              <sup v-if="amountOfFavouritesProducts>0">
                {{ item.name === 'Избранные товары' ? amountOfFavouritesProducts : '' }}
              </sup>
            </b>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.header {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  width: 100%;
}

.amount_product {
  color: #EB5757;
}


@media (max-width: 640px) {
  .header{
    position: sticky;
    top: 0;
    z-index: 3;
    padding: 10px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
    width: 100%;
  }

  li{
    font-size: 12px;
  }
}
</style>
