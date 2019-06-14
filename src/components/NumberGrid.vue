<template>
  <div class="row">
    <!-- <template v-if="checkNumber">
      <number
        v-for="n in findPrimes"
        :key="n.id"
        ref="num"
        my-background-color
        :class="{prime: isPrime}"
      >{{ n }}</number>
    </template>-->
      <number
        v-for="n in number"
        :key="n.id"
        v-if="n != 1"
        my-background-color
        :class="{prime: isPrime}"
      >{{ n }}</number>
  </div>
</template>

<script>
import Number from "./Number.vue";
export default {
  props: ["number"],
  data() {
    return {
      isPrime: true,
      primes: []
    };
  },
  components: {
    Number
  },
  computed: {
    checkNumber() {
      if (this.number <= 1) {
        alert("Enter a number greater than or equal to 2!");
        return false;
      } else {
        return true;
      }
    },
    findPrimes() {
      this.primes = [];

      for (let i = 2; i <= this.number; i++) {
        this.primes.push(i);
      }
      // all the numbers (all show in the grid)
      console.log(this.primes);
      // probably look for a better solution...
      for (let i = 0; i < this.primes.length - 1; i++) {
        for (let j = i + 1; j < this.primes.length; j++) {
          if (this.primes[j] % this.primes[i] == 0) {
            console.log(this.primes[j], " index: ", j);
            this.primes.splice(j, 1);
            j -= 1;
          }
        }
      }
      console.log(this.primes);
      console.log(this.primes.reduce(this.arraySum));
      return this.primes;
    }
  },
  methods: {
    arraySum: function(acc, curr) {
      return acc + curr;
    }
  },
  updated() {
    // can change the props here!
    // gives a warning...
    // https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
    // https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn
    // console.log(this.$refs.num[0].$props);
    // this.$refs.num[0].$props.myBackgroundColor = 'green';
  }
};
</script>

<style lang="scss" scoped>
.prime {
  background-color: pink;
}
</style>
