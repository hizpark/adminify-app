// tests/setupTests.ts
import '@testing-library/jest-dom'

// 可选：如果你想在测试中屏蔽 console.error
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})
