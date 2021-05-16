var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Volumes/Drive Uone/Craig/canopy/gatsby/touchstonedashboard/gatsby-admin-template/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-layout',
      plugin: require('/Volumes/Drive Uone/Craig/canopy/gatsby/touchstonedashboard/gatsby-admin-template/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Volumes/Drive Uone/Craig/canopy/gatsby/touchstonedashboard/gatsby-admin-template/src/Layouts/index.tsx"},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Volumes/Drive Uone/Craig/canopy/gatsby/touchstonedashboard/gatsby-admin-template/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"oah-admin","short_name":"OAH","start_url":"/dashboard","display":"minimal-ui","icon":"src/images/OAH.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"dc2540bb200680055621d39e4b4adf94"},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Volumes/Drive Uone/Craig/canopy/gatsby/touchstonedashboard/gatsby-admin-template/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-171177495-3***","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
