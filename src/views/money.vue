<template>
  <layOut>
    <Tabs :dataSource="type" :value.sync="record.type"></Tabs>
    <!-- {{ recordList }} -->
    <tags :value.sync="record.tags"></tags>
    <notes @update:value="onUpdateNotes" fieldName="备注" placeholder="在这里添加备注"></notes>
    <number-pad :value.sync="record.total" @submit="saveRecord"></number-pad>
  </layOut>
</template>

<script lang="ts">
import Vue from 'vue';
import notes from "../components/money/notes.vue";
import numberPad from "../components/money/numberPad.vue";
import tags from "../components/money/tags.vue";
import Tabs from '@/components/tabs.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: { Tabs, notes, numberPad, tags, }
})
export default class Money extends Vue {
  record: RecordItem = {
    type: 'payOut', tags: [], notes: '', total: 0
  }
  type = [
    { text: '支出', value: 'payOut' },
    { text: '收入', value: 'inCome' },
  ];
  //用.sync  可以省去这里的方法 tag和type
  // onUpdateType(value: string) {
  //   this.record.type = value
  // };
  get recordList() {
    return this.$store.state.recordList;
  }
  created() {
    this.$store.commit('fetchRecordList')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
  }
  onUpdateTotal(value: string) {
    this.record.total = parseFloat(value)
  }
  saveRecord() {
    this.$store.commit('createRecord', this.record)
  }
}
</script>
