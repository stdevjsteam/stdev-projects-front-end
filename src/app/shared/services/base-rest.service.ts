import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { ResultModel } from 'src/app/models/result';

export abstract class BaseRestService {
  constructor(protected http: HttpClient) {}

  protected create(endpoint: string, item): Observable<ResultModel> {
    return this.http.post<ResultModel>(`${environment.api}${endpoint}`, item);
  }

  protected getAll(endpoint: string): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.api}${endpoint}`).pipe(
      map((result: any) => result)
    );
  }

  protected editPatch<Type>(endpoint: string, id: number, data: Type): Observable<ResultModel> {
    return this.http.patch<ResultModel>(`${environment.api}${endpoint}/${id}/`, data);
  }

  protected editPut<Type>(endpoint: string, id: number, data: Type): Observable<ResultModel> {
    return this.http.put<ResultModel>(`${environment.api}${endpoint}/${id}/`, data);
  }
}
