'use strict'
const config = require('../config')
const store = require('../store')

const createFileUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + `/fileupload`,
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateFileUpload = (data) => {
  return $.ajax({
    url: config.apiUrl + `/fileupload/` + data.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteFileUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + `/fileupload/` + data.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getFileUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + '/fileupload',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createFileUpload,
  updateFileUpload,
  deleteFileUpload,
  getFileUpload
}
