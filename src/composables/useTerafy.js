import { getCurrentInstance} from 'vue';



export default {
      methods: {
            useTera(){
                  const instance = getCurrentInstance(); 
                  return instance?.proxy?.$tera;
            } 

            
      }
}