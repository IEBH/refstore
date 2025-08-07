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
//Is file missing
const isFileMissing = ref(false)

//Get all refs 
//const getReferences = (file) => file.getRefs();
const getReferences = async (file) => {
      if (!file || typeof file.getRefs !== 'function') {
            console.warn('Invalid file or missing getRefs method:', file);
            return [];
      }
      return await file.getRefs();
}

const $tera = useTera();  //filepath => file.path (filename)
watch(() => props.refs.filepath, (newVal) => {
      if (newVal) {
            $tera.getProjectFile(newVal)
                  .then(file => getReferences(file))
                  .then((refs) => {
                        console.log("refs:", refs, "filepath:", props.refs.filepath);
                        reflib.value = refs;
                        if (refs.length > 0) {
                              isFileMissing.value = false;
                              //Hide FileUpload
                              toolVisible.value = false;
                        } else {
                              isFileMissing.value = true;
                        }
                       
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
            <!--<a v-if="refs.refnum>0" class="btn btn-secondary" role="button" @click="toolVisible= true"><i class="bi bi-cloud-arrow-up fs-5 me-2"></i> Re-Upload File</a>-->
            <a v-if="refs.refnum>0" :class="toolVisible? 'btn btn-warning':'btn btn-secondary'" role="button" @click="toolVisible= !toolVisible">
                  <i :class="toolVisible? 'bi bi-x-circle fs-5 me-2' : 'bi bi-cloud-arrow-up fs-5 me-2'"></i> 
                  {{toolVisible? 'Hide Re-Upload File' : 'Re-Upload File'}}
            </a>
            
            <div class="offcanvas-body">
                  <FileUpload v-if="refs.refnum == 0 || toolVisible==true" @references="getAllRefs" />
                  <LibraryRef v-if="refs.refnum>0" :reflib="reflib" />
                  <div v-if="refs.filepath && isFileMissing" class="alert alert-warning" role="alert">The uploaded file missing...Please check your project files in TERA or Re-Upload File!</div>
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

.btn-warning{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 1.6rem; 
      border-radius: 0rem;
      margin-top: -1px;
}

</style>