<script setup>
import TeraFileSelect from '@iebh/tera-fy/widgets/tera-file-select.vue';
import { ref } from 'vue';

let file = ref(null)
let references = ref(0)

const fileInputEvent = (e) => {
      file = e;
}

const getReferences= () => {
      if (!file) return;
      Promise.resolve()
            .then(() => file.getRefs())
            .then(refs => {
                  console.log("refs:", refs);
                  references = refs;
                  this.$emit("references", references)
      })
}
</script>
<template>
      <div>
            <tera-file-select
			:title="'Select/Upload a file...'"
			:filters="{library: true}"
			placeholder="Select/Upload a file..."
			@change="fileInputEvent($event)"
		/>
            <button v-if="file" @click="getReferences"></button>
      </div>
</template>
<style scoped></style>