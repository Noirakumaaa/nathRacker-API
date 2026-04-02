import { IsBoolean, IsIn } from "class-validator";

export class SecurityData {

    @IsIn([15, 30, 1, 2, 3, 4, "never"])
    sessionTime : number | "never"

    @IsBoolean()
    loginAlert : boolean

    @IsBoolean()
    twoFactorAuth : boolean
}
