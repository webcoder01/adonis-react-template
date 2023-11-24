const { join } = require('path')
const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('./public/assets')
Encore.setPublicPath('/assets')

Encore.addEntry('app', './resources/js/app.')

/*
|--------------------------------------------------------------------------
| Copy assets
|--------------------------------------------------------------------------
|
| Since the edge templates are not part of the Webpack compile lifecycle, any
| images referenced by it will not be processed by Webpack automatically. Hence
| we must copy them manually.
|
*/
// Encore.copyFiles({
//   from: './resources/images',
//   to: 'images/[path][name].[hash:8].[ext]',
// })

/*
|--------------------------------------------------------------------------
| Split shared code
|--------------------------------------------------------------------------
|
| Instead of bundling duplicate code in all the bundles, generate a separate
| bundle for the shared code.
|
| https://symfony.com/doc/current/frontend/encore/split-chunks.html
| https://webpack.js.org/plugins/split-chunks-plugin/
|
*/
// Encore.splitEntryChunks()

Encore.disableSingleRuntimeChunk()
Encore.cleanupOutputBeforeBuild()
Encore.enableSourceMaps(!Encore.isProduction())
Encore.enableVersioning(Encore.isProduction())
Encore.enableTypeScriptLoader()
Encore.enableReactPreset()

Encore.configureDevServerOptions((options) => {
  if (!options.static) {
    options.static = []
  } else if (!Array.isArray(options.static)) {
    options.static = [options.static]
  }

  options.liveReload = true
  options.static.push({
    directory: join(__dirname, './resources/views'),
    watch: true,
  })
})

const config = Encore.getWebpackConfig()
config.infrastructureLogging = {
  level: 'warn',
}
config.stats = 'errors-warnings'

module.exports = config
