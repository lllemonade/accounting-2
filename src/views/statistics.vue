<template>
  <layOut>
    <Tabs class-prefix="type" :dataSource="type" :value.sync="defaultType" />
    <Tabs class-prefix="sortBy" :dataSource="sortBy" :value.sync="defaultSortBy" />
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import Tabs from '@/components/tabs.vue';

@Component({ components: { Tabs } })
export default class statistic extends Vue {
  type = [
    { text: '支出', value: 'payOut' },
    { text: '收入', value: 'inCome' },
  ];
  defaultType = 'payOut';
  sortBy = [
    { text: '按天', value: 'day' },
    { text: '按周', value: 'week' },
    { text: '按月', value: 'month' },
  ];
  defaultSortBy = 'day';

}
</script>

<style scoped lang="scss">
@import "@/assets/style/helper.scss";

::v-deep li.sortBy-item {
  height: 44px;
  font-size: 16px;
}
</style>