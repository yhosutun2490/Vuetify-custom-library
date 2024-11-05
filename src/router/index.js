
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'
// 使用 require.context 動態載入 views 資料夾中的所有檔案
const modules = import.meta.glob('@/components/*.vue');

const routes =Object.entries(modules).map(([filePath, component]) => {

  const name = filePath.replace(/^@\/components\/|\.vue$/g, '');
  const componentName = name.split('/').pop(); // 獲取檔案名部分

  console.log('component_name',componentName)
  return {
    path: `/${componentName.toLowerCase()}`, // 路徑設為小寫的檔案名
    name: componentName,
    component,
  };
});
console.log('routes',routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
