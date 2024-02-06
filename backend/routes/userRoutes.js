import {
  getUsers,
  updateUser,
  deleteUserById,
} from "../controllers/userControllers.js";

import { loginWithEmail, createUser } from "../controllers/loginController.js";

const routes = (app) => {
  // POST Endpoint
  app.route("/signup").post(createUser);

  // GET Endpoint
  app.route("/users").get(getUsers);

  app.route("/user/:userId").put(updateUser).delete(deleteUserById);

  app.route("/login").post(loginWithEmail);
};

export default routes;
