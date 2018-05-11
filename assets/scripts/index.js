'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const fileUploadEvents = require('./fileupload/fileuploadevents')

const signUpUserHandlebars = require('./templates/sign-up.handlebars')
const signUpUserHTML = signUpUserHandlebars()

const signInUserHandlebars = require('./templates/sign-in.handlebars')
const signInUserHTML = signInUserHandlebars()

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  fileUploadEvents.addHandlers()
  $('body').append(signUpUserHTML)
  $('body').append(signInUserHTML)
})
