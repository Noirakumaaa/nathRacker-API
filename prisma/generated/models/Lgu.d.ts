import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LguModel = runtime.Types.Result.DefaultSelection<Prisma.$LguPayload>;
export type AggregateLgu = {
    _count: LguCountAggregateOutputType | null;
    _avg: LguAvgAggregateOutputType | null;
    _sum: LguSumAggregateOutputType | null;
    _min: LguMinAggregateOutputType | null;
    _max: LguMaxAggregateOutputType | null;
};
export type LguAvgAggregateOutputType = {
    id: number | null;
    operationsOfficeNumId: number | null;
};
export type LguSumAggregateOutputType = {
    id: number | null;
    operationsOfficeNumId: number | null;
};
export type LguMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    operationsOfficeNumId: number | null;
};
export type LguMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    operationsOfficeNumId: number | null;
};
export type LguCountAggregateOutputType = {
    id: number;
    name: number;
    operationsOfficeNumId: number;
    _all: number;
};
export type LguAvgAggregateInputType = {
    id?: true;
    operationsOfficeNumId?: true;
};
export type LguSumAggregateInputType = {
    id?: true;
    operationsOfficeNumId?: true;
};
export type LguMinAggregateInputType = {
    id?: true;
    name?: true;
    operationsOfficeNumId?: true;
};
export type LguMaxAggregateInputType = {
    id?: true;
    name?: true;
    operationsOfficeNumId?: true;
};
export type LguCountAggregateInputType = {
    id?: true;
    name?: true;
    operationsOfficeNumId?: true;
    _all?: true;
};
export type LguAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LguWhereInput;
    orderBy?: Prisma.LguOrderByWithRelationInput | Prisma.LguOrderByWithRelationInput[];
    cursor?: Prisma.LguWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LguCountAggregateInputType;
    _avg?: LguAvgAggregateInputType;
    _sum?: LguSumAggregateInputType;
    _min?: LguMinAggregateInputType;
    _max?: LguMaxAggregateInputType;
};
export type GetLguAggregateType<T extends LguAggregateArgs> = {
    [P in keyof T & keyof AggregateLgu]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLgu[P]> : Prisma.GetScalarType<T[P], AggregateLgu[P]>;
};
export type LguGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LguWhereInput;
    orderBy?: Prisma.LguOrderByWithAggregationInput | Prisma.LguOrderByWithAggregationInput[];
    by: Prisma.LguScalarFieldEnum[] | Prisma.LguScalarFieldEnum;
    having?: Prisma.LguScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LguCountAggregateInputType | true;
    _avg?: LguAvgAggregateInputType;
    _sum?: LguSumAggregateInputType;
    _min?: LguMinAggregateInputType;
    _max?: LguMaxAggregateInputType;
};
export type LguGroupByOutputType = {
    id: number;
    name: string;
    operationsOfficeNumId: number;
    _count: LguCountAggregateOutputType | null;
    _avg: LguAvgAggregateOutputType | null;
    _sum: LguSumAggregateOutputType | null;
    _min: LguMinAggregateOutputType | null;
    _max: LguMaxAggregateOutputType | null;
};
type GetLguGroupByPayload<T extends LguGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LguGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LguGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LguGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LguGroupByOutputType[P]>;
}>>;
export type LguWhereInput = {
    AND?: Prisma.LguWhereInput | Prisma.LguWhereInput[];
    OR?: Prisma.LguWhereInput[];
    NOT?: Prisma.LguWhereInput | Prisma.LguWhereInput[];
    id?: Prisma.IntFilter<"Lgu"> | number;
    name?: Prisma.StringFilter<"Lgu"> | string;
    operationsOfficeNumId?: Prisma.IntFilter<"Lgu"> | number;
    operationsOfficeNum?: Prisma.XOR<Prisma.OperationsOfficeNumScalarRelationFilter, Prisma.OperationsOfficeNumWhereInput>;
    barangay?: Prisma.BarangayListRelationFilter;
    userInfo?: Prisma.UserInfoListRelationFilter;
};
export type LguOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
    operationsOfficeNum?: Prisma.OperationsOfficeNumOrderByWithRelationInput;
    barangay?: Prisma.BarangayOrderByRelationAggregateInput;
    userInfo?: Prisma.UserInfoOrderByRelationAggregateInput;
};
export type LguWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LguWhereInput | Prisma.LguWhereInput[];
    OR?: Prisma.LguWhereInput[];
    NOT?: Prisma.LguWhereInput | Prisma.LguWhereInput[];
    name?: Prisma.StringFilter<"Lgu"> | string;
    operationsOfficeNumId?: Prisma.IntFilter<"Lgu"> | number;
    operationsOfficeNum?: Prisma.XOR<Prisma.OperationsOfficeNumScalarRelationFilter, Prisma.OperationsOfficeNumWhereInput>;
    barangay?: Prisma.BarangayListRelationFilter;
    userInfo?: Prisma.UserInfoListRelationFilter;
}, "id">;
export type LguOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
    _count?: Prisma.LguCountOrderByAggregateInput;
    _avg?: Prisma.LguAvgOrderByAggregateInput;
    _max?: Prisma.LguMaxOrderByAggregateInput;
    _min?: Prisma.LguMinOrderByAggregateInput;
    _sum?: Prisma.LguSumOrderByAggregateInput;
};
export type LguScalarWhereWithAggregatesInput = {
    AND?: Prisma.LguScalarWhereWithAggregatesInput | Prisma.LguScalarWhereWithAggregatesInput[];
    OR?: Prisma.LguScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LguScalarWhereWithAggregatesInput | Prisma.LguScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Lgu"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Lgu"> | string;
    operationsOfficeNumId?: Prisma.IntWithAggregatesFilter<"Lgu"> | number;
};
export type LguCreateInput = {
    name: string;
    operationsOfficeNum: Prisma.OperationsOfficeNumCreateNestedOneWithoutLguInput;
    barangay?: Prisma.BarangayCreateNestedManyWithoutLguInput;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedLguInput;
};
export type LguUncheckedCreateInput = {
    id?: number;
    name: string;
    operationsOfficeNumId: number;
    barangay?: Prisma.BarangayUncheckedCreateNestedManyWithoutLguInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedLguInput;
};
export type LguUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNum?: Prisma.OperationsOfficeNumUpdateOneRequiredWithoutLguNestedInput;
    barangay?: Prisma.BarangayUpdateManyWithoutLguNestedInput;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedLguNestedInput;
};
export type LguUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNumId?: Prisma.IntFieldUpdateOperationsInput | number;
    barangay?: Prisma.BarangayUncheckedUpdateManyWithoutLguNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedLguNestedInput;
};
export type LguCreateManyInput = {
    id?: number;
    name: string;
    operationsOfficeNumId: number;
};
export type LguUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LguUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNumId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LguNullableScalarRelationFilter = {
    is?: Prisma.LguWhereInput | null;
    isNot?: Prisma.LguWhereInput | null;
};
export type LguListRelationFilter = {
    every?: Prisma.LguWhereInput;
    some?: Prisma.LguWhereInput;
    none?: Prisma.LguWhereInput;
};
export type LguOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LguCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
};
export type LguAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
};
export type LguMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
};
export type LguMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
};
export type LguSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationsOfficeNumId?: Prisma.SortOrder;
};
export type LguScalarRelationFilter = {
    is?: Prisma.LguWhereInput;
    isNot?: Prisma.LguWhereInput;
};
export type LguCreateNestedOneWithoutUserInfoInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutUserInfoInput, Prisma.LguUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutUserInfoInput;
    connect?: Prisma.LguWhereUniqueInput;
};
export type LguUpdateOneWithoutUserInfoNestedInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutUserInfoInput, Prisma.LguUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutUserInfoInput;
    upsert?: Prisma.LguUpsertWithoutUserInfoInput;
    disconnect?: Prisma.LguWhereInput | boolean;
    delete?: Prisma.LguWhereInput | boolean;
    connect?: Prisma.LguWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LguUpdateToOneWithWhereWithoutUserInfoInput, Prisma.LguUpdateWithoutUserInfoInput>, Prisma.LguUncheckedUpdateWithoutUserInfoInput>;
};
export type LguCreateNestedManyWithoutOperationsOfficeNumInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput> | Prisma.LguCreateWithoutOperationsOfficeNumInput[] | Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput[];
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput | Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput[];
    createMany?: Prisma.LguCreateManyOperationsOfficeNumInputEnvelope;
    connect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
};
export type LguUncheckedCreateNestedManyWithoutOperationsOfficeNumInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput> | Prisma.LguCreateWithoutOperationsOfficeNumInput[] | Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput[];
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput | Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput[];
    createMany?: Prisma.LguCreateManyOperationsOfficeNumInputEnvelope;
    connect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
};
export type LguUpdateManyWithoutOperationsOfficeNumNestedInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput> | Prisma.LguCreateWithoutOperationsOfficeNumInput[] | Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput[];
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput | Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput[];
    upsert?: Prisma.LguUpsertWithWhereUniqueWithoutOperationsOfficeNumInput | Prisma.LguUpsertWithWhereUniqueWithoutOperationsOfficeNumInput[];
    createMany?: Prisma.LguCreateManyOperationsOfficeNumInputEnvelope;
    set?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    disconnect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    delete?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    connect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    update?: Prisma.LguUpdateWithWhereUniqueWithoutOperationsOfficeNumInput | Prisma.LguUpdateWithWhereUniqueWithoutOperationsOfficeNumInput[];
    updateMany?: Prisma.LguUpdateManyWithWhereWithoutOperationsOfficeNumInput | Prisma.LguUpdateManyWithWhereWithoutOperationsOfficeNumInput[];
    deleteMany?: Prisma.LguScalarWhereInput | Prisma.LguScalarWhereInput[];
};
export type LguUncheckedUpdateManyWithoutOperationsOfficeNumNestedInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput> | Prisma.LguCreateWithoutOperationsOfficeNumInput[] | Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput[];
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput | Prisma.LguCreateOrConnectWithoutOperationsOfficeNumInput[];
    upsert?: Prisma.LguUpsertWithWhereUniqueWithoutOperationsOfficeNumInput | Prisma.LguUpsertWithWhereUniqueWithoutOperationsOfficeNumInput[];
    createMany?: Prisma.LguCreateManyOperationsOfficeNumInputEnvelope;
    set?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    disconnect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    delete?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    connect?: Prisma.LguWhereUniqueInput | Prisma.LguWhereUniqueInput[];
    update?: Prisma.LguUpdateWithWhereUniqueWithoutOperationsOfficeNumInput | Prisma.LguUpdateWithWhereUniqueWithoutOperationsOfficeNumInput[];
    updateMany?: Prisma.LguUpdateManyWithWhereWithoutOperationsOfficeNumInput | Prisma.LguUpdateManyWithWhereWithoutOperationsOfficeNumInput[];
    deleteMany?: Prisma.LguScalarWhereInput | Prisma.LguScalarWhereInput[];
};
export type LguCreateNestedOneWithoutBarangayInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutBarangayInput, Prisma.LguUncheckedCreateWithoutBarangayInput>;
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutBarangayInput;
    connect?: Prisma.LguWhereUniqueInput;
};
export type LguUpdateOneRequiredWithoutBarangayNestedInput = {
    create?: Prisma.XOR<Prisma.LguCreateWithoutBarangayInput, Prisma.LguUncheckedCreateWithoutBarangayInput>;
    connectOrCreate?: Prisma.LguCreateOrConnectWithoutBarangayInput;
    upsert?: Prisma.LguUpsertWithoutBarangayInput;
    connect?: Prisma.LguWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LguUpdateToOneWithWhereWithoutBarangayInput, Prisma.LguUpdateWithoutBarangayInput>, Prisma.LguUncheckedUpdateWithoutBarangayInput>;
};
export type LguCreateWithoutUserInfoInput = {
    name: string;
    operationsOfficeNum: Prisma.OperationsOfficeNumCreateNestedOneWithoutLguInput;
    barangay?: Prisma.BarangayCreateNestedManyWithoutLguInput;
};
export type LguUncheckedCreateWithoutUserInfoInput = {
    id?: number;
    name: string;
    operationsOfficeNumId: number;
    barangay?: Prisma.BarangayUncheckedCreateNestedManyWithoutLguInput;
};
export type LguCreateOrConnectWithoutUserInfoInput = {
    where: Prisma.LguWhereUniqueInput;
    create: Prisma.XOR<Prisma.LguCreateWithoutUserInfoInput, Prisma.LguUncheckedCreateWithoutUserInfoInput>;
};
export type LguUpsertWithoutUserInfoInput = {
    update: Prisma.XOR<Prisma.LguUpdateWithoutUserInfoInput, Prisma.LguUncheckedUpdateWithoutUserInfoInput>;
    create: Prisma.XOR<Prisma.LguCreateWithoutUserInfoInput, Prisma.LguUncheckedCreateWithoutUserInfoInput>;
    where?: Prisma.LguWhereInput;
};
export type LguUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: Prisma.LguWhereInput;
    data: Prisma.XOR<Prisma.LguUpdateWithoutUserInfoInput, Prisma.LguUncheckedUpdateWithoutUserInfoInput>;
};
export type LguUpdateWithoutUserInfoInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNum?: Prisma.OperationsOfficeNumUpdateOneRequiredWithoutLguNestedInput;
    barangay?: Prisma.BarangayUpdateManyWithoutLguNestedInput;
};
export type LguUncheckedUpdateWithoutUserInfoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNumId?: Prisma.IntFieldUpdateOperationsInput | number;
    barangay?: Prisma.BarangayUncheckedUpdateManyWithoutLguNestedInput;
};
export type LguCreateWithoutOperationsOfficeNumInput = {
    name: string;
    barangay?: Prisma.BarangayCreateNestedManyWithoutLguInput;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedLguInput;
};
export type LguUncheckedCreateWithoutOperationsOfficeNumInput = {
    id?: number;
    name: string;
    barangay?: Prisma.BarangayUncheckedCreateNestedManyWithoutLguInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedLguInput;
};
export type LguCreateOrConnectWithoutOperationsOfficeNumInput = {
    where: Prisma.LguWhereUniqueInput;
    create: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput>;
};
export type LguCreateManyOperationsOfficeNumInputEnvelope = {
    data: Prisma.LguCreateManyOperationsOfficeNumInput | Prisma.LguCreateManyOperationsOfficeNumInput[];
    skipDuplicates?: boolean;
};
export type LguUpsertWithWhereUniqueWithoutOperationsOfficeNumInput = {
    where: Prisma.LguWhereUniqueInput;
    update: Prisma.XOR<Prisma.LguUpdateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedUpdateWithoutOperationsOfficeNumInput>;
    create: Prisma.XOR<Prisma.LguCreateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedCreateWithoutOperationsOfficeNumInput>;
};
export type LguUpdateWithWhereUniqueWithoutOperationsOfficeNumInput = {
    where: Prisma.LguWhereUniqueInput;
    data: Prisma.XOR<Prisma.LguUpdateWithoutOperationsOfficeNumInput, Prisma.LguUncheckedUpdateWithoutOperationsOfficeNumInput>;
};
export type LguUpdateManyWithWhereWithoutOperationsOfficeNumInput = {
    where: Prisma.LguScalarWhereInput;
    data: Prisma.XOR<Prisma.LguUpdateManyMutationInput, Prisma.LguUncheckedUpdateManyWithoutOperationsOfficeNumInput>;
};
export type LguScalarWhereInput = {
    AND?: Prisma.LguScalarWhereInput | Prisma.LguScalarWhereInput[];
    OR?: Prisma.LguScalarWhereInput[];
    NOT?: Prisma.LguScalarWhereInput | Prisma.LguScalarWhereInput[];
    id?: Prisma.IntFilter<"Lgu"> | number;
    name?: Prisma.StringFilter<"Lgu"> | string;
    operationsOfficeNumId?: Prisma.IntFilter<"Lgu"> | number;
};
export type LguCreateWithoutBarangayInput = {
    name: string;
    operationsOfficeNum: Prisma.OperationsOfficeNumCreateNestedOneWithoutLguInput;
    userInfo?: Prisma.UserInfoCreateNestedManyWithoutAssignedLguInput;
};
export type LguUncheckedCreateWithoutBarangayInput = {
    id?: number;
    name: string;
    operationsOfficeNumId: number;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedManyWithoutAssignedLguInput;
};
export type LguCreateOrConnectWithoutBarangayInput = {
    where: Prisma.LguWhereUniqueInput;
    create: Prisma.XOR<Prisma.LguCreateWithoutBarangayInput, Prisma.LguUncheckedCreateWithoutBarangayInput>;
};
export type LguUpsertWithoutBarangayInput = {
    update: Prisma.XOR<Prisma.LguUpdateWithoutBarangayInput, Prisma.LguUncheckedUpdateWithoutBarangayInput>;
    create: Prisma.XOR<Prisma.LguCreateWithoutBarangayInput, Prisma.LguUncheckedCreateWithoutBarangayInput>;
    where?: Prisma.LguWhereInput;
};
export type LguUpdateToOneWithWhereWithoutBarangayInput = {
    where?: Prisma.LguWhereInput;
    data: Prisma.XOR<Prisma.LguUpdateWithoutBarangayInput, Prisma.LguUncheckedUpdateWithoutBarangayInput>;
};
export type LguUpdateWithoutBarangayInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNum?: Prisma.OperationsOfficeNumUpdateOneRequiredWithoutLguNestedInput;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedLguNestedInput;
};
export type LguUncheckedUpdateWithoutBarangayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    operationsOfficeNumId?: Prisma.IntFieldUpdateOperationsInput | number;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedLguNestedInput;
};
export type LguCreateManyOperationsOfficeNumInput = {
    id?: number;
    name: string;
};
export type LguUpdateWithoutOperationsOfficeNumInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.BarangayUpdateManyWithoutLguNestedInput;
    userInfo?: Prisma.UserInfoUpdateManyWithoutAssignedLguNestedInput;
};
export type LguUncheckedUpdateWithoutOperationsOfficeNumInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.BarangayUncheckedUpdateManyWithoutLguNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateManyWithoutAssignedLguNestedInput;
};
export type LguUncheckedUpdateManyWithoutOperationsOfficeNumInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LguCountOutputType = {
    barangay: number;
    userInfo: number;
};
export type LguCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barangay?: boolean | LguCountOutputTypeCountBarangayArgs;
    userInfo?: boolean | LguCountOutputTypeCountUserInfoArgs;
};
export type LguCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguCountOutputTypeSelect<ExtArgs> | null;
};
export type LguCountOutputTypeCountBarangayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarangayWhereInput;
};
export type LguCountOutputTypeCountUserInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserInfoWhereInput;
};
export type LguSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    operationsOfficeNumId?: boolean;
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
    barangay?: boolean | Prisma.Lgu$barangayArgs<ExtArgs>;
    userInfo?: boolean | Prisma.Lgu$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.LguCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lgu"]>;
export type LguSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    operationsOfficeNumId?: boolean;
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lgu"]>;
export type LguSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    operationsOfficeNumId?: boolean;
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lgu"]>;
export type LguSelectScalar = {
    id?: boolean;
    name?: boolean;
    operationsOfficeNumId?: boolean;
};
export type LguOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "operationsOfficeNumId", ExtArgs["result"]["lgu"]>;
export type LguInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
    barangay?: boolean | Prisma.Lgu$barangayArgs<ExtArgs>;
    userInfo?: boolean | Prisma.Lgu$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.LguCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LguIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
};
export type LguIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operationsOfficeNum?: boolean | Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>;
};
export type $LguPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lgu";
    objects: {
        operationsOfficeNum: Prisma.$OperationsOfficeNumPayload<ExtArgs>;
        barangay: Prisma.$BarangayPayload<ExtArgs>[];
        userInfo: Prisma.$UserInfoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        operationsOfficeNumId: number;
    }, ExtArgs["result"]["lgu"]>;
    composites: {};
};
export type LguGetPayload<S extends boolean | null | undefined | LguDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LguPayload, S>;
export type LguCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LguFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LguCountAggregateInputType | true;
};
export interface LguDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lgu'];
        meta: {
            name: 'Lgu';
        };
    };
    findUnique<T extends LguFindUniqueArgs>(args: Prisma.SelectSubset<T, LguFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LguFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LguFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LguFindFirstArgs>(args?: Prisma.SelectSubset<T, LguFindFirstArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LguFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LguFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LguFindManyArgs>(args?: Prisma.SelectSubset<T, LguFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LguCreateArgs>(args: Prisma.SelectSubset<T, LguCreateArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LguCreateManyArgs>(args?: Prisma.SelectSubset<T, LguCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LguCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LguCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LguDeleteArgs>(args: Prisma.SelectSubset<T, LguDeleteArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LguUpdateArgs>(args: Prisma.SelectSubset<T, LguUpdateArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LguDeleteManyArgs>(args?: Prisma.SelectSubset<T, LguDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LguUpdateManyArgs>(args: Prisma.SelectSubset<T, LguUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LguUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LguUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LguUpsertArgs>(args: Prisma.SelectSubset<T, LguUpsertArgs<ExtArgs>>): Prisma.Prisma__LguClient<runtime.Types.Result.GetResult<Prisma.$LguPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LguCountArgs>(args?: Prisma.Subset<T, LguCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LguCountAggregateOutputType> : number>;
    aggregate<T extends LguAggregateArgs>(args: Prisma.Subset<T, LguAggregateArgs>): Prisma.PrismaPromise<GetLguAggregateType<T>>;
    groupBy<T extends LguGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LguGroupByArgs['orderBy'];
    } : {
        orderBy?: LguGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LguGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLguGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LguFieldRefs;
}
export interface Prisma__LguClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    operationsOfficeNum<T extends Prisma.OperationsOfficeNumDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OperationsOfficeNumDefaultArgs<ExtArgs>>): Prisma.Prisma__OperationsOfficeNumClient<runtime.Types.Result.GetResult<Prisma.$OperationsOfficeNumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    barangay<T extends Prisma.Lgu$barangayArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lgu$barangayArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarangayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userInfo<T extends Prisma.Lgu$userInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lgu$userInfoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LguFieldRefs {
    readonly id: Prisma.FieldRef<"Lgu", 'Int'>;
    readonly name: Prisma.FieldRef<"Lgu", 'String'>;
    readonly operationsOfficeNumId: Prisma.FieldRef<"Lgu", 'Int'>;
}
export type LguFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    where: Prisma.LguWhereUniqueInput;
};
export type LguFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    where: Prisma.LguWhereUniqueInput;
};
export type LguFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LguFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LguFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LguCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LguCreateInput, Prisma.LguUncheckedCreateInput>;
};
export type LguCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LguCreateManyInput | Prisma.LguCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LguCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    data: Prisma.LguCreateManyInput | Prisma.LguCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LguIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LguUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LguUpdateInput, Prisma.LguUncheckedUpdateInput>;
    where: Prisma.LguWhereUniqueInput;
};
export type LguUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LguUpdateManyMutationInput, Prisma.LguUncheckedUpdateManyInput>;
    where?: Prisma.LguWhereInput;
    limit?: number;
};
export type LguUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LguUpdateManyMutationInput, Prisma.LguUncheckedUpdateManyInput>;
    where?: Prisma.LguWhereInput;
    limit?: number;
    include?: Prisma.LguIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LguUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    where: Prisma.LguWhereUniqueInput;
    create: Prisma.XOR<Prisma.LguCreateInput, Prisma.LguUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LguUpdateInput, Prisma.LguUncheckedUpdateInput>;
};
export type LguDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
    where: Prisma.LguWhereUniqueInput;
};
export type LguDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LguWhereInput;
    limit?: number;
};
export type Lgu$barangayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Lgu$userInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LguDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LguSelect<ExtArgs> | null;
    omit?: Prisma.LguOmit<ExtArgs> | null;
    include?: Prisma.LguInclude<ExtArgs> | null;
};
export {};
