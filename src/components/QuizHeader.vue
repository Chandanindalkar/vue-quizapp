<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
// import Module from '';

const { questionStatus } = defineProps(['questionStatus']);

// const questionStatus = ref();

</script>

<template>
    <header>
      <h4>Questions {{ questionStatus }}</h4>
      <div class="bar">
        <div class="completion"></div>
      </div>
    </header>
</template>

<style scoped>
  header {
    margin-top: 20px;
  }

  header h4 {
    margin-top: 20px;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
  }

  .completion {
    width: 0%;
    height: 100%;
    background-color: bisque;
  }
</style>