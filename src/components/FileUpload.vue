<script setup>
import TeraFileSelect from '@iebh/tera-fy/widgets/tera-file-select.vue';
import { ref } from 'vue';

let file = ref(Object)
let references = ref(Array)
const filepath=ref('')

const fileInputEvent = (e) => {
      console.log("[Refstore-fileUpload]:", e);
      file = e;
      filepath.value = e.path;
}

const emit = defineEmits(['references'])
const getReferences= () => {
      if (!file) return;
      Promise.resolve()
            .then(() => file.getRefs())
            .then(refs => {
                  //console.log("[Refstore-fileUpload Refs]:", refs, "FilePath:",filepath);
                  references = refs;
                  emit("references", references, file)
      })
}
</script>
<template>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <tera-file-select
			:title="'Select/Upload a file...'"
			:filters="{library: true}"
			placeholder="Select/Upload a file..."
			@change="fileInputEvent($event)"
		/>
            <button v-if="file" class="btn custom-btn"  @click="getReferences">Upload</button>
      </div>
</template>
<style scoped>
.custom-btn {
  background-color: #579470; 
  color: white;              
  border: none;              
}
.custom-btn:hover {
  background-color: #5da079; 
}
</style>