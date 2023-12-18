const express = require("express");
const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')
const router = express.Router({ mergeParams: true });

router.use(authController.isLoggedIn)
router.get("/", viewController.home);
router.get("/files", authController.protect,viewController.files);
router.get("/download/:id", authController.protect,viewController.download);
router.get("/contact", viewController.contact);
router.get("/login", viewController.login);
router.get("/dashboard",authController.protect,authController.restrictTo('admin' , 'sub-admin'), viewController.addFile);
router.get("/dashboard/add-user",
// authController.protect,authController.restrictTo('admin' , 'sub-admin'),
 viewController.addUser);
router.get("/dashboard/add-folder",authController.protect,authController.restrictTo('admin' , 'sub-admin'), viewController.addFolder);


module.exports = router;
