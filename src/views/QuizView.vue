<script setup>
import { defineProps, ref, watch, computed } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Result from '../components/Result.vue'
import quizes from '../data/quizes.json'

const route = useRoute();

// The parseInt() function parses a string argument,
// and returns an integer of the specified radix (the base in mathematical numeral systems).
const quizId = parseInt(route.params.id);

const currentQuestionIndex = ref(0);

const quiz = quizes.find(q => q.id == quizId);

const numberOfCorrectAnswers = ref(0);

const showResults = ref(false);

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
// })
const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
})

const barPercentage = computed(() => {
  return `${currentQuestionIndex.value/quiz.questions.length * 100}%`;
})

const onOptionSelected = (isCorrect) => {
  if(isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  // show results
  if(quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  // to move onto next question
  currentQuestionIndex.value++;
}

</script>

<template>
  <div>
    <!-- {{ numberOfCorrectAnswers }} -->
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question 
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result 
        v-else
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        :questionsLength="quiz.questions.length"
      />
    </div>
  </div>
</template>

<style scoped>

</style>