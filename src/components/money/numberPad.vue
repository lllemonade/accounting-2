<template>
  <div class="numberPad">
    <div class="total">{{ output }}</div>
    <div class="calculator">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button>日期</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="add">+</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="min">-</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove">
        <icon name="delete" />
      </button>
      <button class="ok" @click="ok">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class numberPad extends Vue {
  // output = '0';
  @Prop() readonly value!: number;
  output = this.value.toString();
  // @Prop() recordList: Record[] = []

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    if (this.output.length === 16) { return; }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') { return; }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else { this.output = this.output.slice(0, -1) }
  }
  add() { }
  min() { }
  clear() {
    this.output = '0'
  }
  ok() {
    this.$emit('update:value', this.output)
    this.$emit('submit', this.output)
    this.output = '0'
  }
  // @Watch('output')
  // onOutPutChange(Value: string) {
  //   this.$emit('update:value', Value)
  // }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/helper.scss";

.numberPad {
  .total {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 68px;
    font-size: 28px;
    font-family: Consolas, monospace;
    padding: 0 12px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.3),
      inset 0 3px 3px -3px rgba(0, 0, 0, 0.3);
  }

  .calculator {
    display: flex;
    flex-wrap: wrap;

    button {
      width: 25%;
      height: 64px;
      background-color: transparent;
      border: 1px solid rgba(250, 128, 114, 0.25);
      border-collapse: collapse;

      &.ok {
        background-color: $color-highLight;
        color: white;
      }

      .icon {
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
}
</style>