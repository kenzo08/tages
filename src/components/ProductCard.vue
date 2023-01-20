<script setup lang="ts">
import CartSvg from '../../public/svg/cart.svg'
import HeartSvg from '../../public/svg/heart.svg'
interface Props {
  imgLink: string;
  title: string;
  code?: string | null;
  currentPrice: number;
  oldPrice?: number | null;
}

defineProps<Props>();
</script>

<template>
  <div :class="$style['product_card']">
  <span v-if="oldPrice" :class="$style.badge">
    Скидки
  </span>
    <div :class="$style.img">
      <img :src="imgLink" :alt="`Картинка ${title}`"/>
    </div>
    <div :class="$style['main_info_wrapper']">
      <div :class="$style['main_info']">
        <span v-if="code" :class="$style.code">{{ code }}</span>
        <h2 :class="$style.title">{{ title }}</h2>
        <div :class="$style.prices">
          <span v-if="oldPrice" :class="$style['old_price']">{{ oldPrice }}</span>
          <span>{{ currentPrice }}</span>
        </div>
      </div>
      <div :class="$style['nav_btn_box']">
       <CartSvg/>
        <HeartSvg/>
      </div>
    </div>
  </div>
</template>

<style module>
.product_card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 352px;
  background-color: #ffffff;
  padding: 10px 0;
  border: solid 1px gray;
}

.img {
  width: 238px;
  height: 237px;
  margin: 0 49px;
}

.main_info {
  display: flex;
  flex-direction: column;
}

.nav_btn_box {
  display: flex;
  gap: 18px;
}

.main_info_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 23px 12px 0 12px;
}

.badge {
  position: absolute;
  top:3px;
  width: 81px;
  height: 24px;
  padding: 3px 16px;
  background-color: #EB5757;
  color: #ffffff;
}

.prices {
  display: flex;
  flex-direction: row;
  gap: 9px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
}

.old_price{
  text-decoration: line-through;
}

.title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%
}

.code{
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
}
</style>
