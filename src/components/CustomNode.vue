<script setup>
import { Handle } from '@vue-flow/core'
import { useStore } from 'vuex';
const store = useStore()

const props = defineProps({
      labels: Array,
      refsObj: Object
})

const updateRefsNum = (res) => {
      //console.log("res:", res,"refsObj:", props.refsObj);
      store.commit('fieldList/setFlowTableRef', props.refsObj);
      return props.refsObj.refnum;
}
</script>
<template>
      <div class="custom-node">
            <Handle type="source" position="right" id="right" />
            <Handle type="source" position="bottom" id="bottom"/>
            <Handle type="target" position="top" id="top"/>
            <Handle type="target" position="left" id="left" />
            <div v-for="res in labels" :key="res.key">
                  <h6 v-if="res.label">{{ res.label }}</h6>
                  <div class="label-link">
                        <a v-if="res.key === refsObj.dataKey" href="#refs_tab" @click.prevent="$emit('link-clicked', res)"> {{ updateRefsNum(res) }}</a>
                        <div v-else>
                              <a v-if="res.link>0" href="#refs_tab" @click.prevent="$emit('link-clicked', res)">{{ res.link }}</a>
                              <a v-if="res.link==0" href="#refs_tab" @click.prevent="$emit('link-clicked', res)">Import Files...</a>
                        </div>
                  </div>
            </div>
      </div>
</template>
<style scoped>
.custom-node {
  background: #f8f7f7;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.label-link a {
  color: #1e90ff;
  text-decoration: none;
  font-weight: 500;
}

.label-link a:hover {
  color: #48D1CC;
  text-decoration: underline;
  cursor: pointer;
}
</style>