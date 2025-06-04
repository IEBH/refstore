<script setup>
//import { vueFlowTable } from './components/FlowTable'
import CustomNode from './components/CustomNode.vue';
import CustomTextNode from './components/CustomTextNode.vue';
import CustomOffcanvasRef from './components/CustomOffcanvasRef.vue';

import { VueFlow } from '@vue-flow/core';
import { reactive, computed } from "vue";
import { Offcanvas } from 'bootstrap'
//Store
import { useStore } from 'vuex';
const store = useStore();
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const vueFlowTable = computed(() => {
      console.log("flowtable:", store.getters['fieldList/getFlowTable']);
      return store.getters['fieldList/getFlowTable']
});


const fieldObject = reactive({
      fieldId: '',
      dataKey: '',
      filepath: '',
      refnum: 0
})
const handleClick = (fieldId, field) => {
      //console.log("fieldId:", fieldId, field);
      fieldObject.fieldId = fieldId;
      fieldObject.dataKey = field.key;
      fieldObject.refnum = field.link;
      const el = document.getElementById('myOffcanvas')
      if (el) {
            const refTab = new Offcanvas(el);
            refTab.show();
      }
}

const onEdgeClick=(( edge) => {
      console.log('[EdgeClicked]:', edge);
      if (edge.edge.data?.linkUrl) {
            window.open(edge.edge.data.linkUrl, '_blank');
      }
})
const updateRefsObj = (event) => {
      fieldObject.dataKey = event.id;
      fieldObject.refnum = event.refnum;
      fieldObject.filepath = event.filepath;
      console.log("[updateFieldObj]:", fieldObject);

}

const save = () => {
      proxy.$teraSync.saveState();
}

//Reset all state of fieldList
const clear = () => {
      store.dispatch('resetStore');
}

const saveStatus = computed(() => store.getters['__tera_file_sync/getSaveStatus'] )

</script>

<template>
      <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                  <h5 class="navbar-brand mb-0 text-white text-start">Ref Store</h5>
                  <div class="d-flex align-items-center">
                        <div class="me-2 text-white">{{ saveStatus }}</div>
                        <button v-if="saveStatus!=='Saved'" class="btn btn-outline-light" @click="save">Save </button>
                        <button v-else class="btn btn-danger" @click="clear">Clear</button>
                  </div>
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
                  <template #node-customNode="{id,data}">
                        <CustomNode :labels="data.labels" @link-clicked="(field)=>handleClick(id, field)" :refsObj="fieldObject"/>
                  </template>
                  <template #node-customTextNode="{data}">
                        <CustomTextNode :labels="data.labels"/>
                  </template>
            </VueFlow>
      </div>
      <CustomOffcanvasRef :refs="fieldObject" @updateRefsObj="updateRefsObj($event)"  />
</template>

<style scoped></style>
