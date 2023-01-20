<script setup lang="ts">

const currentYear: number = new Date().getFullYear();
</script>
<template>
<footer>
  <div :class="$style['footer_container']">
    <p :class="$style.copyright">© TEGAS GROUP {{currentYear}} </p>
  </div>
</footer>
</template>

<style module>
footer.footer {
  height: 300px;
  width: 100%;
  background-color: #333333;
}

p.copyright {
  line-height: 40px;
  font-size: 0.7em;
}
</style>
