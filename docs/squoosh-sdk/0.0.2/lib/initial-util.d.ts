/**
 * A decorator that binds values to their class instance.
 * @example
 * class C {
 *   @bind
 *   foo () {
 *     return this;
 *   }
 * }
 * let f = new C().foo;
 * f() instanceof C;    // true
 */
export declare function bind(target: any, propertyKey: string, descriptor: PropertyDescriptor): {
    get(): any;
};
/** Creates a function ref that assigns its value to a given property of an object.
 *  @example
 *  // element is stored as `this.foo` when rendered.
 *  <div ref={linkRef(this, 'foo')} />
 */
export declare function linkRef<T>(obj: any, name: string): any;
export declare class Fileish extends Blob {
    name: string;
    constructor(data: any[], name: string, opts?: BlobPropertyBag);
}
