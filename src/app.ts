import { autoinject } from "aurelia-framework";
import { routerConfig } from "config/router-config";
import { RouterConfiguration, Router } from "aurelia-router";

@autoinject
export class App {
  constructor(private router: Router) { }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Aurelia";
    config.map(routerConfig);
  }
}
