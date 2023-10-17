<template>
  <layOut>
    <!-- 类别 -->
    <div>
      <ul class="type">
        <li class="active">收入</li>
        <li>支出</li>
      </ul>
    </div>
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
    <!-- 备注 -->
    <div>
      <label class="comments">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注" />
      </label>
    </div>

    <div class="numberPad">
      <div class="total">01234</div>
      <div class="calculator">
        <button>1</button><button>2</button><button>3</button
        ><button>日期</button><button>4</button><button>5</button
        ><button>6</button><button>+</button><button>7</button><button>8</button
        ><button>9</button><button>-</button><button>·</button><button>0</button
        ><button><icon name="delete" /></button>
        <button class="ok">完成</button>
      </div>
    </div>
  </layOut>
</template>

<script>
export default {
  name: "money",
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
    height: 30vh;
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
        border-radius: ($h/2);
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
.comments {
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

.type {
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #999;
  > li {
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
      background-color: $color-highLight;
    }
  }
}
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