import { PLATFORM } from "aurelia-pal";
import { indexPage } from "pages/index/index-page";
let routerConfig = [
  {
    route: ["", "home"],
    name: "home",
    moduleId: PLATFORM.moduleName("pages/index/index-page")
  }
];
export { routerConfig };
