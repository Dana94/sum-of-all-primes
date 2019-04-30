<template>
  <div class="row">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        aria-label="user-number"
        aria-describedby="enter-number"
        v-model.number="number"
      >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="enter-number">Change Number</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  }
};
</script>

<style>
</style>
