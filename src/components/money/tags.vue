<template>
  <div class="tags">
    <div class="scrollArea">
      <ul class="tagList">
        <li v-for="tag in tagList" :key="tag.id" @click="select(tag.name)">
          <span :class="{ selected: selectedTags.indexOf(tag.name) >= 0 }">{{ tag.name }}</span>
        </li>
        <li class="new" @click="createTag">
          <span>
            <icon name="add" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class tags extends Vue {
  isPayOut = true;
  // 总的tags数组
  get tagList() {
    return this.$store.state.tagList;
  }
  // get tagList2() {
  //   return this.$store.state.tagList2;
  // }
  //用户选择的tag
  selectedTags: string[] = ['衣'];
  created() {
    this.$store.commit('fetchTags')
  }
  // 选标签
  select(tag: string) {
    const index = this.selectedTags.indexOf(tag)
    if (index < 1) {
      // this.$emit('update:value', tag);
      this.selectedTags.splice(index, 1)
      this.selectedTags.push(tag)
      return;
    }
  }
  createTag() {
    const name = window.prompt('请输入标签名')
    if (!name) {
      return window.alert('标签名不能为空')
    }
    this.$store.commit('createTag', name)
    console.log(this.$store.state.tagList)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/helper.scss";
$h: 56px;

.tags {
  display: flex;
  align-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;
  font-size: 14px;
  padding: 16px;

  // height: 260px;
  .scrollArea {
    height: 32vh;
    overflow: auto;
    flex-grow: 1;

    .tagList {
      display: flex;
      flex-wrap: wrap;

      li {
        // flex-grow: 1;
        display: flex;
        justify-content: center;
        background: transparent;
        width: 25%;
        margin: 16px 0 0 0;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          border: 2px solid $color-highLight;
          color: #000;
          width: 56px;
          height: $h;
          border-radius: calc($h / 2);

          &.selected {
            background-color: $color-highLight;
            color: white;
          }

        }
      }
    }
  }
}
</style>