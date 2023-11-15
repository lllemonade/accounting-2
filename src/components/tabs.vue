<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value"
      :class="{ [classPrefix + '-item']: classPrefix, active: item.value === value }" @click="select(item)">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
  @Prop({
    required: true,
    type: Array
  }) dataSource!: { text: string, value: string }[]
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  select(item: { text: string, value: string }) {
    this.$emit('update:value', item.value)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.tabs {
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: $color-highLight;
  color: #fff;

  >li {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // flex-grow: 1;
    height: 58px;
    width: 50%;
    border: 1px solid wheat;

    &.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(50% - 2em);
      height: 2px;
      width: 4em;
      background-color: #666;
    }
  }
}
</style>