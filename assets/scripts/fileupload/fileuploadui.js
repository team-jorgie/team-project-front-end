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
