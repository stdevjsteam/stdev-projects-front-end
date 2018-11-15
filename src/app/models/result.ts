export interface ResultModel<T> {
    status: boolean;
    message: string;
    data: T[];
}
