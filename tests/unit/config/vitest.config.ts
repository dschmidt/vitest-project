import { defineConfig } from 'vitest/config'
import path from 'path'

// const root = path.resolve(__dirname, '../../../')

export default defineConfig({
  test: {
    // root,
    globals: true,
    // environment: 'happy-dom',
    clearMocks: true,
    include: ['**/*.spec.ts'],
    // setupFiles: ['tests/unit/config/vitest.init.ts', 'core-js'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '.pnpm-store/*',
      'e2e/**',

      'packages/design-system/tests/e2e/**',
      'packages/design-system/docs/**'
    ],
    // coverage: {
    //   provider: 'v8',
    //   reportsDirectory: `${root}/coverage`,
    //   reporter: 'lcov'
    // }
  }
})
