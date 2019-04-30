<template>
  <div id="app" class="container">
    <new-number></new-number>
    <number-grid :number="number"></number-grid>
  </div>
</template>

<script>
import NumberGrid from './components/NumberGrid.vue';
import NewNumber from './components/NewNumber.vue';


export default {
  name: 'app',
  data () {
    return {
      number: 10
    }
  },
  components: {
    NumberGrid,
    NewNumber
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
