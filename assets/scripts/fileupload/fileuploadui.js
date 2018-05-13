'use strict'
const store = require('../store')
// const moment = require('moment')

const createFileUploadSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Size: ${data.fileupload.size / 1000000} MB</p><p>Created: ${data.fileupload.createdAt}</p></div>`)
  $('.all-files').append(`<p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Size: ${data.fileupload.size / 1000000} MB</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p>`)
  $('.my-files').append(`<div class="display-file" id="${data.fileupload._id}"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Size: ${data.fileupload.size / 1000000} MB</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p><p>Tags: ${data.fileupload.tag}</p><form class="delete-single-file"><input  data-id="${data.fileupload._id}" type="submit" value="Delete"></form></div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  $('.no-files').remove()
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const createFileUploadFailure = function () {
  $('#message').html(`<div class="alert alert-failure" role="alert">
  <p>Couldn't retrieve files, please try again!</p>
  </div>`)
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const updateFileUploadSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">
  <p>File successfully updated</p>
  </div>`)
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
  console.log($('.my-files div').length)
  if ($('.my-files div').length < 2) {
    $('.my-files').append('<h2 class="no-files">Looks like you don\'t have any files, try uploading some!</h2>')
  }
  $('#message').html('<div class="alert alert-success" role="alert"><p>You successfully deleted your file!</p></div>')
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
  console.log(data.uploads.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }))
  const myFiles = []
  data.uploads.forEach((file) => {
    if (file.owner === store.user._id) {
      myFiles.push(file)
    }
  })
  console.log(myFiles)
  let myResultsHtml = '<div class="my-files"><h3>My Files</h3>'
  myFiles.forEach((result) => {
    myResultsHtml = myResultsHtml + `<div class="display-file" id="${result._id}"><p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Size: ${result.size/1000000} MB</p><p>Created: ${result.createdAt.substring(0, result.createdAt.length - 14)}</p><p>Updated: ${result.updatedAt.substring(0, result.updatedAt.length - 14)}</p><p>Tags: ${result.tag}</p><form class="delete-single-file"><input  data-id="${result._id}" type="submit" value="Delete"></form><button class="show-update" data-id="${result._id}">update</button></div>`
  })
  let resultsHtml = '<div class="all-files"><h3>All Files</h3>'
  data.uploads.forEach((result) => {
    resultsHtml = resultsHtml + `<p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Size: ${result.size/1000000} MB</p><p>Created: ${result.createdAt.substring(0, result.createdAt.length - 14)}</p><p>Updated: ${result.updatedAt.substring(0, result.createdAt.length - 14)}</p><p>Tags: ${result.tag}</p>`
  })
  resultsHtml = resultsHtml + '</div>'
  if (myFiles.length < 1) {
    $('.myfiles-content').append('<div class="my-files"><h3>My Files</h3><h2 class="no-files">Looks like you don\'t have any files, try uploading some!</h2></div>')
  } else {
    $('.myfiles-content').append(myResultsHtml)
  }
  $('.all-files-content').append(resultsHtml)
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
