const db = require("../../lib/db");
const locationModel = require("../models/locationModel");
const dbConnection = new db().connect();

const getLocationList = () => {
    return "hola";
};

const getLocationByName = (name) => {
};

const postLocation = (location) => {
    return location;
};

const deleteLocation = (idLocation) => {};

const updateLocation = (location) => {};

module.exports = {
  list: getLocationList,
  locationByName: getLocationByName,
  insert: postLocation,
  delete: deleteLocation,
  update: updateLocation,
};
