<template>
  <layOut>
    <div class="top_bar">
      <icon name="arrow-right" @click="goBack" />
      <span>编辑标签</span>
    </div>
    <div>
      <notes :value="tag?.name" @update:value.lazy="updateTag" fieldName="标签名" placeholder="请输入标签名"></notes>
    </div>

    <div class="deleteTag">
      <button @click=deleteTag>删除标签</button>
    </div>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import notes from '@/components/money/notes.vue';

@Component({ components: { notes } })
export default class editLabel extends Vue {
  created() {
    const id = this.$route.params.id
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id);
    if (!this.tag) {
      // this.$router.push('/404')
      this.$router.replace('/404')
    }
  }
  get tag() {
    return this.$store.state.currentTag
  }
  updateTag(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag', { id: this.tag.id, name })
    }
  }
  deleteTag() {
    if (this.tag) {
      this.$store.commit('removeTag', this.tag.id)

    }
  }
  goBack() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";

.top_bar {
  position: relative;
  text-align: center;
  background: $color-highLight;
  margin-bottom: 8px;
  height: 6vh;
  line-height: 6vh;

  .icon {
    position: absolute;
    left: 10px;
    top: calc(50% - 0.75em);
    rotate: 180deg;
    vertical-align: middle;
    // color: #fff;
  }

  span {
    color: #fff;
    font-size: 16px;
  }
}

.deleteTag {
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