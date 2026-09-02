module.exports = {
  default: {
    parallel: 1,
    format: ['html:reports/cucumber-report.html'],
    require: [
        'steps/**/*.steps.js', 
        'support/**/*.js'
    ],
    paths:['features/**/*.feature']
  },
paralelo: {
    parallel: 4,
    format: ['html:reports/cucumber-report.html'],
    require: [
        'steps/**/*.steps.js', 
        'support/**/*.js'
    ],
    paths:['features/**/*.feature']
 }
} 