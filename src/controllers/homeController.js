const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDServices");
const getHomepage = async (req, res) => {
  return res.render("home.ejs", { listUsers: await getAllUsers() });
};
const getEjx = (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
};
const getCreate = (req, res) => {
  // res.send("Hello World!");
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  // res.send("Hello World!");
  const userId = req.params.id;
  res.render("edit.ejs", { user: await getUserById(userId) });
};
const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  const [results, fields] = await connection.query(
    `insert into Users (email,name,city) values (?,?,?)`,
    [email, name, city]
  );
};
const postUpdateUser = async (req, res) => {
  await updateUserById(req.body);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  res.render("delete.ejs", { user: await getUserById(req.params.id) });
  // res.redirect("/");
};
const postRemoveUser = async (req, res) => {
  await deleteUserById(req.body.id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getEjx,
  postCreateUser,
  getCreate,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
};
