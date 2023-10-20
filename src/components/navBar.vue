<template>
  <nav>
    <router-link class="item" :to="{ name: 'labels' }" active-class="selected">
      <icon name="label" />
      标签
    </router-link>
    <router-link class="item" :to="{ name: 'money' }" active-class="selected">
      <icon name="money" />
      记账
    </router-link>
    <router-link class="item" :to="{ name: 'statistics' }" active-class="selected">
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
@import "../assets/style/helper.scss";

nav {
  display: flex;
  box-shadow: 0 0 3px rgba($color: salmon, $alpha: 0.5);

  >.item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 33.3%;
    height: 55px;
    font-size: 12px;
    font-weight: bold;
  }

  .item.selected {
    color: $color-highLight;
  }
}
</style>