'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.)
    .catch(ui.)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.)
    .catch(ui.)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.)
    .catch(ui.)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.)
    .catch(ui.)
}

const addHandlers = () => {
}

module.exports = {
  addHandlers
}
