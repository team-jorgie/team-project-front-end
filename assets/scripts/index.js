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

const changePasswordUserHandlebars = require('./templates/change-password.handlebars')
const changePasswordUserHTML = changePasswordUserHandlebars()

const signOutUserHandlebars = require('./templates/sign-out.handlebars')
const signOutUserHTML = signOutUserHandlebars()

const createFileUploadHandlebars = require('./templates/file-upload/create-file.handlebars')
const createFileUploadHTML = createFileUploadHandlebars()

const updateFileUploadHandlebars = require('./templates/file-upload/update-file.handlebars')
const updateFileUploadHTML = updateFileUploadHandlebars()

const viewFileUploadHandlebars = require('./templates/file-upload/view-file.handlebars')
const viewFileUploadHTML = viewFileUploadHandlebars()

const deleteFileUploadHandlebars = require('./templates/file-upload/delete-file.handlebars')
const deleteFileUploadHTML = deleteFileUploadHandlebars()

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  fileUploadEvents.addHandlers()
  $('body').append(signUpUserHTML)
  $('body').append(signInUserHTML)
  $('body').append(changePasswordUserHTML)
  $('body').append(signOutUserHTML)
  $('body').append(createFileUploadHTML)
  $('body').append(updateFileUploadHTML)
  $('body').append(viewFileUploadHTML)
  $('body').append(deleteFileUploadHTML)
})
