const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query(`select * from Users`);
  return results;
};
const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `select * from Users where id = ?`,
    [userId]
  );
  const user = results && results.length > 0 ? results[0] : null;
  return user;
};
const updateUserById = async (data) => {
  const { email, name, city, id } = data;
  const [results, fields] = await connection.query(
    `update Users set email = ?, name = ?, city = ? where id = ?`,
    [email, name, city, id]
  );
};
const deleteUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `delete from Users where id = ?`,
    [userId]
  );
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };
