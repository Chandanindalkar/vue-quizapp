<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';


const state = ref();

</script>

<template>
  <div>
    <header>
      <h4>Questions 1/3</h4>
      <div class="bar">
        <div class="completion"></div>
      </div>
    </header>
    <div>
      <div class="question-container">
        <h1 class="question">
          What is the chemical formula of Salt?
        </h1>
      </div>
      <div class="options-container">
        <div class="option">
          <p class="option-label">A</p>
          <div class="option-value" >
            NaCL
          </div>
        </div>
      </div>
    </div>

  </div>
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

  .question-container {
    margin-top: 20px;
  }
  
  .question {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;

  }
  
  .option-label {
    color: black;
    background-color: bisque;
    width: 60px;
    height: 60px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
</style>