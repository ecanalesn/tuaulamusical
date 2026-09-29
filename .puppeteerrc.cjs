const { join } = require('path')

// Chrome del prerender dentro de node_modules/.cache: Netlify cachea
// node_modules entre builds pero no ~/.cache, y sin esto el build falla
// con "Could not find Chrome" en cuanto reutiliza la caché.
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer')
}
