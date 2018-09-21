module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/index.html',
    '**/manifest.json',
    '**/bower_components/**/*',
    '**/node_modules/**/*',
    '**/images/*',
    '**/scripts/**/*',
    '**/data/**/*',
    '**/src/**/*'
  ],
  globIgnores: [
    '**/service-worker.js'
  ],
  swDest: 'build/service-worker.js'
}
