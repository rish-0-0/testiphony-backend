const router = require('express').Router();

router.use('/categories');
// Routes: [submitReview, queryCategory, updateCategory, requestCategory, deleteCategory]
router.use('/user');
// Routes: [subscribeUser, rankUser, queryUser, loginUser, createUser, deleteUser, logoutUser, readUserInfo]
router.use('/reviews')
// Routes: [createReview, updateReview, deleteReview, readReview]
module.exports = router;