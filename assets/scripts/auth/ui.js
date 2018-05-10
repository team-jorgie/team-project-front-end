'use strict'
const store = require('../store')

const signUpSuccess = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signUpFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signInSuccess = function (data) {

  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = data.user

}

const signInFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutSuccess = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutFailure = function () {
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
