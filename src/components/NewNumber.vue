<template>
  <div class="row">
    <div class="input-group mb-3 col-6 offset-3">
      <input
        type="text"
        class="form-control"
        aria-label="user-number"
        aria-describedby="enter-number"
        v-model.number="number"
        @keydown.enter="submitNumber"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    submitNumber() {
      this.$emit("numberChanged", this.number);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin: 0 auto;
}
</style>

