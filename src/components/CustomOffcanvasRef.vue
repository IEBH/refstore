<script setup>
import FileUpload from './FileUpload.vue';
import LibraryRef from './LibraryRef.vue';
import { ref } from 'vue';
const props = defineProps({
      refs: Object,
      //offcanvasID: String
})
const refFiles = ref(0);
const emit = defineEmits(['updateRefsObj']);
const getAllRefs = (e,f) => {
      refFiles.value = e.length;
      reflib.value=e;
      emit('updateRefsObj', {id: props.refs.dataKey, refnum: e.length, filepath: f})
      //console.log("[fileRead refs]:", {id: props.refs.dataKey, refnum: e.length, filepath: f});
}

//Ref-library
const reflib= ref([])

</script>
<template>
      <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasLabel" style="width: 600px;">
            <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
                  <div class="container-fluid">
                        <h5 class="navbar-brand"> {{ refs.dataKey }} (References) </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" />
                  </div>
            </nav>
            <!--<div class="offcanvas-header">
                  <h5 class="offcanvas-title"> References </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" />
            </div>-->
            <div class="offcanvas-body">
                  <FileUpload v-if="refs.refnum == 0" @references="getAllRefs" />
                  <LibraryRef v-if="refs.refnum>0" :reflib="reflib" />
            </div>
      </div>
</template>
<style scoped>
.glass-btn {
  backdrop-filter: blur(8px);
  background-color: rgba(200, 200, 200, 0.2);  
  border: 1px solid rgba(180, 180, 180, 0.3);  
  border-radius: 12px;
  padding: 0.5rem 1.2rem;
  transition: 0.3s;
}

.glass-btn:hover {
  background-color: rgba(200, 200, 200, 0.3);  
}

</style>