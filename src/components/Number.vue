<template>
  <div
    class="col-xs-1 number-grid"
    v-if="number != 1"
    :style="{backgroundColor: bgColor, opacity: bgOpactity}"
  >{{number}}</div>
</template>

<script>
export default {
  props: ["number"],
  data() {
    return {
      // in store?
      marked: false, // to indicate whether the number should have its background color changed
      bgColor: "white",
      bgOpactity: 1
    };
  },
  computed: {
    primes() {
      return this.$store.getters.getPrimes;
    }
  },
  created() {
    // references computed property
    // console.log(this.primes);
    if (this.number > 1) {
      this.$store.dispatch("addNumber", { number: this.number });
    }
    this.primes.forEach(elem => {
      if(this.number % elem.number == 0 && !this.marked) {
        this.marked = true;
        this.bgColor = elem.color;
        if(this.number != elem.number){
          this.bgOpactity = .6;
        }
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.number-grid {
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px #151617;
  margin: 5px 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 2.5rem;
}
</style>

