import { defineConfig, ViteUserConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let options: ViteUserConfig = {
    plugins: [react()],
    build: {
      sourcemap: true,
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/shared/, /node_modules/],
      },
    },
    test: {
      globals: true,
      testTimeout: 20000,
      environment: 'jsdom',
      setupFiles: '/setupTests.js',
      include: [
        'src/components/**/*.test.{js,jsx,ts,tsx}',
        'src/snapshot-tests/*.test.tsx',
        'src/pages/**/*.test.{js,jsx,ts,tsx}',
        'src/hooks/**/*.test.{js,jsx,ts,tsx}',
      ],
    },
    resolve: {
      alias: {
        '@uiagent/shared': path.resolve(__dirname, '../shared/src'),
        '@agentic_chat': path.resolve(__dirname, './src'),
      },
    },
  };

  if (mode === 'test') {
    options = {
      ...options,
      base: './',
      build: {
        ...options.build,
        outDir: 'src/snapshot-tests/templates',
        rollupOptions: {
          input: 'src/snapshot-tests/snapshot.html',
        },
      },
    };
  }

  return options;
});
