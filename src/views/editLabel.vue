<template>
  <layOut>
    <div class="top_bar">
      <icon name="arrow-right"></icon>
      <span>编辑标签</span>
    </div>
    <notes fieldName="标签名"></notes>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import notes from '@/components/money/notes.vue';

@Component
export default class extends Vue {
  created() {
    const id = this.$route.params.id
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag)
    } else {
      // this.$router.push('/404')
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";


.top_bar {
  position: relative;
  text-align: center;
  background: $color-highLight;
  height: 6vh;
  line-height: 6vh;

  span {
    color: #fff;
    font-size: 16px;
  }

  .icon {
    position: absolute;
    left: 10px;
    top: calc(50% - 0.75em);
    rotate: 180deg;
    vertical-align: middle;
    color: #fff;
  }

}
</style>