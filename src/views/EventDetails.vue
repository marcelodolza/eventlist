<template>
  <div class="EventDetails">
    <a-row :gutter="10">
      <a-col :span="12">
        <Shimmer type="box" />
      </a-col>
      <a-col :span="12"> </a-col>
      <a-col :span="24">
        <Shimmer type="line" />
      </a-col>
      <a-col :span="24">
        <Shimmer type="line" />
      </a-col>
      <a-col :span="18">
        <Shimmer type="line" />
      </a-col>
    </a-row>
    <br />
    <a-row :gutter="10">
      <a-col :span="12">
        <Shimmer type="box" />
      </a-col>
      <a-col :span="12">
        <Shimmer type="box" />
      </a-col>
      <a-col :span="12">
        <Shimmer type="box" />
      </a-col>
      <a-col :span="12">
        <Shimmer type="box" />
      </a-col>
    </a-row>
    <br />
    <a-row :gutter="10">
      <a-col :span="24">
        <Shimmer type="line" />
      </a-col>
      <a-col :span="20">
        <Shimmer type="line" />
      </a-col>
      <a-col :span="12">
        <Shimmer type="line" />
      </a-col>
    </a-row>

    <footer class="EventDetails__footer">
      <a-button type="primary">
        <a-icon type="tags" />
        GET TICKETS
      </a-button>
    </footer>
  </div>
</template>

<script>
import Shimmer from "@/components/Shimmer.vue";

export default {
  name: "EventDetails",
  components: {
    Shimmer
  }
};
</script>
<style scoped lang="scss">
.EventDetails {
  padding-bottom: 50px;

  &__footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 24px;
    .ant-btn {
      display: block;
      width: 100%;
    }
  }
}
</style>
