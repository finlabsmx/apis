import {FinLabsLendingAppV1} from './application';
import {ApplicationConfig} from '@loopback/core';

export {FinLabsLendingAppV1};

export async function main(options?: ApplicationConfig) {
  const app = new FinLabsLendingAppV1(options);
  await app.boot();
  await app.start();
  return app;
}
