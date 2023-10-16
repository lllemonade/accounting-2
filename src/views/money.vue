<template>
  <div>
    <layOut>
      <div>
        main area and tags
        <ul class="tags">
          <li class="current">衣</li>
          <li class="current">食</li>
          <li class="current">住</li>
          <li class="current">行</li>
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
</style>