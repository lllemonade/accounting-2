<template>
  <!-- 备注 -->
  <div>
    <label class="notes">
      <span class="name">{{ fieldName }}</span>
      <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class notes extends Vue {
  @Prop({ default: '' }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  height: 58px;
  line-height: 58px;
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
</style>
