import { Aurelia } from "aurelia-framework";
import Bluebird from 'bluebird';
import { PLATFORM } from "aurelia-pal";

export async function configure(aurelia: Aurelia) {
  Bluebird.config({ warnings: { wForgottenReturn: false } });
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}