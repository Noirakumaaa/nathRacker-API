export class CreateAdminDto {}


export class CreateLgu {
  name: string;
  operationsOfficeNumId: number;
}

export class CreateBarangay {
  name: string;
  lguId: number;
}

export class CreateOperations {
  name: string;
}

