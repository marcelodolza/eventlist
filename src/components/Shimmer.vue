<template>
  <div class="Shimmer" :class="type"></div>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>

<style scoped lang="scss">
.Shimmer {
  position: relative;
  border-radius: 2px;
  animation-name: placeholderShimmer;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: #efefef;
  background-image: linear-gradient(
    to right,
    #efefef 0%,
    #dfdfdf 20%,
    #efefef 40%,
    #efefef 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;

  &.box {
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
  }
  &.line {
    height: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
