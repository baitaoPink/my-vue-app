import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import RemoveConsole from 'vite-plugin-remove-console'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    RemoveConsole(), //  生产环境禁止 console 输出
    AutoImport({
      imports: ['vue'], // 自动导入 Vue 的 API，如 ref、reactive 等
      dts: 'src/auto-imports.d.ts' // 生成自动导入声明文件
    })
  ]
})