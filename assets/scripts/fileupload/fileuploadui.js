'use strict'
const store = require('../store')
const moment = require('moment')

const createFileUploadSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p><form><input data-id="${data.fileupload._id}" type="submit" value="Delete"></form></div>`)
  $('.all-files').append(`<div id="${data.fileupload._id}-all"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p><p>Tags: ${data.fileupload.tag}</p>`)
  $('.my-files').append(`<div id="${data.fileupload._id}"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p><p>Tags: ${data.fileupload.tag}</p><form class="delete-single-file"><input  data-id="${data.fileupload._id}" type="submit" value="Delete"></form></div>`)
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

const deleteFileUploadSuccess = function (data) {
  console.log(data)
  $('#message').html('You successfully deleted your file!')
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
  $('.my-files').remove()
  $('.all-files').remove()
  const myFiles = []
  data.uploads.forEach((file) => {
    if (file.owner === store.user._id) {
      myFiles.push(file)
    }
  })
  console.log(myFiles)
  let myResultsHtml = '<div class="my-files col-md-6"><h3>My Files</h3>'
  myFiles.forEach((result) => {
    myResultsHtml = myResultsHtml + `<div id="${result._id}"><p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Created: ${result.createdAt}</p><p>Updated: ${result.updatedAt}</p><p>Tags: ${result.tag}</p><form class="delete-single-file"><input  data-id="${result._id}" type="submit" value="Delete"></form></div>`
  })
  let resultsHtml = '<div class="all-files col-md-6"><h3>All Files</h3>'
  data.uploads.forEach((result) => {
    resultsHtml = resultsHtml + `<div id="${result._id}-all"><p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Created: ${result.createdAt}</p><p>Updated: ${result.updatedAt}</p><p>Tags: ${result.tag}</p>`
  })
  resultsHtml = resultsHtml + '</div>'
  $('.form-results').append(myResultsHtml)
  $('.form-results').append(resultsHtml)
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
