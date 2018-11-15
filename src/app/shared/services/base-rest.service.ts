import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ResultModel } from 'src/app/models/result';

export abstract class BaseRestService<T> {
  constructor(protected http: HttpClient) {}

  protected create<Type>(endpoint: string, item: Type): Observable<ResultModel<T>> {
    return this.http.post<ResultModel<T>>(`${environment.api}${endpoint}`, item);
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
