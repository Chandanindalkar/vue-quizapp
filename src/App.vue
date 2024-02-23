<script setup>
  import q from './data/quizes.json'
  import { ref, watch } from 'vue'

  const quizes = ref(q);
  const search = ref("");

  watch( search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <div class="container">
    <!-- {{ q }} -->
    <header>
      <!-- {{ search }} -->
      <h1>
        Quizzes
      </h1>
      <input v-model.trim="search" type="text" placeholder="Search..." name="" id="">
    </header>

    <div class="options-container">
      <div 
        v-for="quiz in quizes" 
        class="card"
        :key="quiz.id"
      >
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 150px; /* this */
    margin: 0 auto; 
  }

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input{
    border: none;
    background-color: rgba(128, 128, 128, 0.7);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARDS */
  
  .card {
    width: 140px; /* this */
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  }

  .card img {
    width: 100%;
  }
  
  .card .card-text { 
    padding: 0 0px;
  }
  
  .card .card-text h2 { 
    font-weight: bold;
  }

</style>
