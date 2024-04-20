import { defineWorkspace } from 'vitest/config'


const testDirs = ['packages/a/tests/unit', 'packages/b/tests/unit']

export default defineWorkspace(
  testDirs.map((dir) => {
    const name = dir.split('/')[1]
    return {
      extends: './tests/unit/config/vitest.config.ts',
      test: {
        name,
        dir
      }
    }
  })
)