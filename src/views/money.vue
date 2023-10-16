<template>
  <div>
    <layOut>
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new"><button>新增标签</button></div>
      </div>
      <div>
        <label class="comments">
          <span class="name">备注</span>
          <input type="text" />
        </label>
      </div>
      <div>
        <ul class="type">
          type
          <li>收入</li>
          <li>支出</li>
        </ul>
      </div>

      <div class="numberPad">
        计算器
        <div>显示区域</div>
        <div>计算区域</div>
      </div>
    </layOut>
  </div>
</template>

<script>
export default {
  name: "money",
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  .current {
    display: flex;
    li {
      background: rgba(153, 153, 153, 0.45);
      $h: 24px;
      border-radius: ($h/2);
      line-height: $h;
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  .new {
    margin-top: 16px;
    button {
      color: #999;
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>