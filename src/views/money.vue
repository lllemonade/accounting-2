<template>
  <layOut>
    {{ recordList }}
    <types :value.sync="record.type"></types>
    <tags :tagsData.sync="tags" :value.sync="record.tags"></tags>
    <notes @update:value="onUpdateNotes"></notes>
    <number-pad @update:value="onUpdateTotal" @submit="saveRecord"></number-pad>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue';
import types from "../components/money/types.vue";
import notes from "../components/money/notes.vue";
import numberPad from "../components/money/numberPad.vue";
import tags from "../components/money/tags.vue";
import { Component, Watch } from 'vue-property-decorator';

type Record = {
  type: string;
  tags: string;
  notes: string;
  total: number; // 类型
  createDate?: Date  //类 /构造函数

}


@Component({ components: { types, notes, numberPad, tags } })
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  record: Record = {
    type: 'payOut', tags: '衣', notes: '', total: 0
  }
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
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
    const record2: Record = JSON.parse(JSON.stringify(this.record))
    record2.createDate = new Date()
    this.recordList.push(record2)
    console.log(this.recordList)
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
  }

}
</script>
