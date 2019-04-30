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
  }
}
</script>

<style>

</style>
