<template>
  <layOut>
    {{ record }}
    <types :value.sync="record.type"></types>
    <tags :tagsData.sync="tags" :value.sync="record.tags"></tags>
    <notes @update:value="onUpdateNotes"></notes>
    <number-pad @update:value="onUpdateTotal"></number-pad>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue';
import types from "../components/money/types.vue";
import notes from "../components/money/notes.vue";
import numberPad from "../components/money/numberPad.vue";
import tags from "../components/money/tags.vue";
import { Component } from 'vue-property-decorator';

type Record = {
  type: string;
  tags: string;
  notes: string;
  total: number;
}


@Component({ components: { types, notes, numberPad, tags } })
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  record: Record = {
    type: 'payOut', tags: '衣', notes: '', total: 0
  }

  onUpdateTags(value: string) {
    this.record.tags = value
  };
  onUpdateNotes(value: string) {
    this.record.notes = value
  };
  //用.sync  可以省去这里的方法
  // onUpdateType(value: string) {
  //   this.record.type = value
  // };
  onUpdateTotal(value: string) {
    this.record.total = parseFloat(value)
  }
};
</script>
