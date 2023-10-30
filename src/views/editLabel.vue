<template>
  <layOut>
    <div class="top_bar">
      <icon name="arrow-right" @click="goBack"></icon>
      <span>编辑标签</span>
    </div>
    <div>
      <notes :value="tag.name" @update:value="updateTag($event.target.value)" fieldName="标签名"></notes>
    </div>

    <div class="deleteTag">
      <button @click=deleteTag>删除标签</button>
    </div>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import notes from '@/components/money/notes.vue';

@Component({ components: { notes } })
export default class editLabel extends Vue {

  tag?: { id: string, name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
      console.log(tag)
    } else {
      // this.$router.push('/404')
      this.$router.replace('/404')
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      tagListModel.updateTag(this.tag.id, name)
    }
  }
  deleteTag() {
    if (this.tag) {
      if (tagListModel.deleteTag(this.tag.id)) {
        this.$router.back()
      } else { window.alert('删除失败') }
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

  span {
    color: #fff;
    font-size: 16px;
  }

  .icon {
    position: absolute;
    left: 10px;
    top: calc(50% - 0.75em);
    rotate: 180deg;
    vertical-align: middle;
    color: #fff;
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

// .wrapper {
//   margin-top: 12px;
// }
</style>