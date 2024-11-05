import Paginator from "./components/Paginator.vue";
import PurePaginator from "./components/PurePaginator.vue";
import PureButton from "./components/PureButton.vue";
import { registerPlugins } from '@/plugins' // vuetify 設定
// 添加 install 方法
// export default  {
//   install: (app)=> {
//     registerPlugins(app)
//     app.component('Paginator',Paginator)
//     app.component('PurePaginator',PurePaginator)
//     app.component('PureButton',PureButton)
//   }
// }

export {registerPlugins,Paginator,PurePaginator,PureButton}