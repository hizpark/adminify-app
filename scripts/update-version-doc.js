const fs = require('fs')
const path = require('path')
const version = require('../package.json').version

const outputPath = path.resolve(__dirname, '../docs/version.json')
const buildInfo = {
  version,
  build: {
    tool: 'vite',
    timestamp: new Date().toISOString(),
  },
}

fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2))
console.log(`✅ docs/version.json 已更新為 v${version}`)
