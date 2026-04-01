import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    UserInfo: 'UserInfo',
    Bus: 'Bus',
    Swdi: 'Swdi',
    Pcn: 'Pcn',
    CVS: 'CVS',
    Miscellaneous: 'Miscellaneous',
    EncodedDocument: 'EncodedDocument',
    OperationsOfficeNum: 'OperationsOfficeNum',
    Lgu: 'Lgu',
    Barangay: 'Barangay'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    password: 'password',
    role: 'role',
    govUsername: 'govUsername'
};
export const UserInfoScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    assignedOperationId: 'assignedOperationId',
    assignedLGUID: 'assignedLGUID',
    assignedBarangayId: 'assignedBarangayId',
    phone: 'phone',
    sessionTime: 'sessionTime',
    language: 'language',
    timezone: 'timezone',
    twoFactorAuth: 'twoFactorAuth',
    smsAlert: 'smsAlert',
    loginAlert: 'loginAlert',
    SecuritAlert: 'SecuritAlert',
    emailAlert: 'emailAlert',
    weeklyReportAlert: 'weeklyReportAlert',
    theme: 'theme'
};
export const BusScalarFieldEnum = {
    id: 'id',
    lgu: 'lgu',
    barangay: 'barangay',
    hhId: 'hhId',
    granteeName: 'granteeName',
    typeOfUpdate: 'typeOfUpdate',
    remarks: 'remarks',
    issue: 'issue',
    encodedBy: 'encodedBy',
    updateInfo: 'updateInfo',
    subjectOfChange: 'subjectOfChange',
    drn: 'drn',
    cl: 'cl',
    date: 'date',
    note: 'note',
    verifiedBy: 'verifiedBy',
    verified: 'verified',
    verificationIssue: 'verificationIssue',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SwdiScalarFieldEnum = {
    id: 'id',
    hhId: 'hhId',
    lgu: 'lgu',
    barangay: 'barangay',
    grantee: 'grantee',
    swdiScore: 'swdiScore',
    swdiLevel: 'swdiLevel',
    encodedBy: 'encodedBy',
    remarks: 'remarks',
    issue: 'issue',
    cl: 'cl',
    drn: 'drn',
    date: 'date',
    note: 'note',
    verifiedBy: 'verifiedBy',
    verified: 'verified',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PcnScalarFieldEnum = {
    id: 'id',
    lgu: 'lgu',
    barangay: 'barangay',
    hhId: 'hhId',
    granteeName: 'granteeName',
    remarks: 'remarks',
    issue: 'issue',
    encodedBy: 'encodedBy',
    subjectOfChange: 'subjectOfChange',
    pcn: 'pcn',
    lrn: 'lrn',
    drn: 'drn',
    cl: 'cl',
    date: 'date',
    note: 'note',
    verifiedBy: 'verifiedBy',
    verified: 'verified',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CVSScalarFieldEnum = {
    id: 'id',
    idNumber: 'idNumber',
    lgu: 'lgu',
    barangay: 'barangay',
    facilityName: 'facilityName',
    formType: 'formType',
    remarks: 'remarks',
    userId: 'userId',
    issue: 'issue',
    period: 'period',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MiscellaneousScalarFieldEnum = {
    id: 'id',
    lgu: 'lgu',
    barangay: 'barangay',
    hhId: 'hhId',
    granteeName: 'granteeName',
    documentType: 'documentType',
    remarks: 'remarks',
    issue: 'issue',
    encodedBy: 'encodedBy',
    subjectOfChange: 'subjectOfChange',
    drn: 'drn',
    cl: 'cl',
    date: 'date',
    note: 'note',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EncodedDocumentScalarFieldEnum = {
    id: 'id',
    idNumber: 'idNumber',
    name: 'name',
    documentType: 'documentType',
    documentId: 'documentId',
    subjectOfChange: 'subjectOfChange',
    remarks: 'remarks',
    drn: 'drn',
    userId: 'userId',
    govUsername: 'govUsername',
    date: 'date',
    verifiedBy: 'verifiedBy',
    verified: 'verified',
    createdAt: 'createdAt'
};
export const OperationsOfficeNumScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
export const LguScalarFieldEnum = {
    id: 'id',
    name: 'name',
    operationsOfficeNumId: 'operationsOfficeNumId'
};
export const BarangayScalarFieldEnum = {
    id: 'id',
    name: 'name',
    lguId: 'lguId'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map