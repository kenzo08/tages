<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";
import TagesIcon from '../../public/svg/tages.svg';
import CartSvg from '../../public/svg/cart.svg';
import HeartSvg from '../../public/svg/heart.svg';


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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
</style>
