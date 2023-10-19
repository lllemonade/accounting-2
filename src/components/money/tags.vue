<template>
  <div class="tags">
    <div class="scrollArea">
      <ul class="tagList">
        <li v-for="tag in tagsData" :key="tag" :class="{ selected: value.indexOf(tag) >= 0 }" @click="select(tag)">
          {{ tag }}
        </li>
        <li class="new" @click="createTag">
          <icon name="add" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class tags extends Vue {
  // 总的tags数组
  @Prop() tagsData: string[] | undefined;
  //用户选择的tag
  @Prop() readonly value !: string;

  // selectedTags: string = '衣';
  // 选标签
  select(tag: string) {
    const index = this.value.indexOf(tag)
    if (index >= 0) {
      return;
    }
    // else {
    //   // this.value = tag
    // }
    this.$emit('update:value', tag)
  };
  createTag() {
    const name = window.prompt('请输入标签名')
    if (name === '') {
      window.alert('标签名不能为空')
    } else if (this.tagsData) {
      this.$emit('update:tagsData', [...this.tagsData, name])
    }
    console.log(this.tagsData)
  };

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/helper.scss";

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
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      li {
        // flex-grow: 1;
        background: rgba(153, 153, 153, 0.45);
        $h: 52px;
        width: 25%;
        border-radius: $h/2;
        line-height: $h;
        text-align: center;
        padding: 0 8px;
        margin-right: 20px;
        margin-top: 12px;

        &.selected {
          background-color: $color-highLight;
          color: white;
        }
      }

      .new {
        .icon {
          position: relative;
          top: 8px;
        }
      }
    }
  }
}
</style>