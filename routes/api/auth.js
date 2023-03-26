const express = require('express');

const router = express.Router();

const { auth, upload } = require('../../middlewares');

const { auth: ctrl } = require('../../controllers');

router.post('/register', ctrl.register);

router.post('/login', ctrl.login);

router.get('/current', auth, ctrl.getCurrent);

router.get('/logout', auth, ctrl.logout);

router.patch('/', auth, ctrl.updateSubscriptionUser);

router.patch('/avatars', auth, upload.single('avatar'), ctrl.updateAvatar);

module.exports = router;
