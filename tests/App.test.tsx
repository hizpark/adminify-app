import { render, screen } from '@testing-library/react'
import App from '../src/App' // 假设 App 组件在 src 目录下

test('renders Hello, World! text', () => {
  // 渲染 App 组件
  render(<App />)

  // 查找页面中的元素
  const headingElement = screen.getByText(/Hello, World!/i) // 忽略大小写匹配

  // 断言该元素存在
  expect(headingElement).toBeInTheDocument()
})

test('renders the welcome paragraph', () => {
  render(<App />)

  // 查找页面中的段落内容
  const paragraphElement = screen.getByText(
    /Welcome to the world of Tailwind CSS/i,
  )

  // 断言该元素存在
  expect(paragraphElement).toBeInTheDocument()
})
