<script setup>
//import Node from './components/Node.vue'
import { vueFlowTable } from './components/FlowTable'
import CustomNode from './components/CustomNode.vue';
import CustomTextNode from './components/CustomTextNode.vue';
import { VueFlow } from '@vue-flow/core';
import { ref } from "vue";
import { Offcanvas } from 'bootstrap'
import CustomOffcanvasRef from './components/CustomOffcanvasRef.vue';



const references = ref('0');
const handleClick = (e) => {
      references.value = e;
      const el = document.getElementById('myOffcanvas')
      if (el) {
            const refTab = new Offcanvas(el);
            refTab.show();
      }
}

const onEdgeClick=(( edge) => {
      console.log('edge clicked', edge);
      if (edge.edge.data?.linkUrl) {
            window.open(edge.edge.data.linkUrl, '_blank');
      }
})


</script>

<template>
      <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
            <div class="container-fluid">
                  <h5 class="navbar-brand"> Ref Store </h5>
            </div>
      </nav>  
    
      <div class="card" style="width: 100%; height: 100vh;">
            <div class="row g-1">
                  <div class="col-4 text-center py-2" style="background-color: #DCDCDC;">
                        <strong>Designing</strong>
                  </div>
                  <div class="col-5 text-center py-2" style="background-color: #D3D3D3;">
                        <strong>Searching</strong>
                  </div>
                  <div class="col-3 text-center py-2" style="background-color: #DCDCDC;">
                        <strong>Other</strong>
                  </div>
            </div>
            <VueFlow :nodes="vueFlowTable.nodes" :edges="vueFlowTable.edges" :onEdgeClick="onEdgeClick" :nodes-draggable="false"  :nodes-connectable="false" :pan-on-drag="false" :zoom-on-scroll="false" :zoom-on-double-click="false" fit-view>
                  <template #node-customNode="{data}">
                        <CustomNode :labels="data.labels" @link-clicked="handleClick" />
                  </template>
                  <template #node-customTextNode="{data}">
                        <CustomTextNode :labels="data.labels"/>
                  </template>
            </VueFlow>
      </div>
      <CustomOffcanvasRef :refs="references"/>
</template>

<style scoped>
.vue-flow__container {
      overflow-x: auto
}
</style>
