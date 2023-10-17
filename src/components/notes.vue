<template>
  <!-- 备注 -->
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" />
    </label>
  </div>
</template>

<script>
export default {
  name: "notes",
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  height: 62px;
  line-height: 62px;
  font-size: 14px;
  padding: 0 16px;
  .name {
    margin-right: 20px;
  }
  input {
    flex-grow: 1;
    background-color: transparent;
    &::placeholder {
      color: #999;
    }
  }
}
</style>