module.exports = function(config) {
  config.set({

    basePath: '',
    singleRun: true,
    autoWatch: true,
    logLevel: config.LOG_INFO,
    port: 9876,
    colors: true,
    concurrency: Infinity,

    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    // list of files / patterns to load in the browser
    files: [
        'src/app/**/*.spec.js',
        'src/app/**/*.html'
    ],
    preprocessors: {  
        'src/app/**/*.spec.js': ['webpack'],
        'src/app/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src'
    },

    // list of files to exclude
    exclude: [
    ],

    webpack: require('./webpack-test.conf'),
    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-edge-launcher'),
      require('karma-spec-reporter'),
      require('karma-webpack'),
      require('karma-babel-preprocessor'),
      require('karma-ng-html2js-preprocessor')
    ]

  })
}
