import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BarangayModel = runtime.Types.Result.DefaultSelection<Prisma.$BarangayPayload>;
export type AggregateBarangay = {
    _count: BarangayCountAggregateOutputType | null;
    _avg: BarangayAvgAggregateOutputType | null;
    _sum: BarangaySumAggregateOutputType | null;
    _min: BarangayMinAggregateOutputType | null;
    _max: BarangayMaxAggregateOutputType | null;
};
export type BarangayAvgAggregateOutputType = {
    id: number | null;
    lguId: number | null;
};
export type BarangaySumAggregateOutputType = {
    id: number | null;
    lguId: number | null;
};
export type BarangayMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    lguId: number | null;
};
export type BarangayMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    lguId: number | null;
};
export type BarangayCountAggregateOutputType = {
    id: number;
    name: number;
    lguId: number;
    _all: number;
};
export type BarangayAvgAggregateInputType = {
    id?: true;
    lguId?: true;
};
export type BarangaySumAggregateInputType = {
    id?: true;
    lguId?: true;
};
export type BarangayMinAggregateInputType = {
    id?: true;
    name?: true;
    lguId?: true;
};
export type BarangayMaxAggregateInputType = {
    id?: true;
    name?: true;
    lguId?: true;
};
export type BarangayCountAggregateInputType = {
    id?: true;
    name?: true;
    lguId?: true;
    _all?: true;
};
export type BarangayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarangayWhereInput;
    orderBy?: Prisma.BarangayOrderByWithRelationInput | Prisma.BarangayOrderByWithRelationInput[];
    cursor?: Prisma.BarangayWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BarangayCountAggregateInputType;
    _avg?: BarangayAvgAggregateInputType;
    _sum?: BarangaySumAggregateInputType;
    _min?: BarangayMinAggregateInputType;
    _max?: BarangayMaxAggregateInputType;
};
export type GetBarangayAggregateType<T extends BarangayAggregateArgs> = {
    [P in keyof T & keyof AggregateBarangay]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBarangay[P]> : Prisma.GetScalarType<T[P], AggregateBarangay[P]>;
};
export type BarangayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarangayWhereInput;
    orderBy?: Prisma.BarangayOrderByWithAggregationInput | Prisma.BarangayOrderByWithAggregationInput[];
    by: Prisma.BarangayScalarFieldEnum[] | Prisma.BarangayScalarFieldEnum;
    having?: Prisma.BarangayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BarangayCountAggregateInputType | true;
    _avg?: BarangayAvgAggregateInputType;
    _sum?: BarangaySumAggregateInputType;
    _min?: BarangayMinAggregateInputType;
    _max?: BarangayMaxAggregateInputType;
};
export type BarangayGroupByOutputType = {
    id: number;
    name: string;
    lguId: number;
    _count: BarangayCountAggregateOutputType | null;
    _avg: BarangayAvgAggregateOutputType | null;
    _sum: BarangaySumAggregateOutputType | null;
    _min: BarangayMinAggregateOutputType | null;
    _max: BarangayMaxAggregateOutputType | null;
};
type GetBarangayGroupByPayload<T extends BarangayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BarangayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BarangayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BarangayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BarangayGroupByOutputType[P]>;
}>>;
export type BarangayWhereInput = {
    AND?: Prisma.BarangayWhereInput | Prisma.BarangayWhereInput[];
    OR?: Prisma.BarangayWhereInput[];
    NOT?: Prisma.BarangayWhereInput | Prisma.BarangayWhereInput[];
    id?: Prisma.IntFilter<"Barangay"> | number;
    name?: Prisma.StringFilter<"Barangay"> | string;
    lguId?: Prisma.IntFilter<"Barangay"> | number;
    lgu?: Prisma.XOR<Prisma.LguScalarRelationFilter, Prisma.LguWhereInput>;
    userInfo?: Prisma.UserInfoListRelationFilter;
};
export type BarangayOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
    lgu?: Prisma.LguOrderByWithRelationInput;
    userInfo?: Prisma.UserInfoOrderByRelationAggregateInput;
};
export type BarangayWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BarangayWhereInput | Prisma.BarangayWhereInput[];
    OR?: Prisma.BarangayWhereInput[];
    NOT?: Prisma.BarangayWhereInput | Prisma.BarangayWhereInput[];
    name?: Prisma.StringFilter<"Barangay"> | string;
    lguId?: Prisma.IntFilter<"Barangay"> | number;
    lgu?: Prisma.XOR<Prisma.LguScalarRelationFilter, Prisma.LguWhereInput>;
    userInfo?: Prisma.UserInfoListRelationFilter;
}, "id">;
export type BarangayOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
    _count?: Prisma.BarangayCountOrderByAggregateInput;
    _avg?: Prisma.BarangayAvgOrderByAggregateInput;
    _max?: Prisma.BarangayMaxOrderByAggregateInput;
    _min?: Prisma.BarangayMinOrderByAggregateInput;
    _sum?: Prisma.BarangaySumOrderByAggregateInput;
};
export type BarangayScalarWhereWithAggregatesInput = {
    AND?: Prisma.BarangayScalarWhereWithAggregatesInput | Prisma.BarangayScalarWhereWithAggregatesInput[];
    OR?: Prisma.BarangayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BarangayScalarWhereWithAggregatesInput | Prisma.BarangayScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Barangay"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Barangay"> | string;
    lguId?: Prisma.IntWithAggregatesFilter<"Barangay"> | number;
};
export type BarangayCreateInput = {
    name: string;
    lgu: Prisma.LguCreateNestedOneWithoutBarangayInput;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedBarangayInput;
};
export type BarangayUncheckedCreateInput = {
    id?: number;
    name: string;
    lguId: number;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedBarangayInput;
};
export type BarangayUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUpdateOneRequiredWithoutBarangayNestedInput;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedBarangayNestedInput;
};
export type BarangayUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lguId?: Prisma.IntFieldUpdateOperationsInput | number;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedBarangayNestedInput;
};
export type BarangayCreateManyInput = {
    id?: number;
    name: string;
    lguId: number;
};
export type BarangayUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BarangayUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lguId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BarangayNullableScalarRelationFilter = {
    is?: Prisma.BarangayWhereInput | null;
    isNot?: Prisma.BarangayWhereInput | null;
};
export type BarangayListRelationFilter = {
    every?: Prisma.BarangayWhereInput;
    some?: Prisma.BarangayWhereInput;
    none?: Prisma.BarangayWhereInput;
};
export type BarangayOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BarangayCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
};
export type BarangayAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
};
export type BarangayMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
};
export type BarangayMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
};
export type BarangaySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lguId?: Prisma.SortOrder;
};
export type BarangayCreateNestedOneWithoutUserInfoInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutUserInfoInput, Prisma.BarangayUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutUserInfoInput;
    connect?: Prisma.BarangayWhereUniqueInput;
};
export type BarangayUpdateOneWithoutUserInfoNestedInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutUserInfoInput, Prisma.BarangayUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutUserInfoInput;
    upsert?: Prisma.BarangayUpsertWithoutUserInfoInput;
    disconnect?: Prisma.BarangayWhereInput | boolean;
    delete?: Prisma.BarangayWhereInput | boolean;
    connect?: Prisma.BarangayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarangayUpdateToOneWithWhereWithoutUserInfoInput, Prisma.BarangayUpdateWithoutUserInfoInput>, Prisma.BarangayUncheckedUpdateWithoutUserInfoInput>;
};
export type BarangayCreateNestedManyWithoutLguInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput> | Prisma.BarangayCreateWithoutLguInput[] | Prisma.BarangayUncheckedCreateWithoutLguInput[];
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutLguInput | Prisma.BarangayCreateOrConnectWithoutLguInput[];
    createMany?: Prisma.BarangayCreateManyLguInputEnvelope;
    connect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
};
export type BarangayUncheckedCreateNestedManyWithoutLguInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput> | Prisma.BarangayCreateWithoutLguInput[] | Prisma.BarangayUncheckedCreateWithoutLguInput[];
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutLguInput | Prisma.BarangayCreateOrConnectWithoutLguInput[];
    createMany?: Prisma.BarangayCreateManyLguInputEnvelope;
    connect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
};
export type BarangayUpdateManyWithoutLguNestedInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput> | Prisma.BarangayCreateWithoutLguInput[] | Prisma.BarangayUncheckedCreateWithoutLguInput[];
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutLguInput | Prisma.BarangayCreateOrConnectWithoutLguInput[];
    upsert?: Prisma.BarangayUpsertWithWhereUniqueWithoutLguInput | Prisma.BarangayUpsertWithWhereUniqueWithoutLguInput[];
    createMany?: Prisma.BarangayCreateManyLguInputEnvelope;
    set?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    disconnect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    delete?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    connect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    update?: Prisma.BarangayUpdateWithWhereUniqueWithoutLguInput | Prisma.BarangayUpdateWithWhereUniqueWithoutLguInput[];
    updateMany?: Prisma.BarangayUpdateManyWithWhereWithoutLguInput | Prisma.BarangayUpdateManyWithWhereWithoutLguInput[];
    deleteMany?: Prisma.BarangayScalarWhereInput | Prisma.BarangayScalarWhereInput[];
};
export type BarangayUncheckedUpdateManyWithoutLguNestedInput = {
    create?: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput> | Prisma.BarangayCreateWithoutLguInput[] | Prisma.BarangayUncheckedCreateWithoutLguInput[];
    connectOrCreate?: Prisma.BarangayCreateOrConnectWithoutLguInput | Prisma.BarangayCreateOrConnectWithoutLguInput[];
    upsert?: Prisma.BarangayUpsertWithWhereUniqueWithoutLguInput | Prisma.BarangayUpsertWithWhereUniqueWithoutLguInput[];
    createMany?: Prisma.BarangayCreateManyLguInputEnvelope;
    set?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    disconnect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    delete?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    connect?: Prisma.BarangayWhereUniqueInput | Prisma.BarangayWhereUniqueInput[];
    update?: Prisma.BarangayUpdateWithWhereUniqueWithoutLguInput | Prisma.BarangayUpdateWithWhereUniqueWithoutLguInput[];
    updateMany?: Prisma.BarangayUpdateManyWithWhereWithoutLguInput | Prisma.BarangayUpdateManyWithWhereWithoutLguInput[];
    deleteMany?: Prisma.BarangayScalarWhereInput | Prisma.BarangayScalarWhereInput[];
};
export type BarangayCreateWithoutUserInfoInput = {
    name: string;
    lgu: Prisma.LguCreateNestedOneWithoutBarangayInput;
};
export type BarangayUncheckedCreateWithoutUserInfoInput = {
    id?: number;
    name: string;
    lguId: number;
};
export type BarangayCreateOrConnectWithoutUserInfoInput = {
    where: Prisma.BarangayWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarangayCreateWithoutUserInfoInput, Prisma.BarangayUncheckedCreateWithoutUserInfoInput>;
};
export type BarangayUpsertWithoutUserInfoInput = {
    update: Prisma.XOR<Prisma.BarangayUpdateWithoutUserInfoInput, Prisma.BarangayUncheckedUpdateWithoutUserInfoInput>;
    create: Prisma.XOR<Prisma.BarangayCreateWithoutUserInfoInput, Prisma.BarangayUncheckedCreateWithoutUserInfoInput>;
    where?: Prisma.BarangayWhereInput;
};
export type BarangayUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: Prisma.BarangayWhereInput;
    data: Prisma.XOR<Prisma.BarangayUpdateWithoutUserInfoInput, Prisma.BarangayUncheckedUpdateWithoutUserInfoInput>;
};
export type BarangayUpdateWithoutUserInfoInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.LguUpdateOneRequiredWithoutBarangayNestedInput;
};
export type BarangayUncheckedUpdateWithoutUserInfoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    lguId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BarangayCreateWithoutLguInput = {
    name: string;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedBarangayInput;
};
export type BarangayUncheckedCreateWithoutLguInput = {
    id?: number;
    name: string;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedBarangayInput;
};
export type BarangayCreateOrConnectWithoutLguInput = {
    where: Prisma.BarangayWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput>;
};
export type BarangayCreateManyLguInputEnvelope = {
    data: Prisma.BarangayCreateManyLguInput | Prisma.BarangayCreateManyLguInput[];
    skipDuplicates?: boolean;
};
export type BarangayUpsertWithWhereUniqueWithoutLguInput = {
    where: Prisma.BarangayWhereUniqueInput;
    update: Prisma.XOR<Prisma.BarangayUpdateWithoutLguInput, Prisma.BarangayUncheckedUpdateWithoutLguInput>;
    create: Prisma.XOR<Prisma.BarangayCreateWithoutLguInput, Prisma.BarangayUncheckedCreateWithoutLguInput>;
};
export type BarangayUpdateWithWhereUniqueWithoutLguInput = {
    where: Prisma.BarangayWhereUniqueInput;
    data: Prisma.XOR<Prisma.BarangayUpdateWithoutLguInput, Prisma.BarangayUncheckedUpdateWithoutLguInput>;
};
export type BarangayUpdateManyWithWhereWithoutLguInput = {
    where: Prisma.BarangayScalarWhereInput;
    data: Prisma.XOR<Prisma.BarangayUpdateManyMutationInput, Prisma.BarangayUncheckedUpdateManyWithoutLguInput>;
};
export type BarangayScalarWhereInput = {
    AND?: Prisma.BarangayScalarWhereInput | Prisma.BarangayScalarWhereInput[];
    OR?: Prisma.BarangayScalarWhereInput[];
    NOT?: Prisma.BarangayScalarWhereInput | Prisma.BarangayScalarWhereInput[];
    id?: Prisma.IntFilter<"Barangay"> | number;
    name?: Prisma.StringFilter<"Barangay"> | string;
    lguId?: Prisma.IntFilter<"Barangay"> | number;
};
export type BarangayCreateManyLguInput = {
    id?: number;
    name: string;
};
export type BarangayUpdateWithoutLguInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedBarangayNestedInput;
};
export type BarangayUncheckedUpdateWithoutLguInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedBarangayNestedInput;
};
export type BarangayUncheckedUpdateManyWithoutLguInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BarangayCountOutputType = {
    userInfo: number;
};
export type BarangayCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userInfo?: boolean | BarangayCountOutputTypeCountUserInfoArgs;
};
export type BarangayCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangayCountOutputTypeSelect<ExtArgs> | null;
};
export type BarangayCountOutputTypeCountUserInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserInfoWhereInput;
};
export type BarangaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    lguId?: boolean;
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
    userInfo?: boolean | Prisma.Barangay$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.BarangayCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barangay"]>;
export type BarangaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    lguId?: boolean;
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barangay"]>;
export type BarangaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    lguId?: boolean;
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barangay"]>;
export type BarangaySelectScalar = {
    id?: boolean;
    name?: boolean;
    lguId?: boolean;
};
export type BarangayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "lguId", ExtArgs["result"]["barangay"]>;
export type BarangayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
    userInfo?: boolean | Prisma.Barangay$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.BarangayCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BarangayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
};
export type BarangayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lgu?: boolean | Prisma.LguDefaultArgs<ExtArgs>;
};
export type $BarangayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Barangay";
    objects: {
        lgu: Prisma.$LguPayload<ExtArgs>;
        userInfo: Prisma.$UserInfoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        lguId: number;
    }, ExtArgs["result"]["barangay"]>;
    composites: {};
};
export type BarangayGetPayload<S extends boolean | null | undefined | BarangayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BarangayPayload, S>;
export type BarangayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BarangayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BarangayCountAggregateInputType | true;
};
export interface BarangayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Barangay'];
        meta: {
            name: 'Barangay';
        };
    };
    findUnique<T extends BarangayFindUniqueArgs>(args: Prisma.SelectSubset<T, BarangayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BarangayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BarangayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BarangayFindFirstArgs>(args?: Prisma.SelectSubset<T, BarangayFindFirstArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BarangayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BarangayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BarangayFindManyArgs>(args?: Prisma.SelectSubset<T, BarangayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BarangayCreateArgs>(args: Prisma.SelectSubset<T, BarangayCreateArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BarangayCreateManyArgs>(args?: Prisma.SelectSubset<T, BarangayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BarangayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BarangayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BarangayDeleteArgs>(args: Prisma.SelectSubset<T, BarangayDeleteArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BarangayUpdateArgs>(args: Prisma.SelectSubset<T, BarangayUpdateArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BarangayDeleteManyArgs>(args?: Prisma.SelectSubset<T, BarangayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BarangayUpdateManyArgs>(args: Prisma.SelectSubset<T, BarangayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BarangayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BarangayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BarangayUpsertArgs>(args: Prisma.SelectSubset<T, BarangayUpsertArgs<ExtArgs>>): Prisma.Prisma__BarangayClient<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BarangayCountArgs>(args?: Prisma.Subset<T, BarangayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BarangayCountAggregateOutputType> : number>;
    aggregate<T extends BarangayAggregateArgs>(args: Prisma.Subset<T, BarangayAggregateArgs>): Prisma.PrismaPromise<GetBarangayAggregateType<T>>;
    groupBy<T extends BarangayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BarangayGroupByArgs['orderBy'];
    } : {
        orderBy?: BarangayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BarangayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BarangayFieldRefs;
}
export interface Prisma__BarangayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lgu<T extends Prisma.LguDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LguDefaultArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    userInfo<T extends Prisma.Barangay$userInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Barangay$userInfoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BarangayFieldRefs {
    readonly id: Prisma.FieldRef<"Barangay", 'Int'>;
    readonly name: Prisma.FieldRef<"Barangay", 'String'>;
    readonly lguId: Prisma.FieldRef<"Barangay", 'Int'>;
}
export type BarangayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where: Prisma.BarangayWhereUniqueInput;
};
export type BarangayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where: Prisma.BarangayWhereUniqueInput;
};
export type BarangayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where?: Prisma.BarangayWhereInput;
    orderBy?: Prisma.BarangayOrderByWithRelationInput | Prisma.BarangayOrderByWithRelationInput[];
    cursor?: Prisma.BarangayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarangayScalarFieldEnum | Prisma.BarangayScalarFieldEnum[];
};
export type BarangayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where?: Prisma.BarangayWhereInput;
    orderBy?: Prisma.BarangayOrderByWithRelationInput | Prisma.BarangayOrderByWithRelationInput[];
    cursor?: Prisma.BarangayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarangayScalarFieldEnum | Prisma.BarangayScalarFieldEnum[];
};
export type BarangayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where?: Prisma.BarangayWhereInput;
    orderBy?: Prisma.BarangayOrderByWithRelationInput | Prisma.BarangayOrderByWithRelationInput[];
    cursor?: Prisma.BarangayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarangayScalarFieldEnum | Prisma.BarangayScalarFieldEnum[];
};
export type BarangayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarangayCreateInput, Prisma.BarangayUncheckedCreateInput>;
};
export type BarangayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BarangayCreateManyInput | Prisma.BarangayCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BarangayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    data: Prisma.BarangayCreateManyInput | Prisma.BarangayCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BarangayIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BarangayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarangayUpdateInput, Prisma.BarangayUncheckedUpdateInput>;
    where: Prisma.BarangayWhereUniqueInput;
};
export type BarangayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BarangayUpdateManyMutationInput, Prisma.BarangayUncheckedUpdateManyInput>;
    where?: Prisma.BarangayWhereInput;
    limit?: number;
};
export type BarangayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarangayUpdateManyMutationInput, Prisma.BarangayUncheckedUpdateManyInput>;
    where?: Prisma.BarangayWhereInput;
    limit?: number;
    include?: Prisma.BarangayIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BarangayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where: Prisma.BarangayWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarangayCreateInput, Prisma.BarangayUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BarangayUpdateInput, Prisma.BarangayUncheckedUpdateInput>;
};
export type BarangayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
    where: Prisma.BarangayWhereUniqueInput;
};
export type BarangayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarangayWhereInput;
    limit?: number;
};
export type Barangay$userInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BarangayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarangaySelect<ExtArgs> | null;
    omit?: Prisma.BarangayOmit<ExtArgs> | null;
    include?: Prisma.BarangayInclude<ExtArgs> | null;
};
export {};
