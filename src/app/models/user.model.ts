export class UserModel {
    public token: string;

    constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly isAdmin: boolean
    ) {}
}
