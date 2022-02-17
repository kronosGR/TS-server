import 'reflect-metadata';

function routeBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const put = routeBinder('put');
export const post = routeBinder('pot');
export const del = routeBinder('get');
export const patch = routeBinder('patch');
