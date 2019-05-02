<template>
  <div class="col-xs-1 number-grid" :style="{backgroundColor: myBackgroundColor}"><slot></slot></div>
</template>

<script>
export default {
  props: ['myBackgroundColor']

}
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

