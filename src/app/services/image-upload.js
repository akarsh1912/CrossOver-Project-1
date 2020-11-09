const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  secretAccessKey: '',
  accessKeyId: '',
  region: 'ap-south-1',
  s3BucketEndpoint:true,
  endpoint:"http://" + 'crossoverimagebucket' + ".s3.amazonaws.com"
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
}

const upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'crossoverimagebucket',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'Test-data'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

module.exports = upload;