import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 动态导入所有视图组件
const viewModules = import.meta.glob('@/views/**/*.vue');

// 递归函数，生成路由
const generateRoutes = (modules: Record<string, any>, basePath: string = ''): RouteRecordRaw[] => {
  return Object.keys(modules).map(path => {
    // 获取模块名
    const name = path
      .replace('@/views/', '')   // 去掉 '@' 和 'src/views/'
      .replace('.vue', '')       // 去掉 '.vue' 后缀

    const parts = name.split('/');
    const routePath = `/${parts.join('/')}`;

    // 处理嵌套路由
    if (path.includes('/')) {
      const parentRoute = parts.slice(0, -1).join('/'); // 获取父级路由路径
      const route: RouteRecordRaw = {
        path: `/${parentRoute}`,
        name: parentRoute,
        component: modules[`@/views/${parentRoute}/index.vue`],  // 确保父路由组件正确加载
        children: [
          {
            path: parts.pop(),  // 子路由路径
            name: name,
            component: modules[path],   // 子路由组件
          }
        ],
      };
      return route;
    }

    // 非嵌套路由
    return {
      path: routePath,
      name: name,
      component: modules[path],   // 动态加载组件
    };
  });
};

const routes = generateRoutes(viewModules);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
