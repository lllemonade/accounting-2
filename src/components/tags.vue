<template>
  <div class="tags">
    <div class="scrollArea">
      <ul class="tagList">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tags",
};
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
      justify-content: space-evenly;
      flex-wrap: wrap;
      li {
        background: rgba(153, 153, 153, 0.45);
        $h: 52px;
        width: 20%;
        border-radius: $h/2;
        line-height: $h;
        text-align: center;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 12px;
      }
    }
  }
  .new {
    margin-top: 16px;
    align-items: flex-end;
    button {
      color: #999;
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 3px;
      &:hover {
        color: $color-highLight;
        border-bottom: 1px solid;
      }
    }
  }
}
</style>