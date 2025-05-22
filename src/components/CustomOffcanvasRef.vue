<script setup>
import FileUpload from './FileUpload.vue';
defineProps({
      refs: Number,
      offcanvasID: String
})

const getAllRefs = (e) => {
      refs = e.length();
      console.log("[fileRead refs]:", refs);
}
</script>
<template>
      <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="myOffcanvas" aria-labelledby="offcanvasLabel" style="width: 600px;">
            <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
                  <div class="container-fluid">
                        <h5 class="navbar-brand"> {{ offcanvasID }} (References) </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" />
                  </div>
            </nav>
            <!--<div class="offcanvas-header">
                  <h5 class="offcanvas-title"> References </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" />
            </div>-->
            <div class="offcanvas-body">
                  <FileUpload v-if="refs==0" @references="getAllRefs"/>
                  <div class="btn-group-vertical w-100" role="group" aria-label="Vertical button group" v-if="refs>0">
                        <button class="btn glass-btn text-black" type="button">{{refs}}</button>
                        <button class="btn glass-btn text-black" type="button">{{refs}}</button>
                  </div>
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