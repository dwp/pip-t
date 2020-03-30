const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Deal with query strings

router.use(function(req, res, next){

  Object.assign(res.locals,{
    postData: (req.body ? req.body : false)
  });

  Object.assign(res.locals,{
    getData: (req.query ? req.query : false)
  });

  next();
});

// Routes

router.get('/v1/supporting-evidence-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('interruption-screen')
    } else {
      res.redirect('notifications')
    }
});

router.get('/v1/supporting-evidence-uploaded-1-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-2')
    } else {
      res.redirect('notifications')
    }
});

router.get('/v1/supporting-evidence-uploaded-2-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-3')
    } else {
      res.redirect('notifications')
    }
});

router.get('/v1/supporting-evidence-uploaded-3-data', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-4')
    } else {
      res.redirect('notifications')
    }
});

// Uploading screens

router.get('/v1/uploading-supporting-evidence-1', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-1' });
});

router.get('/v1/uploading-supporting-evidence-2', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-2' });
});

router.get('/v1/uploading-supporting-evidence-3', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-3' });
});

module.exports = router