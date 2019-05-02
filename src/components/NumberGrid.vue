<template>
  <div class="row">
    <template v-if="checkNumber">
      <number v-for="n in number" :key="n.id" ref="num" my-background-color="">{{ n }}</number>
    </template>
  </div>
</template>

<script>
import Number from "./Number.vue";
export default {
  props: ["number"],
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
    }
  },
  methods: {
    primes: function(val, refs) {
      //         this.arr = [];
      //         this.number = val;
      //         let color = 'pink';
      //         console.log('children', refs.numbers.children);
      //         for(let i = 2; i <= val; i++){
      //             this.arr.push(i);
      //         }
      //         // all the numbers (all show in the grid)
      //         console.log(this.arr);
      //         // probably look for a better solution...
      //         for(let i = 0; i < this.arr.length - 1; i++) {
      //             for(let j = i + 1; j < this.arr.length; j++) {
      //                 if(this.arr[j] % this.arr[i] == 0){
      //                     refs.numbers.children[i].style = 'background-color: pink';
      //                     refs.numbers.children[j].style = 'background-color: yellow';
      //                     console.log(this.arr[j], ' index: ', j);
      //                     this.arr.splice(j, 1);
      //                     j -= 1;
      //                 }
      //             }
      //         }
      //         console.log(this.arr);
      //         console.log(this.arr.reduce(this.arraySum));
    },
    arraySum: function(acc, curr) {
      return acc + curr;
    }
  },
  updated() {
    // can change the props here!
    // gives a warning...
    // https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
    // https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn
    console.log(this.$refs.num[0].$props);
    this.$refs.num[0].$props.myBackgroundColor = 'green';
  }
};
</script>

<style>
</style>
