<template>
  <div class="tags">
    <div class="scrollArea">
      <ul class="tagList">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li class="new">
          <icon name="add" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component

export default class tags extends Vue {

}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";

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
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      li {
        // flex-grow: 1;
        background: rgba(153, 153, 153, 0.45);
        $h: 52px;
        width: 20%;
        border-radius: $h/2;
        line-height: $h;
        text-align: center;
        padding: 0 8px;
        margin-right: 8px;
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

        &:hover {
          color: $color-highLight;
        }
      }
    }
  }
}
</style>