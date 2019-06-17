<template>
  <div class="row">
    <number v-for="n in maxNumber" :key="n.id" :number="n"></number>
  </div>
</template>

<script>
import Number from "./Number.vue";
export default {
  data() {
    return {
      primes: []
    };
  },
  components: {
    Number
  },
  computed: {
    maxNumber() {
      return this.$store.getters.getMaxNumber;
    },
    // checkNumber() {
    //   if (this.number <= 1) {
    //     alert("Enter a number greater than or equal to 2!");
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    // findPrimes() {
    //   this.primes = [];

    //   for (let i = 2; i <= this.number; i++) {
    //     this.primes.push(i);
    //   }
    //   // all the numbers (all show in the grid)
    //   console.log(this.primes);
    //   // probably look for a better solution...
    //   for (let i = 0; i < this.primes.length - 1; i++) {
    //     for (let j = i + 1; j < this.primes.length; j++) {
    //       if (this.primes[j] % this.primes[i] == 0) {
    //         console.log(this.primes[j], " index: ", j);
    //         this.primes.splice(j, 1);
    //         j -= 1;
    //       }
    //     }
    //   }
    //   console.log(this.primes);
    //   console.log(this.primes.reduce(this.arraySum));
    //   return this.primes;
    // }
  },
  methods: {
    arraySum: function(acc, curr) {
      return acc + curr;
    }
  },
  updated() {

    // https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
    // https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn

  }
};
</script>

<style lang="scss" scoped>
.prime {
  background-color: pink;
}
</style>
