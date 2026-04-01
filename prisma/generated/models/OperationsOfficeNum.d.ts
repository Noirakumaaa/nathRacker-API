import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OperationsOfficeNumModel = runtime.Types.Result.DefaultSelection<Prisma.$OperationsOfficeNumPayload>;
export type AggregateOperationsOfficeNum = {
    _count: OperationsOfficeNumCountAggregateOutputType | null;
    _avg: OperationsOfficeNumAvgAggregateOutputType | null;
    _sum: OperationsOfficeNumSumAggregateOutputType | null;
    _min: OperationsOfficeNumMinAggregateOutputType | null;
    _max: OperationsOfficeNumMaxAggregateOutputType | null;
};
export type OperationsOfficeNumAvgAggregateOutputType = {
    id: number | null;
};
export type OperationsOfficeNumSumAggregateOutputType = {
    id: number | null;
};
export type OperationsOfficeNumMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type OperationsOfficeNumMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type OperationsOfficeNumCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type OperationsOfficeNumAvgAggregateInputType = {
    id?: true;
};
export type OperationsOfficeNumSumAggregateInputType = {
    id?: true;
};
export type OperationsOfficeNumMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type OperationsOfficeNumMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type OperationsOfficeNumCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type OperationsOfficeNumAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationsOfficeNumWhereInput;
    orderBy?: Prisma.OperationsOfficeNumOrderByWithRelationInput | Prisma.OperationsOfficeNumOrderByWithRelationInput[];
    cursor?: Prisma.OperationsOfficeNumWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OperationsOfficeNumCountAggregateInputType;
    _avg?: OperationsOfficeNumAvgAggregateInputType;
    _sum?: OperationsOfficeNumSumAggregateInputType;
    _min?: OperationsOfficeNumMinAggregateInputType;
    _max?: OperationsOfficeNumMaxAggregateInputType;
};
export type GetOperationsOfficeNumAggregateType<T extends OperationsOfficeNumAggregateArgs> = {
    [P in keyof T & keyof AggregateOperationsOfficeNum]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOperationsOfficeNum[P]> : Prisma.GetScalarType<T[P], AggregateOperationsOfficeNum[P]>;
};
export type OperationsOfficeNumGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationsOfficeNumWhereInput;
    orderBy?: Prisma.OperationsOfficeNumOrderByWithAggregationInput | Prisma.OperationsOfficeNumOrderByWithAggregationInput[];
    by: Prisma.OperationsOfficeNumScalarFieldEnum[] | Prisma.OperationsOfficeNumScalarFieldEnum;
    having?: Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OperationsOfficeNumCountAggregateInputType | true;
    _avg?: OperationsOfficeNumAvgAggregateInputType;
    _sum?: OperationsOfficeNumSumAggregateInputType;
    _min?: OperationsOfficeNumMinAggregateInputType;
    _max?: OperationsOfficeNumMaxAggregateInputType;
};
export type OperationsOfficeNumGroupByOutputType = {
    id: number;
    name: string;
    _count: OperationsOfficeNumCountAggregateOutputType | null;
    _avg: OperationsOfficeNumAvgAggregateOutputType | null;
    _sum: OperationsOfficeNumSumAggregateOutputType | null;
    _min: OperationsOfficeNumMinAggregateOutputType | null;
    _max: OperationsOfficeNumMaxAggregateOutputType | null;
};
type GetOperationsOfficeNumGroupByPayload<T extends OperationsOfficeNumGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OperationsOfficeNumGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OperationsOfficeNumGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OperationsOfficeNumGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OperationsOfficeNumGroupByOutputType[P]>;
}>>;
export type OperationsOfficeNumWhereInput = {
    AND?: Prisma.OperationsOfficeNumWhereInput | Prisma.OperationsOfficeNumWhereInput[];
    OR?: Prisma.OperationsOfficeNumWhereInput[];
    NOT?: Prisma.OperationsOfficeNumWhereInput | Prisma.OperationsOfficeNumWhereInput[];
    id?: Prisma.IntFilter<"OperationsOfficeNum"> | number;
    name?: Prisma.StringFilter<"OperationsOfficeNum"> | string;
    lgu?: Prisma.LguListRelationFilter;
    userInfo?: Prisma.UserInfoListRelationFilter;
};
export type OperationsOfficeNumOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lgu?: Prisma.LguOrderByRelationAggregateInput;
    userInfo?: Prisma.UserInfoOrderByRelationAggregateInput;
};
export type OperationsOfficeNumWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OperationsOfficeNumWhereInput | Prisma.OperationsOfficeNumWhereInput[];
    OR?: Prisma.OperationsOfficeNumWhereInput[];
    NOT?: Prisma.OperationsOfficeNumWhereInput | Prisma.OperationsOfficeNumWhereInput[];
    name?: Prisma.StringFilter<"OperationsOfficeNum"> | string;
    lgu?: Prisma.LguListRelationFilter;
    userInfo?: Prisma.UserInfoListRelationFilter;
}, "id">;
export type OperationsOfficeNumOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.OperationsOfficeNumCountOrderByAggregateInput;
    _avg?: Prisma.OperationsOfficeNumAvgOrderByAggregateInput;
    _max?: Prisma.OperationsOfficeNumMaxOrderByAggregateInput;
    _min?: Prisma.OperationsOfficeNumMinOrderByAggregateInput;
    _sum?: Prisma.OperationsOfficeNumSumOrderByAggregateInput;
};
export type OperationsOfficeNumScalarWhereWithAggregatesInput = {
    AND?: Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput | Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput[];
    OR?: Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput | Prisma.OperationsOfficeNumScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"OperationsOfficeNum"> | number;
    name?: Prisma.StringWithAggregatesFilter<"OperationsOfficeNum"> | string;
};
export type OperationsOfficeNumCreateInput = {
    name: string;
    lgu?: Prisma.LguCreateNestedManyWithoutOperationsOfficeNumInput;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedAreaInput;
};
export type OperationsOfficeNumUncheckedCreateInput = {
    id?: number;
    name: string;
    lgu?: Prisma.LguUncheckedCreateNestedManyWithoutOperationsOfficeNumInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedAreaInput;
};
export type OperationsOfficeNumUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUpdateManyWithoutOperationsOfficeNumNestedInput;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedAreaNestedInput;
};
export type OperationsOfficeNumUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUncheckedUpdateManyWithoutOperationsOfficeNumNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedAreaNestedInput;
};
export type OperationsOfficeNumCreateManyInput = {
    id?: number;
    name: string;
};
export type OperationsOfficeNumUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OperationsOfficeNumUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OperationsOfficeNumNullableScalarRelationFilter = {
    is?: Prisma.OperationsOfficeNumWhereInput | null;
    isNot?: Prisma.OperationsOfficeNumWhereInput | null;
};
export type OperationsOfficeNumCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type OperationsOfficeNumAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type OperationsOfficeNumMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type OperationsOfficeNumMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type OperationsOfficeNumSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type OperationsOfficeNumScalarRelationFilter = {
    is?: Prisma.OperationsOfficeNumWhereInput;
    isNot?: Prisma.OperationsOfficeNumWhereInput;
};
export type OperationsOfficeNumCreateNestedOneWithoutUserInfoInput = {
    create?: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.OperationsOfficeNumCreateOrConnectWithoutUserInfoInput;
    connect?: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumUpdateOneWithoutUserInfoNestedInput = {
    create?: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.OperationsOfficeNumCreateOrConnectWithoutUserInfoInput;
    upsert?: Prisma.OperationsOfficeNumUpsertWithoutUserInfoInput;
    disconnect?: Prisma.OperationsOfficeNumWhereInput | boolean;
    delete?: Prisma.OperationsOfficeNumWhereInput | boolean;
    connect?: Prisma.OperationsOfficeNumWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperationsOfficeNumUpdateToOneWithWhereWithoutUserInfoInput, Prisma.OperationsOfficeNumUpdateWithoutUserInfoInput>, Prisma.OperationsOfficeNumUncheckedUpdateWithoutUserInfoInput>;
};
export type OperationsOfficeNumCreateNestedOneWithoutLguInput = {
    create?: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutLguInput>;
    connectOrCreate?: Prisma.OperationsOfficeNumCreateOrConnectWithoutLguInput;
    connect?: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumUpdateOneRequiredWithoutLguNestedInput = {
    create?: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutLguInput>;
    connectOrCreate?: Prisma.OperationsOfficeNumCreateOrConnectWithoutLguInput;
    upsert?: Prisma.OperationsOfficeNumUpsertWithoutLguInput;
    connect?: Prisma.OperationsOfficeNumWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperationsOfficeNumUpdateToOneWithWhereWithoutLguInput, Prisma.OperationsOfficeNumUpdateWithoutLguInput>, Prisma.OperationsOfficeNumUncheckedUpdateWithoutLguInput>;
};
export type OperationsOfficeNumCreateWithoutUserInfoInput = {
    name: string;
    lgu?: Prisma.LguCreateNestedManyWithoutOperationsOfficeNumInput;
};
export type OperationsOfficeNumUncheckedCreateWithoutUserInfoInput = {
    id?: number;
    name: string;
    lgu?: Prisma.LguUncheckedCreateNestedManyWithoutOperationsOfficeNumInput;
};
export type OperationsOfficeNumCreateOrConnectWithoutUserInfoInput = {
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutUserInfoInput>;
};
export type OperationsOfficeNumUpsertWithoutUserInfoInput = {
    update: Prisma.XOR<Prisma.OperationsOfficeNumUpdateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedUpdateWithoutUserInfoInput>;
    create: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutUserInfoInput>;
    where?: Prisma.OperationsOfficeNumWhereInput;
};
export type OperationsOfficeNumUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: Prisma.OperationsOfficeNumWhereInput;
    data: Prisma.XOR<Prisma.OperationsOfficeNumUpdateWithoutUserInfoInput, Prisma.OperationsOfficeNumUncheckedUpdateWithoutUserInfoInput>;
};
export type OperationsOfficeNumUpdateWithoutUserInfoInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUpdateManyWithoutOperationsOfficeNumNestedInput;
};
export type OperationsOfficeNumUncheckedUpdateWithoutUserInfoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUncheckedUpdateManyWithoutOperationsOfficeNumNestedInput;
};
export type OperationsOfficeNumCreateWithoutLguInput = {
    name: string;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedAreaInput;
};
export type OperationsOfficeNumUncheckedCreateWithoutLguInput = {
    id?: number;
    name: string;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedAreaInput;
};
export type OperationsOfficeNumCreateOrConnectWithoutLguInput = {
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutLguInput>;
};
export type OperationsOfficeNumUpsertWithoutLguInput = {
    update: Prisma.XOR<Prisma.OperationsOfficeNumUpdateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedUpdateWithoutLguInput>;
    create: Prisma.XOR<Prisma.OperationsOfficeNumCreateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedCreateWithoutLguInput>;
    where?: Prisma.OperationsOfficeNumWhereInput;
};
export type OperationsOfficeNumUpdateToOneWithWhereWithoutLguInput = {
    where?: Prisma.OperationsOfficeNumWhereInput;
    data: Prisma.XOR<Prisma.OperationsOfficeNumUpdateWithoutLguInput, Prisma.OperationsOfficeNumUncheckedUpdateWithoutLguInput>;
};
export type OperationsOfficeNumUpdateWithoutLguInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedAreaNestedInput;
};
export type OperationsOfficeNumUncheckedUpdateWithoutLguInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedAreaNestedInput;
};
export type OperationsOfficeNumCountOutputType = {
    lgu: number;
    userInfo: number;
};
export type OperationsOfficeNumCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lgu?: boolean | OperationsOfficeNumCountOutputTypeCountLguArgs;
    userInfo?: boolean | OperationsOfficeNumCountOutputTypeCountUserInfoArgs;
};
export type OperationsOfficeNumCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumCountOutputTypeSelect<ExtArgs> | null;
};
export type OperationsOfficeNumCountOutputTypeCountLguArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LguWhereInput;
};
export type OperationsOfficeNumCountOutputTypeCountUserInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserInfoWhereInput;
};
export type OperationsOfficeNumSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    lgu?: boolean | Prisma.OperationsOfficeNum$lguArgs<ExtArgs>;
    userInfo?: boolean | Prisma.OperationsOfficeNum$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationsOfficeNumCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["operationsOfficeNum"]>;
export type OperationsOfficeNumSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["operationsOfficeNum"]>;
export type OperationsOfficeNumSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["operationsOfficeNum"]>;
export type OperationsOfficeNumSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type OperationsOfficeNumOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["operationsOfficeNum"]>;
export type OperationsOfficeNumInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lgu?: boolean | Prisma.OperationsOfficeNum$lguArgs<ExtArgs>;
    userInfo?: boolean | Prisma.OperationsOfficeNum$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationsOfficeNumCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OperationsOfficeNumIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OperationsOfficeNumIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OperationsOfficeNumPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OperationsOfficeNum";
    objects: {
        lgu: Prisma.$LguPayload<ExtArgs>[];
        userInfo: Prisma.$UserInfoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["operationsOfficeNum"]>;
    composites: {};
};
export type OperationsOfficeNumGetPayload<S extends boolean | null | undefined | OperationsOfficeNumDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload, S>;
export type OperationsOfficeNumCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OperationsOfficeNumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OperationsOfficeNumCountAggregateInputType | true;
};
export interface OperationsOfficeNumDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OperationsOfficeNum'];
        meta: {
            name: 'OperationsOfficeNum';
        };
    };
    findUnique<T extends OperationsOfficeNumFindUniqueArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OperationsOfficeNumFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OperationsOfficeNumFindFirstArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumFindFirstArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OperationsOfficeNumFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OperationsOfficeNumFindManyArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OperationsOfficeNumCreateArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumCreateArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OperationsOfficeNumCreateManyArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OperationsOfficeNumCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OperationsOfficeNumDeleteArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumDeleteArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OperationsOfficeNumUpdateArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumUpdateArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OperationsOfficeNumDeleteManyArgs>(args?: Prisma.SelectSubset<T, OperationsOfficeNumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OperationsOfficeNumUpdateManyArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OperationsOfficeNumUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OperationsOfficeNumUpsertArgs>(args: Prisma.SelectSubset<T, OperationsOfficeNumUpsertArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OperationsOfficeNumCountArgs>(args?: Prisma.Subset<T, OperationsOfficeNumCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OperationsOfficeNumCountAggregateOutputType> : number>;
    aggregate<T extends OperationsOfficeNumAggregateArgs>(args: Prisma.Subset<T, OperationsOfficeNumAggregateArgs>): Prisma.PrismaPromise<GetOperationsOfficeNumAggregateType<T>>;
    groupBy<T extends OperationsOfficeNumGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OperationsOfficeNumGroupByArgs['orderBy'];
    } : {
        orderBy?: OperationsOfficeNumGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OperationsOfficeNumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationsOfficeNumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OperationsOfficeNumFieldRefs;
}
export interface Prisma__OperationsOfficeNumClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lgu<T extends Prisma.OperationsOfficeNum$lguArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationsOfficeNum$lguArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userInfo<T extends Prisma.OperationsOfficeNum$userInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationsOfficeNum$userInfoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OperationsOfficeNumFieldRefs {
    readonly id: Prisma.FieldRef<"OperationsOfficeNum", 'Int'>;
    readonly name: Prisma.FieldRef<"OperationsOfficeNum", 'String'>;
}
export type OperationsOfficeNumFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where?: Prisma.OperationsOfficeNumWhereInput;
    orderBy?: Prisma.OperationsOfficeNumOrderByWithRelationInput | Prisma.OperationsOfficeNumOrderByWithRelationInput[];
    cursor?: Prisma.OperationsOfficeNumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationsOfficeNumScalarFieldEnum | Prisma.OperationsOfficeNumScalarFieldEnum[];
};
export type OperationsOfficeNumFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where?: Prisma.OperationsOfficeNumWhereInput;
    orderBy?: Prisma.OperationsOfficeNumOrderByWithRelationInput | Prisma.OperationsOfficeNumOrderByWithRelationInput[];
    cursor?: Prisma.OperationsOfficeNumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationsOfficeNumScalarFieldEnum | Prisma.OperationsOfficeNumScalarFieldEnum[];
};
export type OperationsOfficeNumFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where?: Prisma.OperationsOfficeNumWhereInput;
    orderBy?: Prisma.OperationsOfficeNumOrderByWithRelationInput | Prisma.OperationsOfficeNumOrderByWithRelationInput[];
    cursor?: Prisma.OperationsOfficeNumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationsOfficeNumScalarFieldEnum | Prisma.OperationsOfficeNumScalarFieldEnum[];
};
export type OperationsOfficeNumCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationsOfficeNumCreateInput, Prisma.OperationsOfficeNumUncheckedCreateInput>;
};
export type OperationsOfficeNumCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OperationsOfficeNumCreateManyInput | Prisma.OperationsOfficeNumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationsOfficeNumCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    data: Prisma.OperationsOfficeNumCreateManyInput | Prisma.OperationsOfficeNumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationsOfficeNumUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationsOfficeNumUpdateInput, Prisma.OperationsOfficeNumUncheckedUpdateInput>;
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OperationsOfficeNumUpdateManyMutationInput, Prisma.OperationsOfficeNumUncheckedUpdateManyInput>;
    where?: Prisma.OperationsOfficeNumWhereInput;
    limit?: number;
};
export type OperationsOfficeNumUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationsOfficeNumUpdateManyMutationInput, Prisma.OperationsOfficeNumUncheckedUpdateManyInput>;
    where?: Prisma.OperationsOfficeNumWhereInput;
    limit?: number;
};
export type OperationsOfficeNumUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationsOfficeNumCreateInput, Prisma.OperationsOfficeNumUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OperationsOfficeNumUpdateInput, Prisma.OperationsOfficeNumUncheckedUpdateInput>;
};
export type OperationsOfficeNumDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
    where: Prisma.OperationsOfficeNumWhereUniqueInput;
};
export type OperationsOfficeNumDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationsOfficeNumWhereInput;
    limit?: number;
};
export type OperationsOfficeNum$lguArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    where?: Prisma.LguWhereInput;
    orderBy?: Prisma.LguOrderByWithRelationInput | Prisma.LguOrderByWithRelationInput[];
    cursor?: Prisma.LguWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LguScalarFieldEnum | Prisma.LguScalarFieldEnum[];
};
export type OperationsOfficeNum$userInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserInfoSelect<ExtArgs> | null;
    omit?: Prisma.UserInfoOmit<ExtArgs> | null;
    include?: Prisma.UserInfoInclude<ExtArgs> | null;
    where?: Prisma.UserInfoWhereInput;
    orderBy?: Prisma.UserInfoOrderByWithRelationInput | Prisma.UserInfoOrderByWithRelationInput[];
    cursor?: Prisma.UserInfoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserInfoScalarFieldEnum | Prisma.UserInfoScalarFieldEnum[];
};
export type OperationsOfficeNumDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationsOfficeNumSelect<ExtArgs> | null;
    omit?: Prisma.OperationsOfficeNumOmit<ExtArgs> | null;
    include?: Prisma.OperationsOfficeNumInclude<ExtArgs> | null;
};
export {};
