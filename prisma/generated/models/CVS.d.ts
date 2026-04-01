import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CVSModel = runtime.Types.Result.DefaultSelection<Prisma.$CVSPayload>;
export type AggregateCVS = {
    _count: CVSCountAggregateOutputType | null;
    _avg: CVSAvgAggregateOutputType | null;
    _sum: CVSSumAggregateOutputType | null;
    _min: CVSMinAggregateOutputType | null;
    _max: CVSMaxAggregateOutputType | null;
};
export type CVSAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type CVSSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type CVSMinAggregateOutputType = {
    id: number | null;
    idNumber: string | null;
    lgu: string | null;
    barangay: string | null;
    facilityName: string | null;
    formType: string | null;
    remarks: string | null;
    userId: number | null;
    issue: string | null;
    period: string | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CVSMaxAggregateOutputType = {
    id: number | null;
    idNumber: string | null;
    lgu: string | null;
    barangay: string | null;
    facilityName: string | null;
    formType: string | null;
    remarks: string | null;
    userId: number | null;
    issue: string | null;
    period: string | null;
    date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CVSCountAggregateOutputType = {
    id: number;
    idNumber: number;
    lgu: number;
    barangay: number;
    facilityName: number;
    formType: number;
    remarks: number;
    userId: number;
    issue: number;
    period: number;
    date: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CVSAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type CVSSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type CVSMinAggregateInputType = {
    id?: true;
    idNumber?: true;
    lgu?: true;
    barangay?: true;
    facilityName?: true;
    formType?: true;
    remarks?: true;
    userId?: true;
    issue?: true;
    period?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CVSMaxAggregateInputType = {
    id?: true;
    idNumber?: true;
    lgu?: true;
    barangay?: true;
    facilityName?: true;
    formType?: true;
    remarks?: true;
    userId?: true;
    issue?: true;
    period?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CVSCountAggregateInputType = {
    id?: true;
    idNumber?: true;
    lgu?: true;
    barangay?: true;
    facilityName?: true;
    formType?: true;
    remarks?: true;
    userId?: true;
    issue?: true;
    period?: true;
    date?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CVSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CVSWhereInput;
    orderBy?: Prisma.CVSOrderByWithRelationInput | Prisma.CVSOrderByWithRelationInput[];
    cursor?: Prisma.CVSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CVSCountAggregateInputType;
    _avg?: CVSAvgAggregateInputType;
    _sum?: CVSSumAggregateInputType;
    _min?: CVSMinAggregateInputType;
    _max?: CVSMaxAggregateInputType;
};
export type GetCVSAggregateType<T extends CVSAggregateArgs> = {
    [P in keyof T & keyof AggregateCVS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCVS[P]> : Prisma.GetScalarType<T[P], AggregateCVS[P]>;
};
export type CVSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CVSWhereInput;
    orderBy?: Prisma.CVSOrderByWithAggregationInput | Prisma.CVSOrderByWithAggregationInput[];
    by: Prisma.CVSScalarFieldEnum[] | Prisma.CVSScalarFieldEnum;
    having?: Prisma.CVSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CVSCountAggregateInputType | true;
    _avg?: CVSAvgAggregateInputType;
    _sum?: CVSSumAggregateInputType;
    _min?: CVSMinAggregateInputType;
    _max?: CVSMaxAggregateInputType;
};
export type CVSGroupByOutputType = {
    id: number;
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    userId: number;
    issue: string | null;
    period: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: CVSCountAggregateOutputType | null;
    _avg: CVSAvgAggregateOutputType | null;
    _sum: CVSSumAggregateOutputType | null;
    _min: CVSMinAggregateOutputType | null;
    _max: CVSMaxAggregateOutputType | null;
};
type GetCVSGroupByPayload<T extends CVSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CVSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CVSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CVSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CVSGroupByOutputType[P]>;
}>>;
export type CVSWhereInput = {
    AND?: Prisma.CVSWhereInput | Prisma.CVSWhereInput[];
    OR?: Prisma.CVSWhereInput[];
    NOT?: Prisma.CVSWhereInput | Prisma.CVSWhereInput[];
    id?: Prisma.IntFilter<"CVS"> | number;
    idNumber?: Prisma.StringFilter<"CVS"> | string;
    lgu?: Prisma.StringFilter<"CVS"> | string;
    barangay?: Prisma.StringFilter<"CVS"> | string;
    facilityName?: Prisma.StringFilter<"CVS"> | string;
    formType?: Prisma.StringFilter<"CVS"> | string;
    remarks?: Prisma.StringFilter<"CVS"> | string;
    userId?: Prisma.IntFilter<"CVS"> | number;
    issue?: Prisma.StringNullableFilter<"CVS"> | string | null;
    period?: Prisma.StringFilter<"CVS"> | string;
    date?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    userById?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CVSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    lgu?: Prisma.SortOrder;
    barangay?: Prisma.SortOrder;
    facilityName?: Prisma.SortOrder;
    formType?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userById?: Prisma.UserOrderByWithRelationInput;
};
export type CVSWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CVSWhereInput | Prisma.CVSWhereInput[];
    OR?: Prisma.CVSWhereInput[];
    NOT?: Prisma.CVSWhereInput | Prisma.CVSWhereInput[];
    idNumber?: Prisma.StringFilter<"CVS"> | string;
    lgu?: Prisma.StringFilter<"CVS"> | string;
    barangay?: Prisma.StringFilter<"CVS"> | string;
    facilityName?: Prisma.StringFilter<"CVS"> | string;
    formType?: Prisma.StringFilter<"CVS"> | string;
    remarks?: Prisma.StringFilter<"CVS"> | string;
    userId?: Prisma.IntFilter<"CVS"> | number;
    issue?: Prisma.StringNullableFilter<"CVS"> | string | null;
    period?: Prisma.StringFilter<"CVS"> | string;
    date?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    userById?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CVSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    lgu?: Prisma.SortOrder;
    barangay?: Prisma.SortOrder;
    facilityName?: Prisma.SortOrder;
    formType?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CVSCountOrderByAggregateInput;
    _avg?: Prisma.CVSAvgOrderByAggregateInput;
    _max?: Prisma.CVSMaxOrderByAggregateInput;
    _min?: Prisma.CVSMinOrderByAggregateInput;
    _sum?: Prisma.CVSSumOrderByAggregateInput;
};
export type CVSScalarWhereWithAggregatesInput = {
    AND?: Prisma.CVSScalarWhereWithAggregatesInput | Prisma.CVSScalarWhereWithAggregatesInput[];
    OR?: Prisma.CVSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CVSScalarWhereWithAggregatesInput | Prisma.CVSScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CVS"> | number;
    idNumber?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    lgu?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    barangay?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    facilityName?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    formType?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    remarks?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"CVS"> | number;
    issue?: Prisma.StringNullableWithAggregatesFilter<"CVS"> | string | null;
    period?: Prisma.StringWithAggregatesFilter<"CVS"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"CVS"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CVS"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CVS"> | Date | string;
};
export type CVSCreateInput = {
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userById: Prisma.UserCreateNestedOneWithoutCvsByIDInput;
};
export type CVSUncheckedCreateInput = {
    id?: number;
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    userId: number;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CVSUpdateInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userById?: Prisma.UserUpdateOneRequiredWithoutCvsByIDNestedInput;
};
export type CVSUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSCreateManyInput = {
    id?: number;
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    userId: number;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CVSUpdateManyMutationInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSListRelationFilter = {
    every?: Prisma.CVSWhereInput;
    some?: Prisma.CVSWhereInput;
    none?: Prisma.CVSWhereInput;
};
export type CVSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CVSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    lgu?: Prisma.SortOrder;
    barangay?: Prisma.SortOrder;
    facilityName?: Prisma.SortOrder;
    formType?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CVSAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CVSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    lgu?: Prisma.SortOrder;
    barangay?: Prisma.SortOrder;
    facilityName?: Prisma.SortOrder;
    formType?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CVSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    lgu?: Prisma.SortOrder;
    barangay?: Prisma.SortOrder;
    facilityName?: Prisma.SortOrder;
    formType?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CVSSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CVSCreateNestedManyWithoutUserByIdInput = {
    create?: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput> | Prisma.CVSCreateWithoutUserByIdInput[] | Prisma.CVSUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.CVSCreateOrConnectWithoutUserByIdInput | Prisma.CVSCreateOrConnectWithoutUserByIdInput[];
    createMany?: Prisma.CVSCreateManyUserByIdInputEnvelope;
    connect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
};
export type CVSUncheckedCreateNestedManyWithoutUserByIdInput = {
    create?: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput> | Prisma.CVSCreateWithoutUserByIdInput[] | Prisma.CVSUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.CVSCreateOrConnectWithoutUserByIdInput | Prisma.CVSCreateOrConnectWithoutUserByIdInput[];
    createMany?: Prisma.CVSCreateManyUserByIdInputEnvelope;
    connect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
};
export type CVSUpdateManyWithoutUserByIdNestedInput = {
    create?: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput> | Prisma.CVSCreateWithoutUserByIdInput[] | Prisma.CVSUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.CVSCreateOrConnectWithoutUserByIdInput | Prisma.CVSCreateOrConnectWithoutUserByIdInput[];
    upsert?: Prisma.CVSUpsertWithWhereUniqueWithoutUserByIdInput | Prisma.CVSUpsertWithWhereUniqueWithoutUserByIdInput[];
    createMany?: Prisma.CVSCreateManyUserByIdInputEnvelope;
    set?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    disconnect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    delete?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    connect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    update?: Prisma.CVSUpdateWithWhereUniqueWithoutUserByIdInput | Prisma.CVSUpdateWithWhereUniqueWithoutUserByIdInput[];
    updateMany?: Prisma.CVSUpdateManyWithWhereWithoutUserByIdInput | Prisma.CVSUpdateManyWithWhereWithoutUserByIdInput[];
    deleteMany?: Prisma.CVSScalarWhereInput | Prisma.CVSScalarWhereInput[];
};
export type CVSUncheckedUpdateManyWithoutUserByIdNestedInput = {
    create?: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput> | Prisma.CVSCreateWithoutUserByIdInput[] | Prisma.CVSUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.CVSCreateOrConnectWithoutUserByIdInput | Prisma.CVSCreateOrConnectWithoutUserByIdInput[];
    upsert?: Prisma.CVSUpsertWithWhereUniqueWithoutUserByIdInput | Prisma.CVSUpsertWithWhereUniqueWithoutUserByIdInput[];
    createMany?: Prisma.CVSCreateManyUserByIdInputEnvelope;
    set?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    disconnect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    delete?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    connect?: Prisma.CVSWhereUniqueInput | Prisma.CVSWhereUniqueInput[];
    update?: Prisma.CVSUpdateWithWhereUniqueWithoutUserByIdInput | Prisma.CVSUpdateWithWhereUniqueWithoutUserByIdInput[];
    updateMany?: Prisma.CVSUpdateManyWithWhereWithoutUserByIdInput | Prisma.CVSUpdateManyWithWhereWithoutUserByIdInput[];
    deleteMany?: Prisma.CVSScalarWhereInput | Prisma.CVSScalarWhereInput[];
};
export type CVSCreateWithoutUserByIdInput = {
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CVSUncheckedCreateWithoutUserByIdInput = {
    id?: number;
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CVSCreateOrConnectWithoutUserByIdInput = {
    where: Prisma.CVSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput>;
};
export type CVSCreateManyUserByIdInputEnvelope = {
    data: Prisma.CVSCreateManyUserByIdInput | Prisma.CVSCreateManyUserByIdInput[];
    skipDuplicates?: boolean;
};
export type CVSUpsertWithWhereUniqueWithoutUserByIdInput = {
    where: Prisma.CVSWhereUniqueInput;
    update: Prisma.XOR<Prisma.CVSUpdateWithoutUserByIdInput, Prisma.CVSUncheckedUpdateWithoutUserByIdInput>;
    create: Prisma.XOR<Prisma.CVSCreateWithoutUserByIdInput, Prisma.CVSUncheckedCreateWithoutUserByIdInput>;
};
export type CVSUpdateWithWhereUniqueWithoutUserByIdInput = {
    where: Prisma.CVSWhereUniqueInput;
    data: Prisma.XOR<Prisma.CVSUpdateWithoutUserByIdInput, Prisma.CVSUncheckedUpdateWithoutUserByIdInput>;
};
export type CVSUpdateManyWithWhereWithoutUserByIdInput = {
    where: Prisma.CVSScalarWhereInput;
    data: Prisma.XOR<Prisma.CVSUpdateManyMutationInput, Prisma.CVSUncheckedUpdateManyWithoutUserByIdInput>;
};
export type CVSScalarWhereInput = {
    AND?: Prisma.CVSScalarWhereInput | Prisma.CVSScalarWhereInput[];
    OR?: Prisma.CVSScalarWhereInput[];
    NOT?: Prisma.CVSScalarWhereInput | Prisma.CVSScalarWhereInput[];
    id?: Prisma.IntFilter<"CVS"> | number;
    idNumber?: Prisma.StringFilter<"CVS"> | string;
    lgu?: Prisma.StringFilter<"CVS"> | string;
    barangay?: Prisma.StringFilter<"CVS"> | string;
    facilityName?: Prisma.StringFilter<"CVS"> | string;
    formType?: Prisma.StringFilter<"CVS"> | string;
    remarks?: Prisma.StringFilter<"CVS"> | string;
    userId?: Prisma.IntFilter<"CVS"> | number;
    issue?: Prisma.StringNullableFilter<"CVS"> | string | null;
    period?: Prisma.StringFilter<"CVS"> | string;
    date?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CVS"> | Date | string;
};
export type CVSCreateManyUserByIdInput = {
    id?: number;
    idNumber: string;
    lgu: string;
    barangay: string;
    facilityName: string;
    formType: string;
    remarks: string;
    issue?: string | null;
    period: string;
    date: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CVSUpdateWithoutUserByIdInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSUncheckedUpdateWithoutUserByIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSUncheckedUpdateManyWithoutUserByIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    lgu?: Prisma.StringFieldUpdateOperationsInput | string;
    barangay?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityName?: Prisma.StringFieldUpdateOperationsInput | string;
    formType?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    issue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CVSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    lgu?: boolean;
    barangay?: boolean;
    facilityName?: boolean;
    formType?: boolean;
    remarks?: boolean;
    userId?: boolean;
    issue?: boolean;
    period?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cVS"]>;
export type CVSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    lgu?: boolean;
    barangay?: boolean;
    facilityName?: boolean;
    formType?: boolean;
    remarks?: boolean;
    userId?: boolean;
    issue?: boolean;
    period?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cVS"]>;
export type CVSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    lgu?: boolean;
    barangay?: boolean;
    facilityName?: boolean;
    formType?: boolean;
    remarks?: boolean;
    userId?: boolean;
    issue?: boolean;
    period?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cVS"]>;
export type CVSSelectScalar = {
    id?: boolean;
    idNumber?: boolean;
    lgu?: boolean;
    barangay?: boolean;
    facilityName?: boolean;
    formType?: boolean;
    remarks?: boolean;
    userId?: boolean;
    issue?: boolean;
    period?: boolean;
    date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CVSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "idNumber" | "lgu" | "barangay" | "facilityName" | "formType" | "remarks" | "userId" | "issue" | "period" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["cVS"]>;
export type CVSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CVSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CVSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CVSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CVS";
    objects: {
        userById: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        idNumber: string;
        lgu: string;
        barangay: string;
        facilityName: string;
        formType: string;
        remarks: string;
        userId: number;
        issue: string | null;
        period: string;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cVS"]>;
    composites: {};
};
export type CVSGetPayload<S extends boolean | null | undefined | CVSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CVSPayload, S>;
export type CVSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CVSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CVSCountAggregateInputType | true;
};
export interface CVSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CVS'];
        meta: {
            name: 'CVS';
        };
    };
    findUnique<T extends CVSFindUniqueArgs>(args: Prisma.SelectSubset<T, CVSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CVSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CVSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CVSFindFirstArgs>(args?: Prisma.SelectSubset<T, CVSFindFirstArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CVSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CVSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CVSFindManyArgs>(args?: Prisma.SelectSubset<T, CVSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CVSCreateArgs>(args: Prisma.SelectSubset<T, CVSCreateArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CVSCreateManyArgs>(args?: Prisma.SelectSubset<T, CVSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CVSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CVSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CVSDeleteArgs>(args: Prisma.SelectSubset<T, CVSDeleteArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CVSUpdateArgs>(args: Prisma.SelectSubset<T, CVSUpdateArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CVSDeleteManyArgs>(args?: Prisma.SelectSubset<T, CVSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CVSUpdateManyArgs>(args: Prisma.SelectSubset<T, CVSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CVSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CVSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CVSUpsertArgs>(args: Prisma.SelectSubset<T, CVSUpsertArgs<ExtArgs>>): Prisma.Prisma__CVSClient<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CVSCountArgs>(args?: Prisma.Subset<T, CVSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CVSCountAggregateOutputType> : number>;
    aggregate<T extends CVSAggregateArgs>(args: Prisma.Subset<T, CVSAggregateArgs>): Prisma.PrismaPromise<GetCVSAggregateType<T>>;
    groupBy<T extends CVSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CVSGroupByArgs['orderBy'];
    } : {
        orderBy?: CVSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CVSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CVSFieldRefs;
}
export interface Prisma__CVSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userById<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CVSFieldRefs {
    readonly id: Prisma.FieldRef<"CVS", 'Int'>;
    readonly idNumber: Prisma.FieldRef<"CVS", 'String'>;
    readonly lgu: Prisma.FieldRef<"CVS", 'String'>;
    readonly barangay: Prisma.FieldRef<"CVS", 'String'>;
    readonly facilityName: Prisma.FieldRef<"CVS", 'String'>;
    readonly formType: Prisma.FieldRef<"CVS", 'String'>;
    readonly remarks: Prisma.FieldRef<"CVS", 'String'>;
    readonly userId: Prisma.FieldRef<"CVS", 'Int'>;
    readonly issue: Prisma.FieldRef<"CVS", 'String'>;
    readonly period: Prisma.FieldRef<"CVS", 'String'>;
    readonly date: Prisma.FieldRef<"CVS", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CVS", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CVS", 'DateTime'>;
}
export type CVSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where: Prisma.CVSWhereUniqueInput;
};
export type CVSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where: Prisma.CVSWhereUniqueInput;
};
export type CVSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where?: Prisma.CVSWhereInput;
    orderBy?: Prisma.CVSOrderByWithRelationInput | Prisma.CVSOrderByWithRelationInput[];
    cursor?: Prisma.CVSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CVSScalarFieldEnum | Prisma.CVSScalarFieldEnum[];
};
export type CVSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where?: Prisma.CVSWhereInput;
    orderBy?: Prisma.CVSOrderByWithRelationInput | Prisma.CVSOrderByWithRelationInput[];
    cursor?: Prisma.CVSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CVSScalarFieldEnum | Prisma.CVSScalarFieldEnum[];
};
export type CVSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where?: Prisma.CVSWhereInput;
    orderBy?: Prisma.CVSOrderByWithRelationInput | Prisma.CVSOrderByWithRelationInput[];
    cursor?: Prisma.CVSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CVSScalarFieldEnum | Prisma.CVSScalarFieldEnum[];
};
export type CVSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CVSCreateInput, Prisma.CVSUncheckedCreateInput>;
};
export type CVSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CVSCreateManyInput | Prisma.CVSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CVSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    data: Prisma.CVSCreateManyInput | Prisma.CVSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CVSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CVSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CVSUpdateInput, Prisma.CVSUncheckedUpdateInput>;
    where: Prisma.CVSWhereUniqueInput;
};
export type CVSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CVSUpdateManyMutationInput, Prisma.CVSUncheckedUpdateManyInput>;
    where?: Prisma.CVSWhereInput;
    limit?: number;
};
export type CVSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CVSUpdateManyMutationInput, Prisma.CVSUncheckedUpdateManyInput>;
    where?: Prisma.CVSWhereInput;
    limit?: number;
    include?: Prisma.CVSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CVSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where: Prisma.CVSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CVSCreateInput, Prisma.CVSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CVSUpdateInput, Prisma.CVSUncheckedUpdateInput>;
};
export type CVSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
    where: Prisma.CVSWhereUniqueInput;
};
export type CVSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CVSWhereInput;
    limit?: number;
};
export type CVSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CVSSelect<ExtArgs> | null;
    omit?: Prisma.CVSOmit<ExtArgs> | null;
    include?: Prisma.CVSInclude<ExtArgs> | null;
};
export {};
