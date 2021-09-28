const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {

  app.use('/news', newsRouter);

  app.use('/', siteRouter);
  
  app.post("/search", (req, res) => {
    console.log(`req`, req.body)
    res.send("");
    });
}

module.exports = route;
