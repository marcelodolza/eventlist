<template>
  <div class="EventLocation">
    <div class="EventLocation__map" :style="`background-image: url(${map})`">
      <a-button
        class="EventLocation__close"
        shape="circle"
        icon="close"
        size="small"
        @click.prevent="$router.push('/events')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: require("@/assets/img/map.jpg")
    };
  }
};
</script>

<style scoped lang="scss">
.EventLocation {
  position: relative;
  height: 100%;

  &__map {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: -50px;
    opacity: 0;
    background-position: 50% 50%;
    background-size: cover;
    animation: slideUp 0.8s ease forwards;
    img {
      width: 100%;
    }
  }

  &__close.ant-btn {
    position: absolute;
    right: 10px;
    top: 60px;
    box-shadow: 0 1px 13px #ccc;
    font-size: 12px;
  }
}
</style>
