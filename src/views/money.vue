<template>
  <layOut>
    <!-- {{ recordList }} -->
    <types :value.sync="record.type"></types>
    <tags :tagsData.sync="tags" :value.sync="record.tags"></tags>
    <notes @update:value="onUpdateNotes" fieldName="备注" placeholder="在这里添加备注"></notes>
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
import recordListModel from '../model/recordListModel'
import tagListModel from '@/model/tagListModel';
// const { model } = require('../../model.js')


//原始数据都从localStroge获取
const recordList = recordListModel.fetch()
const tagList = tagListModel.fetch()

@Component({ components: { types, notes, numberPad, tags } })
export default class Money extends Vue {
  // tags = ['衣', '食', '住', '行', '彩票'];
  tags = tagList
  recordList: RecordItem[] = recordList;

  record: RecordItem = {
    type: 'payOut', tags: '衣', notes: '', total: 0
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
    const record2: RecordItem = recordListModel.clone(this.record)
    record2.createAt = new Date()
    this.recordList.push(record2)
    console.log(this.recordList)
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList)
  }

}
</script>
