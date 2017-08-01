module.exports = function(config) {
  config.set({

    basePath: '',
    singleRun: true,
    autoWatch: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['spec'],

    files: [
        'src/app/**/*.spec.js'
    ],
    preprocessors: {  
        'src/app/**/*.spec.js': ['webpack']
    },

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
        require('karma-babel-preprocessor')
    ]
  })
}
