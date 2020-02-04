const data = require('../models/phone');

// ---------- Basic functions
const functions = {
    findAll: () => new Promise((resolve) => {
        // Add delay
        setTimeout(() => resolve(data.phones), 1000);
    }),
};

// ---------- Endpoints
const endpoints = {
    findAll: (req, res) => {
        functions.findAll()
            .then((type) => res.status(200).send(type))
            .catch((error) => {
                error.code ? error.code : error.code = 400;
                const err = {
                    code: error.code,
                    message: `Bad Request ${error.message}`
                }
                res.status(400);
                res.send(err);
            });
    },
};

exports.functions = functions;
exports.endpoints = endpoints;