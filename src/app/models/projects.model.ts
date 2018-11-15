export interface IProject {
    name: string;
    technology: string;
}

export interface IPublicProject extends IProject {
    developers: string[];
}

export interface IExamplesProject extends IProject {
    repository: string;
}

export class PublicProjectModel implements IPublicProject {
    constructor(
        public name: string,
        public developers: string[],
        public technology: string
    ) {}
}

export class ExamplesProjectModel implements IExamplesProject {
    constructor(
        public name: string,
        public repository: string,
        public technology: string
    ) {}
}
