<template>
  <layOut>
    <types></types>
    <tags></tags>
    <notes></notes>
    <number-pad></number-pad>
  </layOut>
</template>

<script>
import types from "../components/types.vue";
import notes from "../components/notes.vue";
import numberPad from "../components/numberPad.vue";
import tags from "../components/tags.vue";

export default {
  name: "money",
  components: { types, notes, numberPad, tags },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/helper.scss";
</style>