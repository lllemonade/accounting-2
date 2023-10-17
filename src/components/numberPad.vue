<template>
  <div class="numberPad">
    <div class="total">01234</div>
    <div class="calculator">
      <button>1</button><button>2</button><button>3</button><button>日期</button
      ><button>4</button><button>5</button><button>6</button><button>+</button
      ><button>7</button><button>8</button><button>9</button><button>-</button
      ><button>·</button><button>0</button
      ><button><icon name="delete" /></button>
      <button class="ok">完成</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "numberPad",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";
.numberPad {
  .total {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 68px;
    font-size: 28px;
    font-family: Consolas, monospace;
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