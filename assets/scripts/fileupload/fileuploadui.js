'use strict'
// const store = require('../store')

const createFileUploadSuccess = function (data) {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const createFileUploadFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const updateFileUploadSuccess = function (data) {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const updateFileUploadFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteFileUploadSuccess = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteFileUploadFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const getFileUploadSuccess = function (data) {
  console.log(data)
  let resultsHtml = ''
  data.uploads.forEach((result) => {
    resultsHtml = resultsHtml + `<p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Created: ${result.createdAt}</p><p>Updated: ${result.updatedAt}</p>`
  })
  $('form.view-file').append(resultsHtml)
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const getFileUploadFailure = function () {
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
module.exports = {
  createFileUploadSuccess,
  createFileUploadFailure,
  updateFileUploadSuccess,
  updateFileUploadFailure,
  deleteFileUploadSuccess,
  deleteFileUploadFailure,
  getFileUploadSuccess,
  getFileUploadFailure
}
