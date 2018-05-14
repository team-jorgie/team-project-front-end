'use strict'
const config = require('../config')
const store = require('../store')

const createFileUpload = function (formData) {
  // console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/fileuploads`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    contentType: false,
    processData: false
  })
}

const updateFileUpload = (data) => {
  return $.ajax({
    url: config.apiUrl + `/fileuploads/` + data.fileupload.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteFileUpload = function (data) {
  return $.ajax({
    url: config.apiUrl + `/fileuploads/` + data.fileupload.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getFileUpload = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/fileuploads`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createFileUpload,
  updateFileUpload,
  deleteFileUpload,
  getFileUpload
}
