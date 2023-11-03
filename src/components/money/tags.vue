<template>
  <div class="tags">
    <div class="scrollArea">
      <ul class="tagList">
        <li v-for="tag in tagList" :key="tag.id" :class="{ selected: selectedTags.indexOf(tag.name) >= 0 }"
          @click="select(tag.name)">
          {{ tag.name }}
        </li>
        <li class="new" @click="createTag">
          <icon name="add" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store/index2';
import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component
export default class tags extends Vue {
  // 总的tags数组
  // @Prop({ required: true }) readonly tagsData?: Tag[];
  tagList = store.fetchTags()
  //用户选择的tag
  // @Prop() readonly value !: string;
  selectedTags: string[] = ['衣'];

  // 选标签
  select(tag: string) {
    const index = this.selectedTags.indexOf(tag)
    if (index < 1) {
      // return;
      this.$emit('update:value', this.selectedTags);
    } else return

  }
  createTag() {
    const name = window.prompt('请输入标签名')
    if (!name) {
      return window.alert('标签名不能为空')
    }
    store.createTag(name)
    console.log(this.tagList)
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
      // justify-content: center;
      // align-items: center;
      flex-wrap: wrap;

      li {
        // flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: transparent;
        border: 2px solid $color-highLight;
        color: #000;
        width: 56px;
        height: $h;
        border-radius: calc($h / 2);
        padding: 0 8px;
        margin: 16px 10px 0 10px;

        &.selected {
          background-color: $color-highLight;
          color: white;
        }
      }
    }
  }
}
</style>