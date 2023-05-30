const express = require("express");
const {
  getHomepage,
  getEjx,
  postCreateUser,
  getCreate,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();
router.get("/", getHomepage);
router.get("/ejs", getEjx);

router.get("/create", getCreate);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postRemoveUser);
module.exports = router;
