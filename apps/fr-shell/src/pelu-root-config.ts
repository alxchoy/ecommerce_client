import { registerApplication, start, LifeCycles } from "single-spa";
import routesLayout from "./home.html";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@pelu/navbar",
//   app: () => System.import("@pelu/navbar"),
//   activeWhen: ["/"]
// });

const routes = constructRoutes(routesLayout);
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start();
