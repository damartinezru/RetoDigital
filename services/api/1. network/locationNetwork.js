const express = require("express");
const router = express.Router();
const controller = require("../2. business/locationController");
const response = require("../../network/response");

router.get("/", (req, res) => {
  controller
    .getLocationList()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, `[GET location] ${error}`);
    });
});

router.post("/", (req, res) => {
  controller
    .postLocation(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        `[POST location] ${error}`
      );
    });
});

router.put("/", (req, res) => {
  controller
    .updateLocation(req, res)
    .then((data) => {
      response.success(res, res, daa, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        `[POST location] ${error}`
      );
    });
});

router.delete("/", (req, res) => {
  controller
    .deleteLocation(req, res)
    .then((data) => {
      response.success(res, res, daa, 200);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "Error interno",
        500,
        `[POST location] ${error}`
      );
    });
});
