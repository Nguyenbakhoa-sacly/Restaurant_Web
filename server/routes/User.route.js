const { authenticateToken } = require('../middlewares/auth');
const router = require('express').Router();
const userControllers = require('../controllers/User.controller');

router.post('/signup', userControllers.signUp);
router.post('/signin', userControllers.signIn);
router.post('/google', userControllers.google_signIn);
router.get('/profile', authenticateToken, userControllers.getUserProfile);
router.put('/profile', authenticateToken, userControllers.updateUserProfile);
router.put('/change-password', authenticateToken, userControllers.changePassword); 
router.post('/logout', authenticateToken, userControllers.logout); 

module.exports = router;
