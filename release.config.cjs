module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git', // 用於更新版本文件並推送變更
    '@semantic-release/github',
    {
      path: '@semantic-release/git',
      assets: ['docs/version.json'], // 更新 version.json 文件
      message: 'chore(release): update version.json with version and timestamp',
    },
  ],
  // afterRelease hook 會在發佈後執行
  hooks: {
    afterRelease: [
      'node ./scripts/update-version-doc.js', // 執行更新版本文件的腳本
    ],
  },
}
