const app = require("../routes");

// Custom middleware to log the path of each request
const clog = (req, res, next) => {
  switch (req.method) {
    case "GET": {
      app.get(`${req.method} request to ${req.path}`);
      res.json(`${req.method} request to ${req.path}`);
      break;
    }
    case "POST": {
      app.post(`${req.method} request to ${req.path}`);
      // res.json(`${req.method} request to ${req.path}`);
      break;
    }
    default:
      app.send(`${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
