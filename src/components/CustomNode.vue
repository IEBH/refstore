<script setup>
import { Handle } from '@vue-flow/core'

const props = defineProps({
      labels: Array,
      refs: Number
})


</script>
<template>
      <div class="custom-node">
            <Handle type="source" position="right" id="right" />
            <Handle type="source" position="bottom" id="bottom"/>
            <Handle type="target" position="top" id="top"/>
            <Handle type="target" position="left" id="left" />
            <div v-for="(res, index) in labels" :key="index">
                  <h6 v-if="res.label">{{ res.label }}</h6>
                  <a v-if="refs>0" href="#refs_tab" @click.prevent="$emit('link-clicked', res.key)">{{ refs }}</a>
                  <a v-if="refs==0" href="#refs_tab" @click.prevent="$emit('link-clicked', res.key)">Import Files...</a>
            </div>
      </div>
</template>
<style scoped>
.custom-node {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  min-width: 150px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

</style>