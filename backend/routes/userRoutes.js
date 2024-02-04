import {
  createUser,
  getUsers,
  updateUser,
  deleteUserById,
} from "../controllers/userControllers.js";

import { loginWithEmail } from "../controllers/loginController.js";

const routes = (app) => {
  // POST Endpoint
  app.route("/user").post(createUser);

  // GET Endpoint
  app.route("/users").get(getUsers);

  app.route("/user/:userId").put(updateUser).delete(deleteUserById);

  app.route("/login").post(loginWithEmail);
};

export default routes;
