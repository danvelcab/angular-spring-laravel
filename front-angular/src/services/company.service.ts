import { Injectable } from '@angular/core';
import { AbstractService } from '../../projects/api-rest-core/src/lib/services/abstract.service';
import { HttpClient } from '@angular/common/http';
import { ApiConfigHelper } from '../../projects/api-rest-core/src/lib/helpers/api-config.helper';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractService {

  constructor(private http: HttpClient,
              private apiConfigHelper: ApiConfigHelper) {
    super('companies', null, http, apiConfigHelper);
  }
}
