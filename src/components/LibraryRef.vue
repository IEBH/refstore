<script setup>
const props =  defineProps({
      reflib: Array
})
</script>
<template>
      <div>
            <table class="table table-hover table-responsive" v-if="reflib.length>0">
                  <thead>
					<tr>
						<th class="text-start" scope="col">Title</th>
						<th class="text-start" scope="col">Authors</th>
					</tr>
			</thead>
                  <tbody>
                        <tr v-for="ref in reflib" :key="ref.id">
                              <td class="text-start">{{ ref.title}}</td> 
                              <td class="text-start">
                                    <span v-for="author in (ref.authors || []).slice(0,3)" :key="author" class="bg-secondary text-white rounded px-2 py-1 small me-1"><i class="bi bi-person-fill"></i>{{ author }}</span>
                                    <span v-if="(ref.authors || []).length>3" class="bg-secondary text-white rounded px-2 py-1 small me-1"><i class="bi bi-person-plus-fill"></i> {{ref.authors.length - 3}}</span>
                              </td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>
<style scoped></style>