<script setup>
import { Handle } from '@vue-flow/core'
defineProps({
      labels: Array
})

const showRefs = () => {
      //TODO: Grab all refs and show
}
</script>
<template>
      <div class="custom-node">
            <Handle type="source" position="right" id="right" />
            <Handle type="source" position="bottom" id="bottom"/>
            <Handle type="target" position="top" id="top"/>
            <Handle type="target" position="left" id="left" />
            <div v-for="(res, index) in labels" :key="index">
                  <h6 v-if="res.label">{{ res.label }}</h6>
                  <a v-if="res.link" href="#refs_tab" @click.prevent="$emit('link-clicked', res.link)">{{ res.link }}</a>
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