import { getCurrentInstance} from 'vue';



export function useTera() {
  const instance = getCurrentInstance();
  return instance?.proxy?.$tera;
}