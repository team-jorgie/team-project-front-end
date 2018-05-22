'use strict'
const store = require('../store')
// const moment = require('moment')
const viewMyFileUploadHandlebars = require('../templates/file-upload/view-my-file.handlebars')
const viewAllFileUploadHandlebars = require('../templates/file-upload/view-all-file.handlebars')

const createFileUploadSuccess = function (data) {
  // console.log(data)``
  $('#message').html(`<div class="alert alert-success" role="alert"><p>File Successfully Uploaded</p></div>`)
  $('.create-file input[type="submit"]').removeAttr('disabled')
  if (data.fileupload.publicFile) {
    $('.all-files').prepend(viewAllFileUploadHandlebars({result: data.fileupload}))
  }
  $('.my-files').prepend(viewMyFileUploadHandlebars({result: data.fileupload}))
  // $('.all-files').append(`<p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Owner: ${data.fileupload.owner}</p><p>Size: ${data.fileupload.size / 1000000} MB</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p>`)
  // $('.my-files').append(`<div class="display-file" id="${data.fileupload._id}"><p><a href="${data.fileupload.url}" download="${data.fileupload.title}">Name: ${data.fileupload.title}</a></p><p>Size: ${data.fileupload.size / 1000000} MB</p><p>Created: ${data.fileupload.createdAt}</p><p>Updated: ${data.fileupload.updatedAt}</p><p>Tags: ${data.fileupload.tag}</p><form class="delete-single-file"><input  data-id="${data.fileupload._id}" type="submit" value="Delete"></form></div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  $('.no-files').remove()
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const createFileUploadFailure = function () {
  $('#message').html(`<div class="alert alert-warning" role="alert">
  <p>Couldn't retrieve files, please try again!</p>
  </div>`)
  $('.create-file input[type="submit"]').removeAttr('disabled')
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
  $('#message').html('<div class="alert alert-warning" role="alert"><p>Your file upload failed! Please try again.</p></div>')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteFileUploadSuccess = function (data) {
  // console.log(data)
  // console.log($('.my-files div').length)
  if ($('.my-files div').length < 2) {
    $('.my-files').append('<h2 class="no-files">Looks like you don\'t have any files yet. Add a file to get started!')
  }
  $('#message').html('<div class="alert alert-success" role="alert"><p>You successfully deleted your file!</p></div>')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteFileUploadFailure = function () {
  $('#message').html('<div class="alert alert-warning" role="alert"><p>Your file deletion attempt failed! Please try again.</p></div>')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const getFileUploadSuccess = function (data) {
  // console.log(data)
  $('.tab-title').remove()
  $('.my-files').remove()
  $('.all-files').remove()
  data.uploads.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })
  const myFiles = []
  data.uploads.forEach((file) => {
    if (file.owner === store.user._id) {
      myFiles.push(file)
    }
  })

  // makes a file appear in all files when public is set to true.
  const publicFiles = []
  data.uploads.forEach((file) => {
    if (file.publicFile) {
      publicFiles.push(file)
    }
  })

  // console.log(myFiles)
  let myResultsHtml = '<h3 class="tab-title">My Files</h3><div class="my-files">'
  myFiles.forEach((result) => {
    const myFileUploadHTML = viewMyFileUploadHandlebars({result: result})
    myResultsHtml = myResultsHtml + myFileUploadHTML
  })
  let resultsHtml = '<h3 class="tab-title">All Files</h3><div class="all-files">'
  publicFiles.forEach((result) => {
    const allFileUploadHTML = viewAllFileUploadHandlebars({result: result})
    resultsHtml = resultsHtml + allFileUploadHTML
    // resultsHtml = resultsHtml + `<p><a href="${result.url}" download="${result.title}">Name: ${result.title}</a></p><p>Owner: ${result.owner}</p><p>Size: ${result.size/1000000} MB</p><p>Created: ${result.createdAt.substring(0, result.createdAt.length - 14)}</p><p>Updated: ${result.updatedAt.substring(0, result.createdAt.length - 14)}</p><p>Tags: ${result.tag}</p>`
  })
  resultsHtml = resultsHtml + '</div>'
  if (myFiles.length < 1) {
    $('.myfiles-content').append('<h3>My Files</h3><div class="my-files"><h2 class="no-files">Looks like you don\'t have any files yet. Add a file to get started!</h2></div>')
  } else {
    $('.myfiles-content').append(myResultsHtml)
  }
  $('.all-files-content').append(resultsHtml)
  $('#message').html('<div class="alert alert-success" role="alert"><p>Files successfully retreived</p></div>')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const getFileUploadFailure = function () {
  $('#message').html('<div class="alert alert-warning" role="alert"><p>Getting files failed, please check your internet connection.</p></div>')
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
