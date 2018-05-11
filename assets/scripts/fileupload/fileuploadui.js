'use strict'
// const store = require('../store')

const createFileUploadSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p></div>`)
  $('.all-files').append(`<p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
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
  $('.all-files').remove()
  let resultsHtml = '<div class="all-files">'
  data.uploads.forEach((result) => {
    resultsHtml = resultsHtml + `<p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Created: ${result.createdAt}</p><p>Updated: ${result.updatedAt}</p>`
  })
  resultsHtml = resultsHtml + '</div>'
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
