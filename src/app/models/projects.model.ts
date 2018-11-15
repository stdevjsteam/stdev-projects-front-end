export interface IProject {
    name: string;
    technology: string;
    developers?: string[];
    repository?: string;
}

export class ProjectModel implements IProject {
    constructor(
        public name: string,
        public technology: string,
        public developers?: string[],
        public repository?: string,
    ) {}
}
