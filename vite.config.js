import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for instant component updates
      fastRefresh: true,
      // Babel options for better compatibility
      babel: {
        babelrc: false,
        configFile: false,
      },
    }),
    tailwindcss(),
  ],
  server: {
    // Watch configuration for file changes (Windows-friendly)
    watch: {
      usePolling: true,
      interval: 300,           // Check every 300ms for faster detection
      binaryInterval: 300,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.vite/**',
        '**/dist/**',
      ],
    },
    // HMR configuration for hot module replacement
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      // Timeout for HMR connection
      timeout: 30000,
    },
    // File system access settings
    fs: {
      // Allow serving files from outside root
      allow: ['..'],
      strict: false,
    },
    // CORS settings
    cors: true,
    // Request timeout
    middlewareMode: false,
    // Force dependency pre-bundling
    preTransformRequests: true,
  },
  // Cache configuration to prevent stale cache
  cacheDir: '.vite',
  // Build configuration
  build: {
    sourcemap: true,
  },
})
