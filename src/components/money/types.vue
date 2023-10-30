<template>
  <!-- 类别 -->
  <div>
    <ul class="type">
      <li :class="value === 'payOut' ? 'active' : ''" @click="classType('payOut')">
        支出
      </li>
      <li :class="value === 'inCome' ? 'active' : ''" @click="classType('inCome')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class types extends Vue {
  // type = "payOut";
  @Prop() readonly value!: string;
  //! 表示ts不用考虑初始值

  classType(type: string) {
    if (type !== "payOut" && type !== "inCome") {
      throw new Error("type is unknow");
    }
    this.$emit('update:value', type)
    // 即使类型没有变化，每次点击也触发，所以用watch
    // this.$emit('update:value', this.type)
  }
  //因为改为外部传入的type，不在这里监听
  // @Watch('type')
  // onTypeChange(Value: string) {
  //   this.$emit('update:value', Value)
  // }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/helper.scss";

.type {
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: $color-highLight;
  color: #fff;

  >li {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // flex-grow: 1;
    height: 58px;
    width: 50%;

    &.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: antiquewhite;
    }
  }
}
</style>