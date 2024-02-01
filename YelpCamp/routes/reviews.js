const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const {vaildatedReview, isLoggedin, isReviewAuthor} = require('../middleware');
const reviews = require('../controllers/reviews');


router.post('/', vaildatedReview, isLoggedin, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedin, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;