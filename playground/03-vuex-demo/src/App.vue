<template>
  <div>
    <app-counter></app-counter>
    <app-result></app-result>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';

export default {

  components : {
    'app-counter' : Counter,
    'app-result' : Result
  }
}
</script>