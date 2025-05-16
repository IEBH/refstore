import { createStore } from 'vuex'
import fieldList from './fieldList'

const store = createStore({
      modules: {
            fieldList
      }
})

export default store