const fs = require('fs')
const path = require('path')

// 取得 docs/version.json 的路徑
const versionFilePath = path.resolve(__dirname, '../docs/version.json')

// 讀取現有的 JSON 內容
const versionFile = JSON.parse(fs.readFileSync(versionFilePath, 'utf-8'))

// 獲取當前版本號和時間戳
const { version } = require('../package.json')
const timestamp = new Date().toISOString()

// 更新 version.json 中的 version 和 timestamp 字段
versionFile.version = version
versionFile.build.timestamp = timestamp

// 寫回更新後的內容
fs.writeFileSync(versionFilePath, JSON.stringify(versionFile, null, 2))

console.log('Updated docs/version.json with new version and timestamp')
