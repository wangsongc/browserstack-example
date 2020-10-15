// karma.conf.js
module.exports = function(config) {
  config.set({
    // global config of your BrowserStack account
    browserStack: {
      username: 'wangsongc1',
      accessKey: 'yUceog3xetzq3ymiMKTC'
    },

    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '21.0',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
      bs_iphone5: {
        base: 'BrowserStack',
        device: 'iPhone 5',
        os: 'ios',
        os_version: '6.0'
      }
    },

    browsers: ['bs_firefox_mac', 'bs_iphone5']
  })
}
