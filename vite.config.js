import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Metropolefake/'
    : '/',
  server: {
    port: 5173,
    open: true
  }
}))
