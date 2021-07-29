import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

/**
 * https://vitejs.dev/config/
 */
export const userConfig = defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})
