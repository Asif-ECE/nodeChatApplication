//external imports
const express = require("express");

//internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doValidationHandler,
} = require("../middlewares/login/loginValidators");
const {
  checkLogin,
  redirectLoggedIn,
} = require("../middlewares/common/checkLogin");

const router = express.Router();

//set page title
const page_title = "Login";

//login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

//process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doValidationHandler,
  login
);

//process logout
router.delete("/", logout);

module.exports = router;
