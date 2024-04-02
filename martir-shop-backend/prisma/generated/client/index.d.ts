
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model ParamValues
 * 
 */
export type ParamValues = $Result.DefaultSelection<Prisma.$ParamValuesPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductCountHistory
 * 
 */
export type ProductCountHistory = $Result.DefaultSelection<Prisma.$ProductCountHistoryPayload>
/**
 * Model ProductVersion
 * 
 */
export type ProductVersion = $Result.DefaultSelection<Prisma.$ProductVersionPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model OrderVersion
 * 
 */
export type OrderVersion = $Result.DefaultSelection<Prisma.$OrderVersionPayload>
/**
 * Model OrderVersionOnProducts
 * 
 */
export type OrderVersionOnProducts = $Result.DefaultSelection<Prisma.$OrderVersionOnProductsPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model UsersOnProjects
 * 
 */
export type UsersOnProjects = $Result.DefaultSelection<Prisma.$UsersOnProjectsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  CREATED: 'CREATED',
  IN_PROCESS: 'IN_PROCESS',
  NEED_INFO: 'NEED_INFO',
  READY_TO_DELIVERY: 'READY_TO_DELIVERY',
  IN_DELIVERY: 'IN_DELIVERY',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  REFUND: 'REFUND'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Role: {
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs>;

  /**
   * `prisma.paramValues`: Exposes CRUD operations for the **ParamValues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParamValues
    * const paramValues = await prisma.paramValues.findMany()
    * ```
    */
  get paramValues(): Prisma.ParamValuesDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productCountHistory`: Exposes CRUD operations for the **ProductCountHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCountHistories
    * const productCountHistories = await prisma.productCountHistory.findMany()
    * ```
    */
  get productCountHistory(): Prisma.ProductCountHistoryDelegate<ExtArgs>;

  /**
   * `prisma.productVersion`: Exposes CRUD operations for the **ProductVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVersions
    * const productVersions = await prisma.productVersion.findMany()
    * ```
    */
  get productVersion(): Prisma.ProductVersionDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.orderVersion`: Exposes CRUD operations for the **OrderVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderVersions
    * const orderVersions = await prisma.orderVersion.findMany()
    * ```
    */
  get orderVersion(): Prisma.OrderVersionDelegate<ExtArgs>;

  /**
   * `prisma.orderVersionOnProducts`: Exposes CRUD operations for the **OrderVersionOnProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderVersionOnProducts
    * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findMany()
    * ```
    */
  get orderVersionOnProducts(): Prisma.OrderVersionOnProductsDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.usersOnProjects`: Exposes CRUD operations for the **UsersOnProjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersOnProjects
    * const usersOnProjects = await prisma.usersOnProjects.findMany()
    * ```
    */
  get usersOnProjects(): Prisma.UsersOnProjectsDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Images: 'Images',
    ParamValues: 'ParamValues',
    Product: 'Product',
    ProductCountHistory: 'ProductCountHistory',
    ProductVersion: 'ProductVersion',
    Order: 'Order',
    Comment: 'Comment',
    OrderVersion: 'OrderVersion',
    OrderVersionOnProducts: 'OrderVersionOnProducts',
    Customer: 'Customer',
    Project: 'Project',
    UsersOnProjects: 'UsersOnProjects',
    User: 'User',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'images' | 'paramValues' | 'product' | 'productCountHistory' | 'productVersion' | 'order' | 'comment' | 'orderVersion' | 'orderVersionOnProducts' | 'customer' | 'project' | 'usersOnProjects' | 'user' | 'session'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      ParamValues: {
        payload: Prisma.$ParamValuesPayload<ExtArgs>
        fields: Prisma.ParamValuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParamValuesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParamValuesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          findFirst: {
            args: Prisma.ParamValuesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParamValuesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          findMany: {
            args: Prisma.ParamValuesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>[]
          }
          create: {
            args: Prisma.ParamValuesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          createMany: {
            args: Prisma.ParamValuesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParamValuesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          update: {
            args: Prisma.ParamValuesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          deleteMany: {
            args: Prisma.ParamValuesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParamValuesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParamValuesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParamValuesPayload>
          }
          aggregate: {
            args: Prisma.ParamValuesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParamValues>
          }
          groupBy: {
            args: Prisma.ParamValuesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParamValuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParamValuesCountArgs<ExtArgs>,
            result: $Utils.Optional<ParamValuesCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductCountHistory: {
        payload: Prisma.$ProductCountHistoryPayload<ExtArgs>
        fields: Prisma.ProductCountHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCountHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCountHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCountHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCountHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          findMany: {
            args: Prisma.ProductCountHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>[]
          }
          create: {
            args: Prisma.ProductCountHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          createMany: {
            args: Prisma.ProductCountHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductCountHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          update: {
            args: Prisma.ProductCountHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCountHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCountHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductCountHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCountHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCountHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductCountHistory>
          }
          groupBy: {
            args: Prisma.ProductCountHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountHistoryCountAggregateOutputType> | number
          }
        }
      }
      ProductVersion: {
        payload: Prisma.$ProductVersionPayload<ExtArgs>
        fields: Prisma.ProductVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVersionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVersionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          findFirst: {
            args: Prisma.ProductVersionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVersionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          findMany: {
            args: Prisma.ProductVersionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>[]
          }
          create: {
            args: Prisma.ProductVersionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          createMany: {
            args: Prisma.ProductVersionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductVersionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          update: {
            args: Prisma.ProductVersionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          deleteMany: {
            args: Prisma.ProductVersionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVersionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductVersionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVersionPayload>
          }
          aggregate: {
            args: Prisma.ProductVersionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductVersion>
          }
          groupBy: {
            args: Prisma.ProductVersionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVersionCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductVersionCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      OrderVersion: {
        payload: Prisma.$OrderVersionPayload<ExtArgs>
        fields: Prisma.OrderVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderVersionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderVersionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          findFirst: {
            args: Prisma.OrderVersionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderVersionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          findMany: {
            args: Prisma.OrderVersionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>[]
          }
          create: {
            args: Prisma.OrderVersionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          createMany: {
            args: Prisma.OrderVersionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderVersionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          update: {
            args: Prisma.OrderVersionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          deleteMany: {
            args: Prisma.OrderVersionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderVersionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderVersionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionPayload>
          }
          aggregate: {
            args: Prisma.OrderVersionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderVersion>
          }
          groupBy: {
            args: Prisma.OrderVersionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderVersionCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderVersionCountAggregateOutputType> | number
          }
        }
      }
      OrderVersionOnProducts: {
        payload: Prisma.$OrderVersionOnProductsPayload<ExtArgs>
        fields: Prisma.OrderVersionOnProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderVersionOnProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderVersionOnProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          findFirst: {
            args: Prisma.OrderVersionOnProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderVersionOnProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          findMany: {
            args: Prisma.OrderVersionOnProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>[]
          }
          create: {
            args: Prisma.OrderVersionOnProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          createMany: {
            args: Prisma.OrderVersionOnProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderVersionOnProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          update: {
            args: Prisma.OrderVersionOnProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          deleteMany: {
            args: Prisma.OrderVersionOnProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderVersionOnProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderVersionOnProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderVersionOnProductsPayload>
          }
          aggregate: {
            args: Prisma.OrderVersionOnProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderVersionOnProducts>
          }
          groupBy: {
            args: Prisma.OrderVersionOnProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderVersionOnProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderVersionOnProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderVersionOnProductsCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      UsersOnProjects: {
        payload: Prisma.$UsersOnProjectsPayload<ExtArgs>
        fields: Prisma.UsersOnProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersOnProjectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersOnProjectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          findFirst: {
            args: Prisma.UsersOnProjectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersOnProjectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          findMany: {
            args: Prisma.UsersOnProjectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>[]
          }
          create: {
            args: Prisma.UsersOnProjectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          createMany: {
            args: Prisma.UsersOnProjectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersOnProjectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          update: {
            args: Prisma.UsersOnProjectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          deleteMany: {
            args: Prisma.UsersOnProjectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersOnProjectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersOnProjectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersOnProjectsPayload>
          }
          aggregate: {
            args: Prisma.UsersOnProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsersOnProjects>
          }
          groupBy: {
            args: Prisma.UsersOnProjectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersOnProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersOnProjectsCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersOnProjectsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParamValuesCountOutputType
   */

  export type ParamValuesCountOutputType = {
    productVersions: number
  }

  export type ParamValuesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVersions?: boolean | ParamValuesCountOutputTypeCountProductVersionsArgs
  }

  // Custom InputTypes

  /**
   * ParamValuesCountOutputType without action
   */
  export type ParamValuesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValuesCountOutputType
     */
    select?: ParamValuesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ParamValuesCountOutputType without action
   */
  export type ParamValuesCountOutputTypeCountProductVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVersionWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    versions: number
    productCountHistory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ProductCountOutputTypeCountVersionsArgs
    productCountHistory?: boolean | ProductCountOutputTypeCountProductCountHistoryArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVersionWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCountHistoryWhereInput
  }



  /**
   * Count Type ProductVersionCountOutputType
   */

  export type ProductVersionCountOutputType = {
    images: number
    orderVersions: number
    params: number
  }

  export type ProductVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductVersionCountOutputTypeCountImagesArgs
    orderVersions?: boolean | ProductVersionCountOutputTypeCountOrderVersionsArgs
    params?: boolean | ProductVersionCountOutputTypeCountParamsArgs
  }

  // Custom InputTypes

  /**
   * ProductVersionCountOutputType without action
   */
  export type ProductVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersionCountOutputType
     */
    select?: ProductVersionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductVersionCountOutputType without action
   */
  export type ProductVersionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }


  /**
   * ProductVersionCountOutputType without action
   */
  export type ProductVersionCountOutputTypeCountOrderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionOnProductsWhereInput
  }


  /**
   * ProductVersionCountOutputType without action
   */
  export type ProductVersionCountOutputTypeCountParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParamValuesWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderVersions: number
    comments: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderVersions?: boolean | OrderCountOutputTypeCountOrderVersionsArgs
    comments?: boolean | OrderCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionWhereInput
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }



  /**
   * Count Type OrderVersionCountOutputType
   */

  export type OrderVersionCountOutputType = {
    products: number
  }

  export type OrderVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderVersionCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * OrderVersionCountOutputType without action
   */
  export type OrderVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionCountOutputType
     */
    select?: OrderVersionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderVersionCountOutputType without action
   */
  export type OrderVersionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionOnProductsWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    usersOnProjects: number
    Product: number
    Order: number
    Customer: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersOnProjects?: boolean | ProjectCountOutputTypeCountUsersOnProjectsArgs
    Product?: boolean | ProjectCountOutputTypeCountProductArgs
    Order?: boolean | ProjectCountOutputTypeCountOrderArgs
    Customer?: boolean | ProjectCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUsersOnProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnProjectsWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    productVersions: number
    orderVersions: number
    customers: number
    comments: number
    usersOnProjects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    productVersions?: boolean | UserCountOutputTypeCountProductVersionsArgs
    orderVersions?: boolean | UserCountOutputTypeCountOrderVersionsArgs
    customers?: boolean | UserCountOutputTypeCountCustomersArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    usersOnProjects?: boolean | UserCountOutputTypeCountUsersOnProjectsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVersionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsersOnProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnProjectsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    url: string | null
    productVersionId: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    productVersionId: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    productVersionId: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    productVersionId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    productVersionId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    productVersionId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    url: string
    productVersionId: string
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    productVersionId?: boolean
    productVersion?: boolean | ProductVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    url?: boolean
    productVersionId?: boolean
  }

  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVersion?: boolean | ProductVersionDefaultArgs<ExtArgs>
  }


  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      productVersion: Prisma.$ProductVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      productVersionId: string
    }, ExtArgs["result"]["images"]>
    composites: {}
  }


  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
    **/
    create<T extends ImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const images = await prisma.images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
    **/
    delete<T extends ImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productVersion<T extends ProductVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVersionDefaultArgs<ExtArgs>>): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Images model
   */ 
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'String'>
    readonly url: FieldRef<"Images", 'String'>
    readonly productVersionId: FieldRef<"Images", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }


  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
  }


  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }


  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
  }


  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
  }



  /**
   * Model ParamValues
   */

  export type AggregateParamValues = {
    _count: ParamValuesCountAggregateOutputType | null
    _min: ParamValuesMinAggregateOutputType | null
    _max: ParamValuesMaxAggregateOutputType | null
  }

  export type ParamValuesMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
  }

  export type ParamValuesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
  }

  export type ParamValuesCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type ParamValuesMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type ParamValuesMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type ParamValuesCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type ParamValuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParamValues to aggregate.
     */
    where?: ParamValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParamValues to fetch.
     */
    orderBy?: ParamValuesOrderByWithRelationInput | ParamValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParamValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParamValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParamValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParamValues
    **/
    _count?: true | ParamValuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParamValuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParamValuesMaxAggregateInputType
  }

  export type GetParamValuesAggregateType<T extends ParamValuesAggregateArgs> = {
        [P in keyof T & keyof AggregateParamValues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParamValues[P]>
      : GetScalarType<T[P], AggregateParamValues[P]>
  }




  export type ParamValuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParamValuesWhereInput
    orderBy?: ParamValuesOrderByWithAggregationInput | ParamValuesOrderByWithAggregationInput[]
    by: ParamValuesScalarFieldEnum[] | ParamValuesScalarFieldEnum
    having?: ParamValuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParamValuesCountAggregateInputType | true
    _min?: ParamValuesMinAggregateInputType
    _max?: ParamValuesMaxAggregateInputType
  }

  export type ParamValuesGroupByOutputType = {
    id: string
    name: string
    value: string
    _count: ParamValuesCountAggregateOutputType | null
    _min: ParamValuesMinAggregateOutputType | null
    _max: ParamValuesMaxAggregateOutputType | null
  }

  type GetParamValuesGroupByPayload<T extends ParamValuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParamValuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParamValuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParamValuesGroupByOutputType[P]>
            : GetScalarType<T[P], ParamValuesGroupByOutputType[P]>
        }
      >
    >


  export type ParamValuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    productVersions?: boolean | ParamValues$productVersionsArgs<ExtArgs>
    _count?: boolean | ParamValuesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paramValues"]>

  export type ParamValuesSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type ParamValuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVersions?: boolean | ParamValues$productVersionsArgs<ExtArgs>
    _count?: boolean | ParamValuesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ParamValuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParamValues"
    objects: {
      productVersions: Prisma.$ProductVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
    }, ExtArgs["result"]["paramValues"]>
    composites: {}
  }


  type ParamValuesGetPayload<S extends boolean | null | undefined | ParamValuesDefaultArgs> = $Result.GetResult<Prisma.$ParamValuesPayload, S>

  type ParamValuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParamValuesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParamValuesCountAggregateInputType | true
    }

  export interface ParamValuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParamValues'], meta: { name: 'ParamValues' } }
    /**
     * Find zero or one ParamValues that matches the filter.
     * @param {ParamValuesFindUniqueArgs} args - Arguments to find a ParamValues
     * @example
     * // Get one ParamValues
     * const paramValues = await prisma.paramValues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParamValuesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesFindUniqueArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ParamValues that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParamValuesFindUniqueOrThrowArgs} args - Arguments to find a ParamValues
     * @example
     * // Get one ParamValues
     * const paramValues = await prisma.paramValues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParamValuesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ParamValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesFindFirstArgs} args - Arguments to find a ParamValues
     * @example
     * // Get one ParamValues
     * const paramValues = await prisma.paramValues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParamValuesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesFindFirstArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ParamValues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesFindFirstOrThrowArgs} args - Arguments to find a ParamValues
     * @example
     * // Get one ParamValues
     * const paramValues = await prisma.paramValues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParamValuesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ParamValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParamValues
     * const paramValues = await prisma.paramValues.findMany()
     * 
     * // Get first 10 ParamValues
     * const paramValues = await prisma.paramValues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paramValuesWithIdOnly = await prisma.paramValues.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParamValuesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ParamValues.
     * @param {ParamValuesCreateArgs} args - Arguments to create a ParamValues.
     * @example
     * // Create one ParamValues
     * const ParamValues = await prisma.paramValues.create({
     *   data: {
     *     // ... data to create a ParamValues
     *   }
     * })
     * 
    **/
    create<T extends ParamValuesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesCreateArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ParamValues.
     *     @param {ParamValuesCreateManyArgs} args - Arguments to create many ParamValues.
     *     @example
     *     // Create many ParamValues
     *     const paramValues = await prisma.paramValues.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParamValuesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ParamValues.
     * @param {ParamValuesDeleteArgs} args - Arguments to delete one ParamValues.
     * @example
     * // Delete one ParamValues
     * const ParamValues = await prisma.paramValues.delete({
     *   where: {
     *     // ... filter to delete one ParamValues
     *   }
     * })
     * 
    **/
    delete<T extends ParamValuesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesDeleteArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ParamValues.
     * @param {ParamValuesUpdateArgs} args - Arguments to update one ParamValues.
     * @example
     * // Update one ParamValues
     * const paramValues = await prisma.paramValues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParamValuesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesUpdateArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ParamValues.
     * @param {ParamValuesDeleteManyArgs} args - Arguments to filter ParamValues to delete.
     * @example
     * // Delete a few ParamValues
     * const { count } = await prisma.paramValues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParamValuesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParamValuesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParamValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParamValues
     * const paramValues = await prisma.paramValues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParamValuesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParamValues.
     * @param {ParamValuesUpsertArgs} args - Arguments to update or create a ParamValues.
     * @example
     * // Update or create a ParamValues
     * const paramValues = await prisma.paramValues.upsert({
     *   create: {
     *     // ... data to create a ParamValues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParamValues we want to update
     *   }
     * })
    **/
    upsert<T extends ParamValuesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParamValuesUpsertArgs<ExtArgs>>
    ): Prisma__ParamValuesClient<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ParamValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesCountArgs} args - Arguments to filter ParamValues to count.
     * @example
     * // Count the number of ParamValues
     * const count = await prisma.paramValues.count({
     *   where: {
     *     // ... the filter for the ParamValues we want to count
     *   }
     * })
    **/
    count<T extends ParamValuesCountArgs>(
      args?: Subset<T, ParamValuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParamValuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParamValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParamValuesAggregateArgs>(args: Subset<T, ParamValuesAggregateArgs>): Prisma.PrismaPromise<GetParamValuesAggregateType<T>>

    /**
     * Group by ParamValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamValuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParamValuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParamValuesGroupByArgs['orderBy'] }
        : { orderBy?: ParamValuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParamValuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParamValuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParamValues model
   */
  readonly fields: ParamValuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParamValues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParamValuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productVersions<T extends ParamValues$productVersionsArgs<ExtArgs> = {}>(args?: Subset<T, ParamValues$productVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ParamValues model
   */ 
  interface ParamValuesFieldRefs {
    readonly id: FieldRef<"ParamValues", 'String'>
    readonly name: FieldRef<"ParamValues", 'String'>
    readonly value: FieldRef<"ParamValues", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ParamValues findUnique
   */
  export type ParamValuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter, which ParamValues to fetch.
     */
    where: ParamValuesWhereUniqueInput
  }


  /**
   * ParamValues findUniqueOrThrow
   */
  export type ParamValuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter, which ParamValues to fetch.
     */
    where: ParamValuesWhereUniqueInput
  }


  /**
   * ParamValues findFirst
   */
  export type ParamValuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter, which ParamValues to fetch.
     */
    where?: ParamValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParamValues to fetch.
     */
    orderBy?: ParamValuesOrderByWithRelationInput | ParamValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParamValues.
     */
    cursor?: ParamValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParamValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParamValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParamValues.
     */
    distinct?: ParamValuesScalarFieldEnum | ParamValuesScalarFieldEnum[]
  }


  /**
   * ParamValues findFirstOrThrow
   */
  export type ParamValuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter, which ParamValues to fetch.
     */
    where?: ParamValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParamValues to fetch.
     */
    orderBy?: ParamValuesOrderByWithRelationInput | ParamValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParamValues.
     */
    cursor?: ParamValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParamValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParamValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParamValues.
     */
    distinct?: ParamValuesScalarFieldEnum | ParamValuesScalarFieldEnum[]
  }


  /**
   * ParamValues findMany
   */
  export type ParamValuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter, which ParamValues to fetch.
     */
    where?: ParamValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParamValues to fetch.
     */
    orderBy?: ParamValuesOrderByWithRelationInput | ParamValuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParamValues.
     */
    cursor?: ParamValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParamValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParamValues.
     */
    skip?: number
    distinct?: ParamValuesScalarFieldEnum | ParamValuesScalarFieldEnum[]
  }


  /**
   * ParamValues create
   */
  export type ParamValuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * The data needed to create a ParamValues.
     */
    data: XOR<ParamValuesCreateInput, ParamValuesUncheckedCreateInput>
  }


  /**
   * ParamValues createMany
   */
  export type ParamValuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParamValues.
     */
    data: ParamValuesCreateManyInput | ParamValuesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ParamValues update
   */
  export type ParamValuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * The data needed to update a ParamValues.
     */
    data: XOR<ParamValuesUpdateInput, ParamValuesUncheckedUpdateInput>
    /**
     * Choose, which ParamValues to update.
     */
    where: ParamValuesWhereUniqueInput
  }


  /**
   * ParamValues updateMany
   */
  export type ParamValuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParamValues.
     */
    data: XOR<ParamValuesUpdateManyMutationInput, ParamValuesUncheckedUpdateManyInput>
    /**
     * Filter which ParamValues to update
     */
    where?: ParamValuesWhereInput
  }


  /**
   * ParamValues upsert
   */
  export type ParamValuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * The filter to search for the ParamValues to update in case it exists.
     */
    where: ParamValuesWhereUniqueInput
    /**
     * In case the ParamValues found by the `where` argument doesn't exist, create a new ParamValues with this data.
     */
    create: XOR<ParamValuesCreateInput, ParamValuesUncheckedCreateInput>
    /**
     * In case the ParamValues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParamValuesUpdateInput, ParamValuesUncheckedUpdateInput>
  }


  /**
   * ParamValues delete
   */
  export type ParamValuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    /**
     * Filter which ParamValues to delete.
     */
    where: ParamValuesWhereUniqueInput
  }


  /**
   * ParamValues deleteMany
   */
  export type ParamValuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParamValues to delete
     */
    where?: ParamValuesWhereInput
  }


  /**
   * ParamValues.productVersions
   */
  export type ParamValues$productVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    where?: ProductVersionWhereInput
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    cursor?: ProductVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * ParamValues without action
   */
  export type ParamValuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    projectId: string
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    versions?: boolean | Product$versionsArgs<ExtArgs>
    productCountHistory?: boolean | Product$productCountHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    versions?: boolean | Product$versionsArgs<ExtArgs>
    productCountHistory?: boolean | Product$productCountHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      versions: Prisma.$ProductVersionPayload<ExtArgs>[]
      productCountHistory: Prisma.$ProductCountHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    versions<T extends Product$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    productCountHistory<T extends Product$productCountHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$productCountHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly projectId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.versions
   */
  export type Product$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    where?: ProductVersionWhereInput
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    cursor?: ProductVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * Product.productCountHistory
   */
  export type Product$productCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    where?: ProductCountHistoryWhereInput
    orderBy?: ProductCountHistoryOrderByWithRelationInput | ProductCountHistoryOrderByWithRelationInput[]
    cursor?: ProductCountHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCountHistoryScalarFieldEnum | ProductCountHistoryScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model ProductCountHistory
   */

  export type AggregateProductCountHistory = {
    _count: ProductCountHistoryCountAggregateOutputType | null
    _avg: ProductCountHistoryAvgAggregateOutputType | null
    _sum: ProductCountHistorySumAggregateOutputType | null
    _min: ProductCountHistoryMinAggregateOutputType | null
    _max: ProductCountHistoryMaxAggregateOutputType | null
  }

  export type ProductCountHistoryAvgAggregateOutputType = {
    value: number | null
  }

  export type ProductCountHistorySumAggregateOutputType = {
    value: number | null
  }

  export type ProductCountHistoryMinAggregateOutputType = {
    id: string | null
    value: number | null
    productId: string | null
  }

  export type ProductCountHistoryMaxAggregateOutputType = {
    id: string | null
    value: number | null
    productId: string | null
  }

  export type ProductCountHistoryCountAggregateOutputType = {
    id: number
    value: number
    productId: number
    _all: number
  }


  export type ProductCountHistoryAvgAggregateInputType = {
    value?: true
  }

  export type ProductCountHistorySumAggregateInputType = {
    value?: true
  }

  export type ProductCountHistoryMinAggregateInputType = {
    id?: true
    value?: true
    productId?: true
  }

  export type ProductCountHistoryMaxAggregateInputType = {
    id?: true
    value?: true
    productId?: true
  }

  export type ProductCountHistoryCountAggregateInputType = {
    id?: true
    value?: true
    productId?: true
    _all?: true
  }

  export type ProductCountHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCountHistory to aggregate.
     */
    where?: ProductCountHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCountHistories to fetch.
     */
    orderBy?: ProductCountHistoryOrderByWithRelationInput | ProductCountHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCountHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCountHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCountHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCountHistories
    **/
    _count?: true | ProductCountHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCountHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCountHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCountHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCountHistoryMaxAggregateInputType
  }

  export type GetProductCountHistoryAggregateType<T extends ProductCountHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCountHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCountHistory[P]>
      : GetScalarType<T[P], AggregateProductCountHistory[P]>
  }




  export type ProductCountHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCountHistoryWhereInput
    orderBy?: ProductCountHistoryOrderByWithAggregationInput | ProductCountHistoryOrderByWithAggregationInput[]
    by: ProductCountHistoryScalarFieldEnum[] | ProductCountHistoryScalarFieldEnum
    having?: ProductCountHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountHistoryCountAggregateInputType | true
    _avg?: ProductCountHistoryAvgAggregateInputType
    _sum?: ProductCountHistorySumAggregateInputType
    _min?: ProductCountHistoryMinAggregateInputType
    _max?: ProductCountHistoryMaxAggregateInputType
  }

  export type ProductCountHistoryGroupByOutputType = {
    id: string
    value: number
    productId: string
    _count: ProductCountHistoryCountAggregateOutputType | null
    _avg: ProductCountHistoryAvgAggregateOutputType | null
    _sum: ProductCountHistorySumAggregateOutputType | null
    _min: ProductCountHistoryMinAggregateOutputType | null
    _max: ProductCountHistoryMaxAggregateOutputType | null
  }

  type GetProductCountHistoryGroupByPayload<T extends ProductCountHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCountHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCountHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCountHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCountHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCountHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCountHistory"]>

  export type ProductCountHistorySelectScalar = {
    id?: boolean
    value?: boolean
    productId?: boolean
  }

  export type ProductCountHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductCountHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCountHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      productId: string
    }, ExtArgs["result"]["productCountHistory"]>
    composites: {}
  }


  type ProductCountHistoryGetPayload<S extends boolean | null | undefined | ProductCountHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCountHistoryPayload, S>

  type ProductCountHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductCountHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountHistoryCountAggregateInputType | true
    }

  export interface ProductCountHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCountHistory'], meta: { name: 'ProductCountHistory' } }
    /**
     * Find zero or one ProductCountHistory that matches the filter.
     * @param {ProductCountHistoryFindUniqueArgs} args - Arguments to find a ProductCountHistory
     * @example
     * // Get one ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductCountHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductCountHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductCountHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCountHistory
     * @example
     * // Get one ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductCountHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductCountHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryFindFirstArgs} args - Arguments to find a ProductCountHistory
     * @example
     * // Get one ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductCountHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductCountHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryFindFirstOrThrowArgs} args - Arguments to find a ProductCountHistory
     * @example
     * // Get one ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductCountHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductCountHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCountHistories
     * const productCountHistories = await prisma.productCountHistory.findMany()
     * 
     * // Get first 10 ProductCountHistories
     * const productCountHistories = await prisma.productCountHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCountHistoryWithIdOnly = await prisma.productCountHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductCountHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductCountHistory.
     * @param {ProductCountHistoryCreateArgs} args - Arguments to create a ProductCountHistory.
     * @example
     * // Create one ProductCountHistory
     * const ProductCountHistory = await prisma.productCountHistory.create({
     *   data: {
     *     // ... data to create a ProductCountHistory
     *   }
     * })
     * 
    **/
    create<T extends ProductCountHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryCreateArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductCountHistories.
     *     @param {ProductCountHistoryCreateManyArgs} args - Arguments to create many ProductCountHistories.
     *     @example
     *     // Create many ProductCountHistories
     *     const productCountHistory = await prisma.productCountHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCountHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCountHistory.
     * @param {ProductCountHistoryDeleteArgs} args - Arguments to delete one ProductCountHistory.
     * @example
     * // Delete one ProductCountHistory
     * const ProductCountHistory = await prisma.productCountHistory.delete({
     *   where: {
     *     // ... filter to delete one ProductCountHistory
     *   }
     * })
     * 
    **/
    delete<T extends ProductCountHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryDeleteArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductCountHistory.
     * @param {ProductCountHistoryUpdateArgs} args - Arguments to update one ProductCountHistory.
     * @example
     * // Update one ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductCountHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryUpdateArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductCountHistories.
     * @param {ProductCountHistoryDeleteManyArgs} args - Arguments to filter ProductCountHistories to delete.
     * @example
     * // Delete a few ProductCountHistories
     * const { count } = await prisma.productCountHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductCountHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCountHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCountHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCountHistories
     * const productCountHistory = await prisma.productCountHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductCountHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCountHistory.
     * @param {ProductCountHistoryUpsertArgs} args - Arguments to update or create a ProductCountHistory.
     * @example
     * // Update or create a ProductCountHistory
     * const productCountHistory = await prisma.productCountHistory.upsert({
     *   create: {
     *     // ... data to create a ProductCountHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCountHistory we want to update
     *   }
     * })
    **/
    upsert<T extends ProductCountHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCountHistoryUpsertArgs<ExtArgs>>
    ): Prisma__ProductCountHistoryClient<$Result.GetResult<Prisma.$ProductCountHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductCountHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryCountArgs} args - Arguments to filter ProductCountHistories to count.
     * @example
     * // Count the number of ProductCountHistories
     * const count = await prisma.productCountHistory.count({
     *   where: {
     *     // ... the filter for the ProductCountHistories we want to count
     *   }
     * })
    **/
    count<T extends ProductCountHistoryCountArgs>(
      args?: Subset<T, ProductCountHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCountHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCountHistoryAggregateArgs>(args: Subset<T, ProductCountHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductCountHistoryAggregateType<T>>

    /**
     * Group by ProductCountHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCountHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCountHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCountHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCountHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCountHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCountHistory model
   */
  readonly fields: ProductCountHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCountHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCountHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductCountHistory model
   */ 
  interface ProductCountHistoryFieldRefs {
    readonly id: FieldRef<"ProductCountHistory", 'String'>
    readonly value: FieldRef<"ProductCountHistory", 'Int'>
    readonly productId: FieldRef<"ProductCountHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductCountHistory findUnique
   */
  export type ProductCountHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCountHistory to fetch.
     */
    where: ProductCountHistoryWhereUniqueInput
  }


  /**
   * ProductCountHistory findUniqueOrThrow
   */
  export type ProductCountHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCountHistory to fetch.
     */
    where: ProductCountHistoryWhereUniqueInput
  }


  /**
   * ProductCountHistory findFirst
   */
  export type ProductCountHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCountHistory to fetch.
     */
    where?: ProductCountHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCountHistories to fetch.
     */
    orderBy?: ProductCountHistoryOrderByWithRelationInput | ProductCountHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCountHistories.
     */
    cursor?: ProductCountHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCountHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCountHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCountHistories.
     */
    distinct?: ProductCountHistoryScalarFieldEnum | ProductCountHistoryScalarFieldEnum[]
  }


  /**
   * ProductCountHistory findFirstOrThrow
   */
  export type ProductCountHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCountHistory to fetch.
     */
    where?: ProductCountHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCountHistories to fetch.
     */
    orderBy?: ProductCountHistoryOrderByWithRelationInput | ProductCountHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCountHistories.
     */
    cursor?: ProductCountHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCountHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCountHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCountHistories.
     */
    distinct?: ProductCountHistoryScalarFieldEnum | ProductCountHistoryScalarFieldEnum[]
  }


  /**
   * ProductCountHistory findMany
   */
  export type ProductCountHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCountHistories to fetch.
     */
    where?: ProductCountHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCountHistories to fetch.
     */
    orderBy?: ProductCountHistoryOrderByWithRelationInput | ProductCountHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCountHistories.
     */
    cursor?: ProductCountHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCountHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCountHistories.
     */
    skip?: number
    distinct?: ProductCountHistoryScalarFieldEnum | ProductCountHistoryScalarFieldEnum[]
  }


  /**
   * ProductCountHistory create
   */
  export type ProductCountHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCountHistory.
     */
    data: XOR<ProductCountHistoryCreateInput, ProductCountHistoryUncheckedCreateInput>
  }


  /**
   * ProductCountHistory createMany
   */
  export type ProductCountHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCountHistories.
     */
    data: ProductCountHistoryCreateManyInput | ProductCountHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductCountHistory update
   */
  export type ProductCountHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCountHistory.
     */
    data: XOR<ProductCountHistoryUpdateInput, ProductCountHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCountHistory to update.
     */
    where: ProductCountHistoryWhereUniqueInput
  }


  /**
   * ProductCountHistory updateMany
   */
  export type ProductCountHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCountHistories.
     */
    data: XOR<ProductCountHistoryUpdateManyMutationInput, ProductCountHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCountHistories to update
     */
    where?: ProductCountHistoryWhereInput
  }


  /**
   * ProductCountHistory upsert
   */
  export type ProductCountHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCountHistory to update in case it exists.
     */
    where: ProductCountHistoryWhereUniqueInput
    /**
     * In case the ProductCountHistory found by the `where` argument doesn't exist, create a new ProductCountHistory with this data.
     */
    create: XOR<ProductCountHistoryCreateInput, ProductCountHistoryUncheckedCreateInput>
    /**
     * In case the ProductCountHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCountHistoryUpdateInput, ProductCountHistoryUncheckedUpdateInput>
  }


  /**
   * ProductCountHistory delete
   */
  export type ProductCountHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCountHistory to delete.
     */
    where: ProductCountHistoryWhereUniqueInput
  }


  /**
   * ProductCountHistory deleteMany
   */
  export type ProductCountHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCountHistories to delete
     */
    where?: ProductCountHistoryWhereInput
  }


  /**
   * ProductCountHistory without action
   */
  export type ProductCountHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountHistory
     */
    select?: ProductCountHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductCountHistoryInclude<ExtArgs> | null
  }



  /**
   * Model ProductVersion
   */

  export type AggregateProductVersion = {
    _count: ProductVersionCountAggregateOutputType | null
    _avg: ProductVersionAvgAggregateOutputType | null
    _sum: ProductVersionSumAggregateOutputType | null
    _min: ProductVersionMinAggregateOutputType | null
    _max: ProductVersionMaxAggregateOutputType | null
  }

  export type ProductVersionAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductVersionSumAggregateOutputType = {
    price: number | null
  }

  export type ProductVersionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    price: number | null
  }

  export type ProductVersionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    price: number | null
  }

  export type ProductVersionCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    name: number
    description: number
    price: number
    _all: number
  }


  export type ProductVersionAvgAggregateInputType = {
    price?: true
  }

  export type ProductVersionSumAggregateInputType = {
    price?: true
  }

  export type ProductVersionMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    name?: true
    description?: true
    price?: true
  }

  export type ProductVersionMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    name?: true
    description?: true
    price?: true
  }

  export type ProductVersionCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    name?: true
    description?: true
    price?: true
    _all?: true
  }

  export type ProductVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVersion to aggregate.
     */
    where?: ProductVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVersions to fetch.
     */
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVersions
    **/
    _count?: true | ProductVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVersionMaxAggregateInputType
  }

  export type GetProductVersionAggregateType<T extends ProductVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVersion[P]>
      : GetScalarType<T[P], AggregateProductVersion[P]>
  }




  export type ProductVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVersionWhereInput
    orderBy?: ProductVersionOrderByWithAggregationInput | ProductVersionOrderByWithAggregationInput[]
    by: ProductVersionScalarFieldEnum[] | ProductVersionScalarFieldEnum
    having?: ProductVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVersionCountAggregateInputType | true
    _avg?: ProductVersionAvgAggregateInputType
    _sum?: ProductVersionSumAggregateInputType
    _min?: ProductVersionMinAggregateInputType
    _max?: ProductVersionMaxAggregateInputType
  }

  export type ProductVersionGroupByOutputType = {
    id: string
    userId: string
    productId: string
    createdAt: Date
    name: string
    description: string
    price: number
    _count: ProductVersionCountAggregateOutputType | null
    _avg: ProductVersionAvgAggregateOutputType | null
    _sum: ProductVersionSumAggregateOutputType | null
    _min: ProductVersionMinAggregateOutputType | null
    _max: ProductVersionMaxAggregateOutputType | null
  }

  type GetProductVersionGroupByPayload<T extends ProductVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVersionGroupByOutputType[P]>
        }
      >
    >


  export type ProductVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    images?: boolean | ProductVersion$imagesArgs<ExtArgs>
    orderVersions?: boolean | ProductVersion$orderVersionsArgs<ExtArgs>
    params?: boolean | ProductVersion$paramsArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProductVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVersion"]>

  export type ProductVersionSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
  }

  export type ProductVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductVersion$imagesArgs<ExtArgs>
    orderVersions?: boolean | ProductVersion$orderVersionsArgs<ExtArgs>
    params?: boolean | ProductVersion$paramsArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProductVersionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVersion"
    objects: {
      images: Prisma.$ImagesPayload<ExtArgs>[]
      orderVersions: Prisma.$OrderVersionOnProductsPayload<ExtArgs>[]
      params: Prisma.$ParamValuesPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      createdAt: Date
      name: string
      description: string
      price: number
    }, ExtArgs["result"]["productVersion"]>
    composites: {}
  }


  type ProductVersionGetPayload<S extends boolean | null | undefined | ProductVersionDefaultArgs> = $Result.GetResult<Prisma.$ProductVersionPayload, S>

  type ProductVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVersionCountAggregateInputType | true
    }

  export interface ProductVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVersion'], meta: { name: 'ProductVersion' } }
    /**
     * Find zero or one ProductVersion that matches the filter.
     * @param {ProductVersionFindUniqueArgs} args - Arguments to find a ProductVersion
     * @example
     * // Get one ProductVersion
     * const productVersion = await prisma.productVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductVersionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductVersion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductVersionFindUniqueOrThrowArgs} args - Arguments to find a ProductVersion
     * @example
     * // Get one ProductVersion
     * const productVersion = await prisma.productVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductVersionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionFindFirstArgs} args - Arguments to find a ProductVersion
     * @example
     * // Get one ProductVersion
     * const productVersion = await prisma.productVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductVersionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionFindFirstArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionFindFirstOrThrowArgs} args - Arguments to find a ProductVersion
     * @example
     * // Get one ProductVersion
     * const productVersion = await prisma.productVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductVersionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVersions
     * const productVersions = await prisma.productVersion.findMany()
     * 
     * // Get first 10 ProductVersions
     * const productVersions = await prisma.productVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVersionWithIdOnly = await prisma.productVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductVersionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductVersion.
     * @param {ProductVersionCreateArgs} args - Arguments to create a ProductVersion.
     * @example
     * // Create one ProductVersion
     * const ProductVersion = await prisma.productVersion.create({
     *   data: {
     *     // ... data to create a ProductVersion
     *   }
     * })
     * 
    **/
    create<T extends ProductVersionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionCreateArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductVersions.
     *     @param {ProductVersionCreateManyArgs} args - Arguments to create many ProductVersions.
     *     @example
     *     // Create many ProductVersions
     *     const productVersion = await prisma.productVersion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductVersionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVersion.
     * @param {ProductVersionDeleteArgs} args - Arguments to delete one ProductVersion.
     * @example
     * // Delete one ProductVersion
     * const ProductVersion = await prisma.productVersion.delete({
     *   where: {
     *     // ... filter to delete one ProductVersion
     *   }
     * })
     * 
    **/
    delete<T extends ProductVersionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionDeleteArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductVersion.
     * @param {ProductVersionUpdateArgs} args - Arguments to update one ProductVersion.
     * @example
     * // Update one ProductVersion
     * const productVersion = await prisma.productVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductVersionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionUpdateArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductVersions.
     * @param {ProductVersionDeleteManyArgs} args - Arguments to filter ProductVersions to delete.
     * @example
     * // Delete a few ProductVersions
     * const { count } = await prisma.productVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductVersionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVersionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVersions
     * const productVersion = await prisma.productVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductVersionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVersion.
     * @param {ProductVersionUpsertArgs} args - Arguments to update or create a ProductVersion.
     * @example
     * // Update or create a ProductVersion
     * const productVersion = await prisma.productVersion.upsert({
     *   create: {
     *     // ... data to create a ProductVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVersion we want to update
     *   }
     * })
    **/
    upsert<T extends ProductVersionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVersionUpsertArgs<ExtArgs>>
    ): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionCountArgs} args - Arguments to filter ProductVersions to count.
     * @example
     * // Count the number of ProductVersions
     * const count = await prisma.productVersion.count({
     *   where: {
     *     // ... the filter for the ProductVersions we want to count
     *   }
     * })
    **/
    count<T extends ProductVersionCountArgs>(
      args?: Subset<T, ProductVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVersionAggregateArgs>(args: Subset<T, ProductVersionAggregateArgs>): Prisma.PrismaPromise<GetProductVersionAggregateType<T>>

    /**
     * Group by ProductVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVersionGroupByArgs['orderBy'] }
        : { orderBy?: ProductVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVersion model
   */
  readonly fields: ProductVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    images<T extends ProductVersion$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVersion$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    orderVersions<T extends ProductVersion$orderVersionsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVersion$orderVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    params<T extends ProductVersion$paramsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVersion$paramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamValuesPayload<ExtArgs>, T, 'findMany'> | Null>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductVersion model
   */ 
  interface ProductVersionFieldRefs {
    readonly id: FieldRef<"ProductVersion", 'String'>
    readonly userId: FieldRef<"ProductVersion", 'String'>
    readonly productId: FieldRef<"ProductVersion", 'String'>
    readonly createdAt: FieldRef<"ProductVersion", 'DateTime'>
    readonly name: FieldRef<"ProductVersion", 'String'>
    readonly description: FieldRef<"ProductVersion", 'String'>
    readonly price: FieldRef<"ProductVersion", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * ProductVersion findUnique
   */
  export type ProductVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVersion to fetch.
     */
    where: ProductVersionWhereUniqueInput
  }


  /**
   * ProductVersion findUniqueOrThrow
   */
  export type ProductVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVersion to fetch.
     */
    where: ProductVersionWhereUniqueInput
  }


  /**
   * ProductVersion findFirst
   */
  export type ProductVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVersion to fetch.
     */
    where?: ProductVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVersions to fetch.
     */
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVersions.
     */
    cursor?: ProductVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVersions.
     */
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * ProductVersion findFirstOrThrow
   */
  export type ProductVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVersion to fetch.
     */
    where?: ProductVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVersions to fetch.
     */
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVersions.
     */
    cursor?: ProductVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVersions.
     */
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * ProductVersion findMany
   */
  export type ProductVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter, which ProductVersions to fetch.
     */
    where?: ProductVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVersions to fetch.
     */
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVersions.
     */
    cursor?: ProductVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVersions.
     */
    skip?: number
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * ProductVersion create
   */
  export type ProductVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVersion.
     */
    data: XOR<ProductVersionCreateInput, ProductVersionUncheckedCreateInput>
  }


  /**
   * ProductVersion createMany
   */
  export type ProductVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVersions.
     */
    data: ProductVersionCreateManyInput | ProductVersionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductVersion update
   */
  export type ProductVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVersion.
     */
    data: XOR<ProductVersionUpdateInput, ProductVersionUncheckedUpdateInput>
    /**
     * Choose, which ProductVersion to update.
     */
    where: ProductVersionWhereUniqueInput
  }


  /**
   * ProductVersion updateMany
   */
  export type ProductVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVersions.
     */
    data: XOR<ProductVersionUpdateManyMutationInput, ProductVersionUncheckedUpdateManyInput>
    /**
     * Filter which ProductVersions to update
     */
    where?: ProductVersionWhereInput
  }


  /**
   * ProductVersion upsert
   */
  export type ProductVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVersion to update in case it exists.
     */
    where: ProductVersionWhereUniqueInput
    /**
     * In case the ProductVersion found by the `where` argument doesn't exist, create a new ProductVersion with this data.
     */
    create: XOR<ProductVersionCreateInput, ProductVersionUncheckedCreateInput>
    /**
     * In case the ProductVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVersionUpdateInput, ProductVersionUncheckedUpdateInput>
  }


  /**
   * ProductVersion delete
   */
  export type ProductVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    /**
     * Filter which ProductVersion to delete.
     */
    where: ProductVersionWhereUniqueInput
  }


  /**
   * ProductVersion deleteMany
   */
  export type ProductVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVersions to delete
     */
    where?: ProductVersionWhereInput
  }


  /**
   * ProductVersion.images
   */
  export type ProductVersion$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * ProductVersion.orderVersions
   */
  export type ProductVersion$orderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    where?: OrderVersionOnProductsWhereInput
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    cursor?: OrderVersionOnProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderVersionOnProductsScalarFieldEnum | OrderVersionOnProductsScalarFieldEnum[]
  }


  /**
   * ProductVersion.params
   */
  export type ProductVersion$paramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamValues
     */
    select?: ParamValuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParamValuesInclude<ExtArgs> | null
    where?: ParamValuesWhereInput
    orderBy?: ParamValuesOrderByWithRelationInput | ParamValuesOrderByWithRelationInput[]
    cursor?: ParamValuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParamValuesScalarFieldEnum | ParamValuesScalarFieldEnum[]
  }


  /**
   * ProductVersion without action
   */
  export type ProductVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectId: string | null
    customerId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectId: string | null
    customerId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    createdAt: number
    projectId: number
    customerId: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
    customerId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
    customerId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
    customerId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    createdAt: Date
    projectId: string
    customerId: string
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
    customerId?: boolean
    orderVersions?: boolean | Order$orderVersionsArgs<ExtArgs>
    comments?: boolean | Order$commentsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
    customerId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderVersions?: boolean | Order$orderVersionsArgs<ExtArgs>
    comments?: boolean | Order$commentsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderVersions: Prisma.$OrderVersionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      projectId: string
      customerId: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orderVersions<T extends Order$orderVersionsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends Order$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly projectId: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.orderVersions
   */
  export type Order$orderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    where?: OrderVersionWhereInput
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    cursor?: OrderVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderVersionScalarFieldEnum | OrderVersionScalarFieldEnum[]
  }


  /**
   * Order.comments
   */
  export type Order$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    orderId: string | null
    text: string | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    orderId: string | null
    text: string | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    orderId: number
    text: number
    userId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    text?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    text?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    text?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    createdAt: Date
    orderId: string
    text: string
    userId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    text?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    text?: boolean
    userId?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      orderId: string
      text: string
      userId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly orderId: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model OrderVersion
   */

  export type AggregateOrderVersion = {
    _count: OrderVersionCountAggregateOutputType | null
    _avg: OrderVersionAvgAggregateOutputType | null
    _sum: OrderVersionSumAggregateOutputType | null
    _min: OrderVersionMinAggregateOutputType | null
    _max: OrderVersionMaxAggregateOutputType | null
  }

  export type OrderVersionAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderVersionSumAggregateOutputType = {
    total: number | null
  }

  export type OrderVersionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    orderId: string | null
    createdAt: Date | null
    address: string | null
    total: number | null
    status: $Enums.OrderStatus | null
  }

  export type OrderVersionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    orderId: string | null
    createdAt: Date | null
    address: string | null
    total: number | null
    status: $Enums.OrderStatus | null
  }

  export type OrderVersionCountAggregateOutputType = {
    id: number
    userId: number
    orderId: number
    createdAt: number
    address: number
    total: number
    status: number
    _all: number
  }


  export type OrderVersionAvgAggregateInputType = {
    total?: true
  }

  export type OrderVersionSumAggregateInputType = {
    total?: true
  }

  export type OrderVersionMinAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    createdAt?: true
    address?: true
    total?: true
    status?: true
  }

  export type OrderVersionMaxAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    createdAt?: true
    address?: true
    total?: true
    status?: true
  }

  export type OrderVersionCountAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    createdAt?: true
    address?: true
    total?: true
    status?: true
    _all?: true
  }

  export type OrderVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVersion to aggregate.
     */
    where?: OrderVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersions to fetch.
     */
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderVersions
    **/
    _count?: true | OrderVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderVersionMaxAggregateInputType
  }

  export type GetOrderVersionAggregateType<T extends OrderVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderVersion[P]>
      : GetScalarType<T[P], AggregateOrderVersion[P]>
  }




  export type OrderVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionWhereInput
    orderBy?: OrderVersionOrderByWithAggregationInput | OrderVersionOrderByWithAggregationInput[]
    by: OrderVersionScalarFieldEnum[] | OrderVersionScalarFieldEnum
    having?: OrderVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderVersionCountAggregateInputType | true
    _avg?: OrderVersionAvgAggregateInputType
    _sum?: OrderVersionSumAggregateInputType
    _min?: OrderVersionMinAggregateInputType
    _max?: OrderVersionMaxAggregateInputType
  }

  export type OrderVersionGroupByOutputType = {
    id: string
    userId: string
    orderId: string
    createdAt: Date
    address: string
    total: number
    status: $Enums.OrderStatus
    _count: OrderVersionCountAggregateOutputType | null
    _avg: OrderVersionAvgAggregateOutputType | null
    _sum: OrderVersionSumAggregateOutputType | null
    _min: OrderVersionMinAggregateOutputType | null
    _max: OrderVersionMaxAggregateOutputType | null
  }

  type GetOrderVersionGroupByPayload<T extends OrderVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderVersionGroupByOutputType[P]>
            : GetScalarType<T[P], OrderVersionGroupByOutputType[P]>
        }
      >
    >


  export type OrderVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orderId?: boolean
    createdAt?: boolean
    address?: boolean
    total?: boolean
    status?: boolean
    products?: boolean | OrderVersion$productsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderVersion"]>

  export type OrderVersionSelectScalar = {
    id?: boolean
    userId?: boolean
    orderId?: boolean
    createdAt?: boolean
    address?: boolean
    total?: boolean
    status?: boolean
  }

  export type OrderVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderVersion$productsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderVersionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderVersion"
    objects: {
      products: Prisma.$OrderVersionOnProductsPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      orderId: string
      createdAt: Date
      address: string
      total: number
      status: $Enums.OrderStatus
    }, ExtArgs["result"]["orderVersion"]>
    composites: {}
  }


  type OrderVersionGetPayload<S extends boolean | null | undefined | OrderVersionDefaultArgs> = $Result.GetResult<Prisma.$OrderVersionPayload, S>

  type OrderVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderVersionCountAggregateInputType | true
    }

  export interface OrderVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderVersion'], meta: { name: 'OrderVersion' } }
    /**
     * Find zero or one OrderVersion that matches the filter.
     * @param {OrderVersionFindUniqueArgs} args - Arguments to find a OrderVersion
     * @example
     * // Get one OrderVersion
     * const orderVersion = await prisma.orderVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderVersionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderVersion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderVersionFindUniqueOrThrowArgs} args - Arguments to find a OrderVersion
     * @example
     * // Get one OrderVersion
     * const orderVersion = await prisma.orderVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderVersionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionFindFirstArgs} args - Arguments to find a OrderVersion
     * @example
     * // Get one OrderVersion
     * const orderVersion = await prisma.orderVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderVersionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionFindFirstArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionFindFirstOrThrowArgs} args - Arguments to find a OrderVersion
     * @example
     * // Get one OrderVersion
     * const orderVersion = await prisma.orderVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderVersionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderVersions
     * const orderVersions = await prisma.orderVersion.findMany()
     * 
     * // Get first 10 OrderVersions
     * const orderVersions = await prisma.orderVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderVersionWithIdOnly = await prisma.orderVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderVersionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderVersion.
     * @param {OrderVersionCreateArgs} args - Arguments to create a OrderVersion.
     * @example
     * // Create one OrderVersion
     * const OrderVersion = await prisma.orderVersion.create({
     *   data: {
     *     // ... data to create a OrderVersion
     *   }
     * })
     * 
    **/
    create<T extends OrderVersionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionCreateArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderVersions.
     *     @param {OrderVersionCreateManyArgs} args - Arguments to create many OrderVersions.
     *     @example
     *     // Create many OrderVersions
     *     const orderVersion = await prisma.orderVersion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderVersionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderVersion.
     * @param {OrderVersionDeleteArgs} args - Arguments to delete one OrderVersion.
     * @example
     * // Delete one OrderVersion
     * const OrderVersion = await prisma.orderVersion.delete({
     *   where: {
     *     // ... filter to delete one OrderVersion
     *   }
     * })
     * 
    **/
    delete<T extends OrderVersionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionDeleteArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderVersion.
     * @param {OrderVersionUpdateArgs} args - Arguments to update one OrderVersion.
     * @example
     * // Update one OrderVersion
     * const orderVersion = await prisma.orderVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderVersionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionUpdateArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderVersions.
     * @param {OrderVersionDeleteManyArgs} args - Arguments to filter OrderVersions to delete.
     * @example
     * // Delete a few OrderVersions
     * const { count } = await prisma.orderVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderVersionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderVersions
     * const orderVersion = await prisma.orderVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderVersionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderVersion.
     * @param {OrderVersionUpsertArgs} args - Arguments to update or create a OrderVersion.
     * @example
     * // Update or create a OrderVersion
     * const orderVersion = await prisma.orderVersion.upsert({
     *   create: {
     *     // ... data to create a OrderVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderVersion we want to update
     *   }
     * })
    **/
    upsert<T extends OrderVersionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionUpsertArgs<ExtArgs>>
    ): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionCountArgs} args - Arguments to filter OrderVersions to count.
     * @example
     * // Count the number of OrderVersions
     * const count = await prisma.orderVersion.count({
     *   where: {
     *     // ... the filter for the OrderVersions we want to count
     *   }
     * })
    **/
    count<T extends OrderVersionCountArgs>(
      args?: Subset<T, OrderVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderVersionAggregateArgs>(args: Subset<T, OrderVersionAggregateArgs>): Prisma.PrismaPromise<GetOrderVersionAggregateType<T>>

    /**
     * Group by OrderVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderVersionGroupByArgs['orderBy'] }
        : { orderBy?: OrderVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderVersion model
   */
  readonly fields: OrderVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends OrderVersion$productsArgs<ExtArgs> = {}>(args?: Subset<T, OrderVersion$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderVersion model
   */ 
  interface OrderVersionFieldRefs {
    readonly id: FieldRef<"OrderVersion", 'String'>
    readonly userId: FieldRef<"OrderVersion", 'String'>
    readonly orderId: FieldRef<"OrderVersion", 'String'>
    readonly createdAt: FieldRef<"OrderVersion", 'DateTime'>
    readonly address: FieldRef<"OrderVersion", 'String'>
    readonly total: FieldRef<"OrderVersion", 'Float'>
    readonly status: FieldRef<"OrderVersion", 'OrderStatus'>
  }
    

  // Custom InputTypes

  /**
   * OrderVersion findUnique
   */
  export type OrderVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersion to fetch.
     */
    where: OrderVersionWhereUniqueInput
  }


  /**
   * OrderVersion findUniqueOrThrow
   */
  export type OrderVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersion to fetch.
     */
    where: OrderVersionWhereUniqueInput
  }


  /**
   * OrderVersion findFirst
   */
  export type OrderVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersion to fetch.
     */
    where?: OrderVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersions to fetch.
     */
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVersions.
     */
    cursor?: OrderVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVersions.
     */
    distinct?: OrderVersionScalarFieldEnum | OrderVersionScalarFieldEnum[]
  }


  /**
   * OrderVersion findFirstOrThrow
   */
  export type OrderVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersion to fetch.
     */
    where?: OrderVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersions to fetch.
     */
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVersions.
     */
    cursor?: OrderVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVersions.
     */
    distinct?: OrderVersionScalarFieldEnum | OrderVersionScalarFieldEnum[]
  }


  /**
   * OrderVersion findMany
   */
  export type OrderVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersions to fetch.
     */
    where?: OrderVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersions to fetch.
     */
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderVersions.
     */
    cursor?: OrderVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersions.
     */
    skip?: number
    distinct?: OrderVersionScalarFieldEnum | OrderVersionScalarFieldEnum[]
  }


  /**
   * OrderVersion create
   */
  export type OrderVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderVersion.
     */
    data: XOR<OrderVersionCreateInput, OrderVersionUncheckedCreateInput>
  }


  /**
   * OrderVersion createMany
   */
  export type OrderVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderVersions.
     */
    data: OrderVersionCreateManyInput | OrderVersionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderVersion update
   */
  export type OrderVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderVersion.
     */
    data: XOR<OrderVersionUpdateInput, OrderVersionUncheckedUpdateInput>
    /**
     * Choose, which OrderVersion to update.
     */
    where: OrderVersionWhereUniqueInput
  }


  /**
   * OrderVersion updateMany
   */
  export type OrderVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderVersions.
     */
    data: XOR<OrderVersionUpdateManyMutationInput, OrderVersionUncheckedUpdateManyInput>
    /**
     * Filter which OrderVersions to update
     */
    where?: OrderVersionWhereInput
  }


  /**
   * OrderVersion upsert
   */
  export type OrderVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderVersion to update in case it exists.
     */
    where: OrderVersionWhereUniqueInput
    /**
     * In case the OrderVersion found by the `where` argument doesn't exist, create a new OrderVersion with this data.
     */
    create: XOR<OrderVersionCreateInput, OrderVersionUncheckedCreateInput>
    /**
     * In case the OrderVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderVersionUpdateInput, OrderVersionUncheckedUpdateInput>
  }


  /**
   * OrderVersion delete
   */
  export type OrderVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    /**
     * Filter which OrderVersion to delete.
     */
    where: OrderVersionWhereUniqueInput
  }


  /**
   * OrderVersion deleteMany
   */
  export type OrderVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVersions to delete
     */
    where?: OrderVersionWhereInput
  }


  /**
   * OrderVersion.products
   */
  export type OrderVersion$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    where?: OrderVersionOnProductsWhereInput
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    cursor?: OrderVersionOnProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderVersionOnProductsScalarFieldEnum | OrderVersionOnProductsScalarFieldEnum[]
  }


  /**
   * OrderVersion without action
   */
  export type OrderVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
  }



  /**
   * Model OrderVersionOnProducts
   */

  export type AggregateOrderVersionOnProducts = {
    _count: OrderVersionOnProductsCountAggregateOutputType | null
    _avg: OrderVersionOnProductsAvgAggregateOutputType | null
    _sum: OrderVersionOnProductsSumAggregateOutputType | null
    _min: OrderVersionOnProductsMinAggregateOutputType | null
    _max: OrderVersionOnProductsMaxAggregateOutputType | null
  }

  export type OrderVersionOnProductsAvgAggregateOutputType = {
    amount: number | null
  }

  export type OrderVersionOnProductsSumAggregateOutputType = {
    amount: number | null
  }

  export type OrderVersionOnProductsMinAggregateOutputType = {
    orderVersionId: string | null
    productId: string | null
    amount: number | null
  }

  export type OrderVersionOnProductsMaxAggregateOutputType = {
    orderVersionId: string | null
    productId: string | null
    amount: number | null
  }

  export type OrderVersionOnProductsCountAggregateOutputType = {
    orderVersionId: number
    productId: number
    amount: number
    _all: number
  }


  export type OrderVersionOnProductsAvgAggregateInputType = {
    amount?: true
  }

  export type OrderVersionOnProductsSumAggregateInputType = {
    amount?: true
  }

  export type OrderVersionOnProductsMinAggregateInputType = {
    orderVersionId?: true
    productId?: true
    amount?: true
  }

  export type OrderVersionOnProductsMaxAggregateInputType = {
    orderVersionId?: true
    productId?: true
    amount?: true
  }

  export type OrderVersionOnProductsCountAggregateInputType = {
    orderVersionId?: true
    productId?: true
    amount?: true
    _all?: true
  }

  export type OrderVersionOnProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVersionOnProducts to aggregate.
     */
    where?: OrderVersionOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersionOnProducts to fetch.
     */
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderVersionOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersionOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersionOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderVersionOnProducts
    **/
    _count?: true | OrderVersionOnProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderVersionOnProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderVersionOnProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderVersionOnProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderVersionOnProductsMaxAggregateInputType
  }

  export type GetOrderVersionOnProductsAggregateType<T extends OrderVersionOnProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderVersionOnProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderVersionOnProducts[P]>
      : GetScalarType<T[P], AggregateOrderVersionOnProducts[P]>
  }




  export type OrderVersionOnProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderVersionOnProductsWhereInput
    orderBy?: OrderVersionOnProductsOrderByWithAggregationInput | OrderVersionOnProductsOrderByWithAggregationInput[]
    by: OrderVersionOnProductsScalarFieldEnum[] | OrderVersionOnProductsScalarFieldEnum
    having?: OrderVersionOnProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderVersionOnProductsCountAggregateInputType | true
    _avg?: OrderVersionOnProductsAvgAggregateInputType
    _sum?: OrderVersionOnProductsSumAggregateInputType
    _min?: OrderVersionOnProductsMinAggregateInputType
    _max?: OrderVersionOnProductsMaxAggregateInputType
  }

  export type OrderVersionOnProductsGroupByOutputType = {
    orderVersionId: string
    productId: string
    amount: number
    _count: OrderVersionOnProductsCountAggregateOutputType | null
    _avg: OrderVersionOnProductsAvgAggregateOutputType | null
    _sum: OrderVersionOnProductsSumAggregateOutputType | null
    _min: OrderVersionOnProductsMinAggregateOutputType | null
    _max: OrderVersionOnProductsMaxAggregateOutputType | null
  }

  type GetOrderVersionOnProductsGroupByPayload<T extends OrderVersionOnProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderVersionOnProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderVersionOnProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderVersionOnProductsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderVersionOnProductsGroupByOutputType[P]>
        }
      >
    >


  export type OrderVersionOnProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderVersionId?: boolean
    productId?: boolean
    amount?: boolean
    orderVersion?: boolean | OrderVersionDefaultArgs<ExtArgs>
    product?: boolean | ProductVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderVersionOnProducts"]>

  export type OrderVersionOnProductsSelectScalar = {
    orderVersionId?: boolean
    productId?: boolean
    amount?: boolean
  }

  export type OrderVersionOnProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderVersion?: boolean | OrderVersionDefaultArgs<ExtArgs>
    product?: boolean | ProductVersionDefaultArgs<ExtArgs>
  }


  export type $OrderVersionOnProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderVersionOnProducts"
    objects: {
      orderVersion: Prisma.$OrderVersionPayload<ExtArgs>
      product: Prisma.$ProductVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderVersionId: string
      productId: string
      amount: number
    }, ExtArgs["result"]["orderVersionOnProducts"]>
    composites: {}
  }


  type OrderVersionOnProductsGetPayload<S extends boolean | null | undefined | OrderVersionOnProductsDefaultArgs> = $Result.GetResult<Prisma.$OrderVersionOnProductsPayload, S>

  type OrderVersionOnProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderVersionOnProductsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderVersionOnProductsCountAggregateInputType | true
    }

  export interface OrderVersionOnProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderVersionOnProducts'], meta: { name: 'OrderVersionOnProducts' } }
    /**
     * Find zero or one OrderVersionOnProducts that matches the filter.
     * @param {OrderVersionOnProductsFindUniqueArgs} args - Arguments to find a OrderVersionOnProducts
     * @example
     * // Get one OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderVersionOnProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderVersionOnProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderVersionOnProductsFindUniqueOrThrowArgs} args - Arguments to find a OrderVersionOnProducts
     * @example
     * // Get one OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderVersionOnProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderVersionOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsFindFirstArgs} args - Arguments to find a OrderVersionOnProducts
     * @example
     * // Get one OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderVersionOnProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsFindFirstArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderVersionOnProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsFindFirstOrThrowArgs} args - Arguments to find a OrderVersionOnProducts
     * @example
     * // Get one OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderVersionOnProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderVersionOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findMany()
     * 
     * // Get first 10 OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.findMany({ take: 10 })
     * 
     * // Only select the `orderVersionId`
     * const orderVersionOnProductsWithOrderVersionIdOnly = await prisma.orderVersionOnProducts.findMany({ select: { orderVersionId: true } })
     * 
    **/
    findMany<T extends OrderVersionOnProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderVersionOnProducts.
     * @param {OrderVersionOnProductsCreateArgs} args - Arguments to create a OrderVersionOnProducts.
     * @example
     * // Create one OrderVersionOnProducts
     * const OrderVersionOnProducts = await prisma.orderVersionOnProducts.create({
     *   data: {
     *     // ... data to create a OrderVersionOnProducts
     *   }
     * })
     * 
    **/
    create<T extends OrderVersionOnProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsCreateArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderVersionOnProducts.
     *     @param {OrderVersionOnProductsCreateManyArgs} args - Arguments to create many OrderVersionOnProducts.
     *     @example
     *     // Create many OrderVersionOnProducts
     *     const orderVersionOnProducts = await prisma.orderVersionOnProducts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderVersionOnProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderVersionOnProducts.
     * @param {OrderVersionOnProductsDeleteArgs} args - Arguments to delete one OrderVersionOnProducts.
     * @example
     * // Delete one OrderVersionOnProducts
     * const OrderVersionOnProducts = await prisma.orderVersionOnProducts.delete({
     *   where: {
     *     // ... filter to delete one OrderVersionOnProducts
     *   }
     * })
     * 
    **/
    delete<T extends OrderVersionOnProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsDeleteArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderVersionOnProducts.
     * @param {OrderVersionOnProductsUpdateArgs} args - Arguments to update one OrderVersionOnProducts.
     * @example
     * // Update one OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderVersionOnProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsUpdateArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderVersionOnProducts.
     * @param {OrderVersionOnProductsDeleteManyArgs} args - Arguments to filter OrderVersionOnProducts to delete.
     * @example
     * // Delete a few OrderVersionOnProducts
     * const { count } = await prisma.orderVersionOnProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderVersionOnProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderVersionOnProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderVersionOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderVersionOnProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderVersionOnProducts.
     * @param {OrderVersionOnProductsUpsertArgs} args - Arguments to update or create a OrderVersionOnProducts.
     * @example
     * // Update or create a OrderVersionOnProducts
     * const orderVersionOnProducts = await prisma.orderVersionOnProducts.upsert({
     *   create: {
     *     // ... data to create a OrderVersionOnProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderVersionOnProducts we want to update
     *   }
     * })
    **/
    upsert<T extends OrderVersionOnProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderVersionOnProductsUpsertArgs<ExtArgs>>
    ): Prisma__OrderVersionOnProductsClient<$Result.GetResult<Prisma.$OrderVersionOnProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderVersionOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsCountArgs} args - Arguments to filter OrderVersionOnProducts to count.
     * @example
     * // Count the number of OrderVersionOnProducts
     * const count = await prisma.orderVersionOnProducts.count({
     *   where: {
     *     // ... the filter for the OrderVersionOnProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderVersionOnProductsCountArgs>(
      args?: Subset<T, OrderVersionOnProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderVersionOnProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderVersionOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderVersionOnProductsAggregateArgs>(args: Subset<T, OrderVersionOnProductsAggregateArgs>): Prisma.PrismaPromise<GetOrderVersionOnProductsAggregateType<T>>

    /**
     * Group by OrderVersionOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderVersionOnProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderVersionOnProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderVersionOnProductsGroupByArgs['orderBy'] }
        : { orderBy?: OrderVersionOnProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderVersionOnProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderVersionOnProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderVersionOnProducts model
   */
  readonly fields: OrderVersionOnProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderVersionOnProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderVersionOnProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orderVersion<T extends OrderVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderVersionDefaultArgs<ExtArgs>>): Prisma__OrderVersionClient<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVersionDefaultArgs<ExtArgs>>): Prisma__ProductVersionClient<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderVersionOnProducts model
   */ 
  interface OrderVersionOnProductsFieldRefs {
    readonly orderVersionId: FieldRef<"OrderVersionOnProducts", 'String'>
    readonly productId: FieldRef<"OrderVersionOnProducts", 'String'>
    readonly amount: FieldRef<"OrderVersionOnProducts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderVersionOnProducts findUnique
   */
  export type OrderVersionOnProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersionOnProducts to fetch.
     */
    where: OrderVersionOnProductsWhereUniqueInput
  }


  /**
   * OrderVersionOnProducts findUniqueOrThrow
   */
  export type OrderVersionOnProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersionOnProducts to fetch.
     */
    where: OrderVersionOnProductsWhereUniqueInput
  }


  /**
   * OrderVersionOnProducts findFirst
   */
  export type OrderVersionOnProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersionOnProducts to fetch.
     */
    where?: OrderVersionOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersionOnProducts to fetch.
     */
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVersionOnProducts.
     */
    cursor?: OrderVersionOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersionOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersionOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVersionOnProducts.
     */
    distinct?: OrderVersionOnProductsScalarFieldEnum | OrderVersionOnProductsScalarFieldEnum[]
  }


  /**
   * OrderVersionOnProducts findFirstOrThrow
   */
  export type OrderVersionOnProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersionOnProducts to fetch.
     */
    where?: OrderVersionOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersionOnProducts to fetch.
     */
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderVersionOnProducts.
     */
    cursor?: OrderVersionOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersionOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersionOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderVersionOnProducts.
     */
    distinct?: OrderVersionOnProductsScalarFieldEnum | OrderVersionOnProductsScalarFieldEnum[]
  }


  /**
   * OrderVersionOnProducts findMany
   */
  export type OrderVersionOnProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which OrderVersionOnProducts to fetch.
     */
    where?: OrderVersionOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderVersionOnProducts to fetch.
     */
    orderBy?: OrderVersionOnProductsOrderByWithRelationInput | OrderVersionOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderVersionOnProducts.
     */
    cursor?: OrderVersionOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderVersionOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderVersionOnProducts.
     */
    skip?: number
    distinct?: OrderVersionOnProductsScalarFieldEnum | OrderVersionOnProductsScalarFieldEnum[]
  }


  /**
   * OrderVersionOnProducts create
   */
  export type OrderVersionOnProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderVersionOnProducts.
     */
    data: XOR<OrderVersionOnProductsCreateInput, OrderVersionOnProductsUncheckedCreateInput>
  }


  /**
   * OrderVersionOnProducts createMany
   */
  export type OrderVersionOnProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderVersionOnProducts.
     */
    data: OrderVersionOnProductsCreateManyInput | OrderVersionOnProductsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderVersionOnProducts update
   */
  export type OrderVersionOnProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderVersionOnProducts.
     */
    data: XOR<OrderVersionOnProductsUpdateInput, OrderVersionOnProductsUncheckedUpdateInput>
    /**
     * Choose, which OrderVersionOnProducts to update.
     */
    where: OrderVersionOnProductsWhereUniqueInput
  }


  /**
   * OrderVersionOnProducts updateMany
   */
  export type OrderVersionOnProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderVersionOnProducts.
     */
    data: XOR<OrderVersionOnProductsUpdateManyMutationInput, OrderVersionOnProductsUncheckedUpdateManyInput>
    /**
     * Filter which OrderVersionOnProducts to update
     */
    where?: OrderVersionOnProductsWhereInput
  }


  /**
   * OrderVersionOnProducts upsert
   */
  export type OrderVersionOnProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderVersionOnProducts to update in case it exists.
     */
    where: OrderVersionOnProductsWhereUniqueInput
    /**
     * In case the OrderVersionOnProducts found by the `where` argument doesn't exist, create a new OrderVersionOnProducts with this data.
     */
    create: XOR<OrderVersionOnProductsCreateInput, OrderVersionOnProductsUncheckedCreateInput>
    /**
     * In case the OrderVersionOnProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderVersionOnProductsUpdateInput, OrderVersionOnProductsUncheckedUpdateInput>
  }


  /**
   * OrderVersionOnProducts delete
   */
  export type OrderVersionOnProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
    /**
     * Filter which OrderVersionOnProducts to delete.
     */
    where: OrderVersionOnProductsWhereUniqueInput
  }


  /**
   * OrderVersionOnProducts deleteMany
   */
  export type OrderVersionOnProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderVersionOnProducts to delete
     */
    where?: OrderVersionOnProductsWhereInput
  }


  /**
   * OrderVersionOnProducts without action
   */
  export type OrderVersionOnProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersionOnProducts
     */
    select?: OrderVersionOnProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionOnProductsInclude<ExtArgs> | null
  }



  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    firstName: string | null
    secondName: string | null
    thirdName: string | null
    contact: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    firstName: string | null
    secondName: string | null
    thirdName: string | null
    contact: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    firstName: number
    secondName: number
    thirdName: number
    contact: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    firstName?: true
    secondName?: true
    thirdName?: true
    contact?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    firstName?: true
    secondName?: true
    thirdName?: true
    contact?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    firstName?: true
    secondName?: true
    thirdName?: true
    contact?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    firstName: string
    secondName: string
    thirdName: string | null
    contact: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    firstName?: boolean
    secondName?: boolean
    thirdName?: boolean
    contact?: boolean
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    firstName?: boolean
    secondName?: boolean
    thirdName?: boolean
    contact?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      firstName: string
      secondName: string
      thirdName: string | null
      contact: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly projectId: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly secondName: FieldRef<"Customer", 'String'>
    readonly thirdName: FieldRef<"Customer", 'String'>
    readonly contact: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    usersOnProjects?: boolean | Project$usersOnProjectsArgs<ExtArgs>
    Product?: boolean | Project$ProductArgs<ExtArgs>
    Order?: boolean | Project$OrderArgs<ExtArgs>
    Customer?: boolean | Project$CustomerArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersOnProjects?: boolean | Project$usersOnProjectsArgs<ExtArgs>
    Product?: boolean | Project$ProductArgs<ExtArgs>
    Order?: boolean | Project$OrderArgs<ExtArgs>
    Customer?: boolean | Project$CustomerArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      usersOnProjects: Prisma.$UsersOnProjectsPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usersOnProjects<T extends Project$usersOnProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Project$usersOnProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends Project$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Project$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Order<T extends Project$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Project$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    Customer<T extends Project$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, Project$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.usersOnProjects
   */
  export type Project$usersOnProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    where?: UsersOnProjectsWhereInput
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    cursor?: UsersOnProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnProjectsScalarFieldEnum | UsersOnProjectsScalarFieldEnum[]
  }


  /**
   * Project.Product
   */
  export type Project$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Project.Order
   */
  export type Project$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Project.Customer
   */
  export type Project$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
  }



  /**
   * Model UsersOnProjects
   */

  export type AggregateUsersOnProjects = {
    _count: UsersOnProjectsCountAggregateOutputType | null
    _min: UsersOnProjectsMinAggregateOutputType | null
    _max: UsersOnProjectsMaxAggregateOutputType | null
  }

  export type UsersOnProjectsMinAggregateOutputType = {
    userId: string | null
    projectId: string | null
    assignedAt: Date | null
  }

  export type UsersOnProjectsMaxAggregateOutputType = {
    userId: string | null
    projectId: string | null
    assignedAt: Date | null
  }

  export type UsersOnProjectsCountAggregateOutputType = {
    userId: number
    projectId: number
    assignedAt: number
    role: number
    _all: number
  }


  export type UsersOnProjectsMinAggregateInputType = {
    userId?: true
    projectId?: true
    assignedAt?: true
  }

  export type UsersOnProjectsMaxAggregateInputType = {
    userId?: true
    projectId?: true
    assignedAt?: true
  }

  export type UsersOnProjectsCountAggregateInputType = {
    userId?: true
    projectId?: true
    assignedAt?: true
    role?: true
    _all?: true
  }

  export type UsersOnProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnProjects to aggregate.
     */
    where?: UsersOnProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnProjects to fetch.
     */
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersOnProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersOnProjects
    **/
    _count?: true | UsersOnProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersOnProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersOnProjectsMaxAggregateInputType
  }

  export type GetUsersOnProjectsAggregateType<T extends UsersOnProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersOnProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersOnProjects[P]>
      : GetScalarType<T[P], AggregateUsersOnProjects[P]>
  }




  export type UsersOnProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnProjectsWhereInput
    orderBy?: UsersOnProjectsOrderByWithAggregationInput | UsersOnProjectsOrderByWithAggregationInput[]
    by: UsersOnProjectsScalarFieldEnum[] | UsersOnProjectsScalarFieldEnum
    having?: UsersOnProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersOnProjectsCountAggregateInputType | true
    _min?: UsersOnProjectsMinAggregateInputType
    _max?: UsersOnProjectsMaxAggregateInputType
  }

  export type UsersOnProjectsGroupByOutputType = {
    userId: string
    projectId: string
    assignedAt: Date
    role: $Enums.Role[]
    _count: UsersOnProjectsCountAggregateOutputType | null
    _min: UsersOnProjectsMinAggregateOutputType | null
    _max: UsersOnProjectsMaxAggregateOutputType | null
  }

  type GetUsersOnProjectsGroupByPayload<T extends UsersOnProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersOnProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersOnProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersOnProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersOnProjectsGroupByOutputType[P]>
        }
      >
    >


  export type UsersOnProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    assignedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnProjects"]>

  export type UsersOnProjectsSelectScalar = {
    userId?: boolean
    projectId?: boolean
    assignedAt?: boolean
    role?: boolean
  }

  export type UsersOnProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }


  export type $UsersOnProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersOnProjects"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      projectId: string
      assignedAt: Date
      role: $Enums.Role[]
    }, ExtArgs["result"]["usersOnProjects"]>
    composites: {}
  }


  type UsersOnProjectsGetPayload<S extends boolean | null | undefined | UsersOnProjectsDefaultArgs> = $Result.GetResult<Prisma.$UsersOnProjectsPayload, S>

  type UsersOnProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersOnProjectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersOnProjectsCountAggregateInputType | true
    }

  export interface UsersOnProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersOnProjects'], meta: { name: 'UsersOnProjects' } }
    /**
     * Find zero or one UsersOnProjects that matches the filter.
     * @param {UsersOnProjectsFindUniqueArgs} args - Arguments to find a UsersOnProjects
     * @example
     * // Get one UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersOnProjectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UsersOnProjects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersOnProjectsFindUniqueOrThrowArgs} args - Arguments to find a UsersOnProjects
     * @example
     * // Get one UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersOnProjectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UsersOnProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsFindFirstArgs} args - Arguments to find a UsersOnProjects
     * @example
     * // Get one UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersOnProjectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsFindFirstArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UsersOnProjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsFindFirstOrThrowArgs} args - Arguments to find a UsersOnProjects
     * @example
     * // Get one UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersOnProjectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UsersOnProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findMany()
     * 
     * // Get first 10 UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersOnProjectsWithUserIdOnly = await prisma.usersOnProjects.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsersOnProjectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UsersOnProjects.
     * @param {UsersOnProjectsCreateArgs} args - Arguments to create a UsersOnProjects.
     * @example
     * // Create one UsersOnProjects
     * const UsersOnProjects = await prisma.usersOnProjects.create({
     *   data: {
     *     // ... data to create a UsersOnProjects
     *   }
     * })
     * 
    **/
    create<T extends UsersOnProjectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsCreateArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UsersOnProjects.
     *     @param {UsersOnProjectsCreateManyArgs} args - Arguments to create many UsersOnProjects.
     *     @example
     *     // Create many UsersOnProjects
     *     const usersOnProjects = await prisma.usersOnProjects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersOnProjectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersOnProjects.
     * @param {UsersOnProjectsDeleteArgs} args - Arguments to delete one UsersOnProjects.
     * @example
     * // Delete one UsersOnProjects
     * const UsersOnProjects = await prisma.usersOnProjects.delete({
     *   where: {
     *     // ... filter to delete one UsersOnProjects
     *   }
     * })
     * 
    **/
    delete<T extends UsersOnProjectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsDeleteArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UsersOnProjects.
     * @param {UsersOnProjectsUpdateArgs} args - Arguments to update one UsersOnProjects.
     * @example
     * // Update one UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersOnProjectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsUpdateArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UsersOnProjects.
     * @param {UsersOnProjectsDeleteManyArgs} args - Arguments to filter UsersOnProjects to delete.
     * @example
     * // Delete a few UsersOnProjects
     * const { count } = await prisma.usersOnProjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersOnProjectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersOnProjectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersOnProjectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersOnProjects.
     * @param {UsersOnProjectsUpsertArgs} args - Arguments to update or create a UsersOnProjects.
     * @example
     * // Update or create a UsersOnProjects
     * const usersOnProjects = await prisma.usersOnProjects.upsert({
     *   create: {
     *     // ... data to create a UsersOnProjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersOnProjects we want to update
     *   }
     * })
    **/
    upsert<T extends UsersOnProjectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersOnProjectsUpsertArgs<ExtArgs>>
    ): Prisma__UsersOnProjectsClient<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UsersOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsCountArgs} args - Arguments to filter UsersOnProjects to count.
     * @example
     * // Count the number of UsersOnProjects
     * const count = await prisma.usersOnProjects.count({
     *   where: {
     *     // ... the filter for the UsersOnProjects we want to count
     *   }
     * })
    **/
    count<T extends UsersOnProjectsCountArgs>(
      args?: Subset<T, UsersOnProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersOnProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersOnProjectsAggregateArgs>(args: Subset<T, UsersOnProjectsAggregateArgs>): Prisma.PrismaPromise<GetUsersOnProjectsAggregateType<T>>

    /**
     * Group by UsersOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersOnProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersOnProjectsGroupByArgs['orderBy'] }
        : { orderBy?: UsersOnProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersOnProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersOnProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersOnProjects model
   */
  readonly fields: UsersOnProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersOnProjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersOnProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UsersOnProjects model
   */ 
  interface UsersOnProjectsFieldRefs {
    readonly userId: FieldRef<"UsersOnProjects", 'String'>
    readonly projectId: FieldRef<"UsersOnProjects", 'String'>
    readonly assignedAt: FieldRef<"UsersOnProjects", 'DateTime'>
    readonly role: FieldRef<"UsersOnProjects", 'Role[]'>
  }
    

  // Custom InputTypes

  /**
   * UsersOnProjects findUnique
   */
  export type UsersOnProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnProjects to fetch.
     */
    where: UsersOnProjectsWhereUniqueInput
  }


  /**
   * UsersOnProjects findUniqueOrThrow
   */
  export type UsersOnProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnProjects to fetch.
     */
    where: UsersOnProjectsWhereUniqueInput
  }


  /**
   * UsersOnProjects findFirst
   */
  export type UsersOnProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnProjects to fetch.
     */
    where?: UsersOnProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnProjects to fetch.
     */
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnProjects.
     */
    cursor?: UsersOnProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnProjects.
     */
    distinct?: UsersOnProjectsScalarFieldEnum | UsersOnProjectsScalarFieldEnum[]
  }


  /**
   * UsersOnProjects findFirstOrThrow
   */
  export type UsersOnProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnProjects to fetch.
     */
    where?: UsersOnProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnProjects to fetch.
     */
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnProjects.
     */
    cursor?: UsersOnProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnProjects.
     */
    distinct?: UsersOnProjectsScalarFieldEnum | UsersOnProjectsScalarFieldEnum[]
  }


  /**
   * UsersOnProjects findMany
   */
  export type UsersOnProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnProjects to fetch.
     */
    where?: UsersOnProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnProjects to fetch.
     */
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersOnProjects.
     */
    cursor?: UsersOnProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnProjects.
     */
    skip?: number
    distinct?: UsersOnProjectsScalarFieldEnum | UsersOnProjectsScalarFieldEnum[]
  }


  /**
   * UsersOnProjects create
   */
  export type UsersOnProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersOnProjects.
     */
    data: XOR<UsersOnProjectsCreateInput, UsersOnProjectsUncheckedCreateInput>
  }


  /**
   * UsersOnProjects createMany
   */
  export type UsersOnProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersOnProjects.
     */
    data: UsersOnProjectsCreateManyInput | UsersOnProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UsersOnProjects update
   */
  export type UsersOnProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersOnProjects.
     */
    data: XOR<UsersOnProjectsUpdateInput, UsersOnProjectsUncheckedUpdateInput>
    /**
     * Choose, which UsersOnProjects to update.
     */
    where: UsersOnProjectsWhereUniqueInput
  }


  /**
   * UsersOnProjects updateMany
   */
  export type UsersOnProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersOnProjects.
     */
    data: XOR<UsersOnProjectsUpdateManyMutationInput, UsersOnProjectsUncheckedUpdateManyInput>
    /**
     * Filter which UsersOnProjects to update
     */
    where?: UsersOnProjectsWhereInput
  }


  /**
   * UsersOnProjects upsert
   */
  export type UsersOnProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersOnProjects to update in case it exists.
     */
    where: UsersOnProjectsWhereUniqueInput
    /**
     * In case the UsersOnProjects found by the `where` argument doesn't exist, create a new UsersOnProjects with this data.
     */
    create: XOR<UsersOnProjectsCreateInput, UsersOnProjectsUncheckedCreateInput>
    /**
     * In case the UsersOnProjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersOnProjectsUpdateInput, UsersOnProjectsUncheckedUpdateInput>
  }


  /**
   * UsersOnProjects delete
   */
  export type UsersOnProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    /**
     * Filter which UsersOnProjects to delete.
     */
    where: UsersOnProjectsWhereUniqueInput
  }


  /**
   * UsersOnProjects deleteMany
   */
  export type UsersOnProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnProjects to delete
     */
    where?: UsersOnProjectsWhereInput
  }


  /**
   * UsersOnProjects without action
   */
  export type UsersOnProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    yandex_id: string | null
    name: string | null
    surname: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    yandex_id: string | null
    name: string | null
    surname: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    yandex_id: number
    name: number
    surname: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    yandex_id?: true
    name?: true
    surname?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    yandex_id?: true
    name?: true
    surname?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    yandex_id?: true
    name?: true
    surname?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    yandex_id: string
    name: string
    surname: string
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yandex_id?: boolean
    name?: boolean
    surname?: boolean
    avatar?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    productVersions?: boolean | User$productVersionsArgs<ExtArgs>
    orderVersions?: boolean | User$orderVersionsArgs<ExtArgs>
    customers?: boolean | User$customersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    usersOnProjects?: boolean | User$usersOnProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    yandex_id?: boolean
    name?: boolean
    surname?: boolean
    avatar?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    productVersions?: boolean | User$productVersionsArgs<ExtArgs>
    orderVersions?: boolean | User$orderVersionsArgs<ExtArgs>
    customers?: boolean | User$customersArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    usersOnProjects?: boolean | User$usersOnProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      productVersions: Prisma.$ProductVersionPayload<ExtArgs>[]
      orderVersions: Prisma.$OrderVersionPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      usersOnProjects: Prisma.$UsersOnProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yandex_id: string
      name: string
      surname: string
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    productVersions<T extends User$productVersionsArgs<ExtArgs> = {}>(args?: Subset<T, User$productVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    orderVersions<T extends User$orderVersionsArgs<ExtArgs> = {}>(args?: Subset<T, User$orderVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    customers<T extends User$customersArgs<ExtArgs> = {}>(args?: Subset<T, User$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    usersOnProjects<T extends User$usersOnProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$usersOnProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnProjectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly yandex_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.productVersions
   */
  export type User$productVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVersion
     */
    select?: ProductVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVersionInclude<ExtArgs> | null
    where?: ProductVersionWhereInput
    orderBy?: ProductVersionOrderByWithRelationInput | ProductVersionOrderByWithRelationInput[]
    cursor?: ProductVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVersionScalarFieldEnum | ProductVersionScalarFieldEnum[]
  }


  /**
   * User.orderVersions
   */
  export type User$orderVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderVersion
     */
    select?: OrderVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderVersionInclude<ExtArgs> | null
    where?: OrderVersionWhereInput
    orderBy?: OrderVersionOrderByWithRelationInput | OrderVersionOrderByWithRelationInput[]
    cursor?: OrderVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderVersionScalarFieldEnum | OrderVersionScalarFieldEnum[]
  }


  /**
   * User.customers
   */
  export type User$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * User.usersOnProjects
   */
  export type User$usersOnProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnProjects
     */
    select?: UsersOnProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersOnProjectsInclude<ExtArgs> | null
    where?: UsersOnProjectsWhereInput
    orderBy?: UsersOnProjectsOrderByWithRelationInput | UsersOnProjectsOrderByWithRelationInput[]
    cursor?: UsersOnProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnProjectsScalarFieldEnum | UsersOnProjectsScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    productVersionId: 'productVersionId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const ParamValuesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type ParamValuesScalarFieldEnum = (typeof ParamValuesScalarFieldEnum)[keyof typeof ParamValuesScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductCountHistoryScalarFieldEnum: {
    id: 'id',
    value: 'value',
    productId: 'productId'
  };

  export type ProductCountHistoryScalarFieldEnum = (typeof ProductCountHistoryScalarFieldEnum)[keyof typeof ProductCountHistoryScalarFieldEnum]


  export const ProductVersionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    price: 'price'
  };

  export type ProductVersionScalarFieldEnum = (typeof ProductVersionScalarFieldEnum)[keyof typeof ProductVersionScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    projectId: 'projectId',
    customerId: 'customerId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    orderId: 'orderId',
    text: 'text',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const OrderVersionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    orderId: 'orderId',
    createdAt: 'createdAt',
    address: 'address',
    total: 'total',
    status: 'status'
  };

  export type OrderVersionScalarFieldEnum = (typeof OrderVersionScalarFieldEnum)[keyof typeof OrderVersionScalarFieldEnum]


  export const OrderVersionOnProductsScalarFieldEnum: {
    orderVersionId: 'orderVersionId',
    productId: 'productId',
    amount: 'amount'
  };

  export type OrderVersionOnProductsScalarFieldEnum = (typeof OrderVersionOnProductsScalarFieldEnum)[keyof typeof OrderVersionOnProductsScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    firstName: 'firstName',
    secondName: 'secondName',
    thirdName: 'thirdName',
    contact: 'contact'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UsersOnProjectsScalarFieldEnum: {
    userId: 'userId',
    projectId: 'projectId',
    assignedAt: 'assignedAt',
    role: 'role'
  };

  export type UsersOnProjectsScalarFieldEnum = (typeof UsersOnProjectsScalarFieldEnum)[keyof typeof UsersOnProjectsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    yandex_id: 'yandex_id',
    name: 'name',
    surname: 'surname',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    
  /**
   * Deep Input Types
   */


  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    productVersionId?: StringFilter<"Images"> | string
    productVersion?: XOR<ProductVersionRelationFilter, ProductVersionWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    productVersionId?: SortOrder
    productVersion?: ProductVersionOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    productVersionId?: StringFilter<"Images"> | string
    productVersion?: XOR<ProductVersionRelationFilter, ProductVersionWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    productVersionId?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Images"> | string
    url?: StringWithAggregatesFilter<"Images"> | string
    productVersionId?: StringWithAggregatesFilter<"Images"> | string
  }

  export type ParamValuesWhereInput = {
    AND?: ParamValuesWhereInput | ParamValuesWhereInput[]
    OR?: ParamValuesWhereInput[]
    NOT?: ParamValuesWhereInput | ParamValuesWhereInput[]
    id?: StringFilter<"ParamValues"> | string
    name?: StringFilter<"ParamValues"> | string
    value?: StringFilter<"ParamValues"> | string
    productVersions?: ProductVersionListRelationFilter
  }

  export type ParamValuesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    productVersions?: ProductVersionOrderByRelationAggregateInput
  }

  export type ParamValuesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParamValuesWhereInput | ParamValuesWhereInput[]
    OR?: ParamValuesWhereInput[]
    NOT?: ParamValuesWhereInput | ParamValuesWhereInput[]
    name?: StringFilter<"ParamValues"> | string
    value?: StringFilter<"ParamValues"> | string
    productVersions?: ProductVersionListRelationFilter
  }, "id">

  export type ParamValuesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: ParamValuesCountOrderByAggregateInput
    _max?: ParamValuesMaxOrderByAggregateInput
    _min?: ParamValuesMinOrderByAggregateInput
  }

  export type ParamValuesScalarWhereWithAggregatesInput = {
    AND?: ParamValuesScalarWhereWithAggregatesInput | ParamValuesScalarWhereWithAggregatesInput[]
    OR?: ParamValuesScalarWhereWithAggregatesInput[]
    NOT?: ParamValuesScalarWhereWithAggregatesInput | ParamValuesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParamValues"> | string
    name?: StringWithAggregatesFilter<"ParamValues"> | string
    value?: StringWithAggregatesFilter<"ParamValues"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    projectId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    versions?: ProductVersionListRelationFilter
    productCountHistory?: ProductCountHistoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    versions?: ProductVersionOrderByRelationAggregateInput
    productCountHistory?: ProductCountHistoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    projectId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    versions?: ProductVersionListRelationFilter
    productCountHistory?: ProductCountHistoryListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    projectId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductCountHistoryWhereInput = {
    AND?: ProductCountHistoryWhereInput | ProductCountHistoryWhereInput[]
    OR?: ProductCountHistoryWhereInput[]
    NOT?: ProductCountHistoryWhereInput | ProductCountHistoryWhereInput[]
    id?: StringFilter<"ProductCountHistory"> | string
    value?: IntFilter<"ProductCountHistory"> | number
    productId?: StringFilter<"ProductCountHistory"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductCountHistoryOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductCountHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductCountHistoryWhereInput | ProductCountHistoryWhereInput[]
    OR?: ProductCountHistoryWhereInput[]
    NOT?: ProductCountHistoryWhereInput | ProductCountHistoryWhereInput[]
    value?: IntFilter<"ProductCountHistory"> | number
    productId?: StringFilter<"ProductCountHistory"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductCountHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    _count?: ProductCountHistoryCountOrderByAggregateInput
    _avg?: ProductCountHistoryAvgOrderByAggregateInput
    _max?: ProductCountHistoryMaxOrderByAggregateInput
    _min?: ProductCountHistoryMinOrderByAggregateInput
    _sum?: ProductCountHistorySumOrderByAggregateInput
  }

  export type ProductCountHistoryScalarWhereWithAggregatesInput = {
    AND?: ProductCountHistoryScalarWhereWithAggregatesInput | ProductCountHistoryScalarWhereWithAggregatesInput[]
    OR?: ProductCountHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCountHistoryScalarWhereWithAggregatesInput | ProductCountHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCountHistory"> | string
    value?: IntWithAggregatesFilter<"ProductCountHistory"> | number
    productId?: StringWithAggregatesFilter<"ProductCountHistory"> | string
  }

  export type ProductVersionWhereInput = {
    AND?: ProductVersionWhereInput | ProductVersionWhereInput[]
    OR?: ProductVersionWhereInput[]
    NOT?: ProductVersionWhereInput | ProductVersionWhereInput[]
    id?: StringFilter<"ProductVersion"> | string
    userId?: StringFilter<"ProductVersion"> | string
    productId?: StringFilter<"ProductVersion"> | string
    createdAt?: DateTimeFilter<"ProductVersion"> | Date | string
    name?: StringFilter<"ProductVersion"> | string
    description?: StringFilter<"ProductVersion"> | string
    price?: FloatFilter<"ProductVersion"> | number
    images?: ImagesListRelationFilter
    orderVersions?: OrderVersionOnProductsListRelationFilter
    params?: ParamValuesListRelationFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProductVersionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    images?: ImagesOrderByRelationAggregateInput
    orderVersions?: OrderVersionOnProductsOrderByRelationAggregateInput
    params?: ParamValuesOrderByRelationAggregateInput
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProductVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVersionWhereInput | ProductVersionWhereInput[]
    OR?: ProductVersionWhereInput[]
    NOT?: ProductVersionWhereInput | ProductVersionWhereInput[]
    userId?: StringFilter<"ProductVersion"> | string
    productId?: StringFilter<"ProductVersion"> | string
    createdAt?: DateTimeFilter<"ProductVersion"> | Date | string
    name?: StringFilter<"ProductVersion"> | string
    description?: StringFilter<"ProductVersion"> | string
    price?: FloatFilter<"ProductVersion"> | number
    images?: ImagesListRelationFilter
    orderVersions?: OrderVersionOnProductsListRelationFilter
    params?: ParamValuesListRelationFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ProductVersionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    _count?: ProductVersionCountOrderByAggregateInput
    _avg?: ProductVersionAvgOrderByAggregateInput
    _max?: ProductVersionMaxOrderByAggregateInput
    _min?: ProductVersionMinOrderByAggregateInput
    _sum?: ProductVersionSumOrderByAggregateInput
  }

  export type ProductVersionScalarWhereWithAggregatesInput = {
    AND?: ProductVersionScalarWhereWithAggregatesInput | ProductVersionScalarWhereWithAggregatesInput[]
    OR?: ProductVersionScalarWhereWithAggregatesInput[]
    NOT?: ProductVersionScalarWhereWithAggregatesInput | ProductVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVersion"> | string
    userId?: StringWithAggregatesFilter<"ProductVersion"> | string
    productId?: StringWithAggregatesFilter<"ProductVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductVersion"> | Date | string
    name?: StringWithAggregatesFilter<"ProductVersion"> | string
    description?: StringWithAggregatesFilter<"ProductVersion"> | string
    price?: FloatWithAggregatesFilter<"ProductVersion"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    projectId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    orderVersions?: OrderVersionListRelationFilter
    comments?: CommentListRelationFilter
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    customerId?: SortOrder
    orderVersions?: OrderVersionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    createdAt?: DateTimeFilter<"Order"> | Date | string
    projectId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    orderVersions?: OrderVersionListRelationFilter
    comments?: CommentListRelationFilter
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    customerId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    projectId?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringWithAggregatesFilter<"Order"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    orderId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    orderId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    orderId?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type OrderVersionWhereInput = {
    AND?: OrderVersionWhereInput | OrderVersionWhereInput[]
    OR?: OrderVersionWhereInput[]
    NOT?: OrderVersionWhereInput | OrderVersionWhereInput[]
    id?: StringFilter<"OrderVersion"> | string
    userId?: StringFilter<"OrderVersion"> | string
    orderId?: StringFilter<"OrderVersion"> | string
    createdAt?: DateTimeFilter<"OrderVersion"> | Date | string
    address?: StringFilter<"OrderVersion"> | string
    total?: FloatFilter<"OrderVersion"> | number
    status?: EnumOrderStatusFilter<"OrderVersion"> | $Enums.OrderStatus
    products?: OrderVersionOnProductsListRelationFilter
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrderVersionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    total?: SortOrder
    status?: SortOrder
    products?: OrderVersionOnProductsOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderVersionWhereInput | OrderVersionWhereInput[]
    OR?: OrderVersionWhereInput[]
    NOT?: OrderVersionWhereInput | OrderVersionWhereInput[]
    userId?: StringFilter<"OrderVersion"> | string
    orderId?: StringFilter<"OrderVersion"> | string
    createdAt?: DateTimeFilter<"OrderVersion"> | Date | string
    address?: StringFilter<"OrderVersion"> | string
    total?: FloatFilter<"OrderVersion"> | number
    status?: EnumOrderStatusFilter<"OrderVersion"> | $Enums.OrderStatus
    products?: OrderVersionOnProductsListRelationFilter
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type OrderVersionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    total?: SortOrder
    status?: SortOrder
    _count?: OrderVersionCountOrderByAggregateInput
    _avg?: OrderVersionAvgOrderByAggregateInput
    _max?: OrderVersionMaxOrderByAggregateInput
    _min?: OrderVersionMinOrderByAggregateInput
    _sum?: OrderVersionSumOrderByAggregateInput
  }

  export type OrderVersionScalarWhereWithAggregatesInput = {
    AND?: OrderVersionScalarWhereWithAggregatesInput | OrderVersionScalarWhereWithAggregatesInput[]
    OR?: OrderVersionScalarWhereWithAggregatesInput[]
    NOT?: OrderVersionScalarWhereWithAggregatesInput | OrderVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderVersion"> | string
    userId?: StringWithAggregatesFilter<"OrderVersion"> | string
    orderId?: StringWithAggregatesFilter<"OrderVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderVersion"> | Date | string
    address?: StringWithAggregatesFilter<"OrderVersion"> | string
    total?: FloatWithAggregatesFilter<"OrderVersion"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"OrderVersion"> | $Enums.OrderStatus
  }

  export type OrderVersionOnProductsWhereInput = {
    AND?: OrderVersionOnProductsWhereInput | OrderVersionOnProductsWhereInput[]
    OR?: OrderVersionOnProductsWhereInput[]
    NOT?: OrderVersionOnProductsWhereInput | OrderVersionOnProductsWhereInput[]
    orderVersionId?: StringFilter<"OrderVersionOnProducts"> | string
    productId?: StringFilter<"OrderVersionOnProducts"> | string
    amount?: IntFilter<"OrderVersionOnProducts"> | number
    orderVersion?: XOR<OrderVersionRelationFilter, OrderVersionWhereInput>
    product?: XOR<ProductVersionRelationFilter, ProductVersionWhereInput>
  }

  export type OrderVersionOnProductsOrderByWithRelationInput = {
    orderVersionId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    orderVersion?: OrderVersionOrderByWithRelationInput
    product?: ProductVersionOrderByWithRelationInput
  }

  export type OrderVersionOnProductsWhereUniqueInput = Prisma.AtLeast<{
    orderVersionId_productId?: OrderVersionOnProductsOrderVersionIdProductIdCompoundUniqueInput
    AND?: OrderVersionOnProductsWhereInput | OrderVersionOnProductsWhereInput[]
    OR?: OrderVersionOnProductsWhereInput[]
    NOT?: OrderVersionOnProductsWhereInput | OrderVersionOnProductsWhereInput[]
    orderVersionId?: StringFilter<"OrderVersionOnProducts"> | string
    productId?: StringFilter<"OrderVersionOnProducts"> | string
    amount?: IntFilter<"OrderVersionOnProducts"> | number
    orderVersion?: XOR<OrderVersionRelationFilter, OrderVersionWhereInput>
    product?: XOR<ProductVersionRelationFilter, ProductVersionWhereInput>
  }, "orderVersionId_productId">

  export type OrderVersionOnProductsOrderByWithAggregationInput = {
    orderVersionId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    _count?: OrderVersionOnProductsCountOrderByAggregateInput
    _avg?: OrderVersionOnProductsAvgOrderByAggregateInput
    _max?: OrderVersionOnProductsMaxOrderByAggregateInput
    _min?: OrderVersionOnProductsMinOrderByAggregateInput
    _sum?: OrderVersionOnProductsSumOrderByAggregateInput
  }

  export type OrderVersionOnProductsScalarWhereWithAggregatesInput = {
    AND?: OrderVersionOnProductsScalarWhereWithAggregatesInput | OrderVersionOnProductsScalarWhereWithAggregatesInput[]
    OR?: OrderVersionOnProductsScalarWhereWithAggregatesInput[]
    NOT?: OrderVersionOnProductsScalarWhereWithAggregatesInput | OrderVersionOnProductsScalarWhereWithAggregatesInput[]
    orderVersionId?: StringWithAggregatesFilter<"OrderVersionOnProducts"> | string
    productId?: StringWithAggregatesFilter<"OrderVersionOnProducts"> | string
    amount?: IntWithAggregatesFilter<"OrderVersionOnProducts"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    projectId?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    secondName?: StringFilter<"Customer"> | string
    thirdName?: StringNullableFilter<"Customer"> | string | null
    contact?: StringFilter<"Customer"> | string
    orders?: OrderListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    thirdName?: SortOrderInput | SortOrder
    contact?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    projectId?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    secondName?: StringFilter<"Customer"> | string
    thirdName?: StringNullableFilter<"Customer"> | string | null
    contact?: StringFilter<"Customer"> | string
    orders?: OrderListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    thirdName?: SortOrderInput | SortOrder
    contact?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    projectId?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    secondName?: StringWithAggregatesFilter<"Customer"> | string
    thirdName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contact?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    usersOnProjects?: UsersOnProjectsListRelationFilter
    Product?: ProductListRelationFilter
    Order?: OrderListRelationFilter
    Customer?: CustomerListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    usersOnProjects?: UsersOnProjectsOrderByRelationAggregateInput
    Product?: ProductOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    Customer?: CustomerOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    usersOnProjects?: UsersOnProjectsListRelationFilter
    Product?: ProductListRelationFilter
    Order?: OrderListRelationFilter
    Customer?: CustomerListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UsersOnProjectsWhereInput = {
    AND?: UsersOnProjectsWhereInput | UsersOnProjectsWhereInput[]
    OR?: UsersOnProjectsWhereInput[]
    NOT?: UsersOnProjectsWhereInput | UsersOnProjectsWhereInput[]
    userId?: StringFilter<"UsersOnProjects"> | string
    projectId?: StringFilter<"UsersOnProjects"> | string
    assignedAt?: DateTimeFilter<"UsersOnProjects"> | Date | string
    role?: EnumRoleNullableListFilter<"UsersOnProjects">
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type UsersOnProjectsOrderByWithRelationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type UsersOnProjectsWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: UsersOnProjectsUserIdProjectIdCompoundUniqueInput
    AND?: UsersOnProjectsWhereInput | UsersOnProjectsWhereInput[]
    OR?: UsersOnProjectsWhereInput[]
    NOT?: UsersOnProjectsWhereInput | UsersOnProjectsWhereInput[]
    userId?: StringFilter<"UsersOnProjects"> | string
    projectId?: StringFilter<"UsersOnProjects"> | string
    assignedAt?: DateTimeFilter<"UsersOnProjects"> | Date | string
    role?: EnumRoleNullableListFilter<"UsersOnProjects">
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type UsersOnProjectsOrderByWithAggregationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    _count?: UsersOnProjectsCountOrderByAggregateInput
    _max?: UsersOnProjectsMaxOrderByAggregateInput
    _min?: UsersOnProjectsMinOrderByAggregateInput
  }

  export type UsersOnProjectsScalarWhereWithAggregatesInput = {
    AND?: UsersOnProjectsScalarWhereWithAggregatesInput | UsersOnProjectsScalarWhereWithAggregatesInput[]
    OR?: UsersOnProjectsScalarWhereWithAggregatesInput[]
    NOT?: UsersOnProjectsScalarWhereWithAggregatesInput | UsersOnProjectsScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UsersOnProjects"> | string
    projectId?: StringWithAggregatesFilter<"UsersOnProjects"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UsersOnProjects"> | Date | string
    role?: EnumRoleNullableListFilter<"UsersOnProjects">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    yandex_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    productVersions?: ProductVersionListRelationFilter
    orderVersions?: OrderVersionListRelationFilter
    customers?: CustomerListRelationFilter
    comments?: CommentListRelationFilter
    usersOnProjects?: UsersOnProjectsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    yandex_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    avatar?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    productVersions?: ProductVersionOrderByRelationAggregateInput
    orderVersions?: OrderVersionOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    usersOnProjects?: UsersOnProjectsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    yandex_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    productVersions?: ProductVersionListRelationFilter
    orderVersions?: OrderVersionListRelationFilter
    customers?: CustomerListRelationFilter
    comments?: CommentListRelationFilter
    usersOnProjects?: UsersOnProjectsListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    yandex_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    yandex_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ImagesCreateInput = {
    id?: string
    url: string
    productVersion: ProductVersionCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: string
    url: string
    productVersionId: string
  }

  export type ImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productVersion?: ProductVersionUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productVersionId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyInput = {
    id?: string
    url: string
    productVersionId: string
  }

  export type ImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    productVersionId?: StringFieldUpdateOperationsInput | string
  }

  export type ParamValuesCreateInput = {
    id?: string
    name: string
    value: string
    productVersions?: ProductVersionCreateNestedManyWithoutParamsInput
  }

  export type ParamValuesUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutParamsInput
  }

  export type ParamValuesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productVersions?: ProductVersionUpdateManyWithoutParamsNestedInput
  }

  export type ParamValuesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productVersions?: ProductVersionUncheckedUpdateManyWithoutParamsNestedInput
  }

  export type ParamValuesCreateManyInput = {
    id?: string
    name: string
    value: string
  }

  export type ParamValuesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ParamValuesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProductInput
    versions?: ProductVersionCreateNestedManyWithoutProductInput
    productCountHistory?: ProductCountHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    versions?: ProductVersionUncheckedCreateNestedManyWithoutProductInput
    productCountHistory?: ProductCountHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProductNestedInput
    versions?: ProductVersionUpdateManyWithoutProductNestedInput
    productCountHistory?: ProductCountHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ProductVersionUncheckedUpdateManyWithoutProductNestedInput
    productCountHistory?: ProductCountHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCountHistoryCreateInput = {
    id?: string
    value: number
    product: ProductCreateNestedOneWithoutProductCountHistoryInput
  }

  export type ProductCountHistoryUncheckedCreateInput = {
    id?: string
    value: number
    productId: string
  }

  export type ProductCountHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProductCountHistoryNestedInput
  }

  export type ProductCountHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCountHistoryCreateManyInput = {
    id?: string
    value: number
    productId: string
  }

  export type ProductCountHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCountHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVersionCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsCreateNestedManyWithoutProductInput
    params?: ParamValuesCreateNestedManyWithoutProductVersionsInput
    product: ProductCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutProductVersionsInput
  }

  export type ProductVersionUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesUncheckedCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput
    params?: ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput
  }

  export type ProductVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUpdateManyWithoutProductNestedInput
    params?: ParamValuesUpdateManyWithoutProductVersionsNestedInput
    product?: ProductUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUncheckedUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput
    params?: ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput
  }

  export type ProductVersionCreateManyInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
  }

  export type ProductVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    createdAt?: Date | string
    orderVersions?: OrderVersionCreateNestedManyWithoutOrderInput
    comments?: CommentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    project: ProjectCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
    customerId: string
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderVersions?: OrderVersionUpdateManyWithoutOrderNestedInput
    comments?: CommentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    project?: ProjectUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
    customerId: string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    text: string
    user: UserCreateNestedOneWithoutCommentsInput
    order: OrderCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    text: string
    userId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    order?: OrderUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    text: string
    userId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderVersionCreateInput = {
    id?: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsCreateNestedManyWithoutOrderVersionInput
    order: OrderCreateNestedOneWithoutOrderVersionsInput
    user: UserCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionUncheckedCreateInput = {
    id?: string
    userId: string
    orderId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutOrderVersionInput
  }

  export type OrderVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUpdateManyWithoutOrderVersionNestedInput
    order?: OrderUpdateOneRequiredWithoutOrderVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionNestedInput
  }

  export type OrderVersionCreateManyInput = {
    id?: string
    userId: string
    orderId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
  }

  export type OrderVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type OrderVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type OrderVersionOnProductsCreateInput = {
    amount: number
    orderVersion: OrderVersionCreateNestedOneWithoutProductsInput
    product: ProductVersionCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionOnProductsUncheckedCreateInput = {
    orderVersionId: string
    productId: string
    amount: number
  }

  export type OrderVersionOnProductsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    orderVersion?: OrderVersionUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductVersionUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionOnProductsUncheckedUpdateInput = {
    orderVersionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderVersionOnProductsCreateManyInput = {
    orderVersionId: string
    productId: string
    amount: number
  }

  export type OrderVersionOnProductsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderVersionOnProductsUncheckedUpdateManyInput = {
    orderVersionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
    project: ProjectCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    project?: ProjectUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutProjectInput
    Product?: ProductCreateNestedManyWithoutProjectInput
    Order?: OrderCreateNestedManyWithoutProjectInput
    Customer?: CustomerCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutProjectInput
    Product?: ProductUncheckedCreateNestedManyWithoutProjectInput
    Order?: OrderUncheckedCreateNestedManyWithoutProjectInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutProjectNestedInput
    Product?: ProductUpdateManyWithoutProjectNestedInput
    Order?: OrderUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutProjectNestedInput
    Product?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    Order?: OrderUncheckedUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersOnProjectsCreateInput = {
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
    user: UserCreateNestedOneWithoutUsersOnProjectsInput
    project: ProjectCreateNestedOneWithoutUsersOnProjectsInput
  }

  export type UsersOnProjectsUncheckedCreateInput = {
    userId: string
    projectId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
    user?: UserUpdateOneRequiredWithoutUsersOnProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutUsersOnProjectsNestedInput
  }

  export type UsersOnProjectsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsCreateManyInput = {
    userId: string
    projectId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type UserCreateInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductVersionRelationFilter = {
    is?: ProductVersionWhereInput
    isNot?: ProductVersionWhereInput
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productVersionId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productVersionId?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productVersionId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProductVersionListRelationFilter = {
    every?: ProductVersionWhereInput
    some?: ProductVersionWhereInput
    none?: ProductVersionWhereInput
  }

  export type ProductVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParamValuesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type ParamValuesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type ParamValuesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProductCountHistoryListRelationFilter = {
    every?: ProductCountHistoryWhereInput
    some?: ProductCountHistoryWhereInput
    none?: ProductCountHistoryWhereInput
  }

  export type ProductCountHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductCountHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
  }

  export type ProductCountHistoryAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ProductCountHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
  }

  export type ProductCountHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
  }

  export type ProductCountHistorySumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type OrderVersionOnProductsListRelationFilter = {
    every?: OrderVersionOnProductsWhereInput
    some?: OrderVersionOnProductsWhereInput
    none?: OrderVersionOnProductsWhereInput
  }

  export type ParamValuesListRelationFilter = {
    every?: ParamValuesWhereInput
    some?: ParamValuesWhereInput
    none?: ParamValuesWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderVersionOnProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParamValuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVersionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductVersionAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductVersionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductVersionSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrderVersionListRelationFilter = {
    every?: OrderVersionWhereInput
    some?: OrderVersionWhereInput
    none?: OrderVersionWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type OrderVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    text?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    text?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    text?: SortOrder
    userId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderVersionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type OrderVersionAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type OrderVersionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type OrderVersionSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderVersionRelationFilter = {
    is?: OrderVersionWhereInput
    isNot?: OrderVersionWhereInput
  }

  export type OrderVersionOnProductsOrderVersionIdProductIdCompoundUniqueInput = {
    orderVersionId: string
    productId: string
  }

  export type OrderVersionOnProductsCountOrderByAggregateInput = {
    orderVersionId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
  }

  export type OrderVersionOnProductsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderVersionOnProductsMaxOrderByAggregateInput = {
    orderVersionId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
  }

  export type OrderVersionOnProductsMinOrderByAggregateInput = {
    orderVersionId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
  }

  export type OrderVersionOnProductsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    thirdName?: SortOrder
    contact?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    thirdName?: SortOrder
    contact?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    thirdName?: SortOrder
    contact?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersOnProjectsListRelationFilter = {
    every?: UsersOnProjectsWhereInput
    some?: UsersOnProjectsWhereInput
    none?: UsersOnProjectsWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type UsersOnProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersOnProjectsUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type UsersOnProjectsCountOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
  }

  export type UsersOnProjectsMaxOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UsersOnProjectsMinOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    assignedAt?: SortOrder
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    yandex_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    yandex_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    yandex_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    avatar?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type ProductVersionCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductVersionCreateWithoutImagesInput, ProductVersionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVersionCreateOrConnectWithoutImagesInput
    connect?: ProductVersionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductVersionUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductVersionCreateWithoutImagesInput, ProductVersionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductVersionCreateOrConnectWithoutImagesInput
    upsert?: ProductVersionUpsertWithoutImagesInput
    connect?: ProductVersionWhereUniqueInput
    update?: XOR<XOR<ProductVersionUpdateToOneWithWhereWithoutImagesInput, ProductVersionUpdateWithoutImagesInput>, ProductVersionUncheckedUpdateWithoutImagesInput>
  }

  export type ProductVersionCreateNestedManyWithoutParamsInput = {
    create?: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput> | ProductVersionCreateWithoutParamsInput[] | ProductVersionUncheckedCreateWithoutParamsInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutParamsInput | ProductVersionCreateOrConnectWithoutParamsInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type ProductVersionUncheckedCreateNestedManyWithoutParamsInput = {
    create?: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput> | ProductVersionCreateWithoutParamsInput[] | ProductVersionUncheckedCreateWithoutParamsInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutParamsInput | ProductVersionCreateOrConnectWithoutParamsInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type ProductVersionUpdateManyWithoutParamsNestedInput = {
    create?: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput> | ProductVersionCreateWithoutParamsInput[] | ProductVersionUncheckedCreateWithoutParamsInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutParamsInput | ProductVersionCreateOrConnectWithoutParamsInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutParamsInput | ProductVersionUpsertWithWhereUniqueWithoutParamsInput[]
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutParamsInput | ProductVersionUpdateWithWhereUniqueWithoutParamsInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutParamsInput | ProductVersionUpdateManyWithWhereWithoutParamsInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type ProductVersionUncheckedUpdateManyWithoutParamsNestedInput = {
    create?: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput> | ProductVersionCreateWithoutParamsInput[] | ProductVersionUncheckedCreateWithoutParamsInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutParamsInput | ProductVersionCreateOrConnectWithoutParamsInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutParamsInput | ProductVersionUpsertWithWhereUniqueWithoutParamsInput[]
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutParamsInput | ProductVersionUpdateWithWhereUniqueWithoutParamsInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutParamsInput | ProductVersionUpdateManyWithWhereWithoutParamsInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProductInput = {
    create?: XOR<ProjectCreateWithoutProductInput, ProjectUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProductInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProductVersionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput> | ProductVersionCreateWithoutProductInput[] | ProductVersionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutProductInput | ProductVersionCreateOrConnectWithoutProductInput[]
    createMany?: ProductVersionCreateManyProductInputEnvelope
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type ProductCountHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput> | ProductCountHistoryCreateWithoutProductInput[] | ProductCountHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCountHistoryCreateOrConnectWithoutProductInput | ProductCountHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCountHistoryCreateManyProductInputEnvelope
    connect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
  }

  export type ProductVersionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput> | ProductVersionCreateWithoutProductInput[] | ProductVersionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutProductInput | ProductVersionCreateOrConnectWithoutProductInput[]
    createMany?: ProductVersionCreateManyProductInputEnvelope
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type ProductCountHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput> | ProductCountHistoryCreateWithoutProductInput[] | ProductCountHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCountHistoryCreateOrConnectWithoutProductInput | ProductCountHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCountHistoryCreateManyProductInputEnvelope
    connect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProjectCreateWithoutProductInput, ProjectUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProductInput
    upsert?: ProjectUpsertWithoutProductInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProductInput, ProjectUpdateWithoutProductInput>, ProjectUncheckedUpdateWithoutProductInput>
  }

  export type ProductVersionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput> | ProductVersionCreateWithoutProductInput[] | ProductVersionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutProductInput | ProductVersionCreateOrConnectWithoutProductInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutProductInput | ProductVersionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVersionCreateManyProductInputEnvelope
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutProductInput | ProductVersionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutProductInput | ProductVersionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type ProductCountHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput> | ProductCountHistoryCreateWithoutProductInput[] | ProductCountHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCountHistoryCreateOrConnectWithoutProductInput | ProductCountHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCountHistoryUpsertWithWhereUniqueWithoutProductInput | ProductCountHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCountHistoryCreateManyProductInputEnvelope
    set?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    disconnect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    delete?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    connect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    update?: ProductCountHistoryUpdateWithWhereUniqueWithoutProductInput | ProductCountHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCountHistoryUpdateManyWithWhereWithoutProductInput | ProductCountHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCountHistoryScalarWhereInput | ProductCountHistoryScalarWhereInput[]
  }

  export type ProductVersionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput> | ProductVersionCreateWithoutProductInput[] | ProductVersionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutProductInput | ProductVersionCreateOrConnectWithoutProductInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutProductInput | ProductVersionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVersionCreateManyProductInputEnvelope
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutProductInput | ProductVersionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutProductInput | ProductVersionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type ProductCountHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput> | ProductCountHistoryCreateWithoutProductInput[] | ProductCountHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCountHistoryCreateOrConnectWithoutProductInput | ProductCountHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCountHistoryUpsertWithWhereUniqueWithoutProductInput | ProductCountHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCountHistoryCreateManyProductInputEnvelope
    set?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    disconnect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    delete?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    connect?: ProductCountHistoryWhereUniqueInput | ProductCountHistoryWhereUniqueInput[]
    update?: ProductCountHistoryUpdateWithWhereUniqueWithoutProductInput | ProductCountHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCountHistoryUpdateManyWithWhereWithoutProductInput | ProductCountHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCountHistoryScalarWhereInput | ProductCountHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductCountHistoryInput = {
    create?: XOR<ProductCreateWithoutProductCountHistoryInput, ProductUncheckedCreateWithoutProductCountHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCountHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutProductCountHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductCountHistoryInput, ProductUncheckedCreateWithoutProductCountHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCountHistoryInput
    upsert?: ProductUpsertWithoutProductCountHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductCountHistoryInput, ProductUpdateWithoutProductCountHistoryInput>, ProductUncheckedUpdateWithoutProductCountHistoryInput>
  }

  export type ImagesCreateNestedManyWithoutProductVersionInput = {
    create?: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput> | ImagesCreateWithoutProductVersionInput[] | ImagesUncheckedCreateWithoutProductVersionInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductVersionInput | ImagesCreateOrConnectWithoutProductVersionInput[]
    createMany?: ImagesCreateManyProductVersionInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type OrderVersionOnProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput> | OrderVersionOnProductsCreateWithoutProductInput[] | OrderVersionOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutProductInput | OrderVersionOnProductsCreateOrConnectWithoutProductInput[]
    createMany?: OrderVersionOnProductsCreateManyProductInputEnvelope
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
  }

  export type ParamValuesCreateNestedManyWithoutProductVersionsInput = {
    create?: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput> | ParamValuesCreateWithoutProductVersionsInput[] | ParamValuesUncheckedCreateWithoutProductVersionsInput[]
    connectOrCreate?: ParamValuesCreateOrConnectWithoutProductVersionsInput | ParamValuesCreateOrConnectWithoutProductVersionsInput[]
    connect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ProductCreateWithoutVersionsInput, ProductUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVersionsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductVersionsInput = {
    create?: XOR<UserCreateWithoutProductVersionsInput, UserUncheckedCreateWithoutProductVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type ImagesUncheckedCreateNestedManyWithoutProductVersionInput = {
    create?: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput> | ImagesCreateWithoutProductVersionInput[] | ImagesUncheckedCreateWithoutProductVersionInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductVersionInput | ImagesCreateOrConnectWithoutProductVersionInput[]
    createMany?: ImagesCreateManyProductVersionInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput> | OrderVersionOnProductsCreateWithoutProductInput[] | OrderVersionOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutProductInput | OrderVersionOnProductsCreateOrConnectWithoutProductInput[]
    createMany?: OrderVersionOnProductsCreateManyProductInputEnvelope
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
  }

  export type ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput = {
    create?: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput> | ParamValuesCreateWithoutProductVersionsInput[] | ParamValuesUncheckedCreateWithoutProductVersionsInput[]
    connectOrCreate?: ParamValuesCreateOrConnectWithoutProductVersionsInput | ParamValuesCreateOrConnectWithoutProductVersionsInput[]
    connect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImagesUpdateManyWithoutProductVersionNestedInput = {
    create?: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput> | ImagesCreateWithoutProductVersionInput[] | ImagesUncheckedCreateWithoutProductVersionInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductVersionInput | ImagesCreateOrConnectWithoutProductVersionInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutProductVersionInput | ImagesUpsertWithWhereUniqueWithoutProductVersionInput[]
    createMany?: ImagesCreateManyProductVersionInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutProductVersionInput | ImagesUpdateWithWhereUniqueWithoutProductVersionInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutProductVersionInput | ImagesUpdateManyWithWhereWithoutProductVersionInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type OrderVersionOnProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput> | OrderVersionOnProductsCreateWithoutProductInput[] | OrderVersionOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutProductInput | OrderVersionOnProductsCreateOrConnectWithoutProductInput[]
    upsert?: OrderVersionOnProductsUpsertWithWhereUniqueWithoutProductInput | OrderVersionOnProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderVersionOnProductsCreateManyProductInputEnvelope
    set?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    disconnect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    delete?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    update?: OrderVersionOnProductsUpdateWithWhereUniqueWithoutProductInput | OrderVersionOnProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderVersionOnProductsUpdateManyWithWhereWithoutProductInput | OrderVersionOnProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
  }

  export type ParamValuesUpdateManyWithoutProductVersionsNestedInput = {
    create?: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput> | ParamValuesCreateWithoutProductVersionsInput[] | ParamValuesUncheckedCreateWithoutProductVersionsInput[]
    connectOrCreate?: ParamValuesCreateOrConnectWithoutProductVersionsInput | ParamValuesCreateOrConnectWithoutProductVersionsInput[]
    upsert?: ParamValuesUpsertWithWhereUniqueWithoutProductVersionsInput | ParamValuesUpsertWithWhereUniqueWithoutProductVersionsInput[]
    set?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    disconnect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    delete?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    connect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    update?: ParamValuesUpdateWithWhereUniqueWithoutProductVersionsInput | ParamValuesUpdateWithWhereUniqueWithoutProductVersionsInput[]
    updateMany?: ParamValuesUpdateManyWithWhereWithoutProductVersionsInput | ParamValuesUpdateManyWithWhereWithoutProductVersionsInput[]
    deleteMany?: ParamValuesScalarWhereInput | ParamValuesScalarWhereInput[]
  }

  export type ProductUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ProductCreateWithoutVersionsInput, ProductUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVersionsInput
    upsert?: ProductUpsertWithoutVersionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVersionsInput, ProductUpdateWithoutVersionsInput>, ProductUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutProductVersionsNestedInput = {
    create?: XOR<UserCreateWithoutProductVersionsInput, UserUncheckedCreateWithoutProductVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductVersionsInput
    upsert?: UserUpsertWithoutProductVersionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductVersionsInput, UserUpdateWithoutProductVersionsInput>, UserUncheckedUpdateWithoutProductVersionsInput>
  }

  export type ImagesUncheckedUpdateManyWithoutProductVersionNestedInput = {
    create?: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput> | ImagesCreateWithoutProductVersionInput[] | ImagesUncheckedCreateWithoutProductVersionInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutProductVersionInput | ImagesCreateOrConnectWithoutProductVersionInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutProductVersionInput | ImagesUpsertWithWhereUniqueWithoutProductVersionInput[]
    createMany?: ImagesCreateManyProductVersionInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutProductVersionInput | ImagesUpdateWithWhereUniqueWithoutProductVersionInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutProductVersionInput | ImagesUpdateManyWithWhereWithoutProductVersionInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput> | OrderVersionOnProductsCreateWithoutProductInput[] | OrderVersionOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutProductInput | OrderVersionOnProductsCreateOrConnectWithoutProductInput[]
    upsert?: OrderVersionOnProductsUpsertWithWhereUniqueWithoutProductInput | OrderVersionOnProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderVersionOnProductsCreateManyProductInputEnvelope
    set?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    disconnect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    delete?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    update?: OrderVersionOnProductsUpdateWithWhereUniqueWithoutProductInput | OrderVersionOnProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderVersionOnProductsUpdateManyWithWhereWithoutProductInput | OrderVersionOnProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
  }

  export type ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput = {
    create?: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput> | ParamValuesCreateWithoutProductVersionsInput[] | ParamValuesUncheckedCreateWithoutProductVersionsInput[]
    connectOrCreate?: ParamValuesCreateOrConnectWithoutProductVersionsInput | ParamValuesCreateOrConnectWithoutProductVersionsInput[]
    upsert?: ParamValuesUpsertWithWhereUniqueWithoutProductVersionsInput | ParamValuesUpsertWithWhereUniqueWithoutProductVersionsInput[]
    set?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    disconnect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    delete?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    connect?: ParamValuesWhereUniqueInput | ParamValuesWhereUniqueInput[]
    update?: ParamValuesUpdateWithWhereUniqueWithoutProductVersionsInput | ParamValuesUpdateWithWhereUniqueWithoutProductVersionsInput[]
    updateMany?: ParamValuesUpdateManyWithWhereWithoutProductVersionsInput | ParamValuesUpdateManyWithWhereWithoutProductVersionsInput[]
    deleteMany?: ParamValuesScalarWhereInput | ParamValuesScalarWhereInput[]
  }

  export type OrderVersionCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput> | OrderVersionCreateWithoutOrderInput[] | OrderVersionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutOrderInput | OrderVersionCreateOrConnectWithoutOrderInput[]
    createMany?: OrderVersionCreateManyOrderInputEnvelope
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutOrderInput = {
    create?: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput> | CommentCreateWithoutOrderInput[] | CommentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOrderInput | CommentCreateOrConnectWithoutOrderInput[]
    createMany?: CommentCreateManyOrderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutOrderInput = {
    create?: XOR<ProjectCreateWithoutOrderInput, ProjectUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutOrderInput
    connect?: ProjectWhereUniqueInput
  }

  export type OrderVersionUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput> | OrderVersionCreateWithoutOrderInput[] | OrderVersionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutOrderInput | OrderVersionCreateOrConnectWithoutOrderInput[]
    createMany?: OrderVersionCreateManyOrderInputEnvelope
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput> | CommentCreateWithoutOrderInput[] | CommentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOrderInput | CommentCreateOrConnectWithoutOrderInput[]
    createMany?: CommentCreateManyOrderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrderVersionUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput> | OrderVersionCreateWithoutOrderInput[] | OrderVersionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutOrderInput | OrderVersionCreateOrConnectWithoutOrderInput[]
    upsert?: OrderVersionUpsertWithWhereUniqueWithoutOrderInput | OrderVersionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderVersionCreateManyOrderInputEnvelope
    set?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    disconnect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    delete?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    update?: OrderVersionUpdateWithWhereUniqueWithoutOrderInput | OrderVersionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderVersionUpdateManyWithWhereWithoutOrderInput | OrderVersionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput> | CommentCreateWithoutOrderInput[] | CommentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOrderInput | CommentCreateOrConnectWithoutOrderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutOrderInput | CommentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CommentCreateManyOrderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutOrderInput | CommentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutOrderInput | CommentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type ProjectUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ProjectCreateWithoutOrderInput, ProjectUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutOrderInput
    upsert?: ProjectUpsertWithoutOrderInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutOrderInput, ProjectUpdateWithoutOrderInput>, ProjectUncheckedUpdateWithoutOrderInput>
  }

  export type OrderVersionUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput> | OrderVersionCreateWithoutOrderInput[] | OrderVersionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutOrderInput | OrderVersionCreateOrConnectWithoutOrderInput[]
    upsert?: OrderVersionUpsertWithWhereUniqueWithoutOrderInput | OrderVersionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderVersionCreateManyOrderInputEnvelope
    set?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    disconnect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    delete?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    update?: OrderVersionUpdateWithWhereUniqueWithoutOrderInput | OrderVersionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderVersionUpdateManyWithWhereWithoutOrderInput | OrderVersionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput> | CommentCreateWithoutOrderInput[] | CommentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOrderInput | CommentCreateOrConnectWithoutOrderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutOrderInput | CommentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CommentCreateManyOrderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutOrderInput | CommentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutOrderInput | CommentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutCommentsInput = {
    create?: XOR<OrderCreateWithoutCommentsInput, OrderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCommentsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type OrderUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<OrderCreateWithoutCommentsInput, OrderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCommentsInput
    upsert?: OrderUpsertWithoutCommentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutCommentsInput, OrderUpdateWithoutCommentsInput>, OrderUncheckedUpdateWithoutCommentsInput>
  }

  export type OrderVersionOnProductsCreateNestedManyWithoutOrderVersionInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput> | OrderVersionOnProductsCreateWithoutOrderVersionInput[] | OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput | OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput[]
    createMany?: OrderVersionOnProductsCreateManyOrderVersionInputEnvelope
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutOrderVersionsInput = {
    create?: XOR<OrderCreateWithoutOrderVersionsInput, OrderUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderVersionsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderVersionsInput = {
    create?: XOR<UserCreateWithoutOrderVersionsInput, UserUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderVersionOnProductsUncheckedCreateNestedManyWithoutOrderVersionInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput> | OrderVersionOnProductsCreateWithoutOrderVersionInput[] | OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput | OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput[]
    createMany?: OrderVersionOnProductsCreateManyOrderVersionInputEnvelope
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type OrderVersionOnProductsUpdateManyWithoutOrderVersionNestedInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput> | OrderVersionOnProductsCreateWithoutOrderVersionInput[] | OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput | OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput[]
    upsert?: OrderVersionOnProductsUpsertWithWhereUniqueWithoutOrderVersionInput | OrderVersionOnProductsUpsertWithWhereUniqueWithoutOrderVersionInput[]
    createMany?: OrderVersionOnProductsCreateManyOrderVersionInputEnvelope
    set?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    disconnect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    delete?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    update?: OrderVersionOnProductsUpdateWithWhereUniqueWithoutOrderVersionInput | OrderVersionOnProductsUpdateWithWhereUniqueWithoutOrderVersionInput[]
    updateMany?: OrderVersionOnProductsUpdateManyWithWhereWithoutOrderVersionInput | OrderVersionOnProductsUpdateManyWithWhereWithoutOrderVersionInput[]
    deleteMany?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
  }

  export type OrderUpdateOneRequiredWithoutOrderVersionsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderVersionsInput, OrderUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderVersionsInput
    upsert?: OrderUpsertWithoutOrderVersionsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderVersionsInput, OrderUpdateWithoutOrderVersionsInput>, OrderUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutOrderVersionsNestedInput = {
    create?: XOR<UserCreateWithoutOrderVersionsInput, UserUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderVersionsInput
    upsert?: UserUpsertWithoutOrderVersionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderVersionsInput, UserUpdateWithoutOrderVersionsInput>, UserUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionNestedInput = {
    create?: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput> | OrderVersionOnProductsCreateWithoutOrderVersionInput[] | OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput[]
    connectOrCreate?: OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput | OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput[]
    upsert?: OrderVersionOnProductsUpsertWithWhereUniqueWithoutOrderVersionInput | OrderVersionOnProductsUpsertWithWhereUniqueWithoutOrderVersionInput[]
    createMany?: OrderVersionOnProductsCreateManyOrderVersionInputEnvelope
    set?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    disconnect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    delete?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    connect?: OrderVersionOnProductsWhereUniqueInput | OrderVersionOnProductsWhereUniqueInput[]
    update?: OrderVersionOnProductsUpdateWithWhereUniqueWithoutOrderVersionInput | OrderVersionOnProductsUpdateWithWhereUniqueWithoutOrderVersionInput[]
    updateMany?: OrderVersionOnProductsUpdateManyWithWhereWithoutOrderVersionInput | OrderVersionOnProductsUpdateManyWithWhereWithoutOrderVersionInput[]
    deleteMany?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
  }

  export type OrderVersionCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderVersionCreateWithoutProductsInput, OrderVersionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderVersionCreateOrConnectWithoutProductsInput
    connect?: OrderVersionWhereUniqueInput
  }

  export type ProductVersionCreateNestedOneWithoutOrderVersionsInput = {
    create?: XOR<ProductVersionCreateWithoutOrderVersionsInput, ProductVersionUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: ProductVersionCreateOrConnectWithoutOrderVersionsInput
    connect?: ProductVersionWhereUniqueInput
  }

  export type OrderVersionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderVersionCreateWithoutProductsInput, OrderVersionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderVersionCreateOrConnectWithoutProductsInput
    upsert?: OrderVersionUpsertWithoutProductsInput
    connect?: OrderVersionWhereUniqueInput
    update?: XOR<XOR<OrderVersionUpdateToOneWithWhereWithoutProductsInput, OrderVersionUpdateWithoutProductsInput>, OrderVersionUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVersionUpdateOneRequiredWithoutOrderVersionsNestedInput = {
    create?: XOR<ProductVersionCreateWithoutOrderVersionsInput, ProductVersionUncheckedCreateWithoutOrderVersionsInput>
    connectOrCreate?: ProductVersionCreateOrConnectWithoutOrderVersionsInput
    upsert?: ProductVersionUpsertWithoutOrderVersionsInput
    connect?: ProductVersionWhereUniqueInput
    update?: XOR<XOR<ProductVersionUpdateToOneWithWhereWithoutOrderVersionsInput, ProductVersionUpdateWithoutOrderVersionsInput>, ProductVersionUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput
    connect?: ProjectWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomersInput, UserUpdateWithoutCustomersInput>, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type ProjectUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput
    upsert?: ProjectUpsertWithoutCustomerInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCustomerInput, ProjectUpdateWithoutCustomerInput>, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UsersOnProjectsCreateNestedManyWithoutProjectInput = {
    create?: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput> | UsersOnProjectsCreateWithoutProjectInput[] | UsersOnProjectsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutProjectInput | UsersOnProjectsCreateOrConnectWithoutProjectInput[]
    createMany?: UsersOnProjectsCreateManyProjectInputEnvelope
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutProjectInput = {
    create?: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput> | OrderCreateWithoutProjectInput[] | OrderUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProjectInput | OrderCreateOrConnectWithoutProjectInput[]
    createMany?: OrderCreateManyProjectInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutProjectInput = {
    create?: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput> | CustomerCreateWithoutProjectInput[] | CustomerUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectInput | CustomerCreateOrConnectWithoutProjectInput[]
    createMany?: CustomerCreateManyProjectInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UsersOnProjectsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput> | UsersOnProjectsCreateWithoutProjectInput[] | UsersOnProjectsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutProjectInput | UsersOnProjectsCreateOrConnectWithoutProjectInput[]
    createMany?: UsersOnProjectsCreateManyProjectInputEnvelope
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput> | OrderCreateWithoutProjectInput[] | OrderUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProjectInput | OrderCreateOrConnectWithoutProjectInput[]
    createMany?: OrderCreateManyProjectInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput> | CustomerCreateWithoutProjectInput[] | CustomerUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectInput | CustomerCreateOrConnectWithoutProjectInput[]
    createMany?: CustomerCreateManyProjectInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UsersOnProjectsUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput> | UsersOnProjectsCreateWithoutProjectInput[] | UsersOnProjectsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutProjectInput | UsersOnProjectsCreateOrConnectWithoutProjectInput[]
    upsert?: UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput | UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UsersOnProjectsCreateManyProjectInputEnvelope
    set?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    disconnect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    delete?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    update?: UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput | UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UsersOnProjectsUpdateManyWithWhereWithoutProjectInput | UsersOnProjectsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProjectInput | ProductUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProjectInput | ProductUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProjectInput | ProductUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutProjectNestedInput = {
    create?: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput> | OrderCreateWithoutProjectInput[] | OrderUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProjectInput | OrderCreateOrConnectWithoutProjectInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProjectInput | OrderUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: OrderCreateManyProjectInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProjectInput | OrderUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProjectInput | OrderUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput> | CustomerCreateWithoutProjectInput[] | CustomerUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectInput | CustomerCreateOrConnectWithoutProjectInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutProjectInput | CustomerUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CustomerCreateManyProjectInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutProjectInput | CustomerUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutProjectInput | CustomerUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UsersOnProjectsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput> | UsersOnProjectsCreateWithoutProjectInput[] | UsersOnProjectsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutProjectInput | UsersOnProjectsCreateOrConnectWithoutProjectInput[]
    upsert?: UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput | UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UsersOnProjectsCreateManyProjectInputEnvelope
    set?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    disconnect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    delete?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    update?: UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput | UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UsersOnProjectsUpdateManyWithWhereWithoutProjectInput | UsersOnProjectsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput> | ProductCreateWithoutProjectInput[] | ProductUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProjectInput | ProductCreateOrConnectWithoutProjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProjectInput | ProductUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProductCreateManyProjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProjectInput | ProductUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProjectInput | ProductUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput> | OrderCreateWithoutProjectInput[] | OrderUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProjectInput | OrderCreateOrConnectWithoutProjectInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProjectInput | OrderUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: OrderCreateManyProjectInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProjectInput | OrderUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProjectInput | OrderUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput> | CustomerCreateWithoutProjectInput[] | CustomerUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectInput | CustomerCreateOrConnectWithoutProjectInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutProjectInput | CustomerUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CustomerCreateManyProjectInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutProjectInput | CustomerUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutProjectInput | CustomerUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UsersOnProjectsCreateroleInput = {
    set: $Enums.Role[]
  }

  export type UserCreateNestedOneWithoutUsersOnProjectsInput = {
    create?: XOR<UserCreateWithoutUsersOnProjectsInput, UserUncheckedCreateWithoutUsersOnProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUsersOnProjectsInput = {
    create?: XOR<ProjectCreateWithoutUsersOnProjectsInput, ProjectUncheckedCreateWithoutUsersOnProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersOnProjectsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UsersOnProjectsUpdateroleInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type UserUpdateOneRequiredWithoutUsersOnProjectsNestedInput = {
    create?: XOR<UserCreateWithoutUsersOnProjectsInput, UserUncheckedCreateWithoutUsersOnProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnProjectsInput
    upsert?: UserUpsertWithoutUsersOnProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsersOnProjectsInput, UserUpdateWithoutUsersOnProjectsInput>, UserUncheckedUpdateWithoutUsersOnProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutUsersOnProjectsNestedInput = {
    create?: XOR<ProjectCreateWithoutUsersOnProjectsInput, ProjectUncheckedCreateWithoutUsersOnProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersOnProjectsInput
    upsert?: ProjectUpsertWithoutUsersOnProjectsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUsersOnProjectsInput, ProjectUpdateWithoutUsersOnProjectsInput>, ProjectUncheckedUpdateWithoutUsersOnProjectsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProductVersionCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput> | ProductVersionCreateWithoutUserInput[] | ProductVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutUserInput | ProductVersionCreateOrConnectWithoutUserInput[]
    createMany?: ProductVersionCreateManyUserInputEnvelope
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type OrderVersionCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput> | OrderVersionCreateWithoutUserInput[] | OrderVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutUserInput | OrderVersionCreateOrConnectWithoutUserInput[]
    createMany?: OrderVersionCreateManyUserInputEnvelope
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UsersOnProjectsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput> | UsersOnProjectsCreateWithoutUserInput[] | UsersOnProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutUserInput | UsersOnProjectsCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnProjectsCreateManyUserInputEnvelope
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProductVersionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput> | ProductVersionCreateWithoutUserInput[] | ProductVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutUserInput | ProductVersionCreateOrConnectWithoutUserInput[]
    createMany?: ProductVersionCreateManyUserInputEnvelope
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
  }

  export type OrderVersionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput> | OrderVersionCreateWithoutUserInput[] | OrderVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutUserInput | OrderVersionCreateOrConnectWithoutUserInput[]
    createMany?: OrderVersionCreateManyUserInputEnvelope
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput> | UsersOnProjectsCreateWithoutUserInput[] | UsersOnProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutUserInput | UsersOnProjectsCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnProjectsCreateManyUserInputEnvelope
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProductVersionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput> | ProductVersionCreateWithoutUserInput[] | ProductVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutUserInput | ProductVersionCreateOrConnectWithoutUserInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutUserInput | ProductVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductVersionCreateManyUserInputEnvelope
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutUserInput | ProductVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutUserInput | ProductVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type OrderVersionUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput> | OrderVersionCreateWithoutUserInput[] | OrderVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutUserInput | OrderVersionCreateOrConnectWithoutUserInput[]
    upsert?: OrderVersionUpsertWithWhereUniqueWithoutUserInput | OrderVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderVersionCreateManyUserInputEnvelope
    set?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    disconnect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    delete?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    update?: OrderVersionUpdateWithWhereUniqueWithoutUserInput | OrderVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderVersionUpdateManyWithWhereWithoutUserInput | OrderVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UsersOnProjectsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput> | UsersOnProjectsCreateWithoutUserInput[] | UsersOnProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutUserInput | UsersOnProjectsCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput | UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnProjectsCreateManyUserInputEnvelope
    set?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    disconnect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    delete?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    update?: UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput | UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnProjectsUpdateManyWithWhereWithoutUserInput | UsersOnProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProductVersionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput> | ProductVersionCreateWithoutUserInput[] | ProductVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductVersionCreateOrConnectWithoutUserInput | ProductVersionCreateOrConnectWithoutUserInput[]
    upsert?: ProductVersionUpsertWithWhereUniqueWithoutUserInput | ProductVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductVersionCreateManyUserInputEnvelope
    set?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    disconnect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    delete?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    connect?: ProductVersionWhereUniqueInput | ProductVersionWhereUniqueInput[]
    update?: ProductVersionUpdateWithWhereUniqueWithoutUserInput | ProductVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductVersionUpdateManyWithWhereWithoutUserInput | ProductVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
  }

  export type OrderVersionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput> | OrderVersionCreateWithoutUserInput[] | OrderVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderVersionCreateOrConnectWithoutUserInput | OrderVersionCreateOrConnectWithoutUserInput[]
    upsert?: OrderVersionUpsertWithWhereUniqueWithoutUserInput | OrderVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderVersionCreateManyUserInputEnvelope
    set?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    disconnect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    delete?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    connect?: OrderVersionWhereUniqueInput | OrderVersionWhereUniqueInput[]
    update?: OrderVersionUpdateWithWhereUniqueWithoutUserInput | OrderVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderVersionUpdateManyWithWhereWithoutUserInput | OrderVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput> | UsersOnProjectsCreateWithoutUserInput[] | UsersOnProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnProjectsCreateOrConnectWithoutUserInput | UsersOnProjectsCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput | UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnProjectsCreateManyUserInputEnvelope
    set?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    disconnect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    delete?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    connect?: UsersOnProjectsWhereUniqueInput | UsersOnProjectsWhereUniqueInput[]
    update?: UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput | UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnProjectsUpdateManyWithWhereWithoutUserInput | UsersOnProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductVersionCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    orderVersions?: OrderVersionOnProductsCreateNestedManyWithoutProductInput
    params?: ParamValuesCreateNestedManyWithoutProductVersionsInput
    product: ProductCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutProductVersionsInput
  }

  export type ProductVersionUncheckedCreateWithoutImagesInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    orderVersions?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput
    params?: ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput
  }

  export type ProductVersionCreateOrConnectWithoutImagesInput = {
    where: ProductVersionWhereUniqueInput
    create: XOR<ProductVersionCreateWithoutImagesInput, ProductVersionUncheckedCreateWithoutImagesInput>
  }

  export type ProductVersionUpsertWithoutImagesInput = {
    update: XOR<ProductVersionUpdateWithoutImagesInput, ProductVersionUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductVersionCreateWithoutImagesInput, ProductVersionUncheckedCreateWithoutImagesInput>
    where?: ProductVersionWhereInput
  }

  export type ProductVersionUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductVersionWhereInput
    data: XOR<ProductVersionUpdateWithoutImagesInput, ProductVersionUncheckedUpdateWithoutImagesInput>
  }

  export type ProductVersionUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderVersions?: OrderVersionOnProductsUpdateManyWithoutProductNestedInput
    params?: ParamValuesUpdateManyWithoutProductVersionsNestedInput
    product?: ProductUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderVersions?: OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput
    params?: ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput
  }

  export type ProductVersionCreateWithoutParamsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsCreateNestedManyWithoutProductInput
    product: ProductCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutProductVersionsInput
  }

  export type ProductVersionUncheckedCreateWithoutParamsInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesUncheckedCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductVersionCreateOrConnectWithoutParamsInput = {
    where: ProductVersionWhereUniqueInput
    create: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput>
  }

  export type ProductVersionUpsertWithWhereUniqueWithoutParamsInput = {
    where: ProductVersionWhereUniqueInput
    update: XOR<ProductVersionUpdateWithoutParamsInput, ProductVersionUncheckedUpdateWithoutParamsInput>
    create: XOR<ProductVersionCreateWithoutParamsInput, ProductVersionUncheckedCreateWithoutParamsInput>
  }

  export type ProductVersionUpdateWithWhereUniqueWithoutParamsInput = {
    where: ProductVersionWhereUniqueInput
    data: XOR<ProductVersionUpdateWithoutParamsInput, ProductVersionUncheckedUpdateWithoutParamsInput>
  }

  export type ProductVersionUpdateManyWithWhereWithoutParamsInput = {
    where: ProductVersionScalarWhereInput
    data: XOR<ProductVersionUpdateManyMutationInput, ProductVersionUncheckedUpdateManyWithoutParamsInput>
  }

  export type ProductVersionScalarWhereInput = {
    AND?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
    OR?: ProductVersionScalarWhereInput[]
    NOT?: ProductVersionScalarWhereInput | ProductVersionScalarWhereInput[]
    id?: StringFilter<"ProductVersion"> | string
    userId?: StringFilter<"ProductVersion"> | string
    productId?: StringFilter<"ProductVersion"> | string
    createdAt?: DateTimeFilter<"ProductVersion"> | Date | string
    name?: StringFilter<"ProductVersion"> | string
    description?: StringFilter<"ProductVersion"> | string
    price?: FloatFilter<"ProductVersion"> | number
  }

  export type ProjectCreateWithoutProductInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutProjectInput
    Order?: OrderCreateNestedManyWithoutProjectInput
    Customer?: CustomerCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutProjectInput
    Order?: OrderUncheckedCreateNestedManyWithoutProjectInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProductInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProductInput, ProjectUncheckedCreateWithoutProductInput>
  }

  export type ProductVersionCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsCreateNestedManyWithoutProductInput
    params?: ParamValuesCreateNestedManyWithoutProductVersionsInput
    user: UserCreateNestedOneWithoutProductVersionsInput
  }

  export type ProductVersionUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesUncheckedCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput
    params?: ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput
  }

  export type ProductVersionCreateOrConnectWithoutProductInput = {
    where: ProductVersionWhereUniqueInput
    create: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput>
  }

  export type ProductVersionCreateManyProductInputEnvelope = {
    data: ProductVersionCreateManyProductInput | ProductVersionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCountHistoryCreateWithoutProductInput = {
    id?: string
    value: number
  }

  export type ProductCountHistoryUncheckedCreateWithoutProductInput = {
    id?: string
    value: number
  }

  export type ProductCountHistoryCreateOrConnectWithoutProductInput = {
    where: ProductCountHistoryWhereUniqueInput
    create: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCountHistoryCreateManyProductInputEnvelope = {
    data: ProductCountHistoryCreateManyProductInput | ProductCountHistoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutProductInput = {
    update: XOR<ProjectUpdateWithoutProductInput, ProjectUncheckedUpdateWithoutProductInput>
    create: XOR<ProjectCreateWithoutProductInput, ProjectUncheckedCreateWithoutProductInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProductInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProductInput, ProjectUncheckedUpdateWithoutProductInput>
  }

  export type ProjectUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutProjectNestedInput
    Order?: OrderUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutProjectNestedInput
    Order?: OrderUncheckedUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProductVersionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVersionWhereUniqueInput
    update: XOR<ProductVersionUpdateWithoutProductInput, ProductVersionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVersionCreateWithoutProductInput, ProductVersionUncheckedCreateWithoutProductInput>
  }

  export type ProductVersionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVersionWhereUniqueInput
    data: XOR<ProductVersionUpdateWithoutProductInput, ProductVersionUncheckedUpdateWithoutProductInput>
  }

  export type ProductVersionUpdateManyWithWhereWithoutProductInput = {
    where: ProductVersionScalarWhereInput
    data: XOR<ProductVersionUpdateManyMutationInput, ProductVersionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCountHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductCountHistoryWhereUniqueInput
    update: XOR<ProductCountHistoryUpdateWithoutProductInput, ProductCountHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCountHistoryCreateWithoutProductInput, ProductCountHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCountHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductCountHistoryWhereUniqueInput
    data: XOR<ProductCountHistoryUpdateWithoutProductInput, ProductCountHistoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCountHistoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductCountHistoryScalarWhereInput
    data: XOR<ProductCountHistoryUpdateManyMutationInput, ProductCountHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCountHistoryScalarWhereInput = {
    AND?: ProductCountHistoryScalarWhereInput | ProductCountHistoryScalarWhereInput[]
    OR?: ProductCountHistoryScalarWhereInput[]
    NOT?: ProductCountHistoryScalarWhereInput | ProductCountHistoryScalarWhereInput[]
    id?: StringFilter<"ProductCountHistory"> | string
    value?: IntFilter<"ProductCountHistory"> | number
    productId?: StringFilter<"ProductCountHistory"> | string
  }

  export type ProductCreateWithoutProductCountHistoryInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProductInput
    versions?: ProductVersionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductCountHistoryInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    versions?: ProductVersionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductCountHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductCountHistoryInput, ProductUncheckedCreateWithoutProductCountHistoryInput>
  }

  export type ProductUpsertWithoutProductCountHistoryInput = {
    update: XOR<ProductUpdateWithoutProductCountHistoryInput, ProductUncheckedUpdateWithoutProductCountHistoryInput>
    create: XOR<ProductCreateWithoutProductCountHistoryInput, ProductUncheckedCreateWithoutProductCountHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductCountHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductCountHistoryInput, ProductUncheckedUpdateWithoutProductCountHistoryInput>
  }

  export type ProductUpdateWithoutProductCountHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProductNestedInput
    versions?: ProductVersionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductCountHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ProductVersionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ImagesCreateWithoutProductVersionInput = {
    id?: string
    url: string
  }

  export type ImagesUncheckedCreateWithoutProductVersionInput = {
    id?: string
    url: string
  }

  export type ImagesCreateOrConnectWithoutProductVersionInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput>
  }

  export type ImagesCreateManyProductVersionInputEnvelope = {
    data: ImagesCreateManyProductVersionInput | ImagesCreateManyProductVersionInput[]
    skipDuplicates?: boolean
  }

  export type OrderVersionOnProductsCreateWithoutProductInput = {
    amount: number
    orderVersion: OrderVersionCreateNestedOneWithoutProductsInput
  }

  export type OrderVersionOnProductsUncheckedCreateWithoutProductInput = {
    orderVersionId: string
    amount: number
  }

  export type OrderVersionOnProductsCreateOrConnectWithoutProductInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    create: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput>
  }

  export type OrderVersionOnProductsCreateManyProductInputEnvelope = {
    data: OrderVersionOnProductsCreateManyProductInput | OrderVersionOnProductsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ParamValuesCreateWithoutProductVersionsInput = {
    id?: string
    name: string
    value: string
  }

  export type ParamValuesUncheckedCreateWithoutProductVersionsInput = {
    id?: string
    name: string
    value: string
  }

  export type ParamValuesCreateOrConnectWithoutProductVersionsInput = {
    where: ParamValuesWhereUniqueInput
    create: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput>
  }

  export type ProductCreateWithoutVersionsInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProductInput
    productCountHistory?: ProductCountHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVersionsInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    productCountHistory?: ProductCountHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVersionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVersionsInput, ProductUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutProductVersionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductVersionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductVersionsInput, UserUncheckedCreateWithoutProductVersionsInput>
  }

  export type ImagesUpsertWithWhereUniqueWithoutProductVersionInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutProductVersionInput, ImagesUncheckedUpdateWithoutProductVersionInput>
    create: XOR<ImagesCreateWithoutProductVersionInput, ImagesUncheckedCreateWithoutProductVersionInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutProductVersionInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutProductVersionInput, ImagesUncheckedUpdateWithoutProductVersionInput>
  }

  export type ImagesUpdateManyWithWhereWithoutProductVersionInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutProductVersionInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    productVersionId?: StringFilter<"Images"> | string
  }

  export type OrderVersionOnProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    update: XOR<OrderVersionOnProductsUpdateWithoutProductInput, OrderVersionOnProductsUncheckedUpdateWithoutProductInput>
    create: XOR<OrderVersionOnProductsCreateWithoutProductInput, OrderVersionOnProductsUncheckedCreateWithoutProductInput>
  }

  export type OrderVersionOnProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    data: XOR<OrderVersionOnProductsUpdateWithoutProductInput, OrderVersionOnProductsUncheckedUpdateWithoutProductInput>
  }

  export type OrderVersionOnProductsUpdateManyWithWhereWithoutProductInput = {
    where: OrderVersionOnProductsScalarWhereInput
    data: XOR<OrderVersionOnProductsUpdateManyMutationInput, OrderVersionOnProductsUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderVersionOnProductsScalarWhereInput = {
    AND?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
    OR?: OrderVersionOnProductsScalarWhereInput[]
    NOT?: OrderVersionOnProductsScalarWhereInput | OrderVersionOnProductsScalarWhereInput[]
    orderVersionId?: StringFilter<"OrderVersionOnProducts"> | string
    productId?: StringFilter<"OrderVersionOnProducts"> | string
    amount?: IntFilter<"OrderVersionOnProducts"> | number
  }

  export type ParamValuesUpsertWithWhereUniqueWithoutProductVersionsInput = {
    where: ParamValuesWhereUniqueInput
    update: XOR<ParamValuesUpdateWithoutProductVersionsInput, ParamValuesUncheckedUpdateWithoutProductVersionsInput>
    create: XOR<ParamValuesCreateWithoutProductVersionsInput, ParamValuesUncheckedCreateWithoutProductVersionsInput>
  }

  export type ParamValuesUpdateWithWhereUniqueWithoutProductVersionsInput = {
    where: ParamValuesWhereUniqueInput
    data: XOR<ParamValuesUpdateWithoutProductVersionsInput, ParamValuesUncheckedUpdateWithoutProductVersionsInput>
  }

  export type ParamValuesUpdateManyWithWhereWithoutProductVersionsInput = {
    where: ParamValuesScalarWhereInput
    data: XOR<ParamValuesUpdateManyMutationInput, ParamValuesUncheckedUpdateManyWithoutProductVersionsInput>
  }

  export type ParamValuesScalarWhereInput = {
    AND?: ParamValuesScalarWhereInput | ParamValuesScalarWhereInput[]
    OR?: ParamValuesScalarWhereInput[]
    NOT?: ParamValuesScalarWhereInput | ParamValuesScalarWhereInput[]
    id?: StringFilter<"ParamValues"> | string
    name?: StringFilter<"ParamValues"> | string
    value?: StringFilter<"ParamValues"> | string
  }

  export type ProductUpsertWithoutVersionsInput = {
    update: XOR<ProductUpdateWithoutVersionsInput, ProductUncheckedUpdateWithoutVersionsInput>
    create: XOR<ProductCreateWithoutVersionsInput, ProductUncheckedCreateWithoutVersionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVersionsInput, ProductUncheckedUpdateWithoutVersionsInput>
  }

  export type ProductUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProductNestedInput
    productCountHistory?: ProductCountHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCountHistory?: ProductCountHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutProductVersionsInput = {
    update: XOR<UserUpdateWithoutProductVersionsInput, UserUncheckedUpdateWithoutProductVersionsInput>
    create: XOR<UserCreateWithoutProductVersionsInput, UserUncheckedCreateWithoutProductVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductVersionsInput, UserUncheckedUpdateWithoutProductVersionsInput>
  }

  export type UserUpdateWithoutProductVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderVersionCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsCreateNestedManyWithoutOrderVersionInput
    user: UserCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionUncheckedCreateWithoutOrderInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutOrderVersionInput
  }

  export type OrderVersionCreateOrConnectWithoutOrderInput = {
    where: OrderVersionWhereUniqueInput
    create: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput>
  }

  export type OrderVersionCreateManyOrderInputEnvelope = {
    data: OrderVersionCreateManyOrderInput | OrderVersionCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    text: string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
  }

  export type CommentCreateOrConnectWithoutOrderInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput>
  }

  export type CommentCreateManyOrderInputEnvelope = {
    data: CommentCreateManyOrderInput | CommentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    user: UserCreateNestedOneWithoutCustomersInput
    project: ProjectCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    projectId: string
    userId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type ProjectCreateWithoutOrderInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutProjectInput
    Product?: ProductCreateNestedManyWithoutProjectInput
    Customer?: CustomerCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutProjectInput
    Product?: ProductUncheckedCreateNestedManyWithoutProjectInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOrderInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOrderInput, ProjectUncheckedCreateWithoutOrderInput>
  }

  export type OrderVersionUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderVersionWhereUniqueInput
    update: XOR<OrderVersionUpdateWithoutOrderInput, OrderVersionUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderVersionCreateWithoutOrderInput, OrderVersionUncheckedCreateWithoutOrderInput>
  }

  export type OrderVersionUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderVersionWhereUniqueInput
    data: XOR<OrderVersionUpdateWithoutOrderInput, OrderVersionUncheckedUpdateWithoutOrderInput>
  }

  export type OrderVersionUpdateManyWithWhereWithoutOrderInput = {
    where: OrderVersionScalarWhereInput
    data: XOR<OrderVersionUpdateManyMutationInput, OrderVersionUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderVersionScalarWhereInput = {
    AND?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
    OR?: OrderVersionScalarWhereInput[]
    NOT?: OrderVersionScalarWhereInput | OrderVersionScalarWhereInput[]
    id?: StringFilter<"OrderVersion"> | string
    userId?: StringFilter<"OrderVersion"> | string
    orderId?: StringFilter<"OrderVersion"> | string
    createdAt?: DateTimeFilter<"OrderVersion"> | Date | string
    address?: StringFilter<"OrderVersion"> | string
    total?: FloatFilter<"OrderVersion"> | number
    status?: EnumOrderStatusFilter<"OrderVersion"> | $Enums.OrderStatus
  }

  export type CommentUpsertWithWhereUniqueWithoutOrderInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutOrderInput, CommentUncheckedUpdateWithoutOrderInput>
    create: XOR<CommentCreateWithoutOrderInput, CommentUncheckedCreateWithoutOrderInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutOrderInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutOrderInput, CommentUncheckedUpdateWithoutOrderInput>
  }

  export type CommentUpdateManyWithWhereWithoutOrderInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutOrderInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    orderId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    project?: ProjectUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithoutOrderInput = {
    update: XOR<ProjectUpdateWithoutOrderInput, ProjectUncheckedUpdateWithoutOrderInput>
    create: XOR<ProjectCreateWithoutOrderInput, ProjectUncheckedCreateWithoutOrderInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutOrderInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutOrderInput, ProjectUncheckedUpdateWithoutOrderInput>
  }

  export type ProjectUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutProjectNestedInput
    Product?: ProductUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutProjectNestedInput
    Product?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type OrderCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    orderVersions?: OrderVersionCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    project: ProjectCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
    customerId: string
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCommentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCommentsInput, OrderUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithoutCommentsInput = {
    update: XOR<OrderUpdateWithoutCommentsInput, OrderUncheckedUpdateWithoutCommentsInput>
    create: XOR<OrderCreateWithoutCommentsInput, OrderUncheckedCreateWithoutCommentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutCommentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutCommentsInput, OrderUncheckedUpdateWithoutCommentsInput>
  }

  export type OrderUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderVersions?: OrderVersionUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    project?: ProjectUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderVersionOnProductsCreateWithoutOrderVersionInput = {
    amount: number
    product: ProductVersionCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput = {
    productId: string
    amount: number
  }

  export type OrderVersionOnProductsCreateOrConnectWithoutOrderVersionInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    create: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput>
  }

  export type OrderVersionOnProductsCreateManyOrderVersionInputEnvelope = {
    data: OrderVersionOnProductsCreateManyOrderVersionInput | OrderVersionOnProductsCreateManyOrderVersionInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutOrderVersionsInput = {
    id?: string
    createdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    project: ProjectCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderVersionsInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
    customerId: string
    comments?: CommentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderVersionsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderVersionsInput, OrderUncheckedCreateWithoutOrderVersionsInput>
  }

  export type UserCreateWithoutOrderVersionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderVersionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderVersionsInput, UserUncheckedCreateWithoutOrderVersionsInput>
  }

  export type OrderVersionOnProductsUpsertWithWhereUniqueWithoutOrderVersionInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    update: XOR<OrderVersionOnProductsUpdateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedUpdateWithoutOrderVersionInput>
    create: XOR<OrderVersionOnProductsCreateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedCreateWithoutOrderVersionInput>
  }

  export type OrderVersionOnProductsUpdateWithWhereUniqueWithoutOrderVersionInput = {
    where: OrderVersionOnProductsWhereUniqueInput
    data: XOR<OrderVersionOnProductsUpdateWithoutOrderVersionInput, OrderVersionOnProductsUncheckedUpdateWithoutOrderVersionInput>
  }

  export type OrderVersionOnProductsUpdateManyWithWhereWithoutOrderVersionInput = {
    where: OrderVersionOnProductsScalarWhereInput
    data: XOR<OrderVersionOnProductsUpdateManyMutationInput, OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionInput>
  }

  export type OrderUpsertWithoutOrderVersionsInput = {
    update: XOR<OrderUpdateWithoutOrderVersionsInput, OrderUncheckedUpdateWithoutOrderVersionsInput>
    create: XOR<OrderCreateWithoutOrderVersionsInput, OrderUncheckedCreateWithoutOrderVersionsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderVersionsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderVersionsInput, OrderUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type OrderUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    project?: ProjectUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutOrderVersionsInput = {
    update: XOR<UserUpdateWithoutOrderVersionsInput, UserUncheckedUpdateWithoutOrderVersionsInput>
    create: XOR<UserCreateWithoutOrderVersionsInput, UserUncheckedCreateWithoutOrderVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderVersionsInput, UserUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type UserUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderVersionCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    order: OrderCreateNestedOneWithoutOrderVersionsInput
    user: UserCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionUncheckedCreateWithoutProductsInput = {
    id?: string
    userId: string
    orderId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
  }

  export type OrderVersionCreateOrConnectWithoutProductsInput = {
    where: OrderVersionWhereUniqueInput
    create: XOR<OrderVersionCreateWithoutProductsInput, OrderVersionUncheckedCreateWithoutProductsInput>
  }

  export type ProductVersionCreateWithoutOrderVersionsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesCreateNestedManyWithoutProductVersionInput
    params?: ParamValuesCreateNestedManyWithoutProductVersionsInput
    product: ProductCreateNestedOneWithoutVersionsInput
    user: UserCreateNestedOneWithoutProductVersionsInput
  }

  export type ProductVersionUncheckedCreateWithoutOrderVersionsInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesUncheckedCreateNestedManyWithoutProductVersionInput
    params?: ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput
  }

  export type ProductVersionCreateOrConnectWithoutOrderVersionsInput = {
    where: ProductVersionWhereUniqueInput
    create: XOR<ProductVersionCreateWithoutOrderVersionsInput, ProductVersionUncheckedCreateWithoutOrderVersionsInput>
  }

  export type OrderVersionUpsertWithoutProductsInput = {
    update: XOR<OrderVersionUpdateWithoutProductsInput, OrderVersionUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderVersionCreateWithoutProductsInput, OrderVersionUncheckedCreateWithoutProductsInput>
    where?: OrderVersionWhereInput
  }

  export type OrderVersionUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderVersionWhereInput
    data: XOR<OrderVersionUpdateWithoutProductsInput, OrderVersionUncheckedUpdateWithoutProductsInput>
  }

  export type OrderVersionUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    order?: OrderUpdateOneRequiredWithoutOrderVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ProductVersionUpsertWithoutOrderVersionsInput = {
    update: XOR<ProductVersionUpdateWithoutOrderVersionsInput, ProductVersionUncheckedUpdateWithoutOrderVersionsInput>
    create: XOR<ProductVersionCreateWithoutOrderVersionsInput, ProductVersionUncheckedCreateWithoutOrderVersionsInput>
    where?: ProductVersionWhereInput
  }

  export type ProductVersionUpdateToOneWithWhereWithoutOrderVersionsInput = {
    where?: ProductVersionWhereInput
    data: XOR<ProductVersionUpdateWithoutOrderVersionsInput, ProductVersionUncheckedUpdateWithoutOrderVersionsInput>
  }

  export type ProductVersionUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUpdateManyWithoutProductVersionNestedInput
    params?: ParamValuesUpdateManyWithoutProductVersionsNestedInput
    product?: ProductUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateWithoutOrderVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUncheckedUpdateManyWithoutProductVersionNestedInput
    params?: ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    orderVersions?: OrderVersionCreateNestedManyWithoutOrderInput
    comments?: CommentCreateNestedManyWithoutOrderInput
    project: ProjectCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCustomersInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type ProjectCreateWithoutCustomerInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutProjectInput
    Product?: ProductCreateNestedManyWithoutProjectInput
    Order?: OrderCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutProjectInput
    Product?: ProductUncheckedCreateNestedManyWithoutProjectInput
    Order?: OrderUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    projectId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutCustomerInput = {
    update: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCustomerInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type ProjectUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutProjectNestedInput
    Product?: ProductUpdateManyWithoutProjectNestedInput
    Order?: OrderUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutProjectNestedInput
    Product?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    Order?: OrderUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UsersOnProjectsCreateWithoutProjectInput = {
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
    user: UserCreateNestedOneWithoutUsersOnProjectsInput
  }

  export type UsersOnProjectsUncheckedCreateWithoutProjectInput = {
    userId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsCreateOrConnectWithoutProjectInput = {
    where: UsersOnProjectsWhereUniqueInput
    create: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput>
  }

  export type UsersOnProjectsCreateManyProjectInputEnvelope = {
    data: UsersOnProjectsCreateManyProjectInput | UsersOnProjectsCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    versions?: ProductVersionCreateNestedManyWithoutProductInput
    productCountHistory?: ProductCountHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    versions?: ProductVersionUncheckedCreateNestedManyWithoutProductInput
    productCountHistory?: ProductCountHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProjectInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput>
  }

  export type ProductCreateManyProjectInputEnvelope = {
    data: ProductCreateManyProjectInput | ProductCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    orderVersions?: OrderVersionCreateNestedManyWithoutOrderInput
    comments?: CommentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProjectInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput>
  }

  export type OrderCreateManyProjectInputEnvelope = {
    data: OrderCreateManyProjectInput | OrderCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutProjectInput = {
    id?: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutProjectInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput>
  }

  export type CustomerCreateManyProjectInputEnvelope = {
    data: CustomerCreateManyProjectInput | CustomerCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput = {
    where: UsersOnProjectsWhereUniqueInput
    update: XOR<UsersOnProjectsUpdateWithoutProjectInput, UsersOnProjectsUncheckedUpdateWithoutProjectInput>
    create: XOR<UsersOnProjectsCreateWithoutProjectInput, UsersOnProjectsUncheckedCreateWithoutProjectInput>
  }

  export type UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
    where: UsersOnProjectsWhereUniqueInput
    data: XOR<UsersOnProjectsUpdateWithoutProjectInput, UsersOnProjectsUncheckedUpdateWithoutProjectInput>
  }

  export type UsersOnProjectsUpdateManyWithWhereWithoutProjectInput = {
    where: UsersOnProjectsScalarWhereInput
    data: XOR<UsersOnProjectsUpdateManyMutationInput, UsersOnProjectsUncheckedUpdateManyWithoutProjectInput>
  }

  export type UsersOnProjectsScalarWhereInput = {
    AND?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
    OR?: UsersOnProjectsScalarWhereInput[]
    NOT?: UsersOnProjectsScalarWhereInput | UsersOnProjectsScalarWhereInput[]
    userId?: StringFilter<"UsersOnProjects"> | string
    projectId?: StringFilter<"UsersOnProjects"> | string
    assignedAt?: DateTimeFilter<"UsersOnProjects"> | Date | string
    role?: EnumRoleNullableListFilter<"UsersOnProjects">
  }

  export type ProductUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProjectInput, ProductUncheckedUpdateWithoutProjectInput>
    create: XOR<ProductCreateWithoutProjectInput, ProductUncheckedCreateWithoutProjectInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProjectInput, ProductUncheckedUpdateWithoutProjectInput>
  }

  export type ProductUpdateManyWithWhereWithoutProjectInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    projectId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutProjectInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProjectInput, OrderUncheckedUpdateWithoutProjectInput>
    create: XOR<OrderCreateWithoutProjectInput, OrderUncheckedCreateWithoutProjectInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProjectInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProjectInput, OrderUncheckedUpdateWithoutProjectInput>
  }

  export type OrderUpdateManyWithWhereWithoutProjectInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProjectInput>
  }

  export type CustomerUpsertWithWhereUniqueWithoutProjectInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutProjectInput, CustomerUncheckedUpdateWithoutProjectInput>
    create: XOR<CustomerCreateWithoutProjectInput, CustomerUncheckedCreateWithoutProjectInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutProjectInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutProjectInput, CustomerUncheckedUpdateWithoutProjectInput>
  }

  export type CustomerUpdateManyWithWhereWithoutProjectInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutProjectInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    projectId?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    secondName?: StringFilter<"Customer"> | string
    thirdName?: StringNullableFilter<"Customer"> | string | null
    contact?: StringFilter<"Customer"> | string
  }

  export type UserCreateWithoutUsersOnProjectsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsersOnProjectsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsersOnProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsersOnProjectsInput, UserUncheckedCreateWithoutUsersOnProjectsInput>
  }

  export type ProjectCreateWithoutUsersOnProjectsInput = {
    id?: string
    name: string
    Product?: ProductCreateNestedManyWithoutProjectInput
    Order?: OrderCreateNestedManyWithoutProjectInput
    Customer?: CustomerCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUsersOnProjectsInput = {
    id?: string
    name: string
    Product?: ProductUncheckedCreateNestedManyWithoutProjectInput
    Order?: OrderUncheckedCreateNestedManyWithoutProjectInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUsersOnProjectsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersOnProjectsInput, ProjectUncheckedCreateWithoutUsersOnProjectsInput>
  }

  export type UserUpsertWithoutUsersOnProjectsInput = {
    update: XOR<UserUpdateWithoutUsersOnProjectsInput, UserUncheckedUpdateWithoutUsersOnProjectsInput>
    create: XOR<UserCreateWithoutUsersOnProjectsInput, UserUncheckedCreateWithoutUsersOnProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsersOnProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsersOnProjectsInput, UserUncheckedUpdateWithoutUsersOnProjectsInput>
  }

  export type UserUpdateWithoutUsersOnProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsersOnProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutUsersOnProjectsInput = {
    update: XOR<ProjectUpdateWithoutUsersOnProjectsInput, ProjectUncheckedUpdateWithoutUsersOnProjectsInput>
    create: XOR<ProjectCreateWithoutUsersOnProjectsInput, ProjectUncheckedCreateWithoutUsersOnProjectsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUsersOnProjectsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUsersOnProjectsInput, ProjectUncheckedUpdateWithoutUsersOnProjectsInput>
  }

  export type ProjectUpdateWithoutUsersOnProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutProjectNestedInput
    Order?: OrderUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUsersOnProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutProjectNestedInput
    Order?: OrderUncheckedUpdateManyWithoutProjectNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductVersionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsCreateNestedManyWithoutProductInput
    params?: ParamValuesCreateNestedManyWithoutProductVersionsInput
    product: ProductCreateNestedOneWithoutVersionsInput
  }

  export type ProductVersionUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    images?: ImagesUncheckedCreateNestedManyWithoutProductVersionInput
    orderVersions?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutProductInput
    params?: ParamValuesUncheckedCreateNestedManyWithoutProductVersionsInput
  }

  export type ProductVersionCreateOrConnectWithoutUserInput = {
    where: ProductVersionWhereUniqueInput
    create: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput>
  }

  export type ProductVersionCreateManyUserInputEnvelope = {
    data: ProductVersionCreateManyUserInput | ProductVersionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderVersionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsCreateNestedManyWithoutOrderVersionInput
    order: OrderCreateNestedOneWithoutOrderVersionsInput
  }

  export type OrderVersionUncheckedCreateWithoutUserInput = {
    id?: string
    orderId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedCreateNestedManyWithoutOrderVersionInput
  }

  export type OrderVersionCreateOrConnectWithoutUserInput = {
    where: OrderVersionWhereUniqueInput
    create: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput>
  }

  export type OrderVersionCreateManyUserInputEnvelope = {
    data: OrderVersionCreateManyUserInput | OrderVersionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    project: ProjectCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    text: string
    order: OrderCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    text: string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersOnProjectsCreateWithoutUserInput = {
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
    project: ProjectCreateNestedOneWithoutUsersOnProjectsInput
  }

  export type UsersOnProjectsUncheckedCreateWithoutUserInput = {
    projectId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsCreateOrConnectWithoutUserInput = {
    where: UsersOnProjectsWhereUniqueInput
    create: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput>
  }

  export type UsersOnProjectsCreateManyUserInputEnvelope = {
    data: UsersOnProjectsCreateManyUserInput | UsersOnProjectsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProductVersionUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductVersionWhereUniqueInput
    update: XOR<ProductVersionUpdateWithoutUserInput, ProductVersionUncheckedUpdateWithoutUserInput>
    create: XOR<ProductVersionCreateWithoutUserInput, ProductVersionUncheckedCreateWithoutUserInput>
  }

  export type ProductVersionUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductVersionWhereUniqueInput
    data: XOR<ProductVersionUpdateWithoutUserInput, ProductVersionUncheckedUpdateWithoutUserInput>
  }

  export type ProductVersionUpdateManyWithWhereWithoutUserInput = {
    where: ProductVersionScalarWhereInput
    data: XOR<ProductVersionUpdateManyMutationInput, ProductVersionUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderVersionUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderVersionWhereUniqueInput
    update: XOR<OrderVersionUpdateWithoutUserInput, OrderVersionUncheckedUpdateWithoutUserInput>
    create: XOR<OrderVersionCreateWithoutUserInput, OrderVersionUncheckedCreateWithoutUserInput>
  }

  export type OrderVersionUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderVersionWhereUniqueInput
    data: XOR<OrderVersionUpdateWithoutUserInput, OrderVersionUncheckedUpdateWithoutUserInput>
  }

  export type OrderVersionUpdateManyWithWhereWithoutUserInput = {
    where: OrderVersionScalarWhereInput
    data: XOR<OrderVersionUpdateManyMutationInput, OrderVersionUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersOnProjectsWhereUniqueInput
    update: XOR<UsersOnProjectsUpdateWithoutUserInput, UsersOnProjectsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersOnProjectsCreateWithoutUserInput, UsersOnProjectsUncheckedCreateWithoutUserInput>
  }

  export type UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersOnProjectsWhereUniqueInput
    data: XOR<UsersOnProjectsUpdateWithoutUserInput, UsersOnProjectsUncheckedUpdateWithoutUserInput>
  }

  export type UsersOnProjectsUpdateManyWithWhereWithoutUserInput = {
    where: UsersOnProjectsScalarWhereInput
    data: XOR<UsersOnProjectsUpdateManyMutationInput, UsersOnProjectsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    productVersions?: ProductVersionCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionCreateNestedManyWithoutUserInput
    customers?: CustomerCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    yandex_id: string
    name: string
    surname: string
    avatar?: string | null
    productVersions?: ProductVersionUncheckedCreateNestedManyWithoutUserInput
    orderVersions?: OrderVersionUncheckedCreateNestedManyWithoutUserInput
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    usersOnProjects?: UsersOnProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    productVersions?: ProductVersionUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUpdateManyWithoutUserNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yandex_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    productVersions?: ProductVersionUncheckedUpdateManyWithoutUserNestedInput
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutUserNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    usersOnProjects?: UsersOnProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductVersionUpdateWithoutParamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUpdateManyWithoutProductNestedInput
    product?: ProductUpdateOneRequiredWithoutVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateWithoutParamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUncheckedUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVersionUncheckedUpdateManyWithoutParamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductVersionCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
  }

  export type ProductCountHistoryCreateManyProductInput = {
    id?: string
    value: number
  }

  export type ProductVersionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUpdateManyWithoutProductNestedInput
    params?: ParamValuesUpdateManyWithoutProductVersionsNestedInput
    user?: UserUpdateOneRequiredWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUncheckedUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput
    params?: ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductCountHistoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCountHistoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCountHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateManyProductVersionInput = {
    id?: string
    url: string
  }

  export type OrderVersionOnProductsCreateManyProductInput = {
    orderVersionId: string
    amount: number
  }

  export type ImagesUpdateWithoutProductVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateWithoutProductVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyWithoutProductVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type OrderVersionOnProductsUpdateWithoutProductInput = {
    amount?: IntFieldUpdateOperationsInput | number
    orderVersion?: OrderVersionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type OrderVersionOnProductsUncheckedUpdateWithoutProductInput = {
    orderVersionId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderVersionOnProductsUncheckedUpdateManyWithoutProductInput = {
    orderVersionId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ParamValuesUpdateWithoutProductVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ParamValuesUncheckedUpdateWithoutProductVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ParamValuesUncheckedUpdateManyWithoutProductVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OrderVersionCreateManyOrderInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
  }

  export type CommentCreateManyOrderInput = {
    id?: string
    createdAt?: Date | string
    text: string
    userId: string
  }

  export type OrderVersionUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUpdateManyWithoutOrderVersionNestedInput
    user?: UserUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionNestedInput
  }

  export type OrderVersionUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type CommentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderVersionOnProductsCreateManyOrderVersionInput = {
    productId: string
    amount: number
  }

  export type OrderVersionOnProductsUpdateWithoutOrderVersionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    product?: ProductVersionUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionOnProductsUncheckedUpdateWithoutOrderVersionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderVersions?: OrderVersionUpdateManyWithoutOrderNestedInput
    comments?: CommentUpdateManyWithoutOrderNestedInput
    project?: ProjectUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersOnProjectsCreateManyProjectInput = {
    userId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type ProductCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
  }

  export type OrderCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    customerId: string
  }

  export type CustomerCreateManyProjectInput = {
    id?: string
    userId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
  }

  export type UsersOnProjectsUpdateWithoutProjectInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
    user?: UserUpdateOneRequiredWithoutUsersOnProjectsNestedInput
  }

  export type UsersOnProjectsUncheckedUpdateWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsUncheckedUpdateManyWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type ProductUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ProductVersionUpdateManyWithoutProductNestedInput
    productCountHistory?: ProductCountHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ProductVersionUncheckedUpdateManyWithoutProductNestedInput
    productCountHistory?: ProductCountHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderVersions?: OrderVersionUpdateManyWithoutOrderNestedInput
    comments?: CommentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    orderVersions?: OrderVersionUncheckedUpdateManyWithoutOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type ProductVersionCreateManyUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
  }

  export type OrderVersionCreateManyUserInput = {
    id?: string
    orderId: string
    createdAt?: Date | string
    address: string
    total?: number
    status: $Enums.OrderStatus
  }

  export type CustomerCreateManyUserInput = {
    id?: string
    projectId: string
    firstName: string
    secondName: string
    thirdName?: string | null
    contact: string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    text: string
  }

  export type UsersOnProjectsCreateManyUserInput = {
    projectId: string
    assignedAt?: Date | string
    role?: UsersOnProjectsCreateroleInput | $Enums.Role[]
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVersionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUpdateManyWithoutProductNestedInput
    params?: ParamValuesUpdateManyWithoutProductVersionsNestedInput
    product?: ProductUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: ImagesUncheckedUpdateManyWithoutProductVersionNestedInput
    orderVersions?: OrderVersionOnProductsUncheckedUpdateManyWithoutProductNestedInput
    params?: ParamValuesUncheckedUpdateManyWithoutProductVersionsNestedInput
  }

  export type ProductVersionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderVersionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUpdateManyWithoutOrderVersionNestedInput
    order?: OrderUpdateOneRequiredWithoutOrderVersionsNestedInput
  }

  export type OrderVersionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    products?: OrderVersionOnProductsUncheckedUpdateManyWithoutOrderVersionNestedInput
  }

  export type OrderVersionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    project?: ProjectUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: StringFieldUpdateOperationsInput | string
    thirdName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UsersOnProjectsUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
    project?: ProjectUpdateOneRequiredWithoutUsersOnProjectsNestedInput
  }

  export type UsersOnProjectsUncheckedUpdateWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }

  export type UsersOnProjectsUncheckedUpdateManyWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UsersOnProjectsUpdateroleInput | $Enums.Role[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ParamValuesCountOutputTypeDefaultArgs instead
     */
    export type ParamValuesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParamValuesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVersionCountOutputTypeDefaultArgs instead
     */
    export type ProductVersionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVersionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderVersionCountOutputTypeDefaultArgs instead
     */
    export type OrderVersionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderVersionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImagesDefaultArgs instead
     */
    export type ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParamValuesDefaultArgs instead
     */
    export type ParamValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParamValuesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountHistoryDefaultArgs instead
     */
    export type ProductCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVersionDefaultArgs instead
     */
    export type ProductVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderVersionDefaultArgs instead
     */
    export type OrderVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderVersionOnProductsDefaultArgs instead
     */
    export type OrderVersionOnProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderVersionOnProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersOnProjectsDefaultArgs instead
     */
    export type UsersOnProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersOnProjectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}