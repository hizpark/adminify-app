module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 解决路径别名问题
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'], // 扩展 Jest 断言
  collectCoverage: true, // 开启代码覆盖率
  coverageDirectory: './coverage', // 输出覆盖率报告到 coverage 目录
  coverageReporters: ['lcov', 'text'],
}
