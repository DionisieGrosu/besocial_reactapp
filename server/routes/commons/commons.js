const express = require("express");
const jwt = require("jsonwebtoken");
const { userModel } = require("../../models/userModels/userModel");

exports.AuthMiddleware = (req, res, next) => {
  let userInfo = {};
  if (req.headers.authorization && req.headers.authorization.split(" ")[1]) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_KEY,
      function (err, decoded) {
        if (err) return res.status(401).send("Unauthorized!");
        // console.log(decoded)
        if (
          decoded !== undefined &&
          decoded.data !== undefined &&
          decoded.data.email !== undefined
        ) {
          userModel
            .findOne({ email: decoded.data.email.trim() })
            .then((user) => {
              if (!user) {
                return res.status(401).send("Unauthorized!");
              }

              req.userInfo = user;
              next();
            })
            .catch((err) => res.status(401).send("Unauthorized!"));
        } else {
          res.status(401).send("Unauthorized!");
        }
      }
    );
  } else {
    return res.status(500).send("Something went wrong!!!");
  }
};
