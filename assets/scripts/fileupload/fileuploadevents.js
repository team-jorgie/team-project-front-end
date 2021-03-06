'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./fileuploadui')
const api = require('./fileuploadapi')

const onCreateFileUpload = function (event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  $('.create-file input[type="submit"]').attr('disabled', 'true')
  // console.log('form data in submit is: ', formData)
  api.createFileUpload(formData)
    .then(ui.createFileUploadSuccess)
    .catch(ui.createFileUploadFailure)
}

const onUpdateFileUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.fileupload.tag = data.fileupload.tag.split(', ')
  // console.log(data)
  api.updateFileUpload(data)
    // .then((data) => { console.log(data) })
    .then(onGetFileUploadNoEvent)
    .catch(ui.getFileUploadFailure)
}

const onDeleteFileUpload = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteFileUpload(data)
  // .then(ui.)
  // .then(api.)
  // .catch(ui.)
}

const onGetFileUpload = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getFileUpload()
    .then(ui.getFileUploadSuccess)
    // .catch(ui.)
}

const deleter = (e) => {
  e.preventDefault()
  // console.log('delete ')
  const id = $(e.target).children().attr('data-id')
  const data = {fileupload: { id: $(e.target).children().attr('data-id') }}
  // console.log('item to delete has id of', data)
  api.deleteFileUpload(data)
    .then(ui.deleteFileUploadSuccess)
    .then(() => {
      $('#' + id).fadeOut()
      $('#' + id + '-all').fadeOut()
    })
    .then(() => {
      $('#' + id).remove()
      $('#' + id + '-all').remove()
    })
}

const onGetFileUploadNoEvent = () => {
  // const data = getFormFields(event.target)
  api.getFileUpload()
    .then(ui.getFileUploadSuccess)

    // .catch(ui.)
}

const onShowUpdate = (e) => {
  // console.log($(e.target).attr('data-id'))

  const updateFileUploadHandlebars = require('../templates/file-upload/update-file.handlebars')
  const updateFileUploadHTML = updateFileUploadHandlebars({fileId: $(e.target).attr('data-id')})
  $(e.target).parents('.display-file').append(updateFileUploadHTML)
  $(e.target).attr('disabled', 'disabled')
}

const addHandlers = () => {
  $('body').on('submit', '.create-file', onCreateFileUpload)
  $('body').on('submit', '.view-file', onGetFileUpload)
  $('body').on('submit', '.update-file', onUpdateFileUpload)
  $('body').on('submit', '.delete-file', onDeleteFileUpload)
  $('body').on('submit', '.tab-content .delete-single-file', deleter)
  $('body').on('click', '.tab-content .show-update', onShowUpdate)
}

module.exports = {
  addHandlers,
  onGetFileUploadNoEvent
}
