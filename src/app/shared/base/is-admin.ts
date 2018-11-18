import { AuthService } from '../services/auth.service';

export abstract class IsAdmin {
    protected isAdmin = false;

    constructor(protected authService: AuthService) {
        this.isAdmin = this.authService.decodeToken().isAdmin;
    }
}
