import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDecorator) {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
