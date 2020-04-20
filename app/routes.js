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

// Check you answers variations

router.get('/v1/upload-cya', function(req, res) {
  res.render('v1/upload', { 'cya' : 'true' });
});

router.get('/v1/uploading-cya', function(req, res) {
  res.render('v1/uploading', { 'cya' : 'true' });
});

router.get('/v1/uploaded-1-cya', function(req, res) {
  res.render('v1/uploaded-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-cya', function(req, res) {
  res.render('v1/supporting-evidence', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('interruption-screen-cya')
    } else {
      res.redirect('check-your-answers')
    }
});

router.get('/v1/interruption-screen-cya', function(req, res) {
  res.render('v1/interruption-screen', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-1-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-2-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-3-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-3', { 'cya' : 'true' });
});

router.get('/v1/uploading-supporting-evidence-1-cya', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
});

router.get('/v1/uploading-supporting-evidence-2-cya', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
});

router.get('/v1/uploading-supporting-evidence-3-cya', function(req, res) {
  res.render('v1/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
});


router.get('/v1/supporting-evidence-upload-1-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-upload-3-cya', function(req, res) {
  res.render('v1/supporting-evidence-upload-3', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-uploaded-1-cya', function(req, res) {
  res.render('v1/supporting-evidence-uploaded-1', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-uploaded-2-cya', function(req, res) {
  res.render('v1/supporting-evidence-uploaded-2', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-uploaded-3-cya', function(req, res) {
  res.render('v1/supporting-evidence-uploaded-3', { 'cya' : 'true' });
});

router.get('/v1/supporting-evidence-uploaded-1-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-2-cya')
    } else {
      res.redirect('check-your-answers')
    }
});

router.get('/v1/supporting-evidence-uploaded-2-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-3-cya')
    } else {
      res.redirect('check-your-answers')
    }
});

router.get('/v1/supporting-evidence-uploaded-3-data-cya', function(req, res) {

  let question = req.session.data['question']

  if (question === 'yes') {
      res.redirect('supporting-evidence-upload-4-cya')
    } else {
      res.redirect('check-your-answers')
    }
});

router.get('/v1/notifications-cya', function(req, res) {
  res.render('v1/notifications', { 'cya' : 'true' });
});

router.get('/v2/upload-choice-answer', function(req, res) {

  let question = req.session.data['question']

  if (question === 'just-form') {
      res.redirect('upload')
    } else {
      res.redirect('interruption-screen')
    }
});

module.exports = router