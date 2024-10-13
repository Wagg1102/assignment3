<<<<<<< HEAD
<template>
  <div>
    <router-view></router-view>
=======
<script setup>
import { computed } from 'vue';
import BHeader from './components/BHeader.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const showHeader = computed(() => {
 
  return route.name !== 'CountBookAPI';
});
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
>>>>>>> 6ebdbcf0593d693b8597d4852604749c3d6e559f
  </div>
</template>
