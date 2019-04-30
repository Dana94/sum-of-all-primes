<template>
  <div id="app" class="container">
    <number-grid :number="number"></number-grid>
  </div>
</template>

<script>
import NumberGrid from './components/NumberGrid.vue';

export default {
  name: 'app',
  data () {
    return {
      number: 10
    }
  },
  components: {
    NumberGrid
  }
}
</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

</style>
