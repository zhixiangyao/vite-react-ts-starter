import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

/**
 * https://vitejs.dev/config/
 */
export const userConfig = defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
})
