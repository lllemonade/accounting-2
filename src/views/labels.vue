<template>
  <div>
    <layOut>
      <ul class="tagList">
        <li v-for="tag in tagsData" key="tag"><span>{{ tag }}</span>
          <icon name="arrow-right"></icon>
        </li>
      </ul>
      <div class="createTag">
        <button>新建标签</button>
      </div>
    </layOut>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class label extends Vue {
  @Prop() tagsData: string[] | undefined;

};
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";

.tagList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;

  li {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid rgba($color: salmon, $alpha: .35);
  }

  >.icon {
    color: salmon;
  }

}

.createTag {
  margin: 25px auto;

  button {
    width: 120px;
    height: 48px;
    background-color: $color-highLight;
    color: white;
    border-radius: 10px;
  }

}
</style>