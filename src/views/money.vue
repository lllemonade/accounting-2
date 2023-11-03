<template>
  <layOut>
    <types :value.sync="record.type"></types>
    <tags></tags>
    <notes @update:value="onUpdateNotes" fieldName="备注" placeholder="在这里添加备注"></notes>

    <number-pad :value.sync="record.total" @submit="saveRecord"></number-pad>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue';
import types from "../components/money/types.vue";
import notes from "../components/money/notes.vue";
import numberPad from "../components/money/numberPad.vue";
import tags from "../components/money/tags.vue";
import { Component } from 'vue-property-decorator';
import store from '@/store/index2';
// const { model } = require('../../model.js')


//原始数据都从localStroge获取

@Component({ components: { types, notes, numberPad, tags } })
export default class Money extends Vue {
  // tags = ['衣', '食', '住', '行'];
  // tags = store.tagList;
  recordList = store.recordList;

  record: RecordItem = {
    type: 'payOut', tags: ['衣'], notes: '', total: 0
  }
  //用.sync  可以省去这里的方法 tag和type
  // onUpdateType(value: string) {
  //   this.record.type = value
  // };
  onUpdateNotes(value: string) {
    this.record.notes = value
  }
  onUpdateTotal(value: string) {
    this.record.total = parseFloat(value)
  }
  saveRecord() {
    store.createRecord(this.record)
  }
}
</script>
