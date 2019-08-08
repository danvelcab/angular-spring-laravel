import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService, ApiConfigHelper } from 'bl-api-rest-core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractService {

  constructor(private http: HttpClient,
              private apiConfigHelper: ApiConfigHelper) {
    super('companies', null, http, apiConfigHelper);
  }
}
