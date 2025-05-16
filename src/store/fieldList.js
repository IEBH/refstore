import { fileList } from "@primeuix/themes/aura/fileupload"

const getDefaultFieldList = () => { 
      return [
            {
                  fieldId: 'seed-studies',
                  field: 'Seed Studies',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'search-results',
                  field: 'Search Results',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'title-abs',
                  field: 'Title/Abstract Screening',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'full-text',
                  field: 'Full Text Screening',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'incl-studies',
                  field: 'Included Studies',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'results-removed-2',
                  field: 'Results Removed',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'results-removed-3',
                  field: 'Results Removed',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'results-removed-4',
                  field: 'Results Removed',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'results-removed-4',
                  field: 'Reason Wrong Population',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'results-removed-4',
                  field: 'Wrong Intervention',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'other-results-1',
                  field: 'Other Results',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'other-results-1',
                  field: 'Citation Searching',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'title-abs-1',
                  field: 'Title/Abstract Screening',
                  refs: 0,
                  filepath: null
      
            },
            {
                  fieldId: 'full-text-1',
                  field: 'Full Text Screening',
                  refs: 0,
                  filepath: null
      
            }
      ]
}

const state = {
      fieldList: getDefaultFieldList()
}

const getters = {
      getFieldList: state => state.fieldList
}

const mutations = {
      setFilepath(state, fieldId, file, refs) {
            const field = state.fieldList.find(field => field.fieldId === fieldId);
            if (field) {
                  field.refs = refs;
                  field.filepath = file;
            }
      }
}

export default {
      namespaced: true,
      state,
      getters,
      mutations
}