// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.json');

// Use static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Add comments
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),