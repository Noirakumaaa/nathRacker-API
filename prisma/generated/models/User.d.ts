import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    govUsername: string | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    govUsername: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    createdAt: number;
    email: number;
    password: number;
    role: number;
    govUsername: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    email?: true;
    password?: true;
    role?: true;
    govUsername?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    email?: true;
    password?: true;
    role?: true;
    govUsername?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    email?: true;
    password?: true;
    role?: true;
    govUsername?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    createdAt: Date;
    email: string;
    password: string;
    role: $Enums.Role;
    govUsername: string;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    govUsername?: Prisma.StringFilter<"User"> | string;
    busById?: Prisma.BusListRelationFilter;
    encDocByID?: Prisma.EncodedDocumentListRelationFilter;
    encDocByUsername?: Prisma.EncodedDocumentListRelationFilter;
    miscByID?: Prisma.MiscellaneousListRelationFilter;
    pcnByID?: Prisma.PcnListRelationFilter;
    swdiByID?: Prisma.SwdiListRelationFilter;
    cvsByID?: Prisma.CVSListRelationFilter;
    userInfo?: Prisma.XOR<Prisma.UserInfoNullableScalarRelationFilter, Prisma.UserInfoWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    busById?: Prisma.BusOrderByRelationAggregateInput;
    encDocByID?: Prisma.EncodedDocumentOrderByRelationAggregateInput;
    encDocByUsername?: Prisma.EncodedDocumentOrderByRelationAggregateInput;
    miscByID?: Prisma.MiscellaneousOrderByRelationAggregateInput;
    pcnByID?: Prisma.PcnOrderByRelationAggregateInput;
    swdiByID?: Prisma.SwdiOrderByRelationAggregateInput;
    cvsByID?: Prisma.CVSOrderByRelationAggregateInput;
    userInfo?: Prisma.UserInfoOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    govUsername?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    busById?: Prisma.BusListRelationFilter;
    encDocByID?: Prisma.EncodedDocumentListRelationFilter;
    encDocByUsername?: Prisma.EncodedDocumentListRelationFilter;
    miscByID?: Prisma.MiscellaneousListRelationFilter;
    pcnByID?: Prisma.PcnListRelationFilter;
    swdiByID?: Prisma.SwdiListRelationFilter;
    cvsByID?: Prisma.CVSListRelationFilter;
    userInfo?: Prisma.XOR<Prisma.UserInfoNullableScalarRelationFilter, Prisma.UserInfoWhereInput> | null;
}, "id" | "email" | "govUsername">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    govUsername?: Prisma.StringWithAggregatesFilter<"User"> | string;
};
export type UserCreateInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
};
export type UserUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    govUsername?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutUserInfoInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserInfoInput, Prisma.UserUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserInfoInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserInfoNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserInfoInput, Prisma.UserUncheckedCreateWithoutUserInfoInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserInfoInput;
    upsert?: Prisma.UserUpsertWithoutUserInfoInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserInfoInput, Prisma.UserUpdateWithoutUserInfoInput>, Prisma.UserUncheckedUpdateWithoutUserInfoInput>;
};
export type UserCreateNestedOneWithoutBusByIdInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBusByIdInput, Prisma.UserUncheckedCreateWithoutBusByIdInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBusByIdInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBusByIdNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBusByIdInput, Prisma.UserUncheckedCreateWithoutBusByIdInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBusByIdInput;
    upsert?: Prisma.UserUpsertWithoutBusByIdInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBusByIdInput, Prisma.UserUpdateWithoutBusByIdInput>, Prisma.UserUncheckedUpdateWithoutBusByIdInput>;
};
export type UserCreateNestedOneWithoutSwdiByIDInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSwdiByIDInput, Prisma.UserUncheckedCreateWithoutSwdiByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSwdiByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSwdiByIDNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSwdiByIDInput, Prisma.UserUncheckedCreateWithoutSwdiByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSwdiByIDInput;
    upsert?: Prisma.UserUpsertWithoutSwdiByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSwdiByIDInput, Prisma.UserUpdateWithoutSwdiByIDInput>, Prisma.UserUncheckedUpdateWithoutSwdiByIDInput>;
};
export type UserCreateNestedOneWithoutPcnByIDInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPcnByIDInput, Prisma.UserUncheckedCreateWithoutPcnByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPcnByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPcnByIDNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPcnByIDInput, Prisma.UserUncheckedCreateWithoutPcnByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPcnByIDInput;
    upsert?: Prisma.UserUpsertWithoutPcnByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPcnByIDInput, Prisma.UserUpdateWithoutPcnByIDInput>, Prisma.UserUncheckedUpdateWithoutPcnByIDInput>;
};
export type UserCreateNestedOneWithoutCvsByIDInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCvsByIDInput, Prisma.UserUncheckedCreateWithoutCvsByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCvsByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCvsByIDNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCvsByIDInput, Prisma.UserUncheckedCreateWithoutCvsByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCvsByIDInput;
    upsert?: Prisma.UserUpsertWithoutCvsByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCvsByIDInput, Prisma.UserUpdateWithoutCvsByIDInput>, Prisma.UserUncheckedUpdateWithoutCvsByIDInput>;
};
export type UserCreateNestedOneWithoutMiscByIDInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMiscByIDInput, Prisma.UserUncheckedCreateWithoutMiscByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMiscByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMiscByIDNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMiscByIDInput, Prisma.UserUncheckedCreateWithoutMiscByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMiscByIDInput;
    upsert?: Prisma.UserUpsertWithoutMiscByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMiscByIDInput, Prisma.UserUpdateWithoutMiscByIDInput>, Prisma.UserUncheckedUpdateWithoutMiscByIDInput>;
};
export type UserCreateNestedOneWithoutEncDocByIDInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEncDocByIDInput, Prisma.UserUncheckedCreateWithoutEncDocByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEncDocByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutEncDocByUsernameInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEncDocByUsernameInput, Prisma.UserUncheckedCreateWithoutEncDocByUsernameInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEncDocByUsernameInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEncDocByIDNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEncDocByIDInput, Prisma.UserUncheckedCreateWithoutEncDocByIDInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEncDocByIDInput;
    upsert?: Prisma.UserUpsertWithoutEncDocByIDInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEncDocByIDInput, Prisma.UserUpdateWithoutEncDocByIDInput>, Prisma.UserUncheckedUpdateWithoutEncDocByIDInput>;
};
export type UserUpdateOneRequiredWithoutEncDocByUsernameNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEncDocByUsernameInput, Prisma.UserUncheckedCreateWithoutEncDocByUsernameInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEncDocByUsernameInput;
    upsert?: Prisma.UserUpsertWithoutEncDocByUsernameInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEncDocByUsernameInput, Prisma.UserUpdateWithoutEncDocByUsernameInput>, Prisma.UserUncheckedUpdateWithoutEncDocByUsernameInput>;
};
export type UserCreateWithoutUserInfoInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
};
export type UserUncheckedCreateWithoutUserInfoInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
};
export type UserCreateOrConnectWithoutUserInfoInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserInfoInput, Prisma.UserUncheckedCreateWithoutUserInfoInput>;
};
export type UserUpsertWithoutUserInfoInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserInfoInput, Prisma.UserUncheckedUpdateWithoutUserInfoInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserInfoInput, Prisma.UserUncheckedCreateWithoutUserInfoInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserInfoInput, Prisma.UserUncheckedUpdateWithoutUserInfoInput>;
};
export type UserUpdateWithoutUserInfoInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
};
export type UserUncheckedUpdateWithoutUserInfoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
};
export type UserCreateWithoutBusByIdInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutBusByIdInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutBusByIdInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBusByIdInput, Prisma.UserUncheckedCreateWithoutBusByIdInput>;
};
export type UserUpsertWithoutBusByIdInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBusByIdInput, Prisma.UserUncheckedUpdateWithoutBusByIdInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBusByIdInput, Prisma.UserUncheckedCreateWithoutBusByIdInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBusByIdInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBusByIdInput, Prisma.UserUncheckedUpdateWithoutBusByIdInput>;
};
export type UserUpdateWithoutBusByIdInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBusByIdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutSwdiByIDInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutSwdiByIDInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutSwdiByIDInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSwdiByIDInput, Prisma.UserUncheckedCreateWithoutSwdiByIDInput>;
};
export type UserUpsertWithoutSwdiByIDInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSwdiByIDInput, Prisma.UserUncheckedUpdateWithoutSwdiByIDInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSwdiByIDInput, Prisma.UserUncheckedCreateWithoutSwdiByIDInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSwdiByIDInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSwdiByIDInput, Prisma.UserUncheckedUpdateWithoutSwdiByIDInput>;
};
export type UserUpdateWithoutSwdiByIDInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSwdiByIDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutPcnByIDInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutPcnByIDInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutPcnByIDInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPcnByIDInput, Prisma.UserUncheckedCreateWithoutPcnByIDInput>;
};
export type UserUpsertWithoutPcnByIDInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPcnByIDInput, Prisma.UserUncheckedUpdateWithoutPcnByIDInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPcnByIDInput, Prisma.UserUncheckedCreateWithoutPcnByIDInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPcnByIDInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPcnByIDInput, Prisma.UserUncheckedUpdateWithoutPcnByIDInput>;
};
export type UserUpdateWithoutPcnByIDInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPcnByIDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutCvsByIDInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutCvsByIDInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutCvsByIDInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCvsByIDInput, Prisma.UserUncheckedCreateWithoutCvsByIDInput>;
};
export type UserUpsertWithoutCvsByIDInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCvsByIDInput, Prisma.UserUncheckedUpdateWithoutCvsByIDInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCvsByIDInput, Prisma.UserUncheckedCreateWithoutCvsByIDInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCvsByIDInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCvsByIDInput, Prisma.UserUncheckedUpdateWithoutCvsByIDInput>;
};
export type UserUpdateWithoutCvsByIDInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCvsByIDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutMiscByIDInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutMiscByIDInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutMiscByIDInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMiscByIDInput, Prisma.UserUncheckedCreateWithoutMiscByIDInput>;
};
export type UserUpsertWithoutMiscByIDInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMiscByIDInput, Prisma.UserUncheckedUpdateWithoutMiscByIDInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMiscByIDInput, Prisma.UserUncheckedCreateWithoutMiscByIDInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMiscByIDInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMiscByIDInput, Prisma.UserUncheckedUpdateWithoutMiscByIDInput>;
};
export type UserUpdateWithoutMiscByIDInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMiscByIDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutEncDocByIDInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutEncDocByIDInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutGovUserByUsernameInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutEncDocByIDInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEncDocByIDInput, Prisma.UserUncheckedCreateWithoutEncDocByIDInput>;
};
export type UserCreateWithoutEncDocByUsernameInput = {
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentCreateNestedManyWithoutUserByIdInput;
    miscByID?: Prisma.MiscellaneousCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutEncDocByUsernameInput = {
    id?: number;
    createdAt?: Date | string;
    email: string;
    password: string;
    role?: $Enums.Role;
    govUsername: string;
    busById?: Prisma.BusUncheckedCreateNestedManyWithoutUserByIdInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedCreateNestedManyWithoutUserByIdInput;
    miscByID?: Prisma.MiscellaneousUncheckedCreateNestedManyWithoutUserByIdInput;
    pcnByID?: Prisma.PcnUncheckedCreateNestedManyWithoutUserByIdInput;
    swdiByID?: Prisma.SwdiUncheckedCreateNestedManyWithoutUserByIdInput;
    cvsByID?: Prisma.CVSUncheckedCreateNestedManyWithoutUserByIdInput;
    userInfo?: Prisma.UserInfoUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutEncDocByUsernameInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEncDocByUsernameInput, Prisma.UserUncheckedCreateWithoutEncDocByUsernameInput>;
};
export type UserUpsertWithoutEncDocByIDInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEncDocByIDInput, Prisma.UserUncheckedUpdateWithoutEncDocByIDInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEncDocByIDInput, Prisma.UserUncheckedCreateWithoutEncDocByIDInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEncDocByIDInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEncDocByIDInput, Prisma.UserUncheckedUpdateWithoutEncDocByIDInput>;
};
export type UserUpdateWithoutEncDocByIDInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEncDocByIDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByUsername?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutGovUserByUsernameNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutEncDocByUsernameInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEncDocByUsernameInput, Prisma.UserUncheckedUpdateWithoutEncDocByUsernameInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEncDocByUsernameInput, Prisma.UserUncheckedCreateWithoutEncDocByUsernameInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEncDocByUsernameInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEncDocByUsernameInput, Prisma.UserUncheckedUpdateWithoutEncDocByUsernameInput>;
};
export type UserUpdateWithoutEncDocByUsernameInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUpdateManyWithoutUserByIdNestedInput;
    miscByID?: Prisma.MiscellaneousUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEncDocByUsernameInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    govUsername?: Prisma.StringFieldUpdateOperationsInput | string;
    busById?: Prisma.BusUncheckedUpdateManyWithoutUserByIdNestedInput;
    encDocByID?: Prisma.EncodedDocumentUncheckedUpdateManyWithoutUserByIdNestedInput;
    miscByID?: Prisma.MiscellaneousUncheckedUpdateManyWithoutUserByIdNestedInput;
    pcnByID?: Prisma.PcnUncheckedUpdateManyWithoutUserByIdNestedInput;
    swdiByID?: Prisma.SwdiUncheckedUpdateManyWithoutUserByIdNestedInput;
    cvsByID?: Prisma.CVSUncheckedUpdateManyWithoutUserByIdNestedInput;
    userInfo?: Prisma.UserInfoUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCountOutputType = {
    busById: number;
    encDocByID: number;
    encDocByUsername: number;
    miscByID: number;
    pcnByID: number;
    swdiByID: number;
    cvsByID: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    busById?: boolean | UserCountOutputTypeCountBusByIdArgs;
    encDocByID?: boolean | UserCountOutputTypeCountEncDocByIDArgs;
    encDocByUsername?: boolean | UserCountOutputTypeCountEncDocByUsernameArgs;
    miscByID?: boolean | UserCountOutputTypeCountMiscByIDArgs;
    pcnByID?: boolean | UserCountOutputTypeCountPcnByIDArgs;
    swdiByID?: boolean | UserCountOutputTypeCountSwdiByIDArgs;
    cvsByID?: boolean | UserCountOutputTypeCountCvsByIDArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountBusByIdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusWhereInput;
};
export type UserCountOutputTypeCountEncDocByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncodedDocumentWhereInput;
};
export type UserCountOutputTypeCountEncDocByUsernameArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncodedDocumentWhereInput;
};
export type UserCountOutputTypeCountMiscByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MiscellaneousWhereInput;
};
export type UserCountOutputTypeCountPcnByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PcnWhereInput;
};
export type UserCountOutputTypeCountSwdiByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwdiWhereInput;
};
export type UserCountOutputTypeCountCvsByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CVSWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    govUsername?: boolean;
    busById?: boolean | Prisma.User$busByIdArgs<ExtArgs>;
    encDocByID?: boolean | Prisma.User$encDocByIDArgs<ExtArgs>;
    encDocByUsername?: boolean | Prisma.User$encDocByUsernameArgs<ExtArgs>;
    miscByID?: boolean | Prisma.User$miscByIDArgs<ExtArgs>;
    pcnByID?: boolean | Prisma.User$pcnByIDArgs<ExtArgs>;
    swdiByID?: boolean | Prisma.User$swdiByIDArgs<ExtArgs>;
    cvsByID?: boolean | Prisma.User$cvsByIDArgs<ExtArgs>;
    userInfo?: boolean | Prisma.User$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    govUsername?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    govUsername?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    govUsername?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "email" | "password" | "role" | "govUsername", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    busById?: boolean | Prisma.User$busByIdArgs<ExtArgs>;
    encDocByID?: boolean | Prisma.User$encDocByIDArgs<ExtArgs>;
    encDocByUsername?: boolean | Prisma.User$encDocByUsernameArgs<ExtArgs>;
    miscByID?: boolean | Prisma.User$miscByIDArgs<ExtArgs>;
    pcnByID?: boolean | Prisma.User$pcnByIDArgs<ExtArgs>;
    swdiByID?: boolean | Prisma.User$swdiByIDArgs<ExtArgs>;
    cvsByID?: boolean | Prisma.User$cvsByIDArgs<ExtArgs>;
    userInfo?: boolean | Prisma.User$userInfoArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        busById: Prisma.$BusPayload<ExtArgs>[];
        encDocByID: Prisma.$EncodedDocumentPayload<ExtArgs>[];
        encDocByUsername: Prisma.$EncodedDocumentPayload<ExtArgs>[];
        miscByID: Prisma.$MiscellaneousPayload<ExtArgs>[];
        pcnByID: Prisma.$PcnPayload<ExtArgs>[];
        swdiByID: Prisma.$SwdiPayload<ExtArgs>[];
        cvsByID: Prisma.$CVSPayload<ExtArgs>[];
        userInfo: Prisma.$UserInfoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        createdAt: Date;
        email: string;
        password: string;
        role: $Enums.Role;
        govUsername: string;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    busById<T extends Prisma.User$busByIdArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$busByIdArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    encDocByID<T extends Prisma.User$encDocByIDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$encDocByIDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    encDocByUsername<T extends Prisma.User$encDocByUsernameArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$encDocByUsernameArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncodedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    miscByID<T extends Prisma.User$miscByIDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$miscByIDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MiscellaneousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pcnByID<T extends Prisma.User$pcnByIDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$pcnByIDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PcnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    swdiByID<T extends Prisma.User$swdiByIDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$swdiByIDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwdiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cvsByID<T extends Prisma.User$cvsByIDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cvsByIDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CVSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userInfo<T extends Prisma.User$userInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userInfoArgs<ExtArgs>>): Prisma.Prisma__UserInfoClient<runtime.Types.Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly govUsername: Prisma.FieldRef<"User", 'String'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$busByIdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusSelect<ExtArgs> | null;
    omit?: Prisma.BusOmit<ExtArgs> | null;
    include?: Prisma.BusInclude<ExtArgs> | null;
    where?: Prisma.BusWhereInput;
    orderBy?: Prisma.BusOrderByWithRelationInput | Prisma.BusOrderByWithRelationInput[];
    cursor?: Prisma.BusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusScalarFieldEnum | Prisma.BusScalarFieldEnum[];
};
export type User$encDocByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$encDocByUsernameArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$miscByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MiscellaneousSelect<ExtArgs> | null;
    omit?: Prisma.MiscellaneousOmit<ExtArgs> | null;
    include?: Prisma.MiscellaneousInclude<ExtArgs> | null;
    where?: Prisma.MiscellaneousWhereInput;
    orderBy?: Prisma.MiscellaneousOrderByWithRelationInput | Prisma.MiscellaneousOrderByWithRelationInput[];
    cursor?: Prisma.MiscellaneousWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MiscellaneousScalarFieldEnum | Prisma.MiscellaneousScalarFieldEnum[];
};
export type User$pcnByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PcnSelect<ExtArgs> | null;
    omit?: Prisma.PcnOmit<ExtArgs> | null;
    include?: Prisma.PcnInclude<ExtArgs> | null;
    where?: Prisma.PcnWhereInput;
    orderBy?: Prisma.PcnOrderByWithRelationInput | Prisma.PcnOrderByWithRelationInput[];
    cursor?: Prisma.PcnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PcnScalarFieldEnum | Prisma.PcnScalarFieldEnum[];
};
export type User$swdiByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwdiSelect<ExtArgs> | null;
    omit?: Prisma.SwdiOmit<ExtArgs> | null;
    include?: Prisma.SwdiInclude<ExtArgs> | null;
    where?: Prisma.SwdiWhereInput;
    orderBy?: Prisma.SwdiOrderByWithRelationInput | Prisma.SwdiOrderByWithRelationInput[];
    cursor?: Prisma.SwdiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwdiScalarFieldEnum | Prisma.SwdiScalarFieldEnum[];
};
export type User$cvsByIDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$userInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserInfoSelect<ExtArgs> | null;
    omit?: Prisma.UserInfoOmit<ExtArgs> | null;
    include?: Prisma.UserInfoInclude<ExtArgs> | null;
    where?: Prisma.UserInfoWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
