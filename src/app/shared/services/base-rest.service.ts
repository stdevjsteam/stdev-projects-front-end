import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ResultModel } from 'src/app/models/result';

export abstract class BaseRestService<T> {
  constructor(protected http: HttpClient) {}

  protected create<Type>(endpoint: string, item: Type): Observable<ResultModel<T>> {
    return this.http.post<ResultModel<T>>(`${environment.api}${endpoint}`, item);
  }

  protected getByParams(endpoint: string, params: {[param: string]: string} = null): Observable<ResultModel<T>> {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get<ResultModel<T>>(`${environment.api}${endpoint}`, { params: queryParams });
  }

  protected getAll(endpoint: string): Observable<ResultModel<T>> {
    return this.http.get<ResultModel<T>>(`${environment.api}${endpoint}`);
  }

  protected remove(endpoint: string, id: number): Observable<ResultModel<T>> {
    return this.http.delete<ResultModel<T>>(`${environment.api}${endpoint}/${id}`);
  }

  // protected editPatch<Type>(endpoint: string, id: number, data: Type): Observable<ResultModel> {
  //   return this.http.patch<ResultModel>(`${environment.api}${endpoint}/${id}`, data);
  // }

  // protected editPut<Type>(endpoint: string, id: number, data: Type): Observable<ResultModel> {
  //   return this.http.put<ResultModel>(`${environment.api}${endpoint}/${id}`, data);
  // }
}
