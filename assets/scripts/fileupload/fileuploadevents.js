'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./fileuploadui')
const api = require('./fileuploadapi')

const onCreateFileUpload = function (event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  console.log('form data in submit is: ', formData)
  api.createFileUpload(formData)
    .then(ui.createFileUploadSuccess)
    // .catch(ui.)
}

const onUpdateFileUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.fileupload.tag = data.fileupload.tag.split(', ')
  console.log(data)
  api.updateFileUpload(data)
    .then((data) => { console.log(data) })
    .then(onGetFileUploadNoEvent)
    // .catch(ui.)
}

const onDeleteFileUpload = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
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


const onGetFileUploadNoEvent = () => {
  // const data = getFormFields(event.target)
  api.getFileUpload()
    .then(ui.getFileUploadSuccess)
    // .catch(ui.)
}

const addHandlers = () => {
  $('body').on('submit', '.create-file', onCreateFileUpload)
  $('body').on('submit', '.view-file', onGetFileUpload)
  $('body').on('submit', '.update-file', onUpdateFileUpload)
  $('body').on('submit', '.delete-file', onDeleteFileUpload)
}

module.exports = {
  addHandlers,
  onGetFileUploadNoEvent
}
