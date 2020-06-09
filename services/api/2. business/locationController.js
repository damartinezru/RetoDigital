const store = require("../3. store/locationStore");

const getLocationList = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}


const postLocation = (req, res) => {
    return new Promise((resolve,reject) => {
        if(req.body.name == null || req.body.area_m2 == null) {
            reject("El cuerpo de entrada se encuetra vacio");
        } else {
            if(store.locationByName(req.body.name) == null) {
                resolve(store.insert(req.body));
            } else {
                reject("La locacion ya se encuentra agregada");
            }
        }
        
    })
}

const updateLocation = (req,res) => {
    return new Promise((resolve,reject) => {
        if(req.body.name == null || req.body.area_m2 == null) {
            reject("El cuerpo de entrada se encuetra vacio");
        } else {
            if(store.locationByName(req.body.name) == null) {
                resolve(store.update(req.body));
            } else {
                reject()
            }
        }
    })
}

const deleteLocation = (req) => {
    return new Promise((resolve, reject) => {
        if (req.body.id == null) {
            reject("El cuerpo de entrada se encuentra vacio");
        } else {
            resolve(store.delete(req.body.id))
        }
    })
};

module.exports = {
    getLocationList,
    postLocation,
    updateLocation,
    deleteLocation
}

