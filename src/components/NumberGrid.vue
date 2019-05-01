<template>
  <div class="row">
    <number v-for="n in number" :key="n.id">{{ n }}</number>
  </div>
</template>

<script>
import Number from './Number.vue';
export default {
  props: ['number'],
  components: {
    Number
  },
  computed: {
    checkNumber(){
      if(number <= 1){
        alert('Enter a number greater than or equal to 2!');
      }
      else {
        return number;
      }

    }
  }
}
</script>

<style>

</style>
