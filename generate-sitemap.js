// This will be run by Node, not in the React flow
const Sitemap = require("@snaddyvitch-dispenser/react-router-sitemap").default;
const routes = require("./src/routes.js").default;

let routeObjects = Object.values(routes).map((path) => ({ path }));
// https://github.com/CADawg/react-router-sitemap
new Sitemap(routeObjects)
  .build("https://skarukas.com")
  .save("./public/sitemap.xml");
