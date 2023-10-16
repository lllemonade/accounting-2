<template>
  <nav>
    <router-link class="item" :to="{ name: 'labels' }">
      <icon name="label" />
      标签
    </router-link>
    <router-link class="item" :to="{ name: 'money' }">
      <icon name="money" />
      记账
    </router-link>
    <router-link class="item" :to="{ name: 'statistics' }">
      <icon name="statistic" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "navBar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  > .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 55px;
    font-weight: bold;
  }
}
</style>