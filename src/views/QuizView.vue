<script setup>
import { defineProps, ref, watch } from 'vue';
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

const questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`;

</script>

<template>
  <div>
    <!-- {{ quiz }} -->
    <QuizHeader 
      :questionStatus="questionStatus"
      :questionNumber="currentQuestionIndex"
    />
    <div>
      <Question 
        :question="quiz.questions[currentQuestionIndex]"
      />
    </div>

  </div>
</template>

<style scoped>

</style>