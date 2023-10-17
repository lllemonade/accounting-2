<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script lang="ts">
export default {
  name: "layOut",
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>