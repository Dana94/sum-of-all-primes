<template>
  <div class="row">
    <template v-if="checkNumber">
      <number v-for="n in number" :key="n.id">{{ n }}</number>
    </template>
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
      if(this.number <= 1){
        alert('Enter a number greater than or equal to 2!');
        return false;
      }
      else {
        return true;
      }

    }
  }
}
</script>

<style>

</style>
