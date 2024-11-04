import Paginator from "./components/Paginator.vue";
import { registerPlugins } from '@/plugins' // vuetify 設定
// 添加 install 方法
export default  {
  install: (app)=> {
    registerPlugins(app)
  }
}

export {registerPlugins,Paginator}