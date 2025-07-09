<script setup>
import FileUpload from './FileUpload.vue';
import LibraryRef from './LibraryRef.vue';
import { ref, watch} from 'vue';
import { useTera } from '../composables/useTerafy';
const props = defineProps({
      refs: Object,
})
const refFiles = ref(0);
const emit = defineEmits(['updateRefsObj']);
const getAllRefs = (e,f) => {
      refFiles.value = e.length;
      reflib.value = e;
      emit('updateRefsObj', {id: props.refs.dataKey, refnum: e.length, filepath: f.path})
}
//Toolbar drop-down button
const toolVisible = ref(false);

//Ref-library
const reflib = ref([])

//Get all refs 
const getReferences = (file) => file.getRefs();

const $tera = useTera();  //filepath => file.path (filename)
watch(() => props.refs.filepath, (newVal) => {
      if (newVal) {
            $tera.getProjectFile(newVal)
                  .then(file => getReferences(file))
                  .then((refs) => {
                        reflib.value = refs;
                        //Hide FileUpload 
                        toolVisible.value = false;
            })
      } else {
            console.warn("filepath is not valid or missing getRefs:", newVal);
      }
},
     // {immediate: true}
)

</script>
<template>
      <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasLabel" style="width: 600px;">
            <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
                  <div class="container-fluid">
                        <h5 class="navbar-brand"> {{ refs.dataKey }} (References) </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" />
                  </div>
            </nav>
            <a class="btn btn-secondary" role="button" @click="toolVisible= true"><i class="bi bi-cloud-arrow-up fs-5 me-2"></i> Re-Upload File</a>
            <!--<div v-if="toolbarVisible==true">
                  <ul class="nav justify-content-end bg-secondary p-2">
                        <li class="nav-item">
                              <button type="button" class="btn btn-secondary" ><i class="bi bi-cloud-arrow-up fs-5"></i></button>
                        </li>
                  </ul>
            </div>-->
            
            
            <div class="offcanvas-body">
                  <FileUpload v-if="refs.refnum == 0 || toolVisible==true" @references="getAllRefs" />
                  <LibraryRef v-if="refs.refnum>0" :reflib="reflib" />
            </div>
      </div>
</template>
<style scoped>
.btn-secondary{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 1.6rem; 
      border-radius: 0rem;
      margin-top: -1px;
}

</style>