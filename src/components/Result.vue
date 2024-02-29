<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

const router = useRouter();
const { numberOfCorrectAnswers, questionsLength } = defineProps(['numberOfCorrectAnswers', 'questionsLength'])
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>
        {{ numberOfCorrectAnswers }}/{{ questionsLength }}
    </h1>
    <button @click="router.push('/')">Home</button>
  </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;
    }
    
    h1 {
        font-size: 80px;
    }
</style>