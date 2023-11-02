<template>
  <div>
    <layOut>
      <div class="tagList">
        <router-link :to="`/labels/editLabel/${tag.id}`" v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <icon name="arrow-right"></icon>
        </router-link>
      </div>

      <div class="createTag">
        <button @click=createTag>新建标签</button>
      </div>
    </layOut>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class labels extends Vue {
  // @Prop() tagsData: string[] | undefined;
  tags = window.tagList;

  createTag() {
    const name = window.prompt('请输入标签名')
    if (name) {
      window.createTag(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";

.tagList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;

  a {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid rgba($color: salmon, $alpha: .35);

    svg {
      color: salmon;
    }
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