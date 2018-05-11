'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signUpFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed to sign in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signInSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = data.user
  const createFileUploadHandlebars = require('../templates/file-upload/create-file.handlebars')
  const createFileUploadHTML = createFileUploadHandlebars()

  const updateFileUploadHandlebars = require('../templates/file-upload/update-file.handlebars')
  const updateFileUploadHTML = updateFileUploadHandlebars()

  const viewFileUploadHandlebars = require('../templates/file-upload/view-file.handlebars')
  const viewFileUploadHTML = viewFileUploadHandlebars()

  const deleteFileUploadHandlebars = require('../templates/file-upload/delete-file.handlebars')
  const deleteFileUploadHTML = deleteFileUploadHandlebars()

  $('body').append(createFileUploadHTML)
  $('body').append(updateFileUploadHTML)
  $('body').append(viewFileUploadHTML)
  $('body').append(deleteFileUploadHTML)

  const changePasswordUserHandlebars = require('../templates/change-password.handlebars')
  const changePasswordUserHTML = changePasswordUserHandlebars()

  const signOutUserHandlebars = require('../templates/sign-out.handlebars')
  const signOutUserHTML = signOutUserHandlebars()
  $('body').append(changePasswordUserHTML)
  $('body').append(signOutUserHTML)
  $('.sign-up').remove()
  $('.sign-in').remove()
  console.log(store.user)
}

const signInFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully changed your password!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to change password</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = null
  $('.create-file').remove()
  $('.update-file').remove()
  $('.view-file').remove()
  $('.delete-file').remove()
  $('.change-password').remove()
  $('.sign-out').remove()

  const signUpUserHandlebars = require('../templates/sign-up.handlebars')
  const signUpUserHTML = signUpUserHandlebars()

  const signInUserHandlebars = require('../templates/sign-in.handlebars')
  const signInUserHTML = signInUserHandlebars()

  $('body').append(signUpUserHTML)
  $('body').append(signInUserHTML)
  console.log('u signed out')
}
const signOutFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to sign out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
