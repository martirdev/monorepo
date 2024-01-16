
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model MarketplaceKey
 * 
 */
export type MarketplaceKey = $Result.DefaultSelection<Prisma.$MarketplaceKeyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MarketPlaces: {
  ym: 'ym',
  ozon: 'ozon'
};

export type MarketPlaces = (typeof MarketPlaces)[keyof typeof MarketPlaces]

}

export type MarketPlaces = $Enums.MarketPlaces

export const MarketPlaces: typeof $Enums.MarketPlaces

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Places
 * const places = await prisma.place.findMany()
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
   * // Fetch zero or more Places
   * const places = await prisma.place.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs>;

  /**
   * `prisma.marketplaceKey`: Exposes CRUD operations for the **MarketplaceKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketplaceKeys
    * const marketplaceKeys = await prisma.marketplaceKey.findMany()
    * ```
    */
  get marketplaceKey(): Prisma.MarketplaceKeyDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
    Place: 'Place',
    MarketplaceKey: 'MarketplaceKey'
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
      modelProps: 'place' | 'marketplaceKey'
      txIsolationLevel: never
    },
    model: {
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlaceFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlaceAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      MarketplaceKey: {
        payload: Prisma.$MarketplaceKeyPayload<ExtArgs>
        fields: Prisma.MarketplaceKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketplaceKeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketplaceKeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          findFirst: {
            args: Prisma.MarketplaceKeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketplaceKeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          findMany: {
            args: Prisma.MarketplaceKeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>[]
          }
          create: {
            args: Prisma.MarketplaceKeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          createMany: {
            args: Prisma.MarketplaceKeyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MarketplaceKeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          update: {
            args: Prisma.MarketplaceKeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          deleteMany: {
            args: Prisma.MarketplaceKeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MarketplaceKeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MarketplaceKeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarketplaceKeyPayload>
          }
          aggregate: {
            args: Prisma.MarketplaceKeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMarketplaceKey>
          }
          groupBy: {
            args: Prisma.MarketplaceKeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MarketplaceKeyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MarketplaceKeyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MarketplaceKeyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MarketplaceKeyCountArgs<ExtArgs>,
            result: $Utils.Optional<MarketplaceKeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Count Type MarketplaceKeyCountOutputType
   */

  export type MarketplaceKeyCountOutputType = {
    places: number
  }

  export type MarketplaceKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | MarketplaceKeyCountOutputTypeCountPlacesArgs
  }

  // Custom InputTypes

  /**
   * MarketplaceKeyCountOutputType without action
   */
  export type MarketplaceKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKeyCountOutputType
     */
    select?: MarketplaceKeyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MarketplaceKeyCountOutputType without action
   */
  export type MarketplaceKeyCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    marketplaceKeyId: string | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    marketplaceKeyId: string | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    name: number
    marketplaceKeyId: number
    _all: number
  }


  export type PlaceMinAggregateInputType = {
    id?: true
    name?: true
    marketplaceKeyId?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    name?: true
    marketplaceKeyId?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    name?: true
    marketplaceKeyId?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: string
    name: string
    marketplaceKeyId: string | null
    _count: PlaceCountAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    marketplaceKeyId?: boolean
    MarketplaceKey?: boolean | Place$MarketplaceKeyArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    name?: boolean
    marketplaceKeyId?: boolean
  }

  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MarketplaceKey?: boolean | Place$MarketplaceKeyArgs<ExtArgs>
  }


  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      MarketplaceKey: Prisma.$MarketplaceKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      marketplaceKeyId: string | null
    }, ExtArgs["result"]["place"]>
    composites: {}
  }


  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Place that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
    **/
    create<T extends PlaceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Places.
     *     @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     *     @example
     *     // Create many Places
     *     const place = await prisma.place.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
    **/
    delete<T extends PlaceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
    **/
    upsert<T extends PlaceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>
    ): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Places that matches the filter.
     * @param {PlaceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const place = await prisma.place.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlaceFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Place.
     * @param {PlaceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const place = await prisma.place.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlaceAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
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
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    MarketplaceKey<T extends Place$MarketplaceKeyArgs<ExtArgs> = {}>(args?: Subset<T, Place$MarketplaceKeyArgs<ExtArgs>>): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Place model
   */ 
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'String'>
    readonly name: FieldRef<"Place", 'String'>
    readonly marketplaceKeyId: FieldRef<"Place", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }


  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }


  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }


  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }


  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }


  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }


  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
  }


  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }


  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
  }


  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }


  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }


  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
  }


  /**
   * Place findRaw
   */
  export type PlaceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Place aggregateRaw
   */
  export type PlaceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Place.MarketplaceKey
   */
  export type Place$MarketplaceKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    where?: MarketplaceKeyWhereInput
  }


  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
  }



  /**
   * Model MarketplaceKey
   */

  export type AggregateMarketplaceKey = {
    _count: MarketplaceKeyCountAggregateOutputType | null
    _min: MarketplaceKeyMinAggregateOutputType | null
    _max: MarketplaceKeyMaxAggregateOutputType | null
  }

  export type MarketplaceKeyMinAggregateOutputType = {
    id: string | null
    api_key: string | null
    encrypted_api_key: string | null
    type: $Enums.MarketPlaces | null
  }

  export type MarketplaceKeyMaxAggregateOutputType = {
    id: string | null
    api_key: string | null
    encrypted_api_key: string | null
    type: $Enums.MarketPlaces | null
  }

  export type MarketplaceKeyCountAggregateOutputType = {
    id: number
    api_key: number
    encrypted_api_key: number
    type: number
    _all: number
  }


  export type MarketplaceKeyMinAggregateInputType = {
    id?: true
    api_key?: true
    encrypted_api_key?: true
    type?: true
  }

  export type MarketplaceKeyMaxAggregateInputType = {
    id?: true
    api_key?: true
    encrypted_api_key?: true
    type?: true
  }

  export type MarketplaceKeyCountAggregateInputType = {
    id?: true
    api_key?: true
    encrypted_api_key?: true
    type?: true
    _all?: true
  }

  export type MarketplaceKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceKey to aggregate.
     */
    where?: MarketplaceKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceKeys to fetch.
     */
    orderBy?: MarketplaceKeyOrderByWithRelationInput | MarketplaceKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketplaceKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketplaceKeys
    **/
    _count?: true | MarketplaceKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketplaceKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketplaceKeyMaxAggregateInputType
  }

  export type GetMarketplaceKeyAggregateType<T extends MarketplaceKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketplaceKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketplaceKey[P]>
      : GetScalarType<T[P], AggregateMarketplaceKey[P]>
  }




  export type MarketplaceKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketplaceKeyWhereInput
    orderBy?: MarketplaceKeyOrderByWithAggregationInput | MarketplaceKeyOrderByWithAggregationInput[]
    by: MarketplaceKeyScalarFieldEnum[] | MarketplaceKeyScalarFieldEnum
    having?: MarketplaceKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketplaceKeyCountAggregateInputType | true
    _min?: MarketplaceKeyMinAggregateInputType
    _max?: MarketplaceKeyMaxAggregateInputType
  }

  export type MarketplaceKeyGroupByOutputType = {
    id: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
    _count: MarketplaceKeyCountAggregateOutputType | null
    _min: MarketplaceKeyMinAggregateOutputType | null
    _max: MarketplaceKeyMaxAggregateOutputType | null
  }

  type GetMarketplaceKeyGroupByPayload<T extends MarketplaceKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketplaceKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketplaceKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketplaceKeyGroupByOutputType[P]>
            : GetScalarType<T[P], MarketplaceKeyGroupByOutputType[P]>
        }
      >
    >


  export type MarketplaceKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key?: boolean
    encrypted_api_key?: boolean
    type?: boolean
    places?: boolean | MarketplaceKey$placesArgs<ExtArgs>
    _count?: boolean | MarketplaceKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketplaceKey"]>

  export type MarketplaceKeySelectScalar = {
    id?: boolean
    api_key?: boolean
    encrypted_api_key?: boolean
    type?: boolean
  }

  export type MarketplaceKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | MarketplaceKey$placesArgs<ExtArgs>
    _count?: boolean | MarketplaceKeyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MarketplaceKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketplaceKey"
    objects: {
      places: Prisma.$PlacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      api_key: string
      encrypted_api_key: string
      type: $Enums.MarketPlaces
    }, ExtArgs["result"]["marketplaceKey"]>
    composites: {}
  }


  type MarketplaceKeyGetPayload<S extends boolean | null | undefined | MarketplaceKeyDefaultArgs> = $Result.GetResult<Prisma.$MarketplaceKeyPayload, S>

  type MarketplaceKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketplaceKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketplaceKeyCountAggregateInputType | true
    }

  export interface MarketplaceKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketplaceKey'], meta: { name: 'MarketplaceKey' } }
    /**
     * Find zero or one MarketplaceKey that matches the filter.
     * @param {MarketplaceKeyFindUniqueArgs} args - Arguments to find a MarketplaceKey
     * @example
     * // Get one MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MarketplaceKeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyFindUniqueArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MarketplaceKey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MarketplaceKeyFindUniqueOrThrowArgs} args - Arguments to find a MarketplaceKey
     * @example
     * // Get one MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MarketplaceKeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MarketplaceKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyFindFirstArgs} args - Arguments to find a MarketplaceKey
     * @example
     * // Get one MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MarketplaceKeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyFindFirstArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MarketplaceKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyFindFirstOrThrowArgs} args - Arguments to find a MarketplaceKey
     * @example
     * // Get one MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MarketplaceKeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MarketplaceKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketplaceKeys
     * const marketplaceKeys = await prisma.marketplaceKey.findMany()
     * 
     * // Get first 10 MarketplaceKeys
     * const marketplaceKeys = await prisma.marketplaceKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketplaceKeyWithIdOnly = await prisma.marketplaceKey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MarketplaceKeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MarketplaceKey.
     * @param {MarketplaceKeyCreateArgs} args - Arguments to create a MarketplaceKey.
     * @example
     * // Create one MarketplaceKey
     * const MarketplaceKey = await prisma.marketplaceKey.create({
     *   data: {
     *     // ... data to create a MarketplaceKey
     *   }
     * })
     * 
    **/
    create<T extends MarketplaceKeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyCreateArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MarketplaceKeys.
     *     @param {MarketplaceKeyCreateManyArgs} args - Arguments to create many MarketplaceKeys.
     *     @example
     *     // Create many MarketplaceKeys
     *     const marketplaceKey = await prisma.marketplaceKey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MarketplaceKeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarketplaceKey.
     * @param {MarketplaceKeyDeleteArgs} args - Arguments to delete one MarketplaceKey.
     * @example
     * // Delete one MarketplaceKey
     * const MarketplaceKey = await prisma.marketplaceKey.delete({
     *   where: {
     *     // ... filter to delete one MarketplaceKey
     *   }
     * })
     * 
    **/
    delete<T extends MarketplaceKeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyDeleteArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MarketplaceKey.
     * @param {MarketplaceKeyUpdateArgs} args - Arguments to update one MarketplaceKey.
     * @example
     * // Update one MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MarketplaceKeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyUpdateArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MarketplaceKeys.
     * @param {MarketplaceKeyDeleteManyArgs} args - Arguments to filter MarketplaceKeys to delete.
     * @example
     * // Delete a few MarketplaceKeys
     * const { count } = await prisma.marketplaceKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MarketplaceKeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarketplaceKeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketplaceKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketplaceKeys
     * const marketplaceKey = await prisma.marketplaceKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MarketplaceKeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketplaceKey.
     * @param {MarketplaceKeyUpsertArgs} args - Arguments to update or create a MarketplaceKey.
     * @example
     * // Update or create a MarketplaceKey
     * const marketplaceKey = await prisma.marketplaceKey.upsert({
     *   create: {
     *     // ... data to create a MarketplaceKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketplaceKey we want to update
     *   }
     * })
    **/
    upsert<T extends MarketplaceKeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MarketplaceKeyUpsertArgs<ExtArgs>>
    ): Prisma__MarketplaceKeyClient<$Result.GetResult<Prisma.$MarketplaceKeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more MarketplaceKeys that matches the filter.
     * @param {MarketplaceKeyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const marketplaceKey = await prisma.marketplaceKey.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MarketplaceKeyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MarketplaceKey.
     * @param {MarketplaceKeyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const marketplaceKey = await prisma.marketplaceKey.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MarketplaceKeyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of MarketplaceKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyCountArgs} args - Arguments to filter MarketplaceKeys to count.
     * @example
     * // Count the number of MarketplaceKeys
     * const count = await prisma.marketplaceKey.count({
     *   where: {
     *     // ... the filter for the MarketplaceKeys we want to count
     *   }
     * })
    **/
    count<T extends MarketplaceKeyCountArgs>(
      args?: Subset<T, MarketplaceKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketplaceKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketplaceKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketplaceKeyAggregateArgs>(args: Subset<T, MarketplaceKeyAggregateArgs>): Prisma.PrismaPromise<GetMarketplaceKeyAggregateType<T>>

    /**
     * Group by MarketplaceKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceKeyGroupByArgs} args - Group by arguments.
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
      T extends MarketplaceKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketplaceKeyGroupByArgs['orderBy'] }
        : { orderBy?: MarketplaceKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketplaceKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketplaceKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketplaceKey model
   */
  readonly fields: MarketplaceKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketplaceKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketplaceKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    places<T extends MarketplaceKey$placesArgs<ExtArgs> = {}>(args?: Subset<T, MarketplaceKey$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the MarketplaceKey model
   */ 
  interface MarketplaceKeyFieldRefs {
    readonly id: FieldRef<"MarketplaceKey", 'String'>
    readonly api_key: FieldRef<"MarketplaceKey", 'String'>
    readonly encrypted_api_key: FieldRef<"MarketplaceKey", 'String'>
    readonly type: FieldRef<"MarketplaceKey", 'MarketPlaces'>
  }
    

  // Custom InputTypes

  /**
   * MarketplaceKey findUnique
   */
  export type MarketplaceKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceKey to fetch.
     */
    where: MarketplaceKeyWhereUniqueInput
  }


  /**
   * MarketplaceKey findUniqueOrThrow
   */
  export type MarketplaceKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceKey to fetch.
     */
    where: MarketplaceKeyWhereUniqueInput
  }


  /**
   * MarketplaceKey findFirst
   */
  export type MarketplaceKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceKey to fetch.
     */
    where?: MarketplaceKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceKeys to fetch.
     */
    orderBy?: MarketplaceKeyOrderByWithRelationInput | MarketplaceKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketplaceKeys.
     */
    cursor?: MarketplaceKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketplaceKeys.
     */
    distinct?: MarketplaceKeyScalarFieldEnum | MarketplaceKeyScalarFieldEnum[]
  }


  /**
   * MarketplaceKey findFirstOrThrow
   */
  export type MarketplaceKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceKey to fetch.
     */
    where?: MarketplaceKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceKeys to fetch.
     */
    orderBy?: MarketplaceKeyOrderByWithRelationInput | MarketplaceKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketplaceKeys.
     */
    cursor?: MarketplaceKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketplaceKeys.
     */
    distinct?: MarketplaceKeyScalarFieldEnum | MarketplaceKeyScalarFieldEnum[]
  }


  /**
   * MarketplaceKey findMany
   */
  export type MarketplaceKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceKeys to fetch.
     */
    where?: MarketplaceKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceKeys to fetch.
     */
    orderBy?: MarketplaceKeyOrderByWithRelationInput | MarketplaceKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketplaceKeys.
     */
    cursor?: MarketplaceKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceKeys.
     */
    skip?: number
    distinct?: MarketplaceKeyScalarFieldEnum | MarketplaceKeyScalarFieldEnum[]
  }


  /**
   * MarketplaceKey create
   */
  export type MarketplaceKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketplaceKey.
     */
    data: XOR<MarketplaceKeyCreateInput, MarketplaceKeyUncheckedCreateInput>
  }


  /**
   * MarketplaceKey createMany
   */
  export type MarketplaceKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketplaceKeys.
     */
    data: MarketplaceKeyCreateManyInput | MarketplaceKeyCreateManyInput[]
  }


  /**
   * MarketplaceKey update
   */
  export type MarketplaceKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketplaceKey.
     */
    data: XOR<MarketplaceKeyUpdateInput, MarketplaceKeyUncheckedUpdateInput>
    /**
     * Choose, which MarketplaceKey to update.
     */
    where: MarketplaceKeyWhereUniqueInput
  }


  /**
   * MarketplaceKey updateMany
   */
  export type MarketplaceKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketplaceKeys.
     */
    data: XOR<MarketplaceKeyUpdateManyMutationInput, MarketplaceKeyUncheckedUpdateManyInput>
    /**
     * Filter which MarketplaceKeys to update
     */
    where?: MarketplaceKeyWhereInput
  }


  /**
   * MarketplaceKey upsert
   */
  export type MarketplaceKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketplaceKey to update in case it exists.
     */
    where: MarketplaceKeyWhereUniqueInput
    /**
     * In case the MarketplaceKey found by the `where` argument doesn't exist, create a new MarketplaceKey with this data.
     */
    create: XOR<MarketplaceKeyCreateInput, MarketplaceKeyUncheckedCreateInput>
    /**
     * In case the MarketplaceKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketplaceKeyUpdateInput, MarketplaceKeyUncheckedUpdateInput>
  }


  /**
   * MarketplaceKey delete
   */
  export type MarketplaceKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
    /**
     * Filter which MarketplaceKey to delete.
     */
    where: MarketplaceKeyWhereUniqueInput
  }


  /**
   * MarketplaceKey deleteMany
   */
  export type MarketplaceKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceKeys to delete
     */
    where?: MarketplaceKeyWhereInput
  }


  /**
   * MarketplaceKey findRaw
   */
  export type MarketplaceKeyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MarketplaceKey aggregateRaw
   */
  export type MarketplaceKeyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MarketplaceKey.places
   */
  export type MarketplaceKey$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    cursor?: PlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }


  /**
   * MarketplaceKey without action
   */
  export type MarketplaceKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceKey
     */
    select?: MarketplaceKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarketplaceKeyInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const PlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    marketplaceKeyId: 'marketplaceKeyId'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const MarketplaceKeyScalarFieldEnum: {
    id: 'id',
    api_key: 'api_key',
    encrypted_api_key: 'encrypted_api_key',
    type: 'type'
  };

  export type MarketplaceKeyScalarFieldEnum = (typeof MarketplaceKeyScalarFieldEnum)[keyof typeof MarketplaceKeyScalarFieldEnum]


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
   * Reference to a field of type 'MarketPlaces'
   */
  export type EnumMarketPlacesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketPlaces'>
    


  /**
   * Reference to a field of type 'MarketPlaces[]'
   */
  export type ListEnumMarketPlacesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketPlaces[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    marketplaceKeyId?: StringNullableFilter<"Place"> | string | null
    MarketplaceKey?: XOR<MarketplaceKeyNullableRelationFilter, MarketplaceKeyWhereInput> | null
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    marketplaceKeyId?: SortOrder
    MarketplaceKey?: MarketplaceKeyOrderByWithRelationInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    name?: StringFilter<"Place"> | string
    marketplaceKeyId?: StringNullableFilter<"Place"> | string | null
    MarketplaceKey?: XOR<MarketplaceKeyNullableRelationFilter, MarketplaceKeyWhereInput> | null
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    marketplaceKeyId?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Place"> | string
    name?: StringWithAggregatesFilter<"Place"> | string
    marketplaceKeyId?: StringNullableWithAggregatesFilter<"Place"> | string | null
  }

  export type MarketplaceKeyWhereInput = {
    AND?: MarketplaceKeyWhereInput | MarketplaceKeyWhereInput[]
    OR?: MarketplaceKeyWhereInput[]
    NOT?: MarketplaceKeyWhereInput | MarketplaceKeyWhereInput[]
    id?: StringFilter<"MarketplaceKey"> | string
    api_key?: StringFilter<"MarketplaceKey"> | string
    encrypted_api_key?: StringFilter<"MarketplaceKey"> | string
    type?: EnumMarketPlacesFilter<"MarketplaceKey"> | $Enums.MarketPlaces
    places?: PlaceListRelationFilter
  }

  export type MarketplaceKeyOrderByWithRelationInput = {
    id?: SortOrder
    api_key?: SortOrder
    encrypted_api_key?: SortOrder
    type?: SortOrder
    places?: PlaceOrderByRelationAggregateInput
  }

  export type MarketplaceKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    api_key?: string
    AND?: MarketplaceKeyWhereInput | MarketplaceKeyWhereInput[]
    OR?: MarketplaceKeyWhereInput[]
    NOT?: MarketplaceKeyWhereInput | MarketplaceKeyWhereInput[]
    encrypted_api_key?: StringFilter<"MarketplaceKey"> | string
    type?: EnumMarketPlacesFilter<"MarketplaceKey"> | $Enums.MarketPlaces
    places?: PlaceListRelationFilter
  }, "id" | "api_key">

  export type MarketplaceKeyOrderByWithAggregationInput = {
    id?: SortOrder
    api_key?: SortOrder
    encrypted_api_key?: SortOrder
    type?: SortOrder
    _count?: MarketplaceKeyCountOrderByAggregateInput
    _max?: MarketplaceKeyMaxOrderByAggregateInput
    _min?: MarketplaceKeyMinOrderByAggregateInput
  }

  export type MarketplaceKeyScalarWhereWithAggregatesInput = {
    AND?: MarketplaceKeyScalarWhereWithAggregatesInput | MarketplaceKeyScalarWhereWithAggregatesInput[]
    OR?: MarketplaceKeyScalarWhereWithAggregatesInput[]
    NOT?: MarketplaceKeyScalarWhereWithAggregatesInput | MarketplaceKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketplaceKey"> | string
    api_key?: StringWithAggregatesFilter<"MarketplaceKey"> | string
    encrypted_api_key?: StringWithAggregatesFilter<"MarketplaceKey"> | string
    type?: EnumMarketPlacesWithAggregatesFilter<"MarketplaceKey"> | $Enums.MarketPlaces
  }

  export type PlaceCreateInput = {
    id?: string
    name: string
    MarketplaceKey?: MarketplaceKeyCreateNestedOneWithoutPlacesInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: string
    name: string
    marketplaceKeyId?: string | null
  }

  export type PlaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    MarketplaceKey?: MarketplaceKeyUpdateOneWithoutPlacesNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    marketplaceKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaceCreateManyInput = {
    id?: string
    name: string
    marketplaceKeyId?: string | null
  }

  export type PlaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    marketplaceKeyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketplaceKeyCreateInput = {
    id?: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
    places?: PlaceCreateNestedManyWithoutMarketplaceKeyInput
  }

  export type MarketplaceKeyUncheckedCreateInput = {
    id?: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
    places?: PlaceUncheckedCreateNestedManyWithoutMarketplaceKeyInput
  }

  export type MarketplaceKeyUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
    places?: PlaceUpdateManyWithoutMarketplaceKeyNestedInput
  }

  export type MarketplaceKeyUncheckedUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
    places?: PlaceUncheckedUpdateManyWithoutMarketplaceKeyNestedInput
  }

  export type MarketplaceKeyCreateManyInput = {
    id?: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
  }

  export type MarketplaceKeyUpdateManyMutationInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
  }

  export type MarketplaceKeyUncheckedUpdateManyInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
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
    isSet?: boolean
  }

  export type MarketplaceKeyNullableRelationFilter = {
    is?: MarketplaceKeyWhereInput | null
    isNot?: MarketplaceKeyWhereInput | null
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marketplaceKeyId?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marketplaceKeyId?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    marketplaceKeyId?: SortOrder
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
    isSet?: boolean
  }

  export type EnumMarketPlacesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketPlaces | EnumMarketPlacesFieldRefInput<$PrismaModel>
    in?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketPlacesFilter<$PrismaModel> | $Enums.MarketPlaces
  }

  export type PlaceListRelationFilter = {
    every?: PlaceWhereInput
    some?: PlaceWhereInput
    none?: PlaceWhereInput
  }

  export type PlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketplaceKeyCountOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    encrypted_api_key?: SortOrder
    type?: SortOrder
  }

  export type MarketplaceKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    encrypted_api_key?: SortOrder
    type?: SortOrder
  }

  export type MarketplaceKeyMinOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    encrypted_api_key?: SortOrder
    type?: SortOrder
  }

  export type EnumMarketPlacesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketPlaces | EnumMarketPlacesFieldRefInput<$PrismaModel>
    in?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketPlacesWithAggregatesFilter<$PrismaModel> | $Enums.MarketPlaces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketPlacesFilter<$PrismaModel>
    _max?: NestedEnumMarketPlacesFilter<$PrismaModel>
  }

  export type MarketplaceKeyCreateNestedOneWithoutPlacesInput = {
    create?: XOR<MarketplaceKeyCreateWithoutPlacesInput, MarketplaceKeyUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: MarketplaceKeyCreateOrConnectWithoutPlacesInput
    connect?: MarketplaceKeyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MarketplaceKeyUpdateOneWithoutPlacesNestedInput = {
    create?: XOR<MarketplaceKeyCreateWithoutPlacesInput, MarketplaceKeyUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: MarketplaceKeyCreateOrConnectWithoutPlacesInput
    upsert?: MarketplaceKeyUpsertWithoutPlacesInput
    disconnect?: boolean
    delete?: MarketplaceKeyWhereInput | boolean
    connect?: MarketplaceKeyWhereUniqueInput
    update?: XOR<XOR<MarketplaceKeyUpdateToOneWithWhereWithoutPlacesInput, MarketplaceKeyUpdateWithoutPlacesInput>, MarketplaceKeyUncheckedUpdateWithoutPlacesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type PlaceCreateNestedManyWithoutMarketplaceKeyInput = {
    create?: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput> | PlaceCreateWithoutMarketplaceKeyInput[] | PlaceUncheckedCreateWithoutMarketplaceKeyInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutMarketplaceKeyInput | PlaceCreateOrConnectWithoutMarketplaceKeyInput[]
    createMany?: PlaceCreateManyMarketplaceKeyInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type PlaceUncheckedCreateNestedManyWithoutMarketplaceKeyInput = {
    create?: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput> | PlaceCreateWithoutMarketplaceKeyInput[] | PlaceUncheckedCreateWithoutMarketplaceKeyInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutMarketplaceKeyInput | PlaceCreateOrConnectWithoutMarketplaceKeyInput[]
    createMany?: PlaceCreateManyMarketplaceKeyInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type EnumMarketPlacesFieldUpdateOperationsInput = {
    set?: $Enums.MarketPlaces
  }

  export type PlaceUpdateManyWithoutMarketplaceKeyNestedInput = {
    create?: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput> | PlaceCreateWithoutMarketplaceKeyInput[] | PlaceUncheckedCreateWithoutMarketplaceKeyInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutMarketplaceKeyInput | PlaceCreateOrConnectWithoutMarketplaceKeyInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutMarketplaceKeyInput | PlaceUpsertWithWhereUniqueWithoutMarketplaceKeyInput[]
    createMany?: PlaceCreateManyMarketplaceKeyInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutMarketplaceKeyInput | PlaceUpdateWithWhereUniqueWithoutMarketplaceKeyInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutMarketplaceKeyInput | PlaceUpdateManyWithWhereWithoutMarketplaceKeyInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type PlaceUncheckedUpdateManyWithoutMarketplaceKeyNestedInput = {
    create?: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput> | PlaceCreateWithoutMarketplaceKeyInput[] | PlaceUncheckedCreateWithoutMarketplaceKeyInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutMarketplaceKeyInput | PlaceCreateOrConnectWithoutMarketplaceKeyInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutMarketplaceKeyInput | PlaceUpsertWithWhereUniqueWithoutMarketplaceKeyInput[]
    createMany?: PlaceCreateManyMarketplaceKeyInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutMarketplaceKeyInput | PlaceUpdateWithWhereUniqueWithoutMarketplaceKeyInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutMarketplaceKeyInput | PlaceUpdateManyWithWhereWithoutMarketplaceKeyInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumMarketPlacesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketPlaces | EnumMarketPlacesFieldRefInput<$PrismaModel>
    in?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketPlacesFilter<$PrismaModel> | $Enums.MarketPlaces
  }

  export type NestedEnumMarketPlacesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketPlaces | EnumMarketPlacesFieldRefInput<$PrismaModel>
    in?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketPlaces[] | ListEnumMarketPlacesFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketPlacesWithAggregatesFilter<$PrismaModel> | $Enums.MarketPlaces
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketPlacesFilter<$PrismaModel>
    _max?: NestedEnumMarketPlacesFilter<$PrismaModel>
  }

  export type MarketplaceKeyCreateWithoutPlacesInput = {
    id?: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
  }

  export type MarketplaceKeyUncheckedCreateWithoutPlacesInput = {
    id?: string
    api_key: string
    encrypted_api_key: string
    type: $Enums.MarketPlaces
  }

  export type MarketplaceKeyCreateOrConnectWithoutPlacesInput = {
    where: MarketplaceKeyWhereUniqueInput
    create: XOR<MarketplaceKeyCreateWithoutPlacesInput, MarketplaceKeyUncheckedCreateWithoutPlacesInput>
  }

  export type MarketplaceKeyUpsertWithoutPlacesInput = {
    update: XOR<MarketplaceKeyUpdateWithoutPlacesInput, MarketplaceKeyUncheckedUpdateWithoutPlacesInput>
    create: XOR<MarketplaceKeyCreateWithoutPlacesInput, MarketplaceKeyUncheckedCreateWithoutPlacesInput>
    where?: MarketplaceKeyWhereInput
  }

  export type MarketplaceKeyUpdateToOneWithWhereWithoutPlacesInput = {
    where?: MarketplaceKeyWhereInput
    data: XOR<MarketplaceKeyUpdateWithoutPlacesInput, MarketplaceKeyUncheckedUpdateWithoutPlacesInput>
  }

  export type MarketplaceKeyUpdateWithoutPlacesInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
  }

  export type MarketplaceKeyUncheckedUpdateWithoutPlacesInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    encrypted_api_key?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketPlacesFieldUpdateOperationsInput | $Enums.MarketPlaces
  }

  export type PlaceCreateWithoutMarketplaceKeyInput = {
    id?: string
    name: string
  }

  export type PlaceUncheckedCreateWithoutMarketplaceKeyInput = {
    id?: string
    name: string
  }

  export type PlaceCreateOrConnectWithoutMarketplaceKeyInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput>
  }

  export type PlaceCreateManyMarketplaceKeyInputEnvelope = {
    data: PlaceCreateManyMarketplaceKeyInput | PlaceCreateManyMarketplaceKeyInput[]
  }

  export type PlaceUpsertWithWhereUniqueWithoutMarketplaceKeyInput = {
    where: PlaceWhereUniqueInput
    update: XOR<PlaceUpdateWithoutMarketplaceKeyInput, PlaceUncheckedUpdateWithoutMarketplaceKeyInput>
    create: XOR<PlaceCreateWithoutMarketplaceKeyInput, PlaceUncheckedCreateWithoutMarketplaceKeyInput>
  }

  export type PlaceUpdateWithWhereUniqueWithoutMarketplaceKeyInput = {
    where: PlaceWhereUniqueInput
    data: XOR<PlaceUpdateWithoutMarketplaceKeyInput, PlaceUncheckedUpdateWithoutMarketplaceKeyInput>
  }

  export type PlaceUpdateManyWithWhereWithoutMarketplaceKeyInput = {
    where: PlaceScalarWhereInput
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyWithoutMarketplaceKeyInput>
  }

  export type PlaceScalarWhereInput = {
    AND?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    OR?: PlaceScalarWhereInput[]
    NOT?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    marketplaceKeyId?: StringNullableFilter<"Place"> | string | null
  }

  export type PlaceCreateManyMarketplaceKeyInput = {
    id?: string
    name: string
  }

  export type PlaceUpdateWithoutMarketplaceKeyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateWithoutMarketplaceKeyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateManyWithoutMarketplaceKeyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MarketplaceKeyCountOutputTypeDefaultArgs instead
     */
    export type MarketplaceKeyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketplaceKeyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaceDefaultArgs instead
     */
    export type PlaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketplaceKeyDefaultArgs instead
     */
    export type MarketplaceKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketplaceKeyDefaultArgs<ExtArgs>

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