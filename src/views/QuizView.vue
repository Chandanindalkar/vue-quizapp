<script setup>
import { defineProps, ref, watch, computed } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import quizes from '../data/quizes.json'

const route = useRoute();
// The parseInt() function parses a string argument,
// and returns an integer of the specified radix (the base in mathematical numeral systems).
const quizId = parseInt(route.params.id);

const currentQuestionIndex = ref(0);

const quiz = quizes.find(q => q.id == quizId);

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
// })
const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
})

const barPercentage = computed(() => {
  return `${currentQuestionIndex.value/quiz.questions.length * 100}`;
})

</script>

<template>
  <div>
    <!-- {{ quiz }} -->
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question 
        :question="quiz.questions[currentQuestionIndex]"
      />
    </div>
    <button @click="currentQuestionIndex--">Prev</button>
    <button @click="currentQuestionIndex++">Next</button>

  </div>
</template>

<style scoped>

</style>