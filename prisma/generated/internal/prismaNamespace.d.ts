import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly UserInfo: "UserInfo";
    readonly Bus: "Bus";
    readonly Swdi: "Swdi";
    readonly Pcn: "Pcn";
    readonly CVS: "CVS";
    readonly Miscellaneous: "Miscellaneous";
    readonly EncodedDocument: "EncodedDocument";
    readonly OperationsOfficeNum: "OperationsOfficeNum";
    readonly Lgu: "Lgu";
    readonly Barangay: "Barangay";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userInfo" | "bus" | "swdi" | "pcn" | "cVS" | "miscellaneous" | "encodedDocument" | "operationsOfficeNum" | "lgu" | "barangay";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserInfo: {
            payload: Prisma.$UserInfoPayload<ExtArgs>;
            fields: Prisma.UserInfoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserInfoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                findFirst: {
                    args: Prisma.UserInfoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                findMany: {
                    args: Prisma.UserInfoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>[];
                };
                create: {
                    args: Prisma.UserInfoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                createMany: {
                    args: Prisma.UserInfoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserInfoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>[];
                };
                delete: {
                    args: Prisma.UserInfoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                update: {
                    args: Prisma.UserInfoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                deleteMany: {
                    args: Prisma.UserInfoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserInfoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserInfoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>[];
                };
                upsert: {
                    args: Prisma.UserInfoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserInfoPayload>;
                };
                aggregate: {
                    args: Prisma.UserInfoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserInfo>;
                };
                groupBy: {
                    args: Prisma.UserInfoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserInfoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserInfoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserInfoCountAggregateOutputType> | number;
                };
            };
        };
        Bus: {
            payload: Prisma.$BusPayload<ExtArgs>;
            fields: Prisma.BusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                findFirst: {
                    args: Prisma.BusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                findMany: {
                    args: Prisma.BusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>[];
                };
                create: {
                    args: Prisma.BusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                createMany: {
                    args: Prisma.BusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>[];
                };
                delete: {
                    args: Prisma.BusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                update: {
                    args: Prisma.BusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                deleteMany: {
                    args: Prisma.BusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>[];
                };
                upsert: {
                    args: Prisma.BusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusPayload>;
                };
                aggregate: {
                    args: Prisma.BusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBus>;
                };
                groupBy: {
                    args: Prisma.BusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusCountAggregateOutputType> | number;
                };
            };
        };
        Swdi: {
            payload: Prisma.$SwdiPayload<ExtArgs>;
            fields: Prisma.SwdiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SwdiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SwdiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                findFirst: {
                    args: Prisma.SwdiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SwdiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                findMany: {
                    args: Prisma.SwdiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>[];
                };
                create: {
                    args: Prisma.SwdiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                createMany: {
                    args: Prisma.SwdiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SwdiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>[];
                };
                delete: {
                    args: Prisma.SwdiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                update: {
                    args: Prisma.SwdiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                deleteMany: {
                    args: Prisma.SwdiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SwdiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SwdiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>[];
                };
                upsert: {
                    args: Prisma.SwdiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwdiPayload>;
                };
                aggregate: {
                    args: Prisma.SwdiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSwdi>;
                };
                groupBy: {
                    args: Prisma.SwdiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwdiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SwdiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwdiCountAggregateOutputType> | number;
                };
            };
        };
        Pcn: {
            payload: Prisma.$PcnPayload<ExtArgs>;
            fields: Prisma.PcnFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PcnFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PcnFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                findFirst: {
                    args: Prisma.PcnFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PcnFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                findMany: {
                    args: Prisma.PcnFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>[];
                };
                create: {
                    args: Prisma.PcnCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                createMany: {
                    args: Prisma.PcnCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PcnCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>[];
                };
                delete: {
                    args: Prisma.PcnDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                update: {
                    args: Prisma.PcnUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                deleteMany: {
                    args: Prisma.PcnDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PcnUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PcnUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>[];
                };
                upsert: {
                    args: Prisma.PcnUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PcnPayload>;
                };
                aggregate: {
                    args: Prisma.PcnAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePcn>;
                };
                groupBy: {
                    args: Prisma.PcnGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PcnGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PcnCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PcnCountAggregateOutputType> | number;
                };
            };
        };
        CVS: {
            payload: Prisma.$CVSPayload<ExtArgs>;
            fields: Prisma.CVSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CVSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CVSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                findFirst: {
                    args: Prisma.CVSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CVSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                findMany: {
                    args: Prisma.CVSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>[];
                };
                create: {
                    args: Prisma.CVSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                createMany: {
                    args: Prisma.CVSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CVSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>[];
                };
                delete: {
                    args: Prisma.CVSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                update: {
                    args: Prisma.CVSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                deleteMany: {
                    args: Prisma.CVSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CVSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CVSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>[];
                };
                upsert: {
                    args: Prisma.CVSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CVSPayload>;
                };
                aggregate: {
                    args: Prisma.CVSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCVS>;
                };
                groupBy: {
                    args: Prisma.CVSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CVSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CVSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CVSCountAggregateOutputType> | number;
                };
            };
        };
        Miscellaneous: {
            payload: Prisma.$MiscellaneousPayload<ExtArgs>;
            fields: Prisma.MiscellaneousFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MiscellaneousFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MiscellaneousFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                findFirst: {
                    args: Prisma.MiscellaneousFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MiscellaneousFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                findMany: {
                    args: Prisma.MiscellaneousFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>[];
                };
                create: {
                    args: Prisma.MiscellaneousCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                createMany: {
                    args: Prisma.MiscellaneousCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MiscellaneousCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>[];
                };
                delete: {
                    args: Prisma.MiscellaneousDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                update: {
                    args: Prisma.MiscellaneousUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                deleteMany: {
                    args: Prisma.MiscellaneousDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MiscellaneousUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MiscellaneousUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>[];
                };
                upsert: {
                    args: Prisma.MiscellaneousUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MiscellaneousPayload>;
                };
                aggregate: {
                    args: Prisma.MiscellaneousAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMiscellaneous>;
                };
                groupBy: {
                    args: Prisma.MiscellaneousGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MiscellaneousGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MiscellaneousCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MiscellaneousCountAggregateOutputType> | number;
                };
            };
        };
        EncodedDocument: {
            payload: Prisma.$EncodedDocumentPayload<ExtArgs>;
            fields: Prisma.EncodedDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncodedDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncodedDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.EncodedDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncodedDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                findMany: {
                    args: Prisma.EncodedDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>[];
                };
                create: {
                    args: Prisma.EncodedDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                createMany: {
                    args: Prisma.EncodedDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncodedDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>[];
                };
                delete: {
                    args: Prisma.EncodedDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                update: {
                    args: Prisma.EncodedDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.EncodedDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncodedDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncodedDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.EncodedDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncodedDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.EncodedDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncodedDocument>;
                };
                groupBy: {
                    args: Prisma.EncodedDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncodedDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncodedDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncodedDocumentCountAggregateOutputType> | number;
                };
            };
        };
        OperationsOfficeNum: {
            payload: Prisma.$OperationsOfficeNumPayload<ExtArgs>;
            fields: Prisma.OperationsOfficeNumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OperationsOfficeNumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OperationsOfficeNumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                findFirst: {
                    args: Prisma.OperationsOfficeNumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OperationsOfficeNumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                findMany: {
                    args: Prisma.OperationsOfficeNumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>[];
                };
                create: {
                    args: Prisma.OperationsOfficeNumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                createMany: {
                    args: Prisma.OperationsOfficeNumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OperationsOfficeNumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>[];
                };
                delete: {
                    args: Prisma.OperationsOfficeNumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                update: {
                    args: Prisma.OperationsOfficeNumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                deleteMany: {
                    args: Prisma.OperationsOfficeNumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OperationsOfficeNumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OperationsOfficeNumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>[];
                };
                upsert: {
                    args: Prisma.OperationsOfficeNumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationsOfficeNumPayload>;
                };
                aggregate: {
                    args: Prisma.OperationsOfficeNumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOperationsOfficeNum>;
                };
                groupBy: {
                    args: Prisma.OperationsOfficeNumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationsOfficeNumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OperationsOfficeNumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationsOfficeNumCountAggregateOutputType> | number;
                };
            };
        };
        Lgu: {
            payload: Prisma.$LguPayload<ExtArgs>;
            fields: Prisma.LguFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LguFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LguFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                findFirst: {
                    args: Prisma.LguFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LguFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                findMany: {
                    args: Prisma.LguFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>[];
                };
                create: {
                    args: Prisma.LguCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                createMany: {
                    args: Prisma.LguCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LguCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>[];
                };
                delete: {
                    args: Prisma.LguDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                update: {
                    args: Prisma.LguUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                deleteMany: {
                    args: Prisma.LguDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LguUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LguUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>[];
                };
                upsert: {
                    args: Prisma.LguUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LguPayload>;
                };
                aggregate: {
                    args: Prisma.LguAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLgu>;
                };
                groupBy: {
                    args: Prisma.LguGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LguGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LguCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LguCountAggregateOutputType> | number;
                };
            };
        };
        Barangay: {
            payload: Prisma.$BarangayPayload<ExtArgs>;
            fields: Prisma.BarangayFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BarangayFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BarangayFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                findFirst: {
                    args: Prisma.BarangayFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BarangayFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                findMany: {
                    args: Prisma.BarangayFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>[];
                };
                create: {
                    args: Prisma.BarangayCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                createMany: {
                    args: Prisma.BarangayCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BarangayCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>[];
                };
                delete: {
                    args: Prisma.BarangayDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                update: {
                    args: Prisma.BarangayUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                deleteMany: {
                    args: Prisma.BarangayDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BarangayUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BarangayUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>[];
                };
                upsert: {
                    args: Prisma.BarangayUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarangayPayload>;
                };
                aggregate: {
                    args: Prisma.BarangayAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBarangay>;
                };
                groupBy: {
                    args: Prisma.BarangayGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarangayGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BarangayCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarangayCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly govUsername: "govUsername";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserInfoScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly middleName: "middleName";
    readonly assignedOperationId: "assignedOperationId";
    readonly assignedLGUID: "assignedLGUID";
    readonly assignedBarangayId: "assignedBarangayId";
    readonly phone: "phone";
    readonly sessionTime: "sessionTime";
    readonly language: "language";
    readonly timezone: "timezone";
    readonly twoFactorAuth: "twoFactorAuth";
    readonly smsAlert: "smsAlert";
    readonly loginAlert: "loginAlert";
    readonly SecuritAlert: "SecuritAlert";
    readonly emailAlert: "emailAlert";
    readonly weeklyReportAlert: "weeklyReportAlert";
    readonly theme: "theme";
};
export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum];
export declare const BusScalarFieldEnum: {
    readonly id: "id";
    readonly lgu: "lgu";
    readonly barangay: "barangay";
    readonly hhId: "hhId";
    readonly granteeName: "granteeName";
    readonly typeOfUpdate: "typeOfUpdate";
    readonly remarks: "remarks";
    readonly issue: "issue";
    readonly encodedBy: "encodedBy";
    readonly updateInfo: "updateInfo";
    readonly subjectOfChange: "subjectOfChange";
    readonly drn: "drn";
    readonly cl: "cl";
    readonly date: "date";
    readonly note: "note";
    readonly verifiedBy: "verifiedBy";
    readonly verified: "verified";
    readonly verificationIssue: "verificationIssue";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum];
export declare const SwdiScalarFieldEnum: {
    readonly id: "id";
    readonly hhId: "hhId";
    readonly lgu: "lgu";
    readonly barangay: "barangay";
    readonly grantee: "grantee";
    readonly swdiScore: "swdiScore";
    readonly swdiLevel: "swdiLevel";
    readonly encodedBy: "encodedBy";
    readonly remarks: "remarks";
    readonly issue: "issue";
    readonly cl: "cl";
    readonly drn: "drn";
    readonly date: "date";
    readonly note: "note";
    readonly verifiedBy: "verifiedBy";
    readonly verified: "verified";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SwdiScalarFieldEnum = (typeof SwdiScalarFieldEnum)[keyof typeof SwdiScalarFieldEnum];
export declare const PcnScalarFieldEnum: {
    readonly id: "id";
    readonly lgu: "lgu";
    readonly barangay: "barangay";
    readonly hhId: "hhId";
    readonly granteeName: "granteeName";
    readonly remarks: "remarks";
    readonly issue: "issue";
    readonly encodedBy: "encodedBy";
    readonly subjectOfChange: "subjectOfChange";
    readonly pcn: "pcn";
    readonly lrn: "lrn";
    readonly drn: "drn";
    readonly cl: "cl";
    readonly date: "date";
    readonly note: "note";
    readonly verifiedBy: "verifiedBy";
    readonly verified: "verified";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PcnScalarFieldEnum = (typeof PcnScalarFieldEnum)[keyof typeof PcnScalarFieldEnum];
export declare const CVSScalarFieldEnum: {
    readonly id: "id";
    readonly idNumber: "idNumber";
    readonly lgu: "lgu";
    readonly barangay: "barangay";
    readonly facilityName: "facilityName";
    readonly formType: "formType";
    readonly remarks: "remarks";
    readonly userId: "userId";
    readonly issue: "issue";
    readonly period: "period";
    readonly date: "date";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CVSScalarFieldEnum = (typeof CVSScalarFieldEnum)[keyof typeof CVSScalarFieldEnum];
export declare const MiscellaneousScalarFieldEnum: {
    readonly id: "id";
    readonly lgu: "lgu";
    readonly barangay: "barangay";
    readonly hhId: "hhId";
    readonly granteeName: "granteeName";
    readonly documentType: "documentType";
    readonly remarks: "remarks";
    readonly issue: "issue";
    readonly encodedBy: "encodedBy";
    readonly subjectOfChange: "subjectOfChange";
    readonly drn: "drn";
    readonly cl: "cl";
    readonly date: "date";
    readonly note: "note";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MiscellaneousScalarFieldEnum = (typeof MiscellaneousScalarFieldEnum)[keyof typeof MiscellaneousScalarFieldEnum];
export declare const EncodedDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly idNumber: "idNumber";
    readonly name: "name";
    readonly documentType: "documentType";
    readonly documentId: "documentId";
    readonly subjectOfChange: "subjectOfChange";
    readonly remarks: "remarks";
    readonly drn: "drn";
    readonly userId: "userId";
    readonly govUsername: "govUsername";
    readonly date: "date";
    readonly verifiedBy: "verifiedBy";
    readonly verified: "verified";
    readonly createdAt: "createdAt";
};
export type EncodedDocumentScalarFieldEnum = (typeof EncodedDocumentScalarFieldEnum)[keyof typeof EncodedDocumentScalarFieldEnum];
export declare const OperationsOfficeNumScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type OperationsOfficeNumScalarFieldEnum = (typeof OperationsOfficeNumScalarFieldEnum)[keyof typeof OperationsOfficeNumScalarFieldEnum];
export declare const LguScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly operationsOfficeNumId: "operationsOfficeNumId";
};
export type LguScalarFieldEnum = (typeof LguScalarFieldEnum)[keyof typeof LguScalarFieldEnum];
export declare const BarangayScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly lguId: "lguId";
};
export type BarangayScalarFieldEnum = (typeof BarangayScalarFieldEnum)[keyof typeof BarangayScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumthemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'theme'>;
export type ListEnumthemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'theme[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userInfo?: Prisma.UserInfoOmit;
    bus?: Prisma.BusOmit;
    swdi?: Prisma.SwdiOmit;
    pcn?: Prisma.PcnOmit;
    cVS?: Prisma.CVSOmit;
    miscellaneous?: Prisma.MiscellaneousOmit;
    encodedDocument?: Prisma.EncodedDocumentOmit;
    operationsOfficeNum?: Prisma.OperationsOfficeNumOmit;
    lgu?: Prisma.LguOmit;
    barangay?: Prisma.BarangayOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
