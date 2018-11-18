import { AuthService } from '../services/auth.service';

export abstract class IsAdmin {
    public isAdmin = false;

    constructor(protected authService: AuthService) {
        this.isAdmin = this.authService.decodeToken().isAdmin;
    }
}
