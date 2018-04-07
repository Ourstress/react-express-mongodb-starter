const router = require("express").Router();
const handleAsyncError = require("express-async-wrap");
const userMiddleware = require("../../middlewares/user_middleware");
const jwt = require("../../middlewares/jwt_middleware");

router.post("/users/signup", handleAsyncError(userMiddleware.registerNewUser));

router.post("/users/login", userMiddleware.login);

router.get(
  "/user",
  jwt.required,
  handleAsyncError(userMiddleware.getCurrentUser)
);

router.put(
  "/user",
  jwt.required,
  handleAsyncError(userMiddleware.updateCurrentUser)
);

router.delete(
  "/user",
  jwt.required,
  handleAsyncError(userMiddleware.deleteCurrentUser)
);

module.exports = router;
