<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

import QuizesView from './views/QuizesView.vue';


</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px; /* this */
    margin: 0 auto; 
  }


</style>