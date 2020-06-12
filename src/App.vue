<template>
  <a-layout>
    <Header />
    <transition name="slide-x-transition" mode="out-in">
      <router-view />
    </transition>
  </a-layout>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
