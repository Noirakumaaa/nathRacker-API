import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncodedDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$EncodedDocumentPayload>;
export type AggregateEncodedDocument = {
    _count: EncodedDocumentCountAggregateOutputType | null;
    _avg: EncodedDocumentAvgAggregateOutputType | null;
    _sum: EncodedDocumentSumAggregateOutputType | null;
    _min: EncodedDocumentMinAggregateOutputType | null;
    _max: EncodedDocumentMaxAggregateOutputType | null;
};
export type EncodedDocumentAvgAggregateOutputType = {
    id: number | null;
    documentId: number | null;
    userId: number | null;
};
export type EncodedDocumentSumAggregateOutputType = {
    id: number | null;
    documentId: number | null;
    userId: number | null;
};
export type EncodedDocumentMinAggregateOutputType = {
    id: number | null;
    idNumber: string | null;
    name: string | null;
    documentType: string | null;
    documentId: number | null;
    subjectOfChange: string | null;
    remarks: string | null;
    drn: string | null;
    userId: number | null;
    govUsername: string | null;
    date: Date | null;
    verifiedBy: string | null;
    verified: string | null;
    createdAt: Date | null;
};
export type EncodedDocumentMaxAggregateOutputType = {
    id: number | null;
    idNumber: string | null;
    name: string | null;
    documentType: string | null;
    documentId: number | null;
    subjectOfChange: string | null;
    remarks: string | null;
    drn: string | null;
    userId: number | null;
    govUsername: string | null;
    date: Date | null;
    verifiedBy: string | null;
    verified: string | null;
    createdAt: Date | null;
};
export type EncodedDocumentCountAggregateOutputType = {
    id: number;
    idNumber: number;
    name: number;
    documentType: number;
    documentId: number;
    subjectOfChange: number;
    remarks: number;
    drn: number;
    userId: number;
    govUsername: number;
    date: number;
    verifiedBy: number;
    verified: number;
    createdAt: number;
    _all: number;
};
export type EncodedDocumentAvgAggregateInputType = {
    id?: true;
    documentId?: true;
    userId?: true;
};
export type EncodedDocumentSumAggregateInputType = {
    id?: true;
    documentId?: true;
    userId?: true;
};
export type EncodedDocumentMinAggregateInputType = {
    id?: true;
    idNumber?: true;
    name?: true;
    documentType?: true;
    documentId?: true;
    subjectOfChange?: true;
    remarks?: true;
    drn?: true;
    userId?: true;
    govUsername?: true;
    date?: true;
    verifiedBy?: true;
    verified?: true;
    createdAt?: true;
};
export type EncodedDocumentMaxAggregateInputType = {
    id?: true;
    idNumber?: true;
    name?: true;
    documentType?: true;
    documentId?: true;
    subjectOfChange?: true;
    remarks?: true;
    drn?: true;
    userId?: true;
    govUsername?: true;
    date?: true;
    verifiedBy?: true;
    verified?: true;
    createdAt?: true;
};
export type EncodedDocumentCountAggregateInputType = {
    id?: true;
    idNumber?: true;
    name?: true;
    documentType?: true;
    documentId?: true;
    subjectOfChange?: true;
    remarks?: true;
    drn?: true;
    userId?: true;
    govUsername?: true;
    date?: true;
    verifiedBy?: true;
    verified?: true;
    createdAt?: true;
    _all?: true;
};
export type EncodedDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncodedDocumentWhereInput;
    orderBy?: Prisma.EncodedDocumentOrderByWithRelationInput | Prisma.EncodedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EncodedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncodedDocumentCountAggregateInputType;
    _avg?: EncodedDocumentAvgAggregateInputType;
    _sum?: EncodedDocumentSumAggregateInputType;
    _min?: EncodedDocumentMinAggregateInputType;
    _max?: EncodedDocumentMaxAggregateInputType;
};
export type GetEncodedDocumentAggregateType<T extends EncodedDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateEncodedDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncodedDocument[P]> : Prisma.GetScalarType<T[P], AggregateEncodedDocument[P]>;
};
export type EncodedDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncodedDocumentWhereInput;
    orderBy?: Prisma.EncodedDocumentOrderByWithAggregationInput | Prisma.EncodedDocumentOrderByWithAggregationInput[];
    by: Prisma.EncodedDocumentScalarFieldEnum[] | Prisma.EncodedDocumentScalarFieldEnum;
    having?: Prisma.EncodedDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncodedDocumentCountAggregateInputType | true;
    _avg?: EncodedDocumentAvgAggregateInputType;
    _sum?: EncodedDocumentSumAggregateInputType;
    _min?: EncodedDocumentMinAggregateInputType;
    _max?: EncodedDocumentMaxAggregateInputType;
};
export type EncodedDocumentGroupByOutputType = {
    id: number;
    idNumber: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    userId: number;
    govUsername: string;
    date: Date;
    verifiedBy: string;
    verified: string;
    createdAt: Date;
    _count: EncodedDocumentCountAggregateOutputType | null;
    _avg: EncodedDocumentAvgAggregateOutputType | null;
    _sum: EncodedDocumentSumAggregateOutputType | null;
    _min: EncodedDocumentMinAggregateOutputType | null;
    _max: EncodedDocumentMaxAggregateOutputType | null;
};
type GetEncodedDocumentGroupByPayload<T extends EncodedDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncodedDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncodedDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncodedDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncodedDocumentGroupByOutputType[P]>;
}>>;
export type EncodedDocumentWhereInput = {
    AND?: Prisma.EncodedDocumentWhereInput | Prisma.EncodedDocumentWhereInput[];
    OR?: Prisma.EncodedDocumentWhereInput[];
    NOT?: Prisma.EncodedDocumentWhereInput | Prisma.EncodedDocumentWhereInput[];
    id?: Prisma.IntFilter<"EncodedDocument"> | number;
    idNumber?: Prisma.StringFilter<"EncodedDocument"> | string;
    name?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentType?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentId?: Prisma.IntFilter<"EncodedDocument"> | number;
    subjectOfChange?: Prisma.StringFilter<"EncodedDocument"> | string;
    remarks?: Prisma.StringFilter<"EncodedDocument"> | string;
    drn?: Prisma.StringFilter<"EncodedDocument"> | string;
    userId?: Prisma.IntFilter<"EncodedDocument"> | number;
    govUsername?: Prisma.StringFilter<"EncodedDocument"> | string;
    date?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
    verifiedBy?: Prisma.StringFilter<"EncodedDocument"> | string;
    verified?: Prisma.StringFilter<"EncodedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
    userById?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    govUserByUsername?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EncodedDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    subjectOfChange?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    drn?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userById?: Prisma.UserOrderByWithRelationInput;
    govUserByUsername?: Prisma.UserOrderByWithRelationInput;
};
export type EncodedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EncodedDocumentWhereInput | Prisma.EncodedDocumentWhereInput[];
    OR?: Prisma.EncodedDocumentWhereInput[];
    NOT?: Prisma.EncodedDocumentWhereInput | Prisma.EncodedDocumentWhereInput[];
    idNumber?: Prisma.StringFilter<"EncodedDocument"> | string;
    name?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentType?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentId?: Prisma.IntFilter<"EncodedDocument"> | number;
    subjectOfChange?: Prisma.StringFilter<"EncodedDocument"> | string;
    remarks?: Prisma.StringFilter<"EncodedDocument"> | string;
    drn?: Prisma.StringFilter<"EncodedDocument"> | string;
    userId?: Prisma.IntFilter<"EncodedDocument"> | number;
    govUsername?: Prisma.StringFilter<"EncodedDocument"> | string;
    date?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
    verifiedBy?: Prisma.StringFilter<"EncodedDocument"> | string;
    verified?: Prisma.StringFilter<"EncodedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
    userById?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    govUserByUsername?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type EncodedDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    subjectOfChange?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    drn?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncodedDocumentCountOrderByAggregateInput;
    _avg?: Prisma.EncodedDocumentAvgOrderByAggregateInput;
    _max?: Prisma.EncodedDocumentMaxOrderByAggregateInput;
    _min?: Prisma.EncodedDocumentMinOrderByAggregateInput;
    _sum?: Prisma.EncodedDocumentSumOrderByAggregateInput;
};
export type EncodedDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncodedDocumentScalarWhereWithAggregatesInput | Prisma.EncodedDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncodedDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncodedDocumentScalarWhereWithAggregatesInput | Prisma.EncodedDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EncodedDocument"> | number;
    idNumber?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    documentType?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    documentId?: Prisma.IntWithAggregatesFilter<"EncodedDocument"> | number;
    subjectOfChange?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    remarks?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    drn?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"EncodedDocument"> | number;
    govUsername?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"EncodedDocument"> | Date | string;
    verifiedBy?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    verified?: Prisma.StringWithAggregatesFilter<"EncodedDocument"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EncodedDocument"> | Date | string;
};
export type EncodedDocumentCreateInput = {
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
    userById: Prisma.UserCreateNestedOneWithoutEncDocByIDInput;
    govUserByUsername: Prisma.UserCreateNestedOneWithoutEncDocByUsernameInput;
};
export type EncodedDocumentUncheckedCreateInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    userId: number;
    govUsername: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentUpdateInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userById?: Prisma.UserUpdateOneRequiredWithoutEncDocByIDNestedInput;
    govUserByUsername?: Prisma.UserUpdateOneRequiredWithoutEncDocByUsernameNestedInput;
};
export type EncodedDocumentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentCreateManyInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    userId: number;
    govUsername: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentUpdateManyMutationInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentListRelationFilter = {
    every?: Prisma.EncodedDocumentWhereInput;
    some?: Prisma.EncodedDocumentWhereInput;
    none?: Prisma.EncodedDocumentWhereInput;
};
export type EncodedDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncodedDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    subjectOfChange?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    drn?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncodedDocumentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type EncodedDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    subjectOfChange?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    drn?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncodedDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    subjectOfChange?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    drn?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncodedDocumentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type EncodedDocumentCreateNestedManyWithoutUserByIdInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput> | Prisma.EncodedDocumentCreateWithoutUserByIdInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput | Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput[];
    createMany?: Prisma.EncodedDocumentCreateManyUserByIdInputEnvelope;
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
};
export type EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput> | Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput | Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput[];
    createMany?: Prisma.EncodedDocumentCreateManyGovUserByUsernameInputEnvelope;
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
};
export type EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput> | Prisma.EncodedDocumentCreateWithoutUserByIdInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput | Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput[];
    createMany?: Prisma.EncodedDocumentCreateManyUserByIdInputEnvelope;
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
};
export type EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput> | Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput | Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput[];
    createMany?: Prisma.EncodedDocumentCreateManyGovUserByUsernameInputEnvelope;
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
};
export type EncodedDocumentUpdateManyWithoutUserByIdNestedInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput> | Prisma.EncodedDocumentCreateWithoutUserByIdInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput | Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput[];
    upsert?: Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutUserByIdInput | Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutUserByIdInput[];
    createMany?: Prisma.EncodedDocumentCreateManyUserByIdInputEnvelope;
    set?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    disconnect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    delete?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    update?: Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutUserByIdInput | Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutUserByIdInput[];
    updateMany?: Prisma.EncodedDocumentUpdateManyWithWhereWithoutUserByIdInput | Prisma.EncodedDocumentUpdateManyWithWhereWithoutUserByIdInput[];
    deleteMany?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
};
export type EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput> | Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput | Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput[];
    upsert?: Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutGovUserByUsernameInput[];
    createMany?: Prisma.EncodedDocumentCreateManyGovUserByUsernameInputEnvelope;
    set?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    disconnect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    delete?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    update?: Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutGovUserByUsernameInput[];
    updateMany?: Prisma.EncodedDocumentUpdateManyWithWhereWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpdateManyWithWhereWithoutGovUserByUsernameInput[];
    deleteMany?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
};
export type EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput> | Prisma.EncodedDocumentCreateWithoutUserByIdInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput | Prisma.EncodedDocumentCreateOrConnectWithoutUserByIdInput[];
    upsert?: Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutUserByIdInput | Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutUserByIdInput[];
    createMany?: Prisma.EncodedDocumentCreateManyUserByIdInputEnvelope;
    set?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    disconnect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    delete?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    update?: Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutUserByIdInput | Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutUserByIdInput[];
    updateMany?: Prisma.EncodedDocumentUpdateManyWithWhereWithoutUserByIdInput | Prisma.EncodedDocumentUpdateManyWithWhereWithoutUserByIdInput[];
    deleteMany?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
};
export type EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput = {
    create?: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput> | Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput[] | Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput[];
    connectOrCreate?: Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput | Prisma.EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput[];
    upsert?: Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpsertWithWhereUniqueWithoutGovUserByUsernameInput[];
    createMany?: Prisma.EncodedDocumentCreateManyGovUserByUsernameInputEnvelope;
    set?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    disconnect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    delete?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    connect?: Prisma.EncodedDocumentWhereUniqueInput | Prisma.EncodedDocumentWhereUniqueInput[];
    update?: Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpdateWithWhereUniqueWithoutGovUserByUsernameInput[];
    updateMany?: Prisma.EncodedDocumentUpdateManyWithWhereWithoutGovUserByUsernameInput | Prisma.EncodedDocumentUpdateManyWithWhereWithoutGovUserByUsernameInput[];
    deleteMany?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
};
export type EncodedDocumentCreateWithoutUserByIdInput = {
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
    govUserByUsername: Prisma.UserCreateNestedOneWithoutEncDocByUsernameInput;
};
export type EncodedDocumentUncheckedCreateWithoutUserByIdInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    govUsername: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentCreateOrConnectWithoutUserByIdInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput>;
};
export type EncodedDocumentCreateManyUserByIdInputEnvelope = {
    data: Prisma.EncodedDocumentCreateManyUserByIdInput | Prisma.EncodedDocumentCreateManyUserByIdInput[];
    skipDuplicates?: boolean;
};
export type EncodedDocumentCreateWithoutGovUserByUsernameInput = {
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
    userById: Prisma.UserCreateNestedOneWithoutEncDocByIDInput;
};
export type EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    userId: number;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentCreateOrConnectWithoutGovUserByUsernameInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput>;
};
export type EncodedDocumentCreateManyGovUserByUsernameInputEnvelope = {
    data: Prisma.EncodedDocumentCreateManyGovUserByUsernameInput | Prisma.EncodedDocumentCreateManyGovUserByUsernameInput[];
    skipDuplicates?: boolean;
};
export type EncodedDocumentUpsertWithWhereUniqueWithoutUserByIdInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncodedDocumentUpdateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedUpdateWithoutUserByIdInput>;
    create: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedCreateWithoutUserByIdInput>;
};
export type EncodedDocumentUpdateWithWhereUniqueWithoutUserByIdInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateWithoutUserByIdInput, Prisma.EncodedDocumentUncheckedUpdateWithoutUserByIdInput>;
};
export type EncodedDocumentUpdateManyWithWhereWithoutUserByIdInput = {
    where: Prisma.EncodedDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateManyMutationInput, Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdInput>;
};
export type EncodedDocumentScalarWhereInput = {
    AND?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
    OR?: Prisma.EncodedDocumentScalarWhereInput[];
    NOT?: Prisma.EncodedDocumentScalarWhereInput | Prisma.EncodedDocumentScalarWhereInput[];
    id?: Prisma.IntFilter<"EncodedDocument"> | number;
    idNumber?: Prisma.StringFilter<"EncodedDocument"> | string;
    name?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentType?: Prisma.StringFilter<"EncodedDocument"> | string;
    documentId?: Prisma.IntFilter<"EncodedDocument"> | number;
    subjectOfChange?: Prisma.StringFilter<"EncodedDocument"> | string;
    remarks?: Prisma.StringFilter<"EncodedDocument"> | string;
    drn?: Prisma.StringFilter<"EncodedDocument"> | string;
    userId?: Prisma.IntFilter<"EncodedDocument"> | number;
    govUsername?: Prisma.StringFilter<"EncodedDocument"> | string;
    date?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
    verifiedBy?: Prisma.StringFilter<"EncodedDocument"> | string;
    verified?: Prisma.StringFilter<"EncodedDocument"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncodedDocument"> | Date | string;
};
export type EncodedDocumentUpsertWithWhereUniqueWithoutGovUserByUsernameInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncodedDocumentUpdateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedUpdateWithoutGovUserByUsernameInput>;
    create: Prisma.XOR<Prisma.EncodedDocumentCreateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedCreateWithoutGovUserByUsernameInput>;
};
export type EncodedDocumentUpdateWithWhereUniqueWithoutGovUserByUsernameInput = {
    where: Prisma.EncodedDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateWithoutGovUserByUsernameInput, Prisma.EncodedDocumentUncheckedUpdateWithoutGovUserByUsernameInput>;
};
export type EncodedDocumentUpdateManyWithWhereWithoutGovUserByUsernameInput = {
    where: Prisma.EncodedDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateManyMutationInput, Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameInput>;
};
export type EncodedDocumentCreateManyUserByIdInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    govUsername: string;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentCreateManyGovUserByUsernameInput = {
    id?: number;
    idNumber?: string;
    name: string;
    documentType: string;
    documentId: number;
    subjectOfChange: string;
    remarks: string;
    drn: string;
    userId: number;
    date: Date | string;
    verifiedBy?: string;
    verified?: string;
    createdAt?: Date | string;
};
export type EncodedDocumentUpdateWithoutUserByIdInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    govUserByUsername?: Prisma.UserUpdateOneRequiredWithoutEncDocByUsernameNestedInput;
};
export type EncodedDocumentUncheckedUpdateWithoutUserByIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentUncheckedUpdateManyWithoutUserByIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentUpdateWithoutGovUserByUsernameInput = {
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userById?: Prisma.UserUpdateOneRequiredWithoutEncDocByIDNestedInput;
};
export type EncodedDocumentUncheckedUpdateWithoutGovUserByUsernameInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectOfChange?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.StringFieldUpdateOperationsInput | string;
    drn?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verifiedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    verified?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncodedDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    name?: boolean;
    documentType?: boolean;
    documentId?: boolean;
    subjectOfChange?: boolean;
    remarks?: boolean;
    drn?: boolean;
    userId?: boolean;
    govUsername?: boolean;
    date?: boolean;
    verifiedBy?: boolean;
    verified?: boolean;
    createdAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encodedDocument"]>;
export type EncodedDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    name?: boolean;
    documentType?: boolean;
    documentId?: boolean;
    subjectOfChange?: boolean;
    remarks?: boolean;
    drn?: boolean;
    userId?: boolean;
    govUsername?: boolean;
    date?: boolean;
    verifiedBy?: boolean;
    verified?: boolean;
    createdAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encodedDocument"]>;
export type EncodedDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idNumber?: boolean;
    name?: boolean;
    documentType?: boolean;
    documentId?: boolean;
    subjectOfChange?: boolean;
    remarks?: boolean;
    drn?: boolean;
    userId?: boolean;
    govUsername?: boolean;
    date?: boolean;
    verifiedBy?: boolean;
    verified?: boolean;
    createdAt?: boolean;
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encodedDocument"]>;
export type EncodedDocumentSelectScalar = {
    id?: boolean;
    idNumber?: boolean;
    name?: boolean;
    documentType?: boolean;
    documentId?: boolean;
    subjectOfChange?: boolean;
    remarks?: boolean;
    drn?: boolean;
    userId?: boolean;
    govUsername?: boolean;
    date?: boolean;
    verifiedBy?: boolean;
    verified?: boolean;
    createdAt?: boolean;
};
export type EncodedDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "idNumber" | "name" | "documentType" | "documentId" | "subjectOfChange" | "remarks" | "drn" | "userId" | "govUsername" | "date" | "verifiedBy" | "verified" | "createdAt", ExtArgs["result"]["encodedDocument"]>;
export type EncodedDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EncodedDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EncodedDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userById?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    govUserByUsername?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EncodedDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncodedDocument";
    objects: {
        userById: Prisma.$UserPayload<ExtArgs>;
        govUserByUsername: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        idNumber: string;
        name: string;
        documentType: string;
        documentId: number;
        subjectOfChange: string;
        remarks: string;
        drn: string;
        userId: number;
        govUsername: string;
        date: Date;
        verifiedBy: string;
        verified: string;
        createdAt: Date;
    }, ExtArgs["result"]["encodedDocument"]>;
    composites: {};
};
export type EncodedDocumentGetPayload<S extends boolean | null | undefined | EncodedDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload, S>;
export type EncodedDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncodedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncodedDocumentCountAggregateInputType | true;
};
export interface EncodedDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncodedDocument'];
        meta: {
            name: 'EncodedDocument';
        };
    };
    findUnique<T extends EncodedDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, EncodedDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncodedDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncodedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncodedDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncodedDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncodedDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncodedDocumentCreateArgs>(args: Prisma.SelectSubset<T, EncodedDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncodedDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncodedDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncodedDocumentDeleteArgs>(args: Prisma.SelectSubset<T, EncodedDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncodedDocumentUpdateArgs>(args: Prisma.SelectSubset<T, EncodedDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncodedDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncodedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncodedDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, EncodedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncodedDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncodedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncodedDocumentUpsertArgs>(args: Prisma.SelectSubset<T, EncodedDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__EncodedDocumentClient<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncodedDocumentCountArgs>(args?: Prisma.Subset<T, EncodedDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncodedDocumentCountAggregateOutputType> : number>;
    aggregate<T extends EncodedDocumentAggregateArgs>(args: Prisma.Subset<T, EncodedDocumentAggregateArgs>): Prisma.PrismaPromise<GetEncodedDocumentAggregateType<T>>;
    groupBy<T extends EncodedDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncodedDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: EncodedDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncodedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncodedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncodedDocumentFieldRefs;
}
export interface Prisma__EncodedDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userById<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    govUserByUsername<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncodedDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"EncodedDocument", 'Int'>;
    readonly idNumber: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly name: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly documentType: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly documentId: Prisma.FieldRef<"EncodedDocument", 'Int'>;
    readonly subjectOfChange: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly remarks: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly drn: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly userId: Prisma.FieldRef<"EncodedDocument", 'Int'>;
    readonly govUsername: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly date: Prisma.FieldRef<"EncodedDocument", 'DateTime'>;
    readonly verifiedBy: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly verified: Prisma.FieldRef<"EncodedDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EncodedDocument", 'DateTime'>;
}
export type EncodedDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where: Prisma.EncodedDocumentWhereUniqueInput;
};
export type EncodedDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where: Prisma.EncodedDocumentWhereUniqueInput;
};
export type EncodedDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where?: Prisma.EncodedDocumentWhereInput;
    orderBy?: Prisma.EncodedDocumentOrderByWithRelationInput | Prisma.EncodedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EncodedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncodedDocumentScalarFieldEnum | Prisma.EncodedDocumentScalarFieldEnum[];
};
export type EncodedDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where?: Prisma.EncodedDocumentWhereInput;
    orderBy?: Prisma.EncodedDocumentOrderByWithRelationInput | Prisma.EncodedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EncodedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncodedDocumentScalarFieldEnum | Prisma.EncodedDocumentScalarFieldEnum[];
};
export type EncodedDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where?: Prisma.EncodedDocumentWhereInput;
    orderBy?: Prisma.EncodedDocumentOrderByWithRelationInput | Prisma.EncodedDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EncodedDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncodedDocumentScalarFieldEnum | Prisma.EncodedDocumentScalarFieldEnum[];
};
export type EncodedDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncodedDocumentCreateInput, Prisma.EncodedDocumentUncheckedCreateInput>;
};
export type EncodedDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncodedDocumentCreateManyInput | Prisma.EncodedDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncodedDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    data: Prisma.EncodedDocumentCreateManyInput | Prisma.EncodedDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncodedDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncodedDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateInput, Prisma.EncodedDocumentUncheckedUpdateInput>;
    where: Prisma.EncodedDocumentWhereUniqueInput;
};
export type EncodedDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateManyMutationInput, Prisma.EncodedDocumentUncheckedUpdateManyInput>;
    where?: Prisma.EncodedDocumentWhereInput;
    limit?: number;
};
export type EncodedDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncodedDocumentUpdateManyMutationInput, Prisma.EncodedDocumentUncheckedUpdateManyInput>;
    where?: Prisma.EncodedDocumentWhereInput;
    limit?: number;
    include?: Prisma.EncodedDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncodedDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where: Prisma.EncodedDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncodedDocumentCreateInput, Prisma.EncodedDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncodedDocumentUpdateInput, Prisma.EncodedDocumentUncheckedUpdateInput>;
};
export type EncodedDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
    where: Prisma.EncodedDocumentWhereUniqueInput;
};
export type EncodedDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncodedDocumentWhereInput;
    limit?: number;
};
export type EncodedDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncodedDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EncodedDocumentOmit<ExtArgs> | null;
    include?: Prisma.EncodedDocumentInclude<ExtArgs> | null;
};
export {};
