<template>
  <div id="app" class="container">
    <!-- <new-number @numberChanged="number = $event"></new-number> -->
    <number-grid :number="number"></number-grid>
  </div>
</template>

<script>
import NumberGrid from "./components/NumberGrid.vue";
import NewNumber from "./components/NewNumber.vue";

export default {
  name: "app",
  data() {
    return {
      number: 120
    };
  },
  components: {
    NumberGrid,
    NewNumber
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
