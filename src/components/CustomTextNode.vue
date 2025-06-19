<script setup>
import { Handle } from '@vue-flow/core'
defineProps({
      labels: Array
})

function handleClick(link) {
      console.log("pagelink:", link);
       window.open(link, '_blank');
}

</script>
<template>
      <div class="text-node">
            <Handle type="target" position="left" id="left" />
            <Handle type="target" position="bottom" id="bottom"/>
            <div v-for="(item,index) in labels" :key="index">
                  <span @click="handleClick(item.link)" class="clickable">{{ item.label }}</span>
            </div>
      </div>
</template>
<style scoped>

.clickable {
  color: rgb(154, 154, 204);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
}

.clickable:hover {
  color: rgb(82, 82, 163);
  text-decoration: underline;
}
</style>