// Karma configuration
// Generated on Sat Jan 05 2019 22:31:58 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: ['@metahub/karma-rollup-preprocessor', 'karma-*'],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'], // Added Chai


    // list of files / patterns to load in the browser
    files: [
      './chapter12/components/**/test/karma-test.js',
      './chapter12/components/**/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    karmaHTML: {
      source: [
          //indicate 'index.html' file that will be loaded in the browser
          //the 'index' tag will be used to get the access to the Document object of 'index.html'
          {src:'./test.html', tag:'index'}
      ],
      auto: true
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './chapter12/components/**/*.js': ['rollup']  // ADD preprocessors
    },

    rollupPreprocessor: {
      options: {
          output: {
              // To include inlined sourcemaps as data URIs
              sourcemap: true,
              format: 'iife',
              name: 'testing'
          },
          // To compile with babel using es2015 preset
          plugins: [require('rollup-plugin-babel')()]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browsers: ['FirefoxHeadless', 'ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true, // Change to true

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Add TDD testing
    client: {
        mocha: {
            ui: 'tdd'
        }
    }
  })

};
